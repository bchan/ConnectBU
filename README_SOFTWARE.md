# Software Report

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#frontend">Frontend</a>
      <ul><li><a href="#frontend-repo-structure">Frontend Repo Structure</a></li></ul>
      <ul><li><a href="#sendbird">SendBird</a></li></ul>
      <ul><li><a href="#frontend-flowchart">Frontend Flowchart</a></li></ul>
      <ul><li><a href="#system-architecture">System Architecture</a></li></ul>    
    </li>
    <li>
      <a href="#backend">Backend</a>
      <ul><li><a href="#backend-repo-structure">Backend Repo Structure</a></li></ul>
      <ul><li><a href="#dependencies">Dependencies</a></li></ul>
      <ul><li><a href="#database">Database</a></li></ul>
      <ul><li><a href="#apis">APIs</a></li></ul>
    </li>
    <li>
      <a href="#how-to-install-the-project-from-scratch">How to install the project from scratch</a>
      <ul><li><a href="#on-your-personal-computer">On your personal computer</a></li></ul>
      <ul><li><a href="#on-an-aws-cloud-instance">On an AWS cloud instance</a></li></ul>
    </li>
  </ol>
</details>


## Frontend
* Node Version: v14.4.0
* NPM Version: v6.14.8

### Frontend repo structure
```
frontend
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
	├── components
	│   ├── EditDialog.js
	│   ├── Footer.js
	│   ├── IncompleteDialog.js
	│   ├── Loading.js
	│   ├── NavBar.js
	│   ├── NavMenuList.js
	│   └── NavMenuRight.js
	├── images
	│   ├── Ben.jpg
	│   ├── Damani.jpg
	│   ├── Hussain.jpg
	│   ├── Nadim.jpg
	│   ├── Yousuf.jpg
	│   ├── bucampus.jpg
	│   ├── halloween.jpg
	│   ├── image.jpg
	│   ├── logo.svg
	│   ├── rhett.jpeg
	│   └── sleeping_terrier.png
	├── index.css
	├── index.js
	├── pages
	│   ├── AboutUs.js
	│   ├── App.js
	│   ├── Chat.js
	│   ├── Home_LI.js
	│   ├── Login.js
	│   ├── NotFound.js
	│   ├── Profile.js
	│   ├── Search.js
	│   ├── Support.js
	│   └── User.js
	├── redux
	│   ├── loginSlice.js
	│   └── store.js
	├── reportWebVitals.js
	├── styles
	│   ├── AboutUs.styles.js
	│   ├── App.css
	│   ├── App.styles.js
	│   ├── BotBar.styles.js
	│   ├── Chat.styles.css
	│   ├── Footer.styles.js
	│   ├── Loading.styles.js
	│   ├── NavBar.styles.js
	│   ├── NavMenuList.styles.js
	│   └── Support.styles.js
	└── tests
    	├── App.test.js
    	└── setupTests.js
```

* /frontend: This folder contains all the frontend files and source code. The frontend is built using Reactjs and Javascript. 
  * /frontend/public: This folder contains all static files of our website. It also contains index.html which helps Webpack to load the static from the directory. 
  * /frontend/src: All the source code for the front end of the application is contained here.
    * /.../src/pages: Contains all the JavaScript files for each individual page of our app. Each page is made up of different components, either from Material UI or custom built. The custom components are stored in a different folder.
    * /.../src/components: Contains all the custom components of the application. This includes the navigation bar, footer, edit profile popup, and loading screens. These are referenced from the pages and are all modular pieces of the user interface.
    * /.../src/images: Contains all the images that have been used in the website.
    * /.../src/redux: Contains the store, reducers, and selectors for the Redux global store. This stores the global state that each component has access to within the application.
    * /.../src/styles: Contains all different styles that have been used in different pages in the websites. It contains the size, type, and color of the font. This essentially is the CSS for the pages.
    * /.../src/index.css: Contains CSS styling for the ./index.js file.
    * /.../src/index.js: Contains the root component and routing for each page URL to display the corresponding component. The component also wraps providers around all components to allow each component to access the global store and use notifications.

### SendBird
SendBird is a third party microservice that we utilize for our chatting services. Here is a quick tutorial on how to set up a SendBird application and connect it to your web application.
* Create a SendBird account
  1. Sign up for a free Sendbird account on https://dashboard.sendbird.com/auth/signup
  2. Create an account using your email id or Continue with Google
  3. Setup your Organization by entering Organization name and Phone number
  4. Create your Sendbird application after choosing Product type, and entering your Application Name, Region
  5. You will be directed to the main page of the Sendbird Dashboard to get started with implementing Sendbird Chat SDK and API in your product
  6. Copy your unique applicationID from the Application section and save it somewhere
* Add Sendbird UIKit Dependency
  1. Install sendbird-uikit.<br />
  `npm install sendbird-uikit --save`
  2. In the file /frontend/src/pages/Chat.js paste your own applicationID (that you previously copied) on line 21 at<br />
  `const appID = "YOUR APP ID";`


You are all set! Your chat should now work on the web application

### Frontend Flowchart
![Frontend Flowchart](/docs/FrontendFlowchart.png)

### System Architecture
![System Architecture](/docs/SystemArchitecture.png)

## Backend
### Backend repo structure
```
backend
├── README.md
├── add_classes.py
├── add_clubs.py
├── add_interests.py
├── add_labs.py
├── add_majors.py
├── add_minors.py
├── app.py
├── config.py
├── create_tables.sql
├── lists
│   ├── clubs.txt
│   ├── courses.json
│   ├── interests.txt
│   ├── labs.txt
│   ├── majors.txt
│   └── minors.txt
├── models.py
├── requirements.txt
├── search.py
└── search_api.py
```

### Dependencies
```
aniso8601==8.0.0
boto3==1.17.13
botocore==1.20.13
cachetools==4.2.1
certifi==2020.12.5
chardet==4.0.0
click==7.1.2
elasticsearch==7.11.0
Flask==1.1.2
Flask-Cors==3.0.9
Flask-RESTful==0.3.8
Flask-SQLAlchemy==2.4.4
google-api-core==1.25.1
google-api-python-client==1.12.8
google-auth==1.24.0
google-auth-httplib2==0.0.4
googleapis-common-protos==1.52.0
httplib2==0.18.1
idna==2.10
install==1.3.4
itsdangerous==1.1.0
Jinja2==2.11.2
jmespath==0.10.0
MarkupSafe==1.1.1
mysql-connector==2.2.9
protobuf==3.14.0
pyasn1==0.4.8
pyasn1-modules==0.2.8
PyJWT==2.0.1
PyMySQL==0.10.1
python-dateutil==2.8.1
pytz==2020.4
redis==3.5.3
requests==2.25.1
requests-aws4auth==1.0.1
rsa==4.7
s3transfer==0.3.4
six==1.15.0
SQLAlchemy==1.3.20
uritemplate==3.0.1
urllib3==1.26.3
Werkzeug==1.0.1
```

### Database
![Database Schema](/docs/database.png)
This is the database schema used for storing user information. The script used to create the tables is in `/backend/create_tables.sql`. The following tables were pre-populated before the API’s were initialized: ‘majors’, ‘minors’, ‘class’, ‘interests’, ‘club’, and ‘lab’. To populate them, we ran the following scripts: `add_majors.py`, `add_minors.py`, `add_classes.py`, `add_interests.py`, `add_clubs.py`, and `add_labs.py`. Each script follows the same basic structure; for the corresponding table, it ingests data from a text or JSON file (located in `backend/lists/`) that contains a list of names to populate the table with. For each name in that list, the script formats the data and creates a new entry in the corresponding table. These scripts and the API’s (link needed) are able to interface with the database through a library called SQLAlchemy; it allows us to abstract out the database schema and write database operations in a Pythonic manner.

### APIs
#### User Management Functions and Objects
##### User object
The `User` object represents an individual user on the platform and handles the creation, storage, and modification of a user’s profile information. Found in `app.py`. The attributes:
* `email` (string): user’s email address; must be a valid BU email
* `first_name` (string): user’s first name
* `last_name` (string): user’s last name
* `major1` (string): user’s designated major at BU
* `major2` (string): user’s designated  second major at BU; set to ‘null’ if not applicable
* `minor` (string): user’s designated minor at BU; set to ‘null’ if not applicable
* `year` (int): user’s year of graduation
* `club` (list): list of clubs that the user is active in; list items are stored as strings
* `research` (list): list of research labs that the user is active in; list items are stored as strings
* `interests` (list): list of interests/hobbies that the user is active in; list items are stored as strings
* `classes` (list): list of classes that the user has taken/is taking; list items are stored as strings
* `profile_pic_url` (string): link to user’s BU Google account profile image

##### Profile Options object
The `Profile Options` object represents the data that populates various fields available to a user when editing their profile. Attribute data is loaded directly from the database. All list items are stored as strings. Found in `app.py`. The attributes:
* major_list (list): list of all majors available at BU
* minor_list (list): list of all minors available at BU
* club_list (list): list of all clubs available at BU
* lab_list (list): list of all labs available at BU
* interest_list (list): list of general interests and hobbies
* class_list (list): list of all classes available at BU

#### Authentication Functions and Objects
These are the helper functions that handle user authentication. Found in `app.py`.
* `checkGoogleToken()`
  * Description: Checks Google SSO token from the frontend
  * Parameters:
    * `token`: token retrieved from Google SSO
  * Returns:
    * `idInfo`: user’s information, if token is valid
    * `None`: if token is invalid
* `createToken()`
  * Description: Creates JSON Web Token (JWT) token for the frontend
  * Parameters:
    * `tokenDict`: contains the user’s email and expiration date of the token
  * Returns:
    * `JWT`: encoded token that allows the user to use the backend
* `checkToken()`
  * Description: Checks if provided JSON Web Token (JWT) is blacklisted
  * Parameters:
    * `token`: encoded token that allows the user to use the backend
  * Returns:
    * `True`: if token is not blacklisted
    * `False`: if token is blacklisted
* `expireToken()`
  * Description: Ends the given JSON Web Token’s (JWT) lifespan
  * Parameters:
    * `token`: encoded token that allows the user to use the backend
  * Returns:
    * `True`: if token was successfully expired
    * `False`: if token failed to expire

#### Search Functions and Objects
##### Search Object
The `Search` object interfaces with an Elasticsearch instance to handle incoming search requests and return formatted search results. Found in `search_api.py`. The attributes
* `searchFields` (JSON): criteria that is used to filter search results
* `searchTerm` (string): specific term to search
* `search_results` (JSON): user profiles that satisfy the requested searchFields and searchTerm

## How to install the project from scratch
### On your personal computer 
1. Go to ConnectBU’s GitHub repository and clone the repository.
2. Install or update npm if you haven’t already. 
3. Install or update Python (Python 3.8.x) if you haven’t already.
4. In the cloned repository, navigate to the backend folder and install the project’s Python module dependencies by running the following:
```
pip install -r requirements.txt
```
5. Run the following commands in a terminal to run the flask app:
```
export FLASK_APP=app.py
flask run --port=5000
```
6. Run the following commands in a second terminal to run the search API
```
export FLASK_APP=search_api.py
flask run --port=4000
```
7. In the cloned repository, navigate to the frontend folder and install the project’s node dependencies by running the following:
```
npm install
```
8. Setup you SendBird application (refer to SendBird section of this README)
9. Run the following command to run the web application  
```
npm run start
```
10. In your browser, navigate to “http://localhost:3000” to view the web app.

### On an AWS cloud instance
1. Create an AWS account
2. Create a Redis server using ElastiCache and change the ip address of the Redis server in /app.py to the one that was just created
3. Create 3 EC2 Instances (can be the t2.micro size) with Ubuntu Server 20.04 LTS
4. Instructions for each EC2 Instance (assuming that each machine is SSH’d into):
	1. Backend
		1. Copy over all of the /backend files into a directory
		2. Follow the same instructions for installing the Flask app locally
		3. To run the Flask app, do the following command:  
		```
		sudo env/bin/python3 app.py
		```
	2. Frontend
		1. Install nginx and run it:
		```
		sudo apt install nginx
		sudo systemctl start nginx
		```
		2. Add the following lines to /etc/nginx/sites-enabled/defaultabove location /
		```
		location /api/ {
            		proxy_pass https://api.connectbu.com;
		}
		```
		3. Copy over all of the /frontend files
		4. Run the following commands to install the dependencies and build the app:
		```
		npm install
		npm run build
		```
		5. Remove all files in /var/www/default and copy over build files with the following:
		```
		sudo rm -rf /var/www/default/*
		sudo cp -r build/* /var/www/default
		```
	3. ElasticSearch
		1. Copy over search_api.app
		2. Run in the same manner as local but with --host=0.0.0.0 in the flask run
5. Use Route53 as the DNS server for the website (domain can be purchased elsewhere, such as from Namecheap)
6. Register a Public Certificate from Certificate Manager
7. Create two Application Load Balancers (ALBs) and configure them to use the public certificate and HTTPs
8. Create two target groups, one pointing to the backend EC2 instance and one pointing to the frontend EC2 instance
9. Change the ALBs to each point to one target group
10. Then visit the registered domain to access the site
