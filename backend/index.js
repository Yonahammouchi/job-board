require('dotenv').config();
console.log('✅ Mongo URI:', process.env.MONGO_URI);
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/Auth');

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/auth', authRoutes);
