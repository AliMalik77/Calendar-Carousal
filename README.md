# Calendar-carousal

Using calendar Carousal user can set the event on any date with time and duration

## Features

- Add event on current date via clicking on arrow Button
- Add event on any date by clicking on it in the calendar
- Set the time of event on any date available in calendar
- Set the duration of event on any date in calendar

## Run Locally

Clone the project

```bash
  git clone https://github.com/AliMalik77/Calendar-carousal.git
```

Go to the project directory

```bash
  cd Calendar-carousal
```

Install dependencies

```bash
  npm install
```

```bash
  npm run webpack
```

Start the server

```bash
  npm start
```

## API Reference

| Api              | Type      | Description                                                                         | Default_value |
| :--------------- | :-------- | :---------------------------------------------------------------------------------- | :------------ |
| `startDate`      | `string`  | **Required**. From where calendar is start                                          | `2021-02-03`  |
| `endDate`        | `string`  | **Required**. To where calendar ends                                                | `2021-02-10`  |
| `slidesToShow`   | `number`  | **Required**. how many cards can display on carousal screen                         | `3`           |
| `slidesToScroll` | `number`  | **Required**. how many cards skip on moving to next carousal                        | `3`           |
| `arrow`          | `boolean` | **Required**. used to move carousal forward                                         | `true`        |
| `dots`           | `boolean` | **Required**. Dots to display on carousal                                           | `false`       |
| `infinite`       | `boolean` | **Required**. calendar never ends. Whenever it reaches the endpoint it starts again | `true`        |
| `speed`          | `number`  | **Required**. speed of carousal swipes                                              | `300`         |

## Authors

- [@AliMalik77](https://github.com/AliMalik77)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Used By

This project is used by the following companies:

- CarbonTeq
- FaceBook
