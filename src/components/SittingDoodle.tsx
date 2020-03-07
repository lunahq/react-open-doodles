import { DEFAULT_INK, DEFAULT_ACCENT, Props } from "../utils";
import React from "react";

const SittingDoodle: React.FC<Props> = ({ink = DEFAULT_INK, accent = DEFAULT_ACCENT}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 768">
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          fill={accent}
          d="M281.53 633.818c.12-40.625.9-81.264 2.271-121.865 1.018-30.092 2.322-60.206 4.845-90.214 1-11.888 2.161-23.786 3.99-35.58 1.133-7.301 2.174-15.257 5.255-22.055 1.01-2.226 1.983-3.672 4.13-4.81 7.935-4.212 18.808-4.832 27.557-5.72 14.344-1.458 28.863-1.877 43.277-1.58l-2.533 46.51-1.95 35.822c-.41 7.537-1.4 15.288-1.245 22.837.127 6.15 7.36 12.036 11.035 16.837l13.528-41.378c2.384 6.155 4.932 12.258 7.704 18.248 1.83 3.952 3.691 8.019 6.116 11.65 2.216 3.319 2.865 3.787 6.716 3.22 4.636-.68 8.156-2.055 10.896 1.39 2.43 3.055 4.691 6.171 7.327 9.072 29.107 32.012 73.961 51.894 115.522 60.888 24.48 5.295 49.173 9.596 73.642 14.997 37.36 8.246 75.734 16.378 111.417 30.472 5.592 2.21 11.245 4.582 16.347 7.797 5.626 3.543 9.644 8.904 13.537 14.212 9.512 12.97 20.663 34.243 5.992 47.78-11.247 10.378-28.82 11.42-43.43 12.588-15.104 1.207-30.26 1.796-45.4 2.288-41.24 1.34-82.52 1.63-123.779 1.67-37.697.029-75.4-.184-113.09-.905-17.099-.327-33.576.07-50.12-4.319-33.863-8.978-67.628-18.327-101.407-27.61l-8.15-2.241"
        />
        <g fill={ink}>
          <path
            d="M489.631 246.773c-1.582 1.644.982 2.91 2.136 3.27-.186-1.587-.951-2.304-2.136-3.27zm-216.83 309.05c-.61-1.438-1.52-2.62-3.183-1.942-2.75 1.121 2.813 1.927 3.183 1.942zm239.09-231.712c1.137.141 5.786-.15 4.349-2.68-1.666-2.932-3.956 1.772-4.349 2.68zm-83.367-25.939c2.444-2.095 4.634-5.298 4.66-8.626-2.304 1.53-3.535 6.261-4.66 8.626zm58.607-42.064c2.036.103.173-2.763.193-3.334.042-1.225 1.188-2.277 1.002-3.73-.007-.059-2.059-4.653-2.6-4.945-1.523-.82-2.408.683-3.775 1.148-2.024.69-3.012.081-5.185.293-1.915.187-3.528 1.12-5.53 1.118-.475 0-1.001-1.008-1.547-.952-.851.087-.932 1.172-1.534 1.226-2.115.188-2.238-.652-4.211-1.44-3.279-1.313-5.58 1.74-5.506 5.346.097 4.778 5.081 6.731 8.9 7.83 4.925 1.414 7.661 2.267 12.665 1.376 1.447-.259 2.917.202 4.059-.796 1.535-1.342.721-4.173 2.473-5.48l.596 2.34zM313.862 446.21c.409 3.122-.449 4.73 2.58 6.822 1.788 1.236 4.036 2.05 5.93 3.287 2.743 1.793 6.854 2.945 9.287 5.007 1.545 1.31 1.82 5.015 3.962 5.464 1.823.381 3.996-2.913 4.621-4.396.692-1.643.23-2.996.511-4.637.189-1.1 1.013-1.33.868-2.624-.151-1.357-1.467-2.074-2.039-3.15-.512-.966-.667-2.335-1.068-3.097-.947-1.793-3.048-5.602-4.921-6.789-1.578 4.142-2.774-.055-4.962-1.27a64.503 64.503 0 00-2.449-.022 46.515 46.515 0 00-1.291-1.184c-1.009-.094-2.671.445-3.581.726a8.188 8.188 0 00-1.521-.2c-.682.2-.953.58-.809 1.14.297-.137-1.351.863-1.508.97-3.253 2.21-6.237 3.092-6.84 7.793l3.23-3.84zm25.37-167.854c-3.478-9.014-2.374-16.956-2.038-26.39.079-2.216.551-6.968-1.764-8.438-2.889-1.833-5.293 2.313-6.802 4.03-2.59 2.944-6.205 5.648-7.532 9.47-1.172 3.372.037 7.51.931 10.85.964 3.6 2.156 8.44 5.433 10.434 3.5 2.13 8.245 1.92 11.772.044zm122.604 191.706c-.501-6.909-10.11-4.488-14.431-2.358-3.231 1.593-5.039 4.022-7.074 6.91-2.31 3.28-3.067 4.195-2.883 8.093.169 3.556-.029 7.133.862 10.671.452 1.796.553 2.113 1.745 3.35-.003-.003 2.064 2.056 1.489 1.727 2.666 1.522 6.642 1.777 9.774 2.013 4.477.336 5.554.397 7.371-3.858.349.741.699 1.481 1.047 2.222.112-.524 1.356-6.739 1.069-6.678-.502.108-1.041 1.554-1.287 1.922.156-2.863 2.194-5.003 3.181-7.556.909-2.347 1.282-5.005 1.983-7.433.678-2.35 1.437-5.619.781-8.058-.872-3.239-1.147-2.317-3.627-.967zm58.014-152.296c1.561 1.471.17 3.85.373 5.672 2.122-1.3 1.386-1.998 2.208-4.115.529-1.363 2.089-3.97 3.451-1.737.573.94-1.321 2.23-.039 2.781.754.324 2.76-2.2 3.127-2.597 2.529-2.738 4.147-5.537 4.356-9.27.058-1.023.043-3.573-.32-4.16-1.051-1.694-3.847-.692-3.607-3.789l3.339 1.661c.346-3.483-3.413-5.544-4.984-8.308-1.79-3.149-2.952-5.44-5.868-8.149-1.346-1.25-3.536-3.828-5.284-4.43-1.359-.468-1.91.223-3.281.236-2.866.027-7.174-.748-2.907 2.432-.867.407-2.006.66-2.745 1.301-.548.475-.753 1.832-1.395 2.157-1.386.7-2.423-.666-3.988.89-1.647 1.638.039 2.671-.328 3.393-1.055 2.077-2.507 1.044-2.46 4.21.077 5.22 3.083 11.4 4.701 16.277.951 2.867 2.014 7.35 6.025 6.175-.152 1.38-.501 2.718.395 3.95.837-.986 1.137-3.148 1.701-4.305.832-1.704 2.186-3.35 3.142-5.007-.14 2.62-.424 3.347-2.204 5.33 2.342.287 5.227 2.164 6.592-.598zm-171.359 75.862c2.148-1.627-.673-3.442 3.565-2.519 1.081.236-.005 1.5 1.627 1.546.616.017 2.127-1.499 2.554-1.855.391-.326 2.147-2.693 2.429-2.846-.472.254 2.132-.755 1.319-.1 1.551-1.249 2.732-3.303 3.429-5.8 1.71-6.12 1.466-13.435-2.079-18.693-1.486-2.204-2.672-4.894-4.911-6.373-3.037-2.006-8.057-3.199-11.449-4.473l1.098-2.67c-9.312 4.208-15.734 14.033-16.518 24.015-.282 3.591-1.305 8.151.882 11.334 2.282 3.323 8.037 6.816 11.215 3.125-.483 2.057.934 4.517 3.108 5.045.822.2 1.598-.397 1.962-.344.463.066 1.44.674 1.769.608zm-85.48-208.41c-6.257-.745-5.287 10.557-4.113 13.951.946 2.738 4.337 6.548 6.131 8.933 2.138 2.841 4.99 4.962 8.023 6.775 1.04.621 1.801.82 2.698 1.167.319-.317.7-.482 1.145-.496.391.652.945 1.14 1.661 1.463 2.275.708 6.04.6 8.301.505 3.644-.154 7.899-2.25 11.524-2.95 1.694-.327 2.637-.459 4.135-1.339.755-.443 2.233-3.858 2.444-.504.934-.575.639-1.52 1.322-1.942.652-.402 2.737-.789 3.514-1.674 1.084-1.234 2.525-4.049 3.279-5.735.485-1.082 1.513-3.87 1.432-4.996-.172-2.385-.941-1.836-2.979-2.824-1.362-.66-2.146-1.213-3.507-1.578-.158-.042-.536.771-.803.701-.467-.12-.655-.659-.982-.764-2.486-.806-5.42-3.195-8.494-2.964-1.327.1-2.57 2.122-3.252 2.02-1.048-.16-.525-2.312-1.256-3.092-1.865-1.986-8.087-1.665-10.503-2.009a1350.247 1350.247 0 00-19.72-2.648zM482.19 357.004c.599-4.689 1.337-9.346-3.805-11.654-1.93-.866-3.536-.553-5.515-.788-2.571-.306-2.197-1.413-4.105 1.346-1.055-1.355-.354-1.795-2.081-1.956-.713-.066-3.824 1.958-4.633 2.29-3.375 1.38-7.673 1.252-10.219 4.037-2.474 2.707-4.475 5.31-5.518 9.002-.526 1.86-.872 3.787-1.522 5.613-.703 1.975-2.284 3.677-2.825 5.652-2.203 8.04 7.162 15.378 13.74 17.511a4.637 4.637 0 012.493.163 7.776 7.776 0 011.544 1.341c2.07.65 2.562.435 4.668-.515 3.472-1.565 7.528-2.098 10.156 1.564.811-4.262 3.77-1.726 5.193-4.47.786-1.515-.931-5.709.064-6.8 1.689-1.853 6.957 1.442 6.821-2.886-.05-1.577-1.842-2.099-2.463-3.345-1.115-2.237-.496-4.605 1.054-6.57.145.338.706 2.567 1.449 1.977 1.97-1.567-1.269-4.035-1.976-4.89-1.165-1.409-2.225-2.485-1.965-4.452.161-1.22 2.118-2.489 2.048-3.675-.054-.903-2.472 1.4-2.603 1.505zm-91.499 50.625c.133 3.287-1.967 3.716-3.35 5.977-.376.616-.401 2.091-.927 2.994-.982 1.693-1.665 1.798-1.98 3.447.035-.184.526 1.634.538 1.841.135 2.32-1.478 4.175-1.034 6.726.623 3.59 3.35 7.586 5.273 10.571 4.347 6.748 10.424 11.98 18.749 12.456 5.56.32 18.641-1.904 19.833-7.717a15.814 15.814 0 01-.797-2.082c-.128-1.033.255-1.738 1.149-2.115a2.691 2.691 0 001.61-1.145 3.956 3.956 0 00-.928-1.559c.154-.778 1.465-.816 1.444-1.318-.039-.934-.861-3.275-1.081-4.34-.382-1.84-.591-3.592-.926-5.444-.272-1.498-1.191-2.238-1.427-3.612-.162-.937.79-1.787.709-2.78a6.907 6.907 0 01-1.525-1.963 3.532 3.532 0 01.573-2.159c-.934-6.537-10.184-12.028-16.764-12.178-3.535-.08-9.571-.335-12.75 1.512-2.125 1.234-3.55 5.611-6.389 2.888zM248.782 638.044c-4.647-2.095-8.809-4.327-13.786-5.344-3.592-.735-6.676-2.753-10.286-3.41-7.997-1.459-16.634-2.804-24.304-5.608-8.224-3.008-17.18-4.085-25.609-6.585-4.15-1.23-7.772-2.038-12.064-2.276-4.182-.23-8.481-2.563-12.661-2.169-3.494.33-5.986 3.014-8.72 4.927-3.545 2.481-7.411 4.62-11.221 6.67-4.043 2.174-8.547 3.264-12.537 5.385-3.313 1.76-6.567 3.478-9.983 5.092-18.149 8.576-35.674 16.587-52.041 28.52 5.278 1.605 11.282.004 16.527-.562 7.455-.806 14.883-1.41 22.264-2.792 4.319-.807 12.749-3.888 16.873-1.52 3.624 2.08 3.346 7.42 3.866 10.992 3.421-1.32 6.827-2.674 10.278-3.914 2.714-.975 7.118-3.656 9.884-3.75 7.705-.26 6.863 10.552 6.113 15.514 4.502-1.529 8.783-2.596 13.147-4.49 3.498-1.519 7.361-1.854 10.759-3.665 8.443-4.5 17.811-7.32 26.851-10.514 10.199-3.605 20.376-7.277 30.488-11.123 4.156-1.58 8.255-3.668 12.507-4.95 4.578-1.38 9.265-2.419 13.655-4.428zm100.631-412.3c-.646 6.082.02 12.215.206 18.304.218 7.13.227 14.184 1.15 21.272 1.666 12.787 4.011 25.577 8.589 37.676 4.168 11.02 11.202 18.812 23.114 21.194 10.702 2.14 21.132-1.53 27.943-10.08 7.065-8.868 9.235-20.067 13.372-30.344 2.023-5.025 3.521-10.078 5.208-15.22 1.012-3.08 6.028-11.922 4.593-15.086-1.401-3.089-9.668-4.145-12.53-5.862-4.547-2.729-8.752-8.2-12.222-12.198-2.325-2.679-3.683-4.66-5.251-.41-1.885 5.107-.519 11.007-2.278 15.961-1.731 4.871-5.509.066-5.897-3.109-.744-6.096.151-13.02.439-19.148.537-11.418 1.286-24.624 11.582-31.664 9.758-6.672 20.349-8.748 25.767-20.267 2.172-4.618 4.725-9.456 3.368-14.623-1.568-5.963-3.889-12.199-6.172-17.93-4.386-11.006-11.255-20.589-17.26-30.694-.811-1.363-.981-3.11-2.753-3.495-2.004-.436-6.682 2.973-8.625 3.523-5.291 1.496-10.019-1.608-14.687 1.905-3.746 2.82-6.922 6.878-11.976 7.173-2.176.127-5.129-1.816-7.004-1.352-2.389.591-3.08 4.156-4.001 6.16-2.115 4.595-4.475 10.354-7.963 14.111-1.184 1.275-3.276 1.67-4.287 2.856-1.177 1.38-.523 4.18-2.209 4.43-.977.145-1.757-1.18-2.579-1.496-1.397-.538-2.767-.64-4.262-.597-2.766.081-5.636.75-8.067 2.073-5.653 3.078-7.742 7.76-.948 10.574 2.723 1.13 5.68 1.97 8.626 2.231 3.233.287 6.504-.722 9.701-.328 6.165.76 8.061 5.915 9.657 11.213 2.194 7.288 3.967 14.667 6.431 21.88 2.013 5.891 5.67 11.88 6.726 18.035.649 3.781-.201 3.5-2.725 5.837-1.923 1.78-3.079 4.117-5.162 5.903-5.808 4.98-10.869 3.652-17.614 1.592zm374.876 353.983c-.177-1.299-27.706 1.185-30.834.863-5.344-.55-11.033.913-16.558.726-4.884-.166-11.929-2.063-15.961.308-1.495.88-1.532 1.917-3.892 1.47-2.193-.417-4.503-1.967-6.145-3.404-4.569-3.998-7.361-10.288-10.349-15.473-5.981-10.376-11.103-21.127-16.067-32.039-10.225-22.475-20.063-45.078-30.277-67.558-5.052-11.119-9.923-22.258-15.372-33.17-2.325-4.659-4.878-9.768-6.668-14.647-1.951-5.32-4.516-10.316-6.265-15.77-3.707-11.554-8.137-22.935-10.975-34.816-.719-3.008-.986-6.158-1.852-9.123-.924-3.167-2.811-5.875-3.994-8.94-1.206-3.125-1.209-5.913-1.809-9.106-.599-3.182-2.061-6.284-3.114-9.332-5.421 3.27-11.594 6.244-16.583 10.13-4.907 3.822-12.067 7.024-10.013 13.935 1.868 6.286 5.176 12.066 7.144 18.344 2.208 7.043 4.92 13.928 7.051 20.987 4.573 15.155 8.576 30.488 12.671 45.78 1.924 7.183 4.328 14.381 5.738 21.688.734 3.801.614 7.2 1.996 10.882 1.35 3.6 2.63 7.12 3.739 10.805 1.974 6.56 3.858 13.132 6.042 19.623 1.182 3.513 2.127 7.065 2.967 10.674.509 2.181 2.24 6.376 1.753 8.634-1.398 6.502-9.998-.123-12.056-2.777-4.775-6.156-8.2-13.687-11.776-20.58-14.358-27.678-21.418-57.53-28.821-87.66-1.946-7.922-3.825-15.772-6.012-23.61-2.292-8.215-2.959-16.803-5.664-24.97-2.795-8.44-5.646-16.573-7.699-25.256-.949-4.02-1.953-8.038-2.796-12.08-.45-2.16-.469-6.13-3.344-6.56 1.851 13.547 2.535 29.42 7.934 42.125 4.894 11.524 8.784 27.313 3.836 39.548-2.379 5.884-6.143 10.91-8.973 16.514-3.165 6.267-5.227 13.462-7.348 20.14-4.392 13.828-5.688 28.371-8.627 42.516-1.541 7.414-1.571 12.485-.234 19.78.43 2.35-.329 4.216 1.649 5.722 1.99 1.515 6.592 1.821 9.051 2.69 7.465 2.64 13.883 4.575 21.788 5.44 7.467.818 14.479 2.301 21.591 4.747 12.816 4.407 26.143 7.701 38.736 12.12 6.888 2.416 13.531 6.722 20.153 9.81 6.888 3.213 14.195 5.312 20.688 9.322 6.995 4.318 13.912 9.333 20.54 14.174 6.14 4.484 9.083 10.058 11.639 17.036 4.859 13.266 17.11 30.482 5.794 43.868 3.967 1.724 8.507 2.41 12.308 4.252 1.312.637 1.703 1.258 3.195 1.624 1.951.48 4.462.096 6.46.226 2.89.188 8.98 2.267 11.798 1.427 2.634-.786 2.749-4.607 4.641-6.493 2.806-2.796 5.499-.993 8.932-1.304 5.085-.46 10.151-1.128 15.239-1.572 10.266-.895 20.503-1.106 30.803-1.082-5.362-5.95-25.081 4.88-25.565-5.9-.561-12.474 14.664-8.732 22.065-12.33-6.727.198-13.454.263-20.168.796-4.074.324-11.907 2.274-14.211-2.203-2.476-4.814 1.508-10.382 5.239-12.896 5.163-3.478 11.13-5.696 16.842-8.075zM163.213 413.402c-1.234 2.46.677 3.451 1.543 5.434 1.196 2.74.015 2.195-.225 4.773-.161 1.73.311 2.545.213 4.164-.041.69-1.021 1.604-1.136 2.388-.207 1.407.554 2.055.471 3.077-.041.507.615.597.481 1.332-.116.641-1.592 1.092-1.679 1.495-.5 2.337.901 1.167 1.115 2.275.358 1.85-.682 2.166-1.274 3.867-1.021 2.933-.034 4.3.597 7.05.534 2.32-.259 2.335-.56 4.55-.183 1.343.205 1.507.199 2.756-.018 4.314-.983 8.8-1.023 13.371-.095 10.818-1.011 21.48-1.148 32.271-.135 10.604-.907 21.34-1.371 32.077-.226 5.235-.757 10.452-.986 15.688-.267 6.08.328 12.131-.184 18.187-.465 5.505-.186 11.028-.414 16.548-.107 2.62-1.455 10.544.265 12.305 2.234 2.286 11.286-.148 14.214.013 5.504.301 11.307 1.41 16.7 2.545 12.781 2.692 25.591 6.12 38.377 8.535 10.661 2.013 20.663 7.134 30.586 11.468-.909-9.116-2.514-18.009-2.811-27.197-.266-8.258.512-16.473.329-24.72-.391-17.599-1.388-35.002-.995-52.597.401-17.892 1.843-36.16 4.334-53.883 1.145-8.143 2.038-16.818 4.951-24.555 1.32-3.505 3.469-6.075 2.577-9.93-.967-4.177-2.877-8.543-4.289-12.593-1.038 6.596-4.696 50.55-19.724 37.336-5.868-5.159-8.585-16.336-9.897-23.66-1.772-9.9-1.136-20.307-1.09-30.326.092-20.413 2.337-41.238 4.396-61.539.411-4.055 2.459-7.68-2.743-7.487-4.877.183-9.889 1.338-14.739 1.907-4.198.492-8.413-.706-12.413-.17-1.834.246-3.456 1.332-5.308 1.607-2.337.347-4.779-.16-7.132-.158-3.965.005-8.562-.016-11.853 2.451-3.457 2.591-6.421 6.88-7.582 11.025-1.16 4.147-.85 8.814-1.584 12.956-.619 3.491-.751 7.8-1.33 11.764-2.509-3.144-2.348 1.394-2.375 2.735-.031 1.62-1.774 4.898-1.325 5.848.29.613 2.238.29 2.403.77.339.99-.834 1.407-.855 2.147-.083 2.884.082 5.865.075 8.773l-2.043-1.56c-.358.777-.471 1.791-.812 2.578-.154.358-1.592.26-1.66.963-.089.92 1.923 2.69 2.311 3.693.695 1.794 1.138 1.086-.04 3.02-1.356 2.227-3.576 2.351-3.221 5.588a9.472 9.472 0 001.88-1.919c.336 1.932-.504 3.635-.606 5.56-.067 1.257 1.464 6.278.31 7.118-.485.354-1.782-1.578-1.9-1.714zm101.394-158.408c.009-4.238-6.178-10.756-8.306-14.303-3.394-5.659-7.044-10.782-11.359-15.783-4.335-5.024-8.963-9.813-13.167-14.947-1.74-2.123-3.031-4.603-4.805-6.682-2.217-2.596-2.685-1.798-5.431-1.729-2.088.053-3.45-.302-5.38.318-1.025.33-1.689.818-2.79 1.121-.689.191-1.598-.478-2.523-.155-2.288.797-3.066 2.837-5.827 2.795-.331-.005-1.391-.79-1.544-.746-.187.054-1.045.71-1.015.702-.184.042-.131 1.341-.621 1.566-.838.386-1.432-.908-2.195-.824-1.928.212-3.362 2.202-5.495 2.684-2.74.62-5.11-.284-7.727.991-2.091 1.018-3.148 3.334-4.887.94-1.575 3.344-4.474 2.331-7.37 3.74-4.038 1.965-8.415 2.961-12.715 4.445-8.847 3.053-17.756 6.181-26.38 9.856-17.889 7.624-35.213 16.078-52.702 24.274-17.104 8.016-32.924 18.645-48.317 29.345-7.547 5.245-15.05 10.755-20.937 17.938-1.784 2.176-4.763 5.556-3.561 8.618 1.272 3.238 6.648 5.248 9.688 5.87 3.986.815 8.368 1.088 12.426 1.36 4.381.293 9.087.438 13.423.38 8.546-.119 16.928-.952 25.514-1.14 9.767-.217 19.342-2.277 29.089-2.399 10.715-.134 21.308-1.477 32.039-1.058 20.684.81 41.35 1.407 62.095 1.507 2.581.012 5.112-.299 7.647.151 2.057.364 3.543 1.084 5.749.926 2.055-.147 3.96-1.046 6.054-1.155 2.75-.143 5.567.31 8.331.253 9.332-.19 20.4-1.039 29.396 1.912 3.573 1.173 8.065 4.588 5.887 9.014-2.154 4.376-7.656.81-11.062 2.798-3.173 1.853-1.413 6.91-1.189 9.932.423 5.728.5 11.426.349 17.166-.333 12.676-1.105 25.337-1.253 38.017-.071 6.16.017 12.316.342 18.467.287 5.43.096 11.338 1.952 16.52 2.585-6.47 2.9-13.612 3.925-20.429 1.11-7.375 2.195-14.75 3.25-22.134.627-4.386 1.278-30.728 9.861-27.287 9.124 3.657 5.952 23.922 6.366 31.208.391 6.877 1.094 13.728 2.652 20.447.725 3.123 2.717 16.385 6.721 17.242 2.937-13.879 6.042-27.736 8.201-41.764.953-6.192 1.794-12.43 2.174-18.687.198-3.256-.043-11.083 4.664-11.462 13.836-1.115 4.554 57.182 14.893 64.516 3.824-7.607 5.319-15.54 6.357-23.973.472-3.839 1.482-8.16.885-12.01-.783-5.038-1.633-8.126-.581-13.33.86-4.262 1.479-8.637 2.473-12.86.717-3.045 2.588-4.53 3.575-7.276 2.781-7.729 2.602-17.513 3.711-25.626 1.123-8.217 2.307-16.295.851-24.584-1.441-8.209-7.446-10.819-14.273-14.208-6.879-3.414-13.516-7.166-21.07-8.672-8.482-1.69-16.266-3.33-24.948-3.779-15.322-.79-30.338.127-45.591.853-16.96.808-33.937-.199-50.888-.432-8.24-.113-16.635-.272-24.861-.138-4.122.068-8.121.783-12.27.68-3.535-.089-10.445 1.001-13.539-.879-2.428-1.475-2.425-4.743-.375-6.544 2.031-1.785 6.014-1.879 8.55-2.43 8.105-1.759 16.184-2.769 24.347-4.18 4.701-.814 8.645-1.084 13.356-.855 4.575.224 9.241-1.084 13.867-1.306 9.803-.468 19.663-.932 29.471-1.085 19.008-.296 37.797-1.747 56.823-1.7zm9.919 185.925c-1.529.59-1.14 7.895-1.279 9.354-.413 4.37-.866 8.733-1.255 13.104-.898 10.091-1.574 20.204-2.126 30.32-.551 10.115-1.205 20.263-1.172 30.397.015 4.314.208 8.624.121 12.938-.065 3.225-1.484 9.26 1.268 11.55 1.846 1.537 5.462.845 7.619.703 4.262-.279 8.535-.564 12.808-.596 4.936-.038 9.838.493 14.777.364 1.895-.049 4.011-.365 5.887-.008 1.359.261 2.842 1.433 4.117 1.484.938.038 2.151-.893 3.188-1.076 1.614-.285 3.508.045 5.15.025 1.168-.014 3.984-.542 5.058.148 1.047.672.644 2.203 1.601 2.542.364.13 2.442-2.339 2.798-2.495 1.591-.694 3.911-.154 5.588-.135 4.828.054 9.659-.25 14.489-.205 4.708.044 9.249.592 13.768 1.14 2.988.361 6.419-.546 9.591-.812 5.071-.425 10.164-.346 15.248-.244 2.552.051 5.106.091 7.658.154.604.015 1.8-.22 2.383-.046 2.342.703.856.744 2.511 1.813-2.171-1.403 4.858-2.317 5.263-2.32 3.19-.024 6.113 1.543 8.768 1.236 2.876-.332 5.812-2.109 8.976-1.558 1.479.258 2.707 1.912 3.806 2.102 1.776.307 2.383-.976 4.012-1.618 3.25-1.282 7.021-.165 10.414-.387 4.763-.31 9.349-.322 14.13-.386 8.723-.115 17.445-.259 26.169-.174 8.033.078 14.487 3.3 22.476 3.124 4.19-.09 8.451-.457 12.635-.356 3.593.085 5.428 2.763 2.712 5.91-1.836 2.126-5.208 2.351-7.797 2.74-3.843.58-7.617 1.411-11.447 2.053-9.107 1.526-18.639 1.48-27.851 1.756-37.569 1.131-75.146 4.471-112.738 4.824-16.506.155-33.189 1.545-49.643.897-9.179-.362-18.152 1.611-27.402.193-3.9-.598-7.734-.96-11.666-1.242-.512-.036-3.515-.617-4.082-.359-1.675.763-.74.066-1.443 2.003-1.153 3.182-.672 8.257-.666 11.645.012 5.4.275 10.81.456 16.205.175 5.17.462 10.336.77 15.501.127 2.137-.714 10.172.934 11.765 1.275 1.234 7.24.65 8.854.305 1.936-.414 2.117-.516 4.213-.27 1.546.182 2.096.137 3.644-.03 4.433-.479 9.51-.564 13.961.237 3.454.621 7.082-1.018 8.404 2.615 2.235-2.736 2.184-1.16 4.64-.61 2.53.565 1.755-1.069 3.899-1.294 1.511-.158 2.859 1.036 4.493 1.047 2.699.017 5.127-.696 8.013-.336 12.742 1.59 25.664 3.02 38.513 3.137 5.331.05 10.599.132 15.901.294 2.705.082 5.263.364 7.923.683 2.507.302 4.477-.3 7.083-.433 5.763-.294 11.809.584 17.573.9 2.71.147 6.104-.319 8.703.037 2.612.357 2.809 2.341 4.886 3.491.328-6.437 13.789-2.314 17.293-2.306 1.376.004 3.057-.582 4.718-.476 2.749.177 5.517.222 8.27.32 4.39.153 8.633.42 12.803-.113 5.448-.694 11.365.046 16.868.012 5.992-.038 11.985-.119 17.974-.315 6.068-.199 12.125-.57 18.192-.765 5.27-.17 10.861.255 16.056-.13 1.347-.1 2.635-1.088 3.839-1.139 1.669-.07 3.538.646 5.464.481 6.071-.518 11.728-.603 17.864-.582 10.526.036 21.462-1.908 31.554-4.696 4.652-1.285 9.487-1.355 14.106-2.733 5.332-1.592 10.215-4.367 15.122-6.935 3.843-2.012 9.246-2.948 7.681-8.035-1.67-5.43-4.337-10.697-6.325-16.032-1.728-4.638-2.83-9.157-6.576-12.646-3.702-3.448-8.431-5.763-12.375-8.942-8.596-6.928-17.569-11.07-27.748-15.174-10.26-4.136-19.62-10.235-30.398-12.985-10.008-2.554-19.65-5.978-29.456-8.595-10.729-2.863-21.793-3.9-32.614-6.446-10.371-2.44-20.553-6.028-31.061-7.886-11.369-2.009-22.843-3.043-34.17-5.495-9.603-2.078-18.765-6.149-28.418-7.773-2.82-.475-5.869-.765-8.598-1.65-2.552-.83-4.378-2.508-6.958-3.188-5.956-1.569-11.132-3.708-16.771-6.258-2.371-1.073-3.685-2.39-5.74-3.72-2.451-1.586-5.59-2.149-8.341-3.023-5.299-1.683-10.577-3.338-15.331-6.293-4.928-3.062-9.455-6.524-13.991-10.102a171.52 171.52 0 00-5.944-4.453c-2.426-1.745-4.915-2.06-7.634-3.2-11.793-4.949-16.957-16.565-23.381-26.672-.603 8.185-8.434 11.983-13.259 4.2zm167.603-143.375c.813-3.666 1.972-8.927-2.597-9.132-.294-.013-3.321.743-3.633.944-1.557 1.001-2.146 4.34-2.74 5.961-.523 1.43-.886 3.334-2.048 4.414-1.146 1.067-2.343 1.093-3.413 2.371-3.255 3.89-5.68 10.57-7.649 15.264 2.671-.646.73 1.146 1.866 2.167 1.775 1.594 1.222 1.306 3.745 1.553 4.396.43 6.402-.74 9.839-3.479 2.915-2.322 3.851-3.843 5.529-7.195 2.399-4.788 1.229-7.839 1.096-12.87l3.609 3.321-1.12-4.352-2.484 1.033zM315.677 8.07c2.336-7.996 6.7-8.587 12.567-2.842.93-2.055 2.031-5.246 4.736-5.228 1.917.013 2.256 1.563 3.542 2.61 1.552 1.264 2.762 1.708 4.732 2.045 4.299.735 8.294.483 12.34 2.405 3.686 1.75 5.439 4.306 8.277 6.927 2.655 2.452 4.592.864 7.623 2.105 3.37 1.38 4.877 5.464 5.53 8.773.797 4.048-.033 5.338 2.781 8.277 2.654 2.773 4.062 6.304 4.382 10.114.301 3.603-.494 7.88-2.574 10.917-2.341 3.422-4.767 2.476-1.719 6.541 1.534 2.047 1.707 6.404 3.552 7.716 3.228 2.293 7.396-1.406 10.247-2.337 3.874-1.265 3.01.851 4.709 3.403 2.511 3.77 4.004-.12 7.429.633 1.259.277 1.628 1.636 2.071 1.8 1.564.58-.097.364 1.69-.28 1.188-.429.374-2.733 2.767-1.418 1.663.915.411 2.542 1.167 3.72 1.485 2.316 3.69.966 4.788 3.955 1.092 2.977 2.571 6.925 3.178 10.18.74 3.954-.997 7.395-.743 11.136.266 3.907 4.137 6.54 6.545 9.28 11.809 13.423 16.809 31.08 20.661 48.145 3.581 15.861-2.721 33.817-15.095 44.567-6.273 5.45-14.11 7.787-20.134 13.785-2.674 2.662-2.639 3.505.547 5.687 2.61 1.787 5.004 4.064 7.77 5.476 7.111 3.63 14.04 6.223 21.98 7.747 4.004.77 8.173.461 12.224.317 4.217-.15 8.977.448 13.099-.067 3.641-.455 6.521-3.394 10.333-3.082 1.494.122 2.41.693 3.931.558 1.997-.176 3.677-1.233 5.801-1.179 3.229.082 6.424.136 9.546.254 3.546.132 7.714-.839 11.243-.226 3.349.581 7.332 3.593 10.245 5.35 3.591 2.164 7.902 4.668 11.117 7.313 3.037 2.5 5.179 6.478 7.548 9.582 2.505 3.284 5.404 6.218 7.923 9.487 9.918 12.87 20.365 28.72 23.466 44.922.785 4.1.742 8.15.151 12.267-.529 3.678-3.98 5.076-4.085 9.03-.213 8.002 3.621 17.28 5.847 24.863 2.345 7.985 5.282 15.741 8.919 23.25 1.408 2.908 3.193 5.312 4.079 8.324 1.082 3.68 2.73 7.17 3.935 10.88 10.426 32.1 26.588 61.98 38.369 93.592 6.331 16.987 13.026 33.828 19.929 50.598 3.397 8.256 7.077 16.26 10.77 24.39.486 1.067.831 3.126 1.677 3.861 1.429 1.242.169.535 2.17.324 1.726-.182 3.518-.969 5.26-1.26 4.204-.707 8.51-.828 12.75-1.246 4.872-.482 9.161-.733 14.036-.497 4.537.22 9.003-1.128 13.519-1.427 9.681-.64 19.228-.303 28.902-.122 7.538.141 17.19-.755 24.165 2.745 6.988 3.506 4.577 11.58-1.349 14.655-7.101 3.685-15.459 4.211-22.516 7.966 5.296 1.63 11.018 1.21 16.413 2.482 3.477.82 8.852 1.426 11.473 3.964 2.538 2.46 2.281 6.694.606 9.578-2.086 3.59-6.098 4.21-9.709 5.455 1.627 2.156 4.156 1.988 5.62 4.83 1.945 3.778.729 7.815-1.653 11.082-5.169 7.093-15.405 7.692-23.396 8.703a125.677 125.677 0 01-24.003.694c-4.504-.307-8.948-.532-13.396-1.166-5.117-.73-4.625 2.855-6.448 6.524-1.764 3.552-4.31 5.074-8.25 4.855-4.254-.238-8.971-.527-13.185-1.24-4.035-.682-7.529-2.765-11.399-3.633-3.485-.783-6.252-2.047-9.563-3.742-3.8-1.945-5.821-5.2-9.147-7.435-3.414-2.294-6.986 1.31-10.343 3.104-8.159 4.36-17.113 6.287-26.037 8.43-9.1 2.186-17.962 4.983-27.217 6.496-4.307.703-8.398.61-12.685 1.066-4.94.527-9.222 2.414-14.267 2.424-17.816.037-35.747 3.253-53.571 3.848-17.645.59-35.576-.87-53.202.311-9.012.605-17.734-.608-26.696-.142-9.245.482-18.817-.005-28.043-.71-19.146-1.466-37.697-1.085-56.642-2.034-9.855-.494-19.903-1.422-29.634-2.987-9.541-1.534-20.338.233-27.086-8.067-.742 3.254-.945 6.628-3.323 9.194-2.501 2.698-6.53 3.787-9.878 5.016-8.549 3.137-17.191 6.117-25.799 9.094-8.159 2.823-16.371 5.88-24.595 8.467-8.644 2.72-16.867 6.015-25.365 9.207-7.7 2.892-15.678 5.177-23.098 8.664-3.061 1.438-6.267 1.557-9.193 2.9-3.614 1.658-6.971 3.25-10.843 4.445-3.321 1.026-6.359 1.764-9.573 3.098-3.182 1.321-7.69 3.615-11.02 1.858-2.341-1.234-3.26-4.07-3.98-6.438-.902-2.96-.133-8.099-3.639-7.966-3.464.131-8.354 3.465-11.75 4.596-4.063 1.354-8.222 3.618-12.407 4.385-4.19.767-7.488.537-9.686-3.359-2.474-4.384-2.062-9.03-1.322-13.799-7.132-.017-13.738.653-20.932.897-3.963.135-7.817.311-11.769-.126-3.567-.393-8.87.725-11.964-.907-6.289-3.32-5.353-12.71-2.181-17.845 1.762-2.85 4.523-4.773 7.329-6.503 3.519-2.168 6.099-4.627 9.181-7.389-2.01-1.385-4.624-.712-6.595-2.362-1.531-1.28-2.484-3.416-3.183-5.238-1.303-3.397.376-11.19-2.564-13.115-1.57-1.027-4.351-.592-6.145-1.416-2.451-1.125-4.172-3.2-5.228-5.669-2.378-5.566-.34-11.36 1.98-16.56-8.79-1.499-21.676-2.095-24.19-12.274-.804-3.25-.914-7.015.192-10.212 1.642-4.744 5.466-5 9.706-6.39 17.727-5.819 34.33-15.267 53.429-16.668 10.23-.75 20.534-1.145 30.752-2.206 10.263-1.066 20.157-2.947 30.488-1.67 4.395.543 9.483.06 13.687.854 4.065.767 4.58 5.562 1.473 8.33-3.02 2.69-7.4.97-10.996 1.271-5.096.427-9.389 2.838-14.147 4.356-11.675 3.726-24.468 6.37-36.643 7.708-6.536.718-12.709.814-19.107 2.557-5.812 1.584-11.564 3.383-17.396 4.9 6.372 1.703 18.715 1.513 20.836 9.276.997 3.653-.109 8.708-3.321 10.967-1.865 1.312-5.939.713-7.113 2.673 5.017.616 10.739-3.244 13.493 2.276 3.143 6.3.068 11.271-3.953 15.948 3.553-.589 7.206.082 10.794-.373 2.769-.352 5.355-1.185 7.986-.318 1.32.435 1.146 1.611 2.813 1.618 1.212.005 3.027-1.313 4.079-1.82 3.998-1.93 8.055-3.5 12.187-5.112a116.447 116.447 0 0114.824-4.697c6.929-1.7 13.884-6.063 20.644-8.53 2.864-1.045 6.546-2.116 7.969-5.098 1.468-3.076.343-7.58.253-10.833-.255-9.152-.146-18.317-.09-27.47.047-7.7.232-15.254.917-22.923.819-9.177.086-18.32.437-27.512.323-8.44-.434-16.86-.204-25.297.257-9.399.727-18.764.824-28.174.173-16.903.742-33.786 1.069-50.685.336-17.359 2.176-34.725 5.886-51.699 1.662-7.603 3.832-15.347 6.725-22.57.916-2.289 1.876-2.419-.326-3.727-1.306-.775-2.919.091-4.2.263-2.694.36-5.099.52-7.841.358-15.718-.92-31.992-.176-47.653 1.237-8.145.735-16.334 1.435-24.512 1.727-8.156.29-16.312 1.555-24.469.957-13.667-1-29.255.563-40.968-8.24-12.499-9.392-11.322-26.033-3.251-38.056 8.907-13.269 23.784-20.829 36.207-30.127 12.205-9.135 26.551-15.835 39.862-23.192 28.495-15.75 59.115-30.33 89.795-41.215 31.214-11.073 62.533-23.803 96.529-21.639 17.223 1.096 36.492 1.736 51.685 10.887 8.116 4.89 15.973 9.988 22.946 16.447 3.285 3.043 6.18 6.793 9.678 9.573 3.251 2.585 6.44.815 10.155-.135l-7.896-25.48c-3.634 2.82-8.635 3.892-13.361 2.895-5.737-1.21-5.272-3.662-4.759-8.57.24-2.278.861-1.889-1.115-3.327-1.62-1.18-4.581-1.566-6.446-2.588-4.653-2.549-8.686-6.292-10.401-11.43-1.705-5.11-.497-9.85.619-14.923 1.341-6.099-1.975-3.549-5.767-6.385-1.668-1.248-2.266-2.332-1.979-4.393.234-1.673 3.541-4.082 3.393-5.729-.179-1.985-1.284-1.763-2.854-2.96-1.732-1.32-2.979-2.94-3.743-5.02-1.618-4.403 1.68-7.123 3.062-11.183.67-1.968 1.329-3.65 2.645-5.307 2.332-2.934 3.237-2.87 6.49-2.844 2.739.021 2.709-.203 4.761-2.68.796-.96 1.59-1.916 2.278-2.959 1.182-1.79 1.51-1.548.246-2.947-3.852-4.264-5.609 2.393-9.03 1.991-3.957-.465-4.667-6.74-7.148-8.836-1.736-1.467-3.717-.908-5.615-1.899-2.322-1.21-2.788-3.52-4.295-5.455-2.446-3.14-5.997-3.694-7.629-7.678-.926-2.26-1.053-4.589-1.241-6.986-.269-3.413-1.162-6.11-2.155-9.36-1.012-3.314-.763-5.709.883-8.758 1.696-3.142 1.896-4.199 1.469-7.743-.325-2.698-.425-5.093.983-7.5 1.518-2.594 1.834-3.948 2.329-6.903.431-2.59 1.254-4.457 3.759-5.532 1.707-.733 3.555.083 4.761-1.586 1.203-1.666.882-4.335 2.118-6.176 2.016-3.003 5.048-3.473 8.35-4.15z"
            transform="translate(136 32)"
          />
          <path
            d="M415.482 141.516c-1.172-2.753-5.093-15.45 1.356-15.516 5.117-.052 3.5 10.967 3.563 13.672.117 5.063 5.414 5.782 7.395 10.375 2.312 5.355.717 11.75-2.886 16.114-2.75 3.331-8.045 7.148-11.824 3.07-4.202-4.538-.164-7.085 2.778-9.91 4.261-4.096-3.892-5.286-6.009-8.608-3.597-5.646.352-8.583 5.627-9.197M397.007 144.38c-.588 2.614-.41 8.583-3.25 9.992-4.762 2.363-5.862-9.033-5.825-11.549.04-2.676.966-8.999 4.912-8.18 4.428.92 1.916 9.118 4.163 9.737M414.823 177.48c7.042.22 6.646 8.617-.107 8.91-6.284.273-6.129-9.103.107-8.91M429.8 302.654c-.658 2.798-2.192 5.436-4.491 7.2.542-1.107 2.895-7.698 4.49-7.2"
            transform="translate(136 32)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SittingDoodle;
