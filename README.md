# Getting started with Courier App

Steps to run this appliation on your pc:-

*Download the zip file*

*Open the folder in VS code and in the terimnal enter the command (npm init)*

# For Sending mail to sender and receiver you have to enter the following command
*Navigate to src/ and create a file '.env' where you have to add email id and password from which you want to send notification to customer,You can also edit the provider by navigating to '/src/Email.js' by default it is using hostinger*
*ADD THE FOLLOWING LINES IN .env FILE*

REACT_APP_EMAIL_ID= your email id
REACT_APP_PASSWORD=your password for above emai id


*Navigate to src/Email.js and in the terminal enter the command(node Email.js)*
*You will see output ("Server started at port no 3001")*

# NOW

*Now navigate to main folder by command (cd ..) and enter the command (npm start) in the terminal *

*Open browser and go to (https://localhost:3000) and you can see the application running*
