Installation guidelines

Welcome to the installation guidelines for this project!
First get the source code from this project folder and copy it to your own computer in a folder of your choosing:

Open the folder in which the code is located on a code editor, for example Visual Studio Code and go to the root folder “project” on your code editors terminal. 
After the terminal command line is in the root folder, install concurrently with command:
npm install concurrently
Your dependencies in root folders package.json should look like this

 ![image](https://user-images.githubusercontent.com/72103929/222969956-058d0f39-661a-4983-92b0-30eccea67c0c.png)


Then go to “server” folder in your code editors terminal and install following dependencies with npm:
npm install bcryptjs
npm install cookie-parser
npm install cors
npm install debug
npm install dotenv
npm install express
npm install express-validator
npm install jsonwebtoken
npm install mongodb
npm install mongoose
npm install morgan
npm install multer
npm install nodemon
Your dependencies in server folders package.json should look something like this with nodemon added
 

After you have installed necessary dependencies in the “server” folder, go back to the root folder and then go to “client” folder in your terminals command line. 
Then install following dependencies in the “client” folder with npm:
npm i @testing-library/jest-dom
npm i @testing-library/react
npm i @testing-library/user-event
npm install bootstrap
npm install buffer
npm install http-proxy-middleware
npm install react
npm install react-bootstrap
npm install react-dom
npm install react-router-dom
npm install react-scripts
npm install web-vitals
npm install react-i18next i18next –save
npm install i18next-http-backend i18next-browser-languagedetector --save

Your dependencies in client folders package.json should look like this
 
 
Before starting the application, you should also make connection to a MongoDB database with this connection string:
mongodb://127.0.0.1:27017/project
After installing necessary dependencies and connecting to the database, you should be able to run following command in the root folder to start the application:
npm start
