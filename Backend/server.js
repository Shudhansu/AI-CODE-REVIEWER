require('dotenv').config();
const app = require('./src/app');

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log('Server is running on http://127.0.0.1:3000/');
}) 