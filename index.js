require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const skillRoutes = require('./routes/skillRoutes');
const contactRoutes = require('./routes/contactRoutes');


const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/contacts', contactRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

mongoose.connect(process.env.MONGO_URI)
   .then(()=> console.log('MongoDB connected'))
   .catch(err => console.error('MongoDB connection error:', err));

   const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


