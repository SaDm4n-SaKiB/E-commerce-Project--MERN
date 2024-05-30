const EmailSent = require("../utility/EmailHelper");
const {EncodeToken} = require("../utility/TokenHelper");
const UserModel=require("../models/UserModel");
const ProfileModel=require("../models/ProfileModel");



const UserOTPService = async (req)=>{
    try{
        let email=req.params.email;
        let code=Math.floor(100000+Math.random()*900000);

        let EmailText=`Your Verification Code is ${code}`;
        let EmailSubject="Email Verification";

      let emailSend =   await EmailSent(email,EmailText,EmailSubject);

        await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})
        return {status:"success", message:"6 Digit OTP has been send successfully."}
    }catch (e) {
        return {status:"failed", message:"Something went wrong."}
    }
}

const VerifyLoginService = async (req)=>{
   try{
       let email=req.params.email;
       let otp=req.params.otp;

       // User count
       let total=await UserModel.find({email:email,otp:otp}).count("total");
       if(total===1){
           // User iD Read
           let user_id=await UserModel.find({email:email,otp:otp}).select('_id');

           // User Token Create
           let token=EncodeToken(email,user_id[0]['_id'].toString())

           // OTP Code Update to 0
           await UserModel.updateOne({email:email},{$set:{otp:""}},{upsert:true})

           return {status:"success", message:"Valid OTP",token:token}
       }else {
           return {status:"fail", message:"Invalid OTP"}
       }
   }catch (e) {
       return {status:"fail", message:"Invalid OTP"}
   }
}

const SaveProfileService = async (req)=>{
   try{
       let user_id=req.headers.user_id;
       let reqBody=req.body;
       reqBody.userID=user_id;
       await ProfileModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true})
       return {status:"success", message:"Profile Save Success"};
   }catch (e) {
       return {status:"fail", message:"Something went wring"};
   }
}

const ReadProfileService = async (req)=>{
    try{
        let user_id=req.headers.user_id;
        let result=await ProfileModel.find({userID:user_id});
        return {status:"success", message:result};
    }catch (e) {
        return {status:"fail", message:"Something went wring"};
    }
}

module.exports={
    UserOTPService,
    VerifyLoginService,
    SaveProfileService,
    ReadProfileService
}