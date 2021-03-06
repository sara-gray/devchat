const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

// Init Middleware to allow us to parse req.body
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.json({ msg: 'API running' });
});

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port:${PORT}`);
});
