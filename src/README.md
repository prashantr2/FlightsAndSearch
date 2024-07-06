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