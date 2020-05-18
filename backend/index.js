const express = require('express');
const routes = require('./src/routes');
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors');
const app = express();
app.use(express.json());



mongoose.connect(`mongodb://localhost:27017/nodeapi`, {useNewUrlParser: true,useUnifiedTopology: true},
(err, res) => {
    if (err) {
        console.log(`ERROR connecting to: mongodb://localhost:27017/nodeapi. ${err}`);
    } else {
        console.log('Successfully connected to: ' + `mongodb://localhost:27017/nodeapi`);
    }
});
requireDir('./src/models')

app.use(cors())
app.use("/api", routes)

app.listen(3003, () => {
    console.log(`Server Online`)
})