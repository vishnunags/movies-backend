const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const movieRoutes = require('./routes/movieRoutes');
app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

app.use('/api', movieRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
