# DB II Guided Project

Guided project **DB II** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- a REST client alike [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.
- create a free account for [DB Designer](https://dbdesigner.net).

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor explores schema design with this API.


```
select * from fruits where id = 2;


insert into fruits (name, avgWeightOz) values ('bar', 35)
insert into fruits (name, avgWeightOz, delicious) values ('fiz', 25, 0)
insert into fruits (name, avgWeightOz, delicious, color) values ('pineapple', 25, true, 'yellow')




SELECT * FROM Customers
WHERE City IN ('Paris','London');

CREATE TABLE students (
    id      INTEGER     PRIMARY KEY,
    name    TEXT (128)  NOT NULL,
    section INTEGER (0) NOT NULL,
    email   TEXT (128) 
);


Day2
npx knex init  //Created ./knexfile.js
npx knex migrate:make table-fruits
npx knex migrate:up 
npx knex migrate:down
npx knex migrate:make delicious-col-fruits
npx knex seed:make fruits



https://www.youtube.com/watch?v=88jg5W40Jw8


Database Schema Design 
https://bloomtech-1.wistia.com/medias/cbwzvwgb8f
```