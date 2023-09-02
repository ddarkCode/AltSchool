require('dotenv').config()

const express = require('express')

const PORT = process.env.PORT;

const app = express();
const log = console.log;


app.get('/', (req, res) => {
    res.status(200);

    res.json({
        message: 'A Quick Intro to express'
    })
})

app.listen(PORT, () => {
    log(`App Running On Port ${PORT}`)
})

