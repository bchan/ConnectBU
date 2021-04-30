# ConnectBU
---

## Description

ConnectBU is a platform that seeks to democratize access to personalized advising by allowing students to search and connect with each other based on school/major, clubs, classes, research, and on campus employment. Our web app delivers this experience by allowing students to search by these criteria, and to connect through a built-in messaging functionality, all while maintaining security and privacy of student information. The main innovative feature is the search functionality, which allows for a granularity in search criteria not often found in general use platforms, and the design of the profile information fields, which allows for storage and display of student specific information.

## Structure
The project is organized into four main components that work interdependently: frontend, backend, database, and search API. The organization of the repository is as follows: the frontend code is in the `frontend/` folder, and the search functionality, database, and API's are in the `backend/` folder. Any group looking to pick up this project in the future to make stylistic or functional changes can use the below information to find the files they wish to edit.

### Frontend Overview
The main subdirectories to know in the `frontend/` folder are `public/` and `src/`. 

The `public/` directory houses all of the default React icons and loading screens.
The `src/` directory contains:
  - `components/`: contains all the javascript code for our page components
  - `images/`: contains all the media specific to our webapp
  - `pages/`: contains all the javascript code for the different pages of our webapp
  - `redux/`: contains the code for the login management using redux
  - `styles/`: contains all the css and js folders where the style of the pages and components can be controlled
  - `tests/`: contains scripts for testing, and finally the index files in this directory contain the routing.

### Backend Overview
The `backend/` directory contains the code responsible for running the API's and initializing the database tables.

The file `create_tables.sql` contains code for creating the database tables. This file only needs to be run once before running any other backend code or after making any edits to the database schema. The file `models.py` is responsible for abstracting the aforementioned database schema and table relations into Python.

The files labeled `add_*.py` contain code to populate some of the database tables. These scripts ingest data from text/JSON files stored in `backend/lists/` and create entries in several of the database tables using an instantiated database session. Future teams looking to update the lists can find them in this folder.

The file `app.py` contains code for running the user management API, which is responsible for JSON Web Token (JWT) management, Google SSO functionality, endpoint creation and routing, login and logout functionality, and (of course) user management (creation, modification, retrieval).

The file `config.py` contains all of the secret keys for AWS, JWT, the SQL Alchemy database URL, and the Google client ID. When starting up this projct, you will have to acquire your own keys for these services and be sure to replace the stub information with your own keys. Don’t push any code containing these keys.

The file `search_api.py` contains code for running the search API and search helper functions (querying ElasticSearch, receiving results, ingesting data into the node, updating data in the node). The credentials to provide access to instantiate the ElasticSearch instance and use its functionalities are automatically provided using boto3. After creating an ElasticSearch node in your AWS console, you must download and set up boto3 since it allows the script to retrieve AWS credentials from your current terminal session.

That is largely all the information needed to get started with this project. As of now, there are no impending fixes or improvements, as those will largely come up based on user error testing and bug reports. The main changes to be made at the moment involve improving the UX/UI of the platform. In terms of adding new features, the next step for this project may be to implement a feed system for the homepage. This would require developing the UI/UX and API for the feed, as well as possibly interfacing with the AWS recognition service to provide automatic content moderation. Another potential imporvement would be to develop a React Native version of the web app to provide a better mobile performance.

## Contributors
- [Hussain Albayat](https://github.com/hussainb2030)
- [Yousuf Baker](https://github.com/ybaker661)
- [Benjamin Chan](https://github.com/bchan)
- [Nadim El Helou](https://github.com/nadimelhelou)
- [Damani Phillip](https://github.com/d-philip)
