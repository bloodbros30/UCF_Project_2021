
# Program Organization

![alt text](https://cdn.discordapp.com/attachments/803334690009382935/813153807445917776/Contextdiagram.png)

This is our Context diagram which shows the relationship between the user, our website, and our backend which is Firebase. The user communicates and interacts with the react web application and never sees the backend. Our website communicates between our backend to provide information such as chat history and profile information.
| User Story                                                                                                    	| Block             	|
|---------------------------------------------------------------------------------------------------------------	|-------------------	|
| As a consumer, I want to be able to have my own unique profile that I am able to customize.                   	| Firebase System   	|
| As a user I want to be able to easily navigate the website with navigation tools that are visually appealing. 	| React Chat WebApp 	|

![alt text](https://cdn.discordapp.com/attachments/803334690009382935/813159420158017566/Containerdiagram.png)

This is our Container Diagram which demonstrates necessary processes that are needed to be run in the background. The containers we will be using for out project are React using Node.Js and firestore and authentication from Firebase. Firebase will server as our main database to store all the user information, chat history, profile customization, etc. React is our framework and will assist us in development by having a lot of prebuild functionalility and assisting in making the website look visually appealing.
| User Story                                                                                	| Block                   	|
|-------------------------------------------------------------------------------------------	|-------------------------	|
| As a consumer I want to be able to sign in and and sign out of my profile.                	| Authentication          	|
| As a user, I want to be able to read and send messages in the group chats I am a part of. 	| Single Page Application 	|


![alt text](https://cdn.discordapp.com/attachments/803334690009382935/813167170577235998/componentdiagram.png)

This is our Component diagram which decomposes our container diagram into even more modular blocks.The back-end and database storage can't really be decomponsed further, however, The front-end side of our application is made up of all components interating with each other to provide a working website. For example, there's a component made to send and recerive messages to the database and theres also a seperate component to be able to customize your profile.

| User Story                                                                                   	| Block     	|
|----------------------------------------------------------------------------------------------	|-----------	|
| As a consumer, I want to be able to customize my public name and profile picture.            	| User Info 	|
| As a consumer, I want to be able to search for group chats using their names or certain tags 	| Sidebar   	|
| As a consumer I want to be able to sign in and and sign out of my profile.                   	| Sign In   	|

# Architectural Description
Our website will provide the user with a user interface so they can login and and signup for our website. They can browse a list of group chats to join and once they join a group chat they have the option of sending and receiving messages in the group chat. Our website will use Firebase to quarry information to be displayed to the user depending on which group chat the user wants to participate in. Firebase will handle most of our data as well as the user login and logout system. Our website will constantly communicate with our firebase in many different ways such as to keep the chat updated, update the group chat list, handle login and logout, and etc. 

The login page communicates with the firebase authentication system to handle the login and logout of the user and transfers user information over to our website. 
Our website then quarrys the user's list of chats which are stored in firebase and displays only the chats that is choosen to be displayed.
The chat history is stored as a collection of strings under the subroot of the chatID and is loaded up by our website in real time.


# Code Design

![alt text](https://cdn.discordapp.com/attachments/803334690009382935/818389513146466304/classDiagramv2.PNG)

These will be major classes needed for the user's page and chat. The user's page will give functionality where they can change their own profile picture and username as well as a list of their group chats. The chat class will record the messages sent, who sent them, and when they were sent. The design also shows the functionalitty the user is able to have such as the ability to create groupchats, direct messages, and join multiple chats. 
| User Story                                                                                 	| Block 	|
|--------------------------------------------------------------------------------------------	|-------	|
| As a consumer, I want to be able to join a group chat I am interested in                   	| User  	|
| As a user I want to be able to send a private/ direct message to a friend on the platform. 	| User  	|



# Data Design

![alt text](https://cdn.discordapp.com/attachments/548034934422634496/810615103840976896/unknown.png)

Firebase is externally storing the login email and passwords as well as the chat history for each individual chat. Our website is keeping track of one user internally while also externally going through firebase for the ChatIds that are associated with the logged in user. The chatIds are linked to the chat history and can be displayed for user to see. The unique key used to identify each user will the the firebase generated ID that is generated upon signing up for the website in the login screen

| User Story                                                                 	| Block 	|
|----------------------------------------------------------------------------	|-------	|
| As a user I want to be able to easily locate files within a specific chat. 	| Chat  	|


#Business Rules
This section does not really apply to our web-app because it is designed to be very laid back and for casual users for entertainment. While it could be used for business communication, the main focus is on having friendly conversations with people having similar interests. As such, there are no real business rules to be put in place over the product.

# User Interface Design

MAIN PAGE
![alt text](https://cdn.discordapp.com/attachments/548034934422634496/810609506098610206/unknown.png)

We have three main sections to the main section of the website. The Sidebar on the left can be used to navigate between searching for group chats, updating your profile, viewing chats, and signing out. The middle section contains the list of group chats that the user has joined and they can be selected so they appear on the right. The chat window section shows the chat history of the selected chat and is updated in real time. As a user you would want to send messages and you can do so at the bottom of the screen on the right in the small box.

PROFILE PAGE
![alt text](https://cdn.discordapp.com/attachments/803334690009382935/813235406266171452/art.png)

The profile page has the basic functions to display your profile information and enables you to edit it. There are 3 buttons that the user can interact with, the log out button which logs them out of their account and the website, the edit profile button which will enable you to edit your details inside a test window, and the deleted profile button which will remove the account from our database.

ADD CHAT PAGE
![alt text](https://cdn.discordapp.com/attachments/803334690009382935/823385692512059402/addChatPage.png)

The add chat page has three main panels, similar to the main page but with different functionalities. On the left section the user's chats are displayed in a list. On the middle section there are recommended chats that have tags matching the user's current chats with the ability to add them. The right section has a search functionality where the user can search for a chat and relevant results are displayed with the ability to add them. 

| User Story                                                                                                    	| Block        	|
|---------------------------------------------------------------------------------------------------------------	|--------------	|
| As a consumer, I want to be able to have my own unique profile that I am able to customize.                   	| Profile Page 	|
| As a user I want to be able to easily navigate the website with navigation tools that are visually appealing. 	| Main Page    	|



# Resource Management
The limited resources of database threads are going to be handled by implementing firebase. This service is run by google, who provide ample cloud storage in terms of storing message log data, but it will also handle any stresses put on the system by a larger user base requiring more database connections. In this way the application will never have to be doing too complex of resource management on its on, but rather firebase will ensure the data and connection resources are readily available. It is also worth noting that this web-app will likely not be used by many people.





 
# Security
The chat app will implement reactJS as well as firebase. These two frameworks will help to ensure the security of user data. Since the application implements firebase, the data is stored in an encrypted fashion as per goolgle's firebase security standards, meaning any personally identifiable information a person has linked to their account on this app will be secured by said encryption. Furthermore, the app will implement the standard https protocol to ensure safe communication between users and the chat servers.





# Performance
The goal of this app is to allow for real-time communication between people with similar interests; thus, performance is a high priority. Again, implementing firebase will allow for quick access to groupchat message data. We will also use methods that limit the number of previous messages loaded at a time to reduce message loading times in addition to allowing for less stress to be put on the database servers.




# Scalability

Scalability of this group chat app is guaranteed by the ample data provided by the firebase service, since the group does not need to provide their own server for data storage and handling a large userbase, the app is easily scalable to a larger user base of group chatters because the apps main functionality requires no scaling up the only issue would be data storage and large network traffic. Both of these issues are resolved by implementing firebase.






# Interoperability

The chat app will interact with a remote server containing a database, this will be achieved via google firebase.







# Internationalization/Localization

The app would require some translation of UI components in order to be localized. However, given the groupchat nature of the app, and the unicode support of javascript and HTML5, the app would not need other functionality to be translated. 




# Input/Output
The app uses standard input output as provided by reactJS as well as javascript, HTML5, and CSS. The I/O for this app will be focused on a just-in-time reading scheme. I/O errors are handled at the field level. 



# Error Processing

Due to our fairly simple website any big errors are processed by throwing an exception and essentially stopping the website. We do not expect to need any type of error correcting code or exception handlers because our simple website should be rebust enough to not encounter these website breaking errors in our final product. We provide manual and unit test to try to discover any bugs in our code.


# Fault Tolerance

Our fault-tolerate draws the line on bugs that do not disturb the main functionality of our website. Small bugs that make the website look ugly or create an inconvenience for the user will be tolerated for now. Eventually we will work towards fixing almost all the bugs by starting out at the ones that disrupt functionality.


# Architectural Feasibility

This does not apply to us because our application is very feasible and has beeen done before in the industry by various companies.


# Overengineering

Our program will tend to side doing the simplest thing that work at first. Once we have a strong code foundation we can further develop and improve on our code to remove more bugs and create new features.


# Build-vs-Buy Decisions

We are not using any third party software for our code so this does not apply.

# Reuse

We reuse code from React to serve as our framework to assist in developing the app. And we also used the prebuilt functuality that firebase provides us for our backend

# Change Strategy

Our project can be modified to include other features and functuality. We have discussed plans to create private group chats, direct messages, and other user to user communcation neans. We don't know the limitations of our system yet since we just started but many changes could still be added such as creating our own backend.

