const mongoose=require('mongoose');

const DataSchema=mongoose.Schema(
    {
        productID:{type:mongoose.Schema.Types.ObjectId,required:true},
        userID:{type:mongoose.Schema.Types.ObjectId,required:true},
        /*
        email:{type:String,unique:true,required:true,lowercase:true},
        otp:{type:String,unique:true,required:true}
         */
    },
    {
        timestamps:true, versionKey:false
    }
)


const WishModel=mongoose.model('wishes',DataSchema)

module.exports=WishModel
