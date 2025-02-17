const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch the user ...
  if (!user) {
    return res.status(404).send('User not found'); // Missing error handling here
  }
  res.json(user);
});