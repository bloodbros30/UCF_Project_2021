
# Program Organization

![alt text](https://cdn.discordapp.com/attachments/803334690009382935/810592705838710794/architecturalDesign.png)

# Initial Architectural Description
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


