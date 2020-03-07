import { DEFAULT_INK, DEFAULT_ACCENT, Props } from "../utils";
import React from "react";

const JumpingDoodle: React.FC<Props> = ({ink = DEFAULT_INK, accent = DEFAULT_ACCENT}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 768">
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          fill={accent}
          d="M205.009 278.083c1.766-2.727 1.756-2.143 4.925-1.578l39.006 6.953 132.02 23.534 46.549 8.297c2.266.405 6.71.307 8.708 1.553 1.025.64 1.79 2.536 2.453 3.564l8.619 13.36c16.127 24.996 32.734 49.68 49.194 74.457l54.908 82.65-77-1 14.264 9.302c33.578 21.9 67.157 43.8 100.736 65.698l-48 32 17 18-15.903 9.048-29.16 16.591-10.334 5.88c-.81.461-1.957 1.425-2.808 1.35-1.278-.117-3.587-2.325-4.626-3a3164.764 3164.764 0 01-39.974-26.45c-24.53-16.503-49.006-33.204-72.49-51.178-10.85-8.303-20.921-16.91-29.397-27.714-9.326-11.886-17.028-25.01-23.8-38.492-5.701-11.349-10.75-23.032-15.226-34.916-1.54-4.084-5.348-10.623-5.28-15.11.038-2.412 2.134-5.882 2.945-8.114l5.773-15.874c.987-2.716 2.926-6.087 3.264-8.979.41-3.49-1.283-8.268-1.828-11.717-.264-1.677-.227-6.403-1.5-7.35-.846-.632-4.038-.312-5.056-.39l-24.77-1.906-66.423-5.109c-6.094-.469-12.941-.143-18.923-1.456-4.52-.99-7.344-4.615-8.695-8.852-4.055-12.725-7.89-25.65-10.358-38.789-2.388-12.698-.082-22.578 5.125-34.327 4.558-10.284 9.94-20.483 16.062-29.936zm587.382 121.79c-4.376 16.674-10.491 37.532-23.412 49.614-4.912 4.594-11.468 7.595-17.443 10.514-8.788 4.291-17.801 8.13-26.873 11.775-16.013 6.436-32.834 13.566-49.896 16.69-4.736.866-7.148.016-11.091-2.826-6.622-4.774-12.61-10.509-18.53-16.105-9.49-8.97-18.721-18.232-27.755-27.662 34.222-.083 69.51-1.648 103-9 25.51-5.6 51.13-17.142 72-33z"
        />
        <path
          fill={ink}
          d="M443.025 47.994c8.246 3.675 12.598 13.843 16.927 21.196 5.196 8.824 9.903 18.065 12.557 28 2.72 10.182 3.097 21.345 1.89 31.79-.53 4.597-1.773 8.78-3.087 13.177-1.405 4.7.783 7.388 4.116 10.702 6.924 6.884 15.642 12.166 20.78 20.647 4.354 7.186 9.416 8.516 17.623 8.824 20.383.765 40.358.134 60.552 4.033 5.127.99 10.222 2.202 15.266 3.555 1.657.444 3.39 1.22 5.098 1.376 2.462.224 2.882-.755 4.72-1.702 8.093-4.165 18.363-.164 26.45 2.12 20.418 5.77 39.682 13.623 58.188 24.028 19.983 11.236 41.286 19.958 61.085 31.528 19.127 11.177 36.31 25.244 54.15 38.292 18.142 13.27 35.35 27.63 52.127 42.583 16.216 14.45 32.98 28.635 47.486 44.85 13.224 14.783 23.67 32.284 30.679 50.88 2.339 6.208.899 10.118-6.413 8.07-.647 6.279-5.328 8.903-11.262 7.56 1.822 5.269 5.984 12.405 3.603 18.074-3.167 7.537-12.238 2.05-16.686-.886.483 6.059 3.06 15.895-1.944 20.785-7.755 7.577-20.843-2.08-26.336-7.741-13.996-14.43-22.947-32.283-35.373-47.85-15.401-19.291-32.75-37.48-50.162-54.945-1.374-1.38-16.872-18.007-19.093-15.747 6.762 11.197 12.166 23.522 21.62 32.824 4.488-6.303 7.739-3.197 8.582 3.132 1.012 7.608 2.14 15.62.737 23.245-2.758 15.008-12.232 29.282-22.187 40.52-10.414 11.756-23.344 20.707-37.215 27.912-7.853 4.079-15.73 7.9-24.176 10.579-3.783 1.2-7.572 2.59-11.458 3.424-3.736.8-7.776.745-11.234 2.558 30.975 14.788 65.245 21.018 96.293 35.425 7.494 3.477 22.543 12.515 14.939 22.674-5.882 7.86-19.25 8.138-28.024 9.706 6.455 6.093 5.493 11.75-2.992 15.067-3.41 1.332-6.962 1.95-10.597 2.045-2.468.064-6.733-.814-8.727 1.126 7.693 3.525 18.18 3.31 24.504 9.504 6.45 6.318-1.254 11.4-7.02 13.838-7.582 3.204-18.01 6.584-25.723 2.72-6.097-3.054-11.726-2.392-18.468-3.195-6.952-.828-13.824-2.316-20.53-4.317-25.535-7.62-49.048-21.72-71.598-35.59-22.53-13.856-43.54-29.6-62.97-47.564-4.793-4.432-8.785-9.706-13.684-13.997-5.156-4.516-10.554-4.921-17.15-4.846-14.995.17-29.961-2.498-44.948-.74 21.54 16.236 44.304 30.536 66.964 45.118 8.622 5.549 17.686 12.948 27.823 15.367 4.447 1.062 13.989 1.766 15.466 7.249 1.08 4-2.342 4.673-4.392 6.844-2.97 3.144 1.21 4.195 4.275 5.498 3.86 1.64 7.386 2.17 11.592 1.736 6.438-.665 11.489-.444 17.488 2.314 9.427 4.332 19.548 6.664 28.999 10.9 3.914 1.756 4.943 6.986 6.832 10.537 2.97 5.58 6.402 10.895 9.77 16.24 6.349 10.076 11.828 20.44 20.837 28.478 7.895 7.044 16.686 13.283 25.26 19.476 13.393 9.675 30.429 21.637 26.125 40.614-4.256 18.76-23.7 16.743-38.516 13.393-6.236-1.41-14.758-5.353-21.045-3.5-5.425 1.6-9.161 1.838-14.79.56-6.525-1.481-13.092-2.445-19.703-3.467-13.86-2.143-27.833-5.678-41.076-10.312-6.352-2.223-11.657-5.19-16.66-9.732-1.486-1.348-2.567-3.261-4.543-3.245-1.68.014-4.28 2.996-5.58 4.03-4.103 3.269-8.642 5.998-13.326 2.11-2.99-2.481-5.651-7.881-1.327-10.437 3.315-1.96 9.369.286 11.746-3.42 2.489-3.88-3.075-9.51-4.817-12.663-5.258 3.569-12.996 10.788-19.094 4.813-4.885-4.785.55-7.69 5.055-9.22 5.569-1.894 12.013-1.65 9.175-9.097-1.613-4.23-4.193-8.02-4.608-12.635-.315-3.51.697-6.886.722-10.367.044-6.222-6.646-11.581-12.474-13.055-3.56-.901-4.616 2.14-6.802 4.47-3.212 3.427-7.316 5.99-11.407 8.226-6.712 3.666-13.757 6.576-20.791 9.534-4.661 1.96-12.9 4.528-9.572 10.468 4.87 8.696-6.545 4.534-10.66 2.56-9.574-4.59-19.242-8.971-28.696-13.812-19.39-9.931-37.23-22.194-54.355-35.616-16.812-13.177-33.227-27.174-48.502-42.117-7.4-7.24-14.472-14.854-20.772-23.077-6.767-8.832-12.465-18.41-19.36-27.153-7.154-9.075-14.225-17.88-18.834-28.584-4.27-9.92-9.117-20.991-9.194-31.888-.085-12.04-.037-22.852 3.944-34.4 1.66-4.818 3.656-9.836 6.55-14.05.833-1.21 5.2-5.351 4.306-7.002.05.093-9.924 1.617-10.967 1.716-6.621.633-13.282-.502-19.878-1.118-19.504-1.82-39.192-1.138-58.624-3.816-7.326-1.01-15.275.05-22.426-1.81-3.378-.878-4.21-2.813-6.692-4.396-1.133-.723-2.345-.484-3.4-1.488-1.233-1.176-1.5-2.873-2.046-4.407-2.917-8.19-7.832-15.503-10.72-23.71-3.247-9.23-3.1-18.794-2.864-28.442-4.823.384-9.89.416-14.414-1.536-3.652 11.477-19.381 11.27-29.05 10.399-12.075-1.087-26.233-2.224-32.353-14.343-7.192-14.243-6.717-31.534-7.587-47.078-1.022-18.255-1.313-36.783-.416-55.05.763-15.535 4.303-31.662 14.348-43.992 8.863-10.88 24.196-17.246 36.257-7.094 9.065 7.632 13.023 21.377 13.616 32.824.302 5.825.03 11.057 7.2 9.442 2.758-.621 5.264-1.625 7.297 1.203 1.793 2.49.97 6.092-1.3 7.955-2.057 1.69-6.06 1.404-7.468 3.916-1.396 2.49.812 6.48 3.458 6.988 3.013.577 5.333-3.294 8.367-1.498 2.78 1.647 1.328 4.724-.535 6.526-2.204 2.134-4.327 2.579-2.751 5.956 1.208 2.59 3.626 4.316 4.71 7.063 2.679 6.777 3.563 16.515.585 23.33 5.168.576 17.663 6.689 21.728 1.744 1.475-1.794 1.65-4.43 3.245-6.26 1.875-2.153 4.496-3.07 7.27-3.416 5.934-.742 12.004 1.063 17.767 2.226 9.554 1.93 19.166 3.62 28.762 5.325 19.309 3.43 38.797 5.819 58.058 9.505 19.22 3.679 38.242 8.33 57.25 12.964 9.968 2.429 19.89 5.159 29.932 7.263 9.385 1.965 19.165 3.414 27.9 7.57-1.727-10.681-6.546-20.497-9.55-30.823-3.09-10.621-3.958-21.223-2.214-32.16 1.599-10.021 3.967-19.76 9.08-28.616 2.067-3.581 4.342-7.148 7.32-10.036 2.117-2.054 5.098-3.762 6.772-6.211 1.65-2.417 1.3-2.978-1.673-4.091-1.653-.62-3.154-.807-4.721-1.675-1.441-.798-2.681-2.247-4.375-2.523-3.908-.638-9.621 3.15-13.201 4.498-4.887 1.839-9.936 3.495-15.152 4.055-17.12 1.838-37.421-8.092-49.157-20.122-3.917-4.015-12.906-13.247-9.253-19.37 1.928-3.232 5.375-2.464 8.269-3.932 4.532-2.3 1.66-6.113-.511-9.14-5.914-8.246-9.88-17.683-14.114-26.858-4.31-9.338-10.218-17.686-15.062-26.725-3.477-6.486-7.507-13.741-9.105-20.96-1.952-8.814 4.014-10.06 11.308-11.323 23.07-3.996 45.785-9.365 68.648-14.364 9.114-1.992 18.272-4.017 27.445-5.716 7.149-1.324 15.174-2.362 22.039.696zM645.517 597.91c-11.897.612-23.867 3.254-24.248 17.136 1.443 26.342 18.574 46.032 36.672 63.504 4.566 4.408 9.035 9.08 13.994 13.054 2.918 2.337 6.099 3.406 9.256 5.258.774.454 2.11 1.975 2.83 2.206 1.706.552 1.854-.068 3.518-.244 3.628-.382 4.298 2.146 7.056 4.214 5.233 3.923 14.625 3.349 20.77 4.576 5.675 1.133 28.265 9.316 27.249-2.47-.993-11.516-13.275-17.111-21.93-22.254-12.063-7.168-24.498-14.927-34.655-24.696-9.656-9.29-15.96-22-22.445-33.567-4.042-7.21-5.161-13.322-6.328-21.378-.494-3.408-.544-4.523-3.878-5.098-2.578-.444-5.26-.375-7.861-.241zm-41.392-1.914c-6.873 2.227-12.064 7.739-15.485 13.973-1.751 3.19-2.755 6.409-3.334 9.977-.737 4.54-2.433 9.39-1.164 13.956 2.302 8.286 8.343 17.332 13.088 24.44 5.335 7.996 12.263 16.97 20.682 21.87 8.103 4.719 17.889 5.976 25.404 11.799-.673-3.202-3.676-5.566-6.033-7.563-3.436-2.911-6.441-5.801-9.36-9.267-6.456-7.664-11.822-15.964-15.261-25.42-3.332-9.161-5.24-19.473-4.815-29.24.202-4.648 1-9.586 3.008-13.826 1.34-2.834 3.717-5.244 4.744-8.224 2.35-6.832-8.046-3.586-11.474-2.475zm-150.712-226.45c-9.595 1.09-19.108 2.934-28.773 3.827-19.54 1.804-39.82 2.87-57.526 12.204-25.763 13.582-55.433 43.722-46.498 75.47 10.555 37.503 33.12 71.415 61.372 97.954 18.036 16.942 37.789 32.209 57.603 46.999 19.165 14.307 41.337 23.69 61.095 37.066 1.339-19.71 13.723-37.783 28.367-50.322 7.869-6.737 16.128-13.192 24.952-18.633 4.335-2.674 8.825-4.933 13.396-7.166 3.47-1.694 7.304-4.216 11.27-4.405-.064-2.906-7.353-3.98-9.364-4.663-6.94-2.36-13.6-5.974-20.028-9.476-13.995-7.624-26.926-16.928-39.876-26.172-6.33-4.518-12.76-8.901-19.022-13.515-5.64-4.154-10.638-9.558-16.697-13.095-6.233-3.638-13.601-4.398-20.555-5.74-8.354-1.611-16.574-3.525-24.968-4.94-14.017-2.36-27.248-10.615-40.17-16.24-4.344-1.892-10.973-3.533-14.29-7.115-3.004-3.245-2.22-8.256 1.633-10.48 6.625-3.824 17.666 1.163 23.93 3.63 11.588 4.566 23.096 8.652 35.393 10.99 16.844 3.205 32.85 9.202 49.718 12.34 18.189 3.385 36.42 7.089 54.913 8.337-4.531-8.98-12.043-16.44-17.894-24.561a5524.39 5524.39 0 01-20.071-28c-11.73-16.498-24.81-33.077-33.724-51.314-3.057-6.252-6.065-13.902-14.186-12.98zm87.103 240.407c-2.67.427-4.686 3.097-6.501 4.862-5.62 5.462-11.12 10.87-15.694 17.274 7.079-2.99 12.852-8.201 19.676-11.626 2.459-1.235 11.143-3.987 9.393-7.427-.984-1.932-4.91-3.397-6.874-3.083zm32.486-22c-6.931 4.73-14.146 8.96-21.455 13.072 5.126 1.948 10.245 4.636 14.452 8.167 1.924 1.615 5.879 6.342 8.66 5.154 2.587-1.104 3.992-7.502 5.244-9.811 3.205-5.912 7.689-11.496 12.51-16.158-7.243-4.848-12.097-5.414-19.411-.423zM514.5 330.469c-5.547 1.544-11.051 3.23-16.594 4.787-11.067 3.107-22.377 5.704-33.934 5.704-1.573 2.894 2.932 7.614 4.316 9.82 3.633 5.796 6.735 12.01 10.029 18.01 6.983 12.716 14.602 24.939 22.82 36.889 8.305 12.074 15.806 24.72 24.31 36.648 8.23 11.546 17.285 22.762 26.2 33.786 34.739 42.95 83.155 72.57 130.74 99.18 13.338 7.458 27.234 14.029 42.005 18.102 6.099 1.682 12.32 3.106 18.524 4.359 4.169.84 11.106 2.726 14.945.029-12.053-4.776-27.847-6.618-37.583-15.86-6.027-5.72.583-9.988 6.728-11.051 11.89-2.057 24.215 3.123 35.887-.238-3.12-5.724-12.087-5.451-17.542-6.92-6.897-1.86-7.153-5.344-.586-7.714 8.082-2.917 17.399-1.335 25.822-1.872 4.11-.262 21.34-.95 16.137-8.846-4.096-6.213-14.067-7.955-20.593-10.247-9.156-3.215-18.05-8.233-27.375-10.724-9.121-2.437-18.414-3.934-27.535-6.507-9.52-2.685-18.892-5.67-27.938-9.698-17.44-7.768-33.61-18.314-48.337-30.42-15.176-12.476-28.48-26.773-40.721-42.105-6.441-8.066-12.57-16.366-18.835-24.566-6.052-7.918-12.895-15.465-17.74-24.206-5.357-9.668-12.3-18.493-17.848-28.127-3.006-5.221-6.241-10.342-9.044-15.675-1.992-3.792-3.35-9.352-6.043-12.647-2.533-3.097-6.961-.796-10.215.109zM258.277 452.984c1.86 1.699 1.55 2.399 1.192 4.557-.733 4.422-1.542 8.762-1.882 13.249-1.166 15.346.998 31.26 3.39 46.418 2.386 15.123 8.124 29.095 16.967 41.603 8.568 12.119 18.91 21.774 32.535 27.72 2.34 1.022 11.602 4.768 11.003 8.224-.45 2.599-5.259 1.129-6.988.758-24.49-5.248-45.247-27.395-57.624-48.011-5.124-8.534-8.42-17.211-11.25-26.644-.414-1.378-6.345-20.895-4.342-21.14-1.729-13.515-2.246-29.947 4.141-42.456 2.386-4.672 7.977-8.735 12.858-4.278zm-42.73 2.907c-2.234 10.188-1.495 20.583-1.002 30.903.09 1.88 1.164 7.674-1.945 7.563-2.197-.078-3.948-5.688-4.487-7.127-3.265-8.732-4.425-18.567-2.794-27.77.515-2.915 1.293-6.45 4.497-7.462 2.787-.88 5.979.692 5.732 3.893zm572.32-47.036c-1.376.665-1.983 1.93-2.394 3.32-10.774 9.185-23.45 18.074-36.047 24.555-11.254 5.788-24.286 8.228-36.57 10.846-28.09 5.988-56.061 8.407-84.078.657 11.449 10.564 21.83 24.6 36.264 31.33 7.17 3.345 15.108 1.328 22.338-.79 8.87-2.6 17.796-5.254 26.38-8.7 16.222-6.51 33.572-13.714 47.212-24.873 6.047-4.947 10.976-11.062 15.315-17.523 2.485-3.701 4.588-7.66 7.103-11.333 1.449-2.118 4.623-4.727 4.478-7.49zM668.176 220.993c-.412 5.225-3.49 9.614-6.203 13.904-1.846 2.917-5.441 6.435-3.736 9.744 2.024 3.927 8.477 6.436 11.82 9.122 4.952 3.977 9.589 8.322 14.148 12.737 8.18 7.923 16.65 15.603 24.655 23.695 7.607 7.688 14.988 15.52 24.582 20.763 21.064 11.509 39.609 27.59 58.015 42.88 18.766 15.59 37.3 31.977 53.585 50.188 8.714 9.745 15.956 20.442 22.168 31.924 3.194 5.907 6.618 11.684 9.818 17.589 1.416 2.612 3.015 5.149 4.303 7.829.957 1.99 1.58 5.215 3.348 6.69 3.5-7.765-1.96-18.036-5.125-25.031-2.163-4.781-4.286-9.581-6.421-14.376-1.5-3.363-4.613-7.423-4.784-11.176-.416-9.125 11.334-2.56 14.556.365 7.976 7.24 12.576 18.124 18.22 27.106 1.329-7.151-12.908-18.194-7.014-24.427 4.675-4.943 13.293 6.637 15.909 9.773 1.794-8.842-2.804-17.492-7.61-24.57-5.355-7.887-11.545-15.388-17.888-22.492-14.827-16.603-31.772-31.381-48.536-45.978-16.676-14.522-33.845-28.453-50.942-42.474-16.603-13.615-33.455-27.23-52.012-38.13-10.405-6.111-21.32-11.224-31.941-16.93-11.124-5.973-21.67-12.97-32.915-18.725zm-145.031-20.141c-.485.12-3.292.458-3.502.705-.915 1.078.305 4.564 1.384 5.19-3.723 2.783-7.905 5.316-12.637 5.749 2.977 2.92 8.633 8.03 7.753 12.742-1.211 6.48-8.998 1.936-12.152-.025-5.061-3.15-10.233-6.49-13.94-11.237-2.352-3.013-3.153-6.208-4.914-9.453-.956-1.763-.4-2.082-2.518-2.204-2.42-.137-6.56 2.158-8.803 3.07a88.354 88.354 0 00-10.1 4.875c-6.01 3.393-11.636 7.51-16.565 12.347-10.206 10.012-17.118 23.166-17.994 37.569 7.243-.86 14.329-3.982 20.432-7.878 4.347-2.774 8.78-6.034 9.548 1.794.298 3.049-.555 10.149-2.385 12.508-1.71 2.203-2.447.417-4.221 1.738-2.051 1.53-.968 3.732-.968 5.88-.99-.83-1.977-1.66-2.964-2.49-1.788 2.337.235 1.086.91 2.499.394.824-2.3 3.196-2.838 3.616-1.113.87-1.728.15-3.001 1.4-.818.804-1.7 2.608-2.587 3.612-4.585 5.188 1.486 13.318 3.887 18.819 1.777 4.074 3.716 8.067 5.565 12.106 1.354 2.956 2.085 6.465 3.883 9.189 3.568 5.407 11.744 2.453 17.08 1.79 7.24-.898 14.349-1.818 21.596-2.5 4.248-.398 9.048-2.87 3.593-6.07-5.414-3.173-24.117-3.774-24.238-11.94-.128-8.68 11.932-10.122 17.98-9.376 8.847 1.09 14.564 3.323 20.616 10-1.356-12.733-10.39-23.264-12.406-36.04-.548-3.47-2.231-24.857 6.108-15.617 4.466 4.949 8.003 12.439 11.304 18.162 4.996 8.664 9.35 17.667 13.937 26.548 4.376 8.476 10.787 16.62 13.852 25.637 1.725 5.072 4.132 15.732 9.606 18.32 3.507 1.659 9.428-.512 13.05-1.041 2.238-.327 4.42-.647 6.34-1.94.995-.668 1.977-2.402 3.232-2.596 3.616-.56 4.549 4.965 4.303 7.508-.38 3.922-2.181 4.939-5.84 5.395 6.167 3.02-3.333 12.47-5 16.239-.087-.193-1.17-2.841-1.973-2.838-1.598.005 4.896 12.79 5.386 13.679 3.406 6.17 7.683 11.719 11.82 17.407 2.378 3.269 5.8 11.002 10.637 10.27 2.679-.403 8.245-5.92 10.35-2.137 1.899 3.41-3.967 7.07-4.85 9.782-1.481 4.549 4.09 9.332 7.374 11.717 8.702 6.32 19.985 7.813 30.283 9.72-1.968-2.652-6.254-4.097-6.34-7.896-.057-2.583 1.769-3.993.535-6.804-1.016-2.315-3.563-3.66-4.321-6.141-.836-2.736.482-5.844 1.986-8.104 6.373-9.581 20.609-5.594 28.957-1.241a3.956 3.956 0 00-1.534 1.176l-.098.13.022-.015c1.071-.656 5.715 1.4 6.294 1.817 1.829 1.318 4.296 4.39 5.559 6.293 4.066 6.127 4.648 13.595 2.536 20.54 25.457 0 49.439-6.785 72.22-17.6 5.204-2.47 10.315-4.05 15.244-7.158 5.064-3.191 9.875-6.734 14.848-10.056 4.67-3.121 4.249-4.995 1.12-9.432-3.81-5.4-7.166-11.157-11.395-16.25-.65 1.41-.903 4.234-2.291 5.1-1.534.959-2.942-.944-3.976-.224.092-.064-3.176 5.013-3.702 3.749 1.362 3.27-4.09 1.18-5.056.575.225 3.066-2.323 5.705-3.754 1.607-3.887 3.557-13.104.3-8.133-5.184 2.454-2.708 5.125-4.147 6.668-7.682 1.727-3.956 2.33-8.434 2.547-12.711.512-10.083-4.944-14.791-11.784-21.33-3.82-3.65-7.807-7.115-11.736-10.645-3.454-3.102-6.442-6.944-10.066-9.82-2.603-2.065-4.68-2.66-7.206-.866-1.041.739-1.38 1.678-2.717 2.39-1.714.913-4.256 1.478-6.168 1.716-9.612 1.197-20.737-2.098-29.545-5.648-2.412-.972-3.567-2.554-5.655-3.757-1.32-.761-2.445-.3-3.846-1.21-3.662-2.374-3.478-6.186-.816-9.154 6.237-6.955 15.196-.7 21.57-6.315 7.942-6.998-5.3-16.674-10.648-20.957-4.281-3.43-7.96-4.171-13.191-5.071-1.096-.19-8.364-2.287-5.821.729-5.647-.146-8.424-.123-12.97 3.402-1.193.924-2.78 1.798-3.107 3.375-.173.832 1.54.999 1.545.99-.231.56-1.956 1.575-2.205 1.753 2.908.345 2.153 6.053 1.403 6.085l-.044-.005.085.074c1.27 1.202-1.595 3.054-2.567 3.365-2.76.883-5.377-1.036-7.222-2.953-4.13-4.291-7.13-11.591-6.864-17.54.37-8.347 5.853-13.187 10.375-19.445 3.385-4.682-1.644-7.172-5.144-10.11-4.284-3.593-10.11-8.011-11.52-13.735-1.282-5.214 2.275-6.998 6.833-5.43 6.16 2.118 11.145 7.569 16.604 10.98 4.845 3.027 10.96 9.208 16.88 9.56-1.085-3.864-6.464-3.454-8.545-6.325-2.748-3.793 1.52-5.484 4.75-5.05 2.508.338 9.66 5.646 9.475-.474-.1-3.28-5.57-4.377-7.95-5.325-12.1-4.816-24.492-8.101-37.323-10.332-4.16-.722-5.223-.216-7.233 3.539-.682 1.275-3.134 7.14-4.478 3.252-1.758 3.187-2.27 6.583-6.092 7.865-4.864 1.63-11.117-.783-15.598-2.654-3.846-1.606-7.501-3.858-9.97-7.292a18.16 18.16 0 01-2.702-5.622c-.492-1.715-.26-4.526-1.15-6.084-1.486-2.605-5.031-2.043-7.768-2.303-6.11-.581-12.143-1.106-18.285-1.178-5.103-.06-9.975-.37-14.933.866zm132.839 228.89c-1.954.7 1.517 3.039 2.664 2.763-.47-.758-1.25-3.27-2.664-2.763zm1.76-25.57l-.054.04a.425.425 0 00-.133.237c.044-.072.09-.141.137-.21l.05-.067zm39.085-61.432c1.77 1.486 1.056 4.927 2.267 7.04 3.241 5.66 9.082 11.244 14.586 14.663 5.928 3.68 8.733 8.458 10.185 15.126.301 1.378 1.207 3.29.765 4.718-.414 1.333-1.91 1.776-2.37 2.964-.212.543.67 4.746.563 4.759-.51.062-2.003-2.053-1.994-2.042-.591 1.466-.386 3.132-1.979 3.917l-.194.086.025.019c.397.307 2.21 1.811 1.777 2.142-.603.46-2.077.145-2.829.413-1.187.424-2.043 1.48-3.185 1.973-3.063 1.319-6.595.912-9.828.447-6.81-.978-14.473-3.414-19.396-8.46-5.963-6.11-4.548-12.442-5.086-19.297-.604-7.69 4.943-19.347 9.4-25.31 1.52-2.035 4.565-5.445 7.293-3.158zm-489.853-59.832c-.385.91-.001 2.33-.227 3.329-.456 2.024-1.63 3.796-2.76 5.495-2.115 3.18-4.243 6.094-5.686 9.682-3.543 8.807-6.83 18.299-8.526 27.637-3.64 20.048 8.513 36.583 9.175 56.109 5.58-5.876 14.068-6.157 21.63-6.174a333.993 333.993 0 0130.058 1.282c19.178 1.686 38.783 2.37 56.959 9.38 2 .772 3.502 1.106 5.51 1.527 2.208.463 1.039-.57 2.653.736.434.352.607 1.62 1.06 2.066 2.349 2.297 3.755.736 5.744-1.728 5.472-6.783 10.932-12.947 17.972-18.218 14.997-11.231 31.795-16.417 50.282-18.087 10.596-.957 20.942-1.51 31.584-1.406 10.16.098 20.889.284 30.515 3.92-2.394-6.852-6.483-12.992-9.78-19.42-1.601-3.121-3.086-6.402-5.122-9.274-1.79-2.525-4.49-4.588-5.73-7.471-.22.579-.441 1.158-.663 1.736-19.547-5.6-39.704-8.615-59.745-11.817-20.131-3.217-40.012-7.675-60.1-11.104-10.086-1.722-20.21-2.757-30.368-3.911-9.78-1.11-19.207-3.281-28.85-5.126-9.764-1.87-19.268-4.133-28.87-6.707-4.026-1.08-7.837-2.568-11.755-3.867-3.125-1.035-3.835-1.257-4.96 1.41zm432.257 35.544c.584 2.397-1.282 5.489-1.88 7.765-.678 2.58-2.15 3.615-2.916 5.962-.666 2.039.535 12.849-4.678 9.62.16.777 1.018 1.84 1.106 2.533.112.86-.726 2.179-.483 2.922.219.669 2.509 2.628 3.064 3.745 2.189 4.388 3.736 9.439 4.815 14.219 1.124 4.983 2.49 11.887-1.637 15.327-.992.826-1.856 1.048-2.874 2.04a3.444 3.444 0 01-1.257 2.277c-.394.11-.711.013-.948-.294-1.258.682-.84-2.183-2.317.6-.357.673.287 2.978-.032 2.74-.58-.426-2.33-2.251-2.896-2.285-1.27 1.727-1.24-.032-2.58.214-.053.716-.441 1.11-1.165 1.18-.565-.128-1.13-.26-1.693-.39-3.413.02-8.454-1.411-11.731-2.316-6.255-1.727-10.718-6.031-12.075-12.552-2.826-13.584 8.599-30.565 16.767-40.442 2.79-3.374 22.385-25.275 25.41-12.865zm54.55 43.762c-.089 1.14.264 2.846-1.018 2.972.058-1.287-.483-2.936 1.017-2.972zm-89.001-1.934c.583 3.289.717 1.41-.606 3.673-.445-1.332-.243-2.556.606-3.673zm94.71-4.241c.508.632 2.453 2.338.778 2.775-1.465.38-.84-1.996-.778-2.775zm-70.47-22.8c-.665 3.539 1.342 2.692 4.103 2.049l-4.102-2.05zm-511.75-142.77c-13.226 11.349-13.625 31.194-13.208 47.168a924.042 924.042 0 003.982 65.079c.948 9.764 3.733 14.736 13.37 18.008 10.442 3.544 21.688 2.858 32.518 2.229-2.071-16.101-6.124-37.284 10.027-48 1.478-.98 2.83-1.704 4.629-1.797 1.188-.061 2.892 1.016 4.02.465 2.28-1.115.976-4.273.229-6.06-2.271-5.432-6.605-9.78-10.121-14.388-4.416-5.786-8.21-5.63-14.804-4.916-2.63.286-12.971 1.464-10.935-4.15 1.479-4.08 9.604-3.058 12.896-4.003 2.495-.717 3.004-1.033 2.897-3.583-.17-3.985-2.454-5.067-6-4.958-4.56.139-12.454 2.563-16.251-1.023-5.422-5.122 2.619-8.708 6.696-9.404 4.268-.728 9.976-.065 10.96-5.348.939-5.04-1.72-11.137-3.796-15.574-2.01-4.292-4.757-9.762-8.951-12.34-5.918-3.634-13.22-1.644-18.158 2.595zm51.334 94.818c-5.372 1.205-8.463 8.2-9.087 13.09-.603 4.732-.192 11.484 3.277 15.12 4.553 4.77 12.49 4.45 17.39 8.928 2.17-10.776 6.185-21.146 11.458-30.775-4.164-1.147-8.222-2.63-12.328-3.961-3.004-.973-7.484-3.126-10.71-2.402zm344.832 23.215c1.205 1.03 1.586 1.343 1.897 2.96-2.86.18-2-.738-1.897-2.96zm28.366-76.65c4.47.116 6.56 1.563 10.147 3.705 2.556 1.527 5.657-.116 5.657 3.763 7.297-5.735 20.905 9.073 26.02 12.952 5.396 4.091 10.71 8.907 11.306 16.208.177 2.162-.27 4.378.054 6.531.245 1.622 1.272 3.243 1.097 4.925-.206 1.95-1.855 3.09-2.235 4.923-.15.726.364 2.184.045 2.771-3.27 5.997-7.463 10.917-14.64 11.51-6.25.517-13.157-1.714-17.713-6.076-4.042-3.869-6.452-9.667-7.499-15.089-.182-.938.163-3.087-.146-3.88-.449-1.156-1.125-1.176-1.682-2.11-1.477-2.48-3.597-7.155-1.68-9.88-4.726 1.067-8.318-9.059-10.082-12.012-1.323-2.21-4.51-3.942-5.396-6.093-1.214-2.95 3.148-4.216 1.637-6.27-.809-1.1-5.15-.352-4.725-3.108.396-2.549 8.128-2.815 9.835-2.77zm91.552 51.254a.256.256 0 00.13.098h.001l-.015-.014-.116-.084zm-12.477-22.08c.41-.352 2.606-2.575 2.864-.908.21 1.366-2.207.908-2.864.908zM415.95 87.858c-4.766.29-9.014 5.436-12.564 8.137-5.301 4.032-11.565 6.992-17.812 9.23a274.464 274.464 0 01-22.213 6.895c-7.573 2.004-15.461 2.414-23.01 4.496 3.735 6.836 7.47 13.673 11.207 20.51 1.638-2.255 1.078-4.801 3.774-6.422 1.87-1.125 4.579-1.28 6.694-1.695 5.888-1.16 12.349-2.185 18.326-.986 3.856.774 8.147 3.743 4.495 7.889-2.305 2.616-7.266 1.944-7.671 6.099-.388 3.98 3.677 7.4 2.736 11.587-1.323 5.884-7.202 4.122-9.816.318-2.331-3.392-1.447-9.424-5.046-11.87-2.147-1.46-7.886-1.985-10.198-.736 4.249 7.842 12.507 17.51 7.663 26.886-1.49 2.88-4.741 3.978-2.561 6.808 2.514 3.264 9.768 5.953 13.63 4.954 3.616-.935 7.759-5.01 11.826-2.993 3.84 1.903 1.119 5.134 1.458 8.123 1.022 9.003 19.486 3.868 24.499 2.673 5.029-1.198 10.276-4.097 15.467-4.216 4.896-.113 9.442 2.247 13.32 5.01 2.906 2.07 7.74 8.127 11.425 8.329 3.698.203 8.939-5.271 12.202-6.928 5.854-2.974 12.253-3.834 18.457-5.816.985-.314 5.288-1.2 5.366-2.636.073-1.381-5.013-4.402-5.877-5.062-7.893-6.027-13.674-14.336-21.885-19.98-3.661-2.517-7.616-4.291-11.893-5.424-2.374-.628-8.838-1.475-9.008-4.86 11.389-1.908 11.673-16.117 6.87-24.174-3.055-5.124-7.794-7.561-13.78-6.46-8.674 1.599-10.26 7.948-12.246 15.482-7.088-3.856-14.815-13.3-15.236-21.62-.467-9.251 9.466-13.23 11.4-21.548zm211.595 62.172c11.95 2.217 23.639 5.172 35.147 9.1 7.088 2.418 17.4 4.498 23.53 9.036 1.79 1.326 4.044 4.242 2.41 6.572-1.406 2.01-4.851 1.468-6.887 1.155-9.252-1.423-18.316-5.295-27.47-7.383-24.326-5.548-49.283-8.155-74.137-9.93-6.854-.49-13.713-.913-20.567-1.395-5.708-.4-11.981-.219-17.57-1.51-4.408-1.02-5.506-4.259-2.205-7.906 3.218-3.554 8.616-3 12.927-3.649 25.084-1.638 50.186 1.34 74.822 5.91zm-41.573-29.029c8.132 2.802-1.372 4.138-4.93 3.844-1.205-.099-17.111-1.677-17.111-1.188-3.175 0-11.574 2.428-13.854-.782-2.45-3.447 8.035-4.657 10.154-4.81 8.147-.587 17.91.24 25.74 2.936z"
        />
      </g>
    </svg>
  );
}

export default JumpingDoodle;
