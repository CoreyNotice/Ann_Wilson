const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path= require('path')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Example base route
app.get('/', (req, res) => {
  res.send('Backend server is running 👑');
});
// Route setup
const listingRoutes = require('./routes/listings');
app.use('/api/listings', listingRoutes);
// TODO: Add your route files here
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);


const {sequelize} = require('./models');
sequelize.sync().then(() => {
  console.log('Database synced!!!!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
