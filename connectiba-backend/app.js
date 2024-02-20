const express = require('express');

const bodyParser = require('body-parser');
const sequelize = require('./utilities/database');



// const User = require('./models/user');
// const Room = require('./models/room');
// const Post = require('./models/post');
// const Comment = require('./models/comment');
// const Like = require('./models/like');
// const RoomMember = require('./models/room');
// const Location = require('./models/location');
// const job = require('./models/job');
// const Job_history = require('./models/job_history');



// Routes
const authRoutes = require('./routes/auth');
const userRoute = require('./routes/user');
const adminRoute = require('./routes/admin');

const app = express();






// Middleware to parse JSON data
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use('/auth', authRoutes);
app.use(userRoute);
app.use('/admin', adminRoute);



// Sync the model with the database
sequelize.sync().then((result) => {
  console.log(result.models);
  app.listen(8080);

})
  .catch((error) => {
    console.error('Error syncing User model:', error);
  });

