import http from "http";
import express, { NextFunction, Request, Response } from "express";
import router from "./routes/routes";
import db from './services/db-service'
import bodyParser from "body-parser";
import cors from 'cors'
const app = express();
const port = process.env.port || 80

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/', router)
app.use(cors({
    origin: '*'
}))

app.use((_: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

db()
const httpServer = http.createServer(app)
httpServer.listen(port, () => {
    console.log(`app listening in port: ${port}`)
})