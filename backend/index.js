const express = require('express')
const mongoose = require('mongoose');
const app = express()
require('dotenv').config()
const cors = require("cors")

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))

const bookRoutes = require("./src/books/book.route")
const orderRoutes = require('./src/orders/order.route')
const userRoutes = require('./src/users/user.route')
const adminRoutes = require('./src/stats/admin.stats')

app.use('/api/books', bookRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/auth', userRoutes)
app.use('/api/admin', adminRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
}

main().then(() => { console.log("Mongodb connected") }).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//uVt637EMQ2aHdzG7