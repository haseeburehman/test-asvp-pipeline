const express = require("express");
const app = express();

app.use(express.json());

// Hardcoded secret
const API_KEY = "test-api-key-123456";
const DB_PASSWORD = "supersecretpassword123";

// SQL Injection
app.get("/user", (req, res) => {
    const userId = req.query.id;
    const query = "SELECT * FROM users WHERE id = " + userId;

    db.query(query, (err, result) => {
        if (err) return res.status(500).send("Database error");
        res.json(result);
    });
});

// Command Injection
app.get("/ping", (req, res) => {
    const host = req.query.host;
    const { exec } = require("child_process");

    exec("ping -c 1 " + host, (error, stdout) => {
        if (error) return res.status(500).send("Command failed");
        res.send(stdout);
    });
});

// XSS
app.get("/search", (req, res) => {
    const q = req.query.q;
    res.send("<h1>Search result for: " + q + "</h1>");
});

// Path Traversal
app.get("/file", (req, res) => {
    const fileName = req.query.name;
    res.sendFile(__dirname + "/uploads/" + fileName);
});

app.listen(3000, () => {
    console.log("Test vulnerable app running");
});