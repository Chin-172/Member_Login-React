# Member Login Function (Based on React)

### Introduction👋
Hi, this is a project to simulate the signIn and signUp function in website with using React to do so.
I will use the `json-server` to simulate the server and clone the data with using `jQuery.ajax()`. 
For SignUp function, data will return back and updating to the server. You can checkout the updated data in db.json files which saved in `app/backend/server`. On the other side, you can also signIn the registed account in signIn page, but it is still in processing. 

### Page Overview 📋

![image](https://user-images.githubusercontent.com/63136573/179380296-3e40759f-e1e5-46a2-a51f-d779a87af2f6.png)
![image](https://user-images.githubusercontent.com/63136573/179380312-9ac1225e-86b8-4295-815d-e15f942f7731.png)


### Preparation 💿
Before run the program, make sure you have already installed:
- [json-server](https://www.npmjs.com/package/json-server)
- [npm](https://nodejs.org/en/download/)


### json-server basic commands 📌
|                  commands               |                           actions                       |
|---                                      |---                                                      |
|         npm install -g json-server      |                    Install json-server                  |
|             json-server db.json         |         Start json-server in default port 3000          |
| json-server --watch db.json --port 3004 | Start json-server in port 3004 and moniting the db.json |


### Logs 📆

|       Date      |                    Updated                   |
|---              |---                                           |
|   15 July 2022  |                   UI Design                  |
|   16 July 2022  |   Fetching Data and Pushing Data to server   |
