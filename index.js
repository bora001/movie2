const express = require('express')
const app = express()
const port = 5000
const cookieParser = require('cookie-parser')
const { User } = require("./models/User")
const config = require('./config/key')
const { auth } = require("./middleware/auth")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

const mongoose = require('mongoose')
mongoose.connect(config.mongoUrl, {
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>console.log("MongoDB is connected....")).catch(err=>console.log(err))

app.get('/', (req, res) => res.send("this is main"))

app.post('/register', (req, res) => {
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message:"We can not find the email"
            })
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({
                    loginSuccess: false,
                    message: "incorrect Password"
                })
            
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("x_auth", user.token)
                    .status(200)
                    .json({ loginSuccess: true, userId: user._id })
            })
        })
    })
})

app.get('/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        image:req.user.image
    })
})


app.get('/logout', auth, (res, req) => {

    User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
            if (err) {
                return res.json({
                    success: false,
                    err
                })
            }
            return res.status(200).send({
                success:true
            })
    })
})


app.listen(port, () => console.log(`localhost:${port}`))