import express from 'express';
import sampleControllerRouter from './controllers/sampleController/sampleController';
import mongoose from 'mongoose';
import mongoRouter from './controllers/sampleModelController';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(req.body);

    res.json({ code: res.statusCode, message: res.statusMessage, headers: res.getHeaders() });
});

app.use('/api/sample', sampleControllerRouter);
app.use('/api/mongo', mongoRouter);


app.listen(port, async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017')
    console.log('Server running on port ' + port);
});

