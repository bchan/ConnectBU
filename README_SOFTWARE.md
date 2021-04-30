# Software Report

## Frontend docs
* Node Version: v14.4.0
* NPM Version: v6.14.8

### Repo structure
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
  * Sign up for a free Sendbird account on https://dashboard.sendbird.com/auth/signup
  * Create an account using your email id or Continue with Google
  * Setup your Organization by entering Organization name and Phone number
  * Create your Sendbird application after choosing Product type, and entering your Application Name, Region
  * You will be directed to the main page of the Sendbird Dashboard to get started with implementing Sendbird Chat SDK and API in your product
  * Copy your unique applicationID from the Application section and save it somewhere
* Add Sendbird UIKit Dependency
  * Install sendbird-uikit.<br />
  `npm install sendbird-uikit --save`
  * In the file /frontend/src/pages/Chat.js paste your own applicationID (that you previously copied) on line 21 at<br />
  `const appID = "YOUR APP ID";`
You are all set! Your chat should now work on the web application

