const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/otp_auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(5000, () => console.log('Server running on port 5000'));
