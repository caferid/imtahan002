

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const proSchema = new mongoose.Schema({
    pname: String,
    pinfo: String,
    psrc: String,
    uname: String,
    uinfo: String,
    usrc: String,
    uprice: Number,
});
const Product = mongoose.model('product0025', proSchema);

app.get('/', async (req, res) => {
    try {
        const data = await Product.find({})
        res.status(200).send({ message: 'succses', data })
    } catch (error) {
        res.status(500).send({ message: 'NOT succses', error })
    }
})
app.post('/', async (req, res) => {
    try {
        const data = new Product(req.body)
        await data.save()
        res.status(200).send({ message: 'succses', data })
    } catch (error) {
        res.status(500).send({ message: 'NOT succses', error })
    }
})
app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await Product.findById(id)
        res.status(200).send({ message: 'succses', data })
    } catch (error) {
        res.status(500).send({ message: 'NOT succses', error })
    }
})
app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await Product.findByIdAndDelete(id)
        res.status(200).send({ message: 'succses', data })
    } catch (error) {
        res.status(500).send({ message: 'NOT succses', error })
    }
})



mongoose.connect('mongodb+srv://feridd:feridd@cluster0.o4zo8na.mongodb.net/')
    .then(() => console.log("DB connet"))
    .catch(() => console.log("NOT db connet"))



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
