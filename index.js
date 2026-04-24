const userInput = req.query.input; // UNSAFE: potential for XSS
db.query(`SELECT * FROM users WHERE name = '${userInput}'`); // UNSAFE: potential for SQL injection
const apiKey = "12345-abcde"; // HARD-CODED SECRET