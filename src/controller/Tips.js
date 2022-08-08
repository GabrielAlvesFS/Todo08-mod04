import bdTips from "../infra/bd.js"
import TipsM from "../models/Tips.js";

export const Tips = (app) => {
    //get
    app.get('/tips', (req, res) => {
        const tip = bdTips[Math.floor(Math.random() * bdTips.length)]
        res.send(tip)
    })


    //post
    app.post('/create', (req, res) => {
        const { tip } = req.body
        const dataM = new TipsM(tip)

        bdTips.push(dataM)
        res.send(dataM)
    })

}