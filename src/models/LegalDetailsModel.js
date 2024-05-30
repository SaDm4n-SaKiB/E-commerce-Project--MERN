const mongoose=require('mongoose');
const DataSchema=mongoose.Schema(
    {
        destination:{type:String,required:true},
        type:{type:String,required:true}
    },
    {
        timestamps:true, versionKey:false
    }
)
const LegalDetailsModel=mongoose.model('legals',DataSchema)
module.exports=LegalDetailsModel
