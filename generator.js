var Crawler = require("crawler");
const fetch = require("node-fetch");
const svg2jsx = require("@balajmarius/svg2jsx");
const fs = require("fs").promises;

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function saveComponents(svgs = []) {
  return svgs.map(svg => {
    return fs.writeFile(
      __dirname + "/src/components/" + svg.name + ".tsx",
      'import { DEFAULT_INK, DEFAULT_ACCENT, Props } from "../utils";\n' +
        svg.component
    );
  });
}

function createIndexTsFile(svgs = []) {
  const indexTS = svgs.reduce((str, curr) => {
    return (
      `export { default as ${curr.name} } from './components/${curr.name}';\n` +
      str
    );
  }, "");

 return fs.writeFile(__dirname + "/src/index.ts", indexTS);
}

function camelize(str) {
  let arr = str.split("-");
  let capital = arr.map((item, index) =>
    index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item
  );

  let capitalString = capital.join("");

  return capitalString;
}

async function getSvgHTML(url) {
  const res = await fetch(url);

  return await res.text();
}

var c = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: async function(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;

      const svgs = Object.values($(".collection-item  a:nth-child(1)"))
        .map(item => {
          if (item.attribs) {
            return item.attribs.href;
          }
          return null;
        })
        .filter(item => item)
        .map(fileUri => {
          const name = fileUri.match(
            /https:\/\/opendoodles.s3-us-west-1.amazonaws.com\/(.*?).svg/
          )[1];

          return {
            url: fileUri,
            name: capitalizeFirstLetter(camelize(name)) + "Doodle"
          };
        });

      const result = await Promise.all(
        svgs.map(async svg => {
          return {
            ...svg,
            component: (await getSvgHTML(svg.url).then(svg2jsx))
              .replace(
                "function Icon() ",
                "const Icon: React.FC<Props> = ({ink = DEFAULT_INK, accent = DEFAULT_ACCENT}) => "
              )
              .replace(/Icon/g, svg.name)
              .replace(/fill="#FF5678"/g, "fill={accent}")
              .replace(/fill="#CF536D"/g, "fill={accent}")
              .replace(/fill="#000"/g, "fill={ink}")
          };
        })
      );

      createIndexTsFile(result)

      await Promise.all(saveComponents(result));
    }

    done();
  }
});

c.queue("https://www.opendoodles.com/");
