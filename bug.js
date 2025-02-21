const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for cases where userId is not a number or is invalid
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    //Here we should return 404 instead of 500 
    res.status(500).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

// ... rest of the code