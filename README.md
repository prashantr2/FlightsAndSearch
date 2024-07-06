# Welcome to Flights Service

## Project Setup
- clone the project
- Execute `npm install` on the same path as root dir of project
- Create a `.env` file in the root dir add following env variables:
    - `PORT=3000`
- Inside the `src/config` dir, create a new file `config.json` and add following piece of json
```
{
  "development": {
    "username": <YOUR_DATABASE_USER>,
    "password": <YOUR_DATABASE_USER_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you have added your db config file listed above, go to src dir from terminal and execute `npx sequelize db:create`

## DB design
- Airplane Table
- Flight
- Airport
- City

- Relationships: 
- A flight belongs to an airplane but one airplane can belong to multiple flights
- A city has many airports but one airport belongs to one city
- One airport can have many flights, but one flight belongs to one airport