# Mark Me Backend
A user should be able to view, create, edit and delete this markers. This part is to actually build the backend API in Ruby for allowing these CRUD operations for markers.

## Pre-requisite
  * Ruby version - 2.5.1
  * Rails version - 5.2.2
  * Mysql
  * Configuration
      change .env.sample to .env for `database.yml with valid mysql credentials

## Setup
```bash
  # clone the repository
  λ git clone https://github.com/m-nathani/markme
  # change the current directory
  λ cd markme/backend
  # install all dependencies
  λ bundle
  # create database
  λ rails db:create
  # run database initialization
  λ rails db:migrate
  λ rails db:seed
  # run the project
  λ rails s
```


## Docker
```bash
  λ rails db:create
  λ rails db:seed
  λ docker-compose up --build
```
