const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const mongoose = require('mongoose'); 
const mongoDB = 'mongodb+srv://jojo1206:n$kG^114-@U@maincluster.rx3s7rh.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB).then(() => {
  console.log("Connected successfully to MongoDB");
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("Connected successfully to MongoDB");
});

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
