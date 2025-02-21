const express = require('express');
const app = express();
const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
];
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a number
  if (isNaN(parseInt(userId))){
    return res.status(400).json({ message: 'Invalid user ID' });
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

// ... rest of the code