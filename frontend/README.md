# Mark Me Frontend
React application that shows a map and markers on it. A user should be able to view, create, edit and delete this markers.

## Pre-requisite
  node expected version: `"^6.14.0 || ^8.10.0 || >=9.10.0"`.
  rename .env-sample to .env with appropiate env variables

## Setup
```bash
  # clone the repository
  λ git clone https://github.com/m-nathani/markme
  # change the current directory
  λ cd markme/frontend
  # install all dependencies
  λ npm install
  # run the project
  λ npm start
```

## Docker
```bash
  λ docker-compose up --build
```

## Structure
```bash
.
├── README.md           # you're here
├── src                 # contains source files
│   ├── action          # folder that contains all redux actions
│   ├── component       # directory that holds all components
│   ├── config          # contains configuration files for client-side
│   ├── constant        # contains all constants, can be both server and client side
│   ├── container       # wraps all redux containers
│   ├── images          # folder with all images
│   ├── middleware      # folder with all middlewares
│   ├── reducer         # directory that contains all redux reducers
│   └── route           # contains all routes for redux app
│   ├── service         # contains all the backend service logic
│   │   ├── api         # contains structure to hit api calls
│   └── store           # wraps store configuration for redux
│   └── test            # test cases for source 
└── webpack             # contains all webpack configurations
```

## Scripts

- `npm start` - builds the redux app in development mode
- `npm run lint` - lints all the files in `src/` folder
- `npm run lint:fix` - fixes all the possible linting errors