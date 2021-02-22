
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

![alt text](https://cdn.discordapp.com/attachments/548034934422634496/810605494694969365/download.png)

There will be major classes needed for the user's page and chat. The user's page will give functionality where they can change their own profile picture and username as well as a list of their group chats. The chat class will record the messages sent, who sent them, and when they were sent. 


# Data Design

![alt text](https://cdn.discordapp.com/attachments/548034934422634496/810615103840976896/unknown.png)

Firebase is externally storing the login email and passwords as well as the chat history for each individual chat. Our website is keeping track of one user internally while also externally going through firebase for the ChatIds that are associated with the logged in user. The chatIds are linked to the chat history and can be displayed for user to see.





# User Interface Design

![alt text](https://cdn.discordapp.com/attachments/548034934422634496/810609506098610206/unknown.png)

We have three main sections to the website. The Sidebar on the left can be used to navigate between searching for group chats, updating your profile, viewing chats, and signing out. The middle section contains the list of group chats that the user has joined and they can be selected so they appear on the right. The chat window section shows the chat history of the selected chat and is updated in real time. As a user you would want to send messages and you can do so at the bottom of the screen on the right in the small box.


