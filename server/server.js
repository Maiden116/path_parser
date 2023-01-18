import express from 'express';
import {appRoutes} from './router/pathRoute.js';
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(appRoutes);

process.env.PORT = process.env.PORT || 3000

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
})