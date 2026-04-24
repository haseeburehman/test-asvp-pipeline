const userInput = req.query.input;
db.query(`SELECT * FROM users WHERE name = '${userInput}'`); // UNSAFE: potential for SQL injection
const apiKey = "12345-abcde"; 