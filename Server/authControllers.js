const User = require('../models/user')
const jwt = require('jsonwebtoken');

const test = (req,res) => {
    res.json('test is working')
}



//register endpoint
const registerUser = async (req, res) => {
    try {
        const {email, fullName, address, contactNo, age} = req.body;
        if(!fullName) {
            return res.json({
                error: 'name is required'
            })
        };
        if(!address) {
            return res.json({
                error: 'address is required'
            })
        };
        if(!contactNo) {
            return res.json({
                error: 'Contact Number is required'
            })
        };
        if(!age) {
            return res.json({
                error: 'age is required'
            })
        };

        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Email is taken already'
            })
        }

        const user = await User.create({
            email, fullName, address, contactNo, age
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}


//Login endpoint

const loginUser = async (req,res ) => {
    try {
        const {email} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'No user found'
            })
        } if (user) {
            jwt.sign({email: user.email, id: user._id, fullName: user.fullName, contactNo: user.contactNo, address: user.address, age: user.age}, process.env.JWT_SECRET,{},(err,token) => {
                if(err) throw err;
                res.cookie('token', token).json(user)
            })
            
        }      
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res)=> {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user)=> {
            if(err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}
