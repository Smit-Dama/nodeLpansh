const { Timestamp } = require('mongodb')
const mongoose=require('mongoose')
const dotenv = require('dotenv');
const transporter =  require('../config/mail');
const User = require('./user');
const orderSchema =  new mongoose.Schema({
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    price:
    {
        type:Number,
        required :true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    cart:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'cart'

    },
    createdOn:{
        type:Date ,
        default: Date.now
    }
},{Timestamps:true}
)
orderSchema.post('save' , async function(doc , next){

    try {
        const user = User.findById(doc.user);
        const info = await transporter.sendMail({
            from:process.env.EMAIL_FROM,
            to:user.email,
            subject:'Signup Success',
            text:'Welcome to our store , you have successfully ccreated a new account'
    
        });
        console.log(info);
        next();
        
    } catch (error) {
        
    }

   


})