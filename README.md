# Member Login Function (Based on React)

### Introduction👋
Hi, this is a project to simulate the signIn and signUp function in website with using React to do so.
I will use the `json-server` to simulate the server and clone the data with using `jQuery.ajax()`. 
For SignUp function, data will return back and updating to the server. You can checkout the updated data in db.json files which saved in `app/backend/server`. On the other side, you can also signIn the registed account in signIn page, but it is still in processing. 

### Page Overview 📋



### Preparation 💿
Before run the program, make sure you have already installed:
- [json-server](https://www.npmjs.com/package/json-server)
- [npm](https://nodejs.org/en/download/)

### Run Program 🕹️

Open Terminal, direct to the `app` directory

```Shell
  cd app/
```

Then, start the program with using
``` Shell
  npm start
```

Open new Terminal, direct to the server directory
```Shell
  cd backend/server/
```

Start the json-server and setting port as 4000
```Shell
  json-server --watch db.json --port 4000
```

**NOTE** If 4000 port is used in your PC, please change the constant variable `${API_PORT}` in `app/src/global/constants.js`. After that, please input your port in the command line instead of 4000.

### json-server basic commands 📌
|                    commands                |                              actions                        |
|---                                         |---                                                          |
|           npm install -g json-server       |                      Install json-server                    |
|             json-server db.json            |           Start json-server in default port 3000            |
| json-server --watch db.json --port ${port} | Start json-server in specific port and moniting the db.json |


### Logs 📆

|       Date      |                    Updated                   |
|---              |---                                           |
|   15 July 2022  |                   UI Design                  |
|   16 July 2022  |   Fetching Data and Pushing Data to server   |
|   17 July 2022  |   Done the SignIn Page Functions and optimistic the functions of FetchData() and PostData()  |
