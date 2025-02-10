const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/greet', (req, res) => {
  const name = req.body.name;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Greeting</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: white; color: black; }
        h1 { margin-top: 20px; }
      </style>
    </head>
    <body>
      <h1>Hello, ${name}!</h1>
      <p>Welcome to the Enhanced Node.js Web App!</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
