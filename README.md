<h1 align="center">Welcome to react-open-doodles 👋</h1>
<p>
  <a href="https://badge.fury.io/js/react-open-doodles">
    <img src="https://badge.fury.io/js/react-open-doodles.svg" alt="npm version" height="18">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/oilunabr" target="_blank">
    <img alt="Twitter: oilunabr" src="https://img.shields.io/twitter/follow/oilunabr.svg?style=social" />
  </a>
</p>

> A Free Set of Sketchy Illustrations provided by [opendoodles](https://www.opendoodles.com)

<p align="center" >
<img  src="https://opendoodles.s3-us-west-1.amazonaws.com/coffee.gif" width="500" >
</p>

Open Doodles was created by [Pablo Stanley](https://twitter.com/pablostanley) we use this Illustrations on our site [oiluna.com](https://oiluna.com).

This package is only a utility to use the illustrations in your React project.

## Install

```bash
npm install --save react-open-doodles
// or
yarn add react-open-doodles
```

## Usage

```tsx
import React, { Component } from "react";
import { LovingDoodle } from "react-open-doodles";

export default class App extends Component {
  render() {
    return (
      <div>
        <LovingDoodle />
        <LovingDoodle accent="#ff0083" ink="#484848" />
      </div>
    );
  }
}
```

You can see all illustrations here: https://www.opendoodles.com

### API

This a list of props that you can pass down to the component:

| Property | Description  | Default value | type   |
| -------- | ------------ | ------------- | ------ |
| `ink`    | ink color    | `#000`        | string |
| `accent` | accent color | `#FF5678`     | string |

## Special thanks

Open Doodles was created by [Pablo Stanley](https://twitter.com/pablostanley) we use this Illustrations on our site [oiluna.com](https://oiluna.com)

## Show your support

Give a ⭐️ if this project helped you!
