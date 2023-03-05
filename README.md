Installation guidelines

Welcome to the installation guidelines for this project!


NOTE! THIS PROJECT WAS DONE WITH NODE VERSION 18.12.1


First get the source code from this project folder and copy it to your own computer in a folder of your choosing:

Open the folder in which the code is located on a code editor, for example Visual Studio Code and go to the root folder “project-master” on your code editors terminal. 

After the terminal command line is in the root folder, install concurrently with command:


npm install concurrently


Your dependencies in root folders package.json should look like this


 ![image](https://user-images.githubusercontent.com/72103929/222969956-058d0f39-661a-4983-92b0-30eccea67c0c.png)
 
 
 After that install necessary packages with command:
 
 
 npm install
 
 
Before starting the application, you should also make connection to a MongoDB database with this connection string:

mongodb://127.0.0.1:27017/project

After installing necessary dependencies and connecting to the database, you should be able to run following command in the root folder to start the application:

npm start
