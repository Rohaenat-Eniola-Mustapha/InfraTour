const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // use your MySQL username
    password: 'root', // use your MySQL password
    database: 'infratour'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Register endpoint
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) throw err;
        res.send('User registered successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
