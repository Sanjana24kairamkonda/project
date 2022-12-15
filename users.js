const jwt=require('jsonwebtoken')
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const SECRET_KEY="CHAITANYABHARATHIINSTITUTEOFTECHNOLOGYGANDIPET"
const users=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require,d:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})
users.pre('save', async function(next){
    if(this.isModified('password')){
        this.password=bcrypt.hash(this.password,12)
        
    }
    next();  
});
users.methods.generateAuthToken= async function(){
    try{
        let token=jwt.sign({_id:this._id},SECRET_KEY)
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err)
    }
}
const User=mongoose.model('USER',users);
module.exports=User;