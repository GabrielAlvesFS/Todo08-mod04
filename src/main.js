import express from 'express';
import { Tips } from './controller/Tips.js';

const app = express()
const port = 4000

//middleware
app.use(express.json())

Tips(app)

app.listen(port, ()=>{
    console.log(`[POST] Hospedado em: http://localhost:4000/create`)
    console.log(`[GET] Hospedado em: http://localhost:4000/tips`)
})