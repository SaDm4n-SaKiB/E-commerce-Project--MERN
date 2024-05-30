const mongoose=require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const WishModel = require('../models/WishModel');
const WishListService = async (req)=>{
    try{
        let user_id=new ObjectID(req.headers.user_id);
        let matchStage={$match:{userID:user_id}};

        let JoinStageProduct={$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}}
        let unwindProductStage={$unwind:"$product"} // Convert JSON Array to JSON Object

        let JoinStageBrand={$lookup:{from:"brands",localField:"product.brandID",foreignField:"_id",as:"brand"}}
        let unwindBrandStage={$unwind:"$brand"} // Convert JSON Array to JSON Object

        let JoinStageCategory={$lookup:{from:"categories",localField:"product.categoryID",foreignField:"_id",as:"category"}}
        let unwindCategoryStage={$unwind:"$category"} // Convert JSON Array to JSON Object

        let projectionStage={
            $project:{
                "_id":0,
                "userID":0,
                "createdAt":0,
                "updatedAt":0,
                "product._id":0,
                "product.categoryID":0,
                "product.brandID":0,
                "brand._id":0,
                "category._id":0
            }
        }

        

        let data= await WishModel.aggregate([
            matchStage,
            JoinStageProduct, unwindProductStage,
            JoinStageBrand, unwindBrandStage,
            JoinStageCategory,unwindCategoryStage,
            projectionStage
        ])

        return {status:"success", data:data}
    }catch (e) {
        return {status:"failed", message:"Something went wrong."}
    }
}

const SaveWishListService = async (req)=>{
    try {
        let user_id = req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await WishModel.updateOne(reqBody,{$set:reqBody}, {upsert:true})
        return {status:"success", message: "Wish List save success"}
    }catch (e) {
        return {status:"fail", message: "Something went Wrong"}
    }
}

const RemoveWishListService = async (req)=>{
    try {
        let user_id = req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await WishModel.deleteOne(reqBody)
        return {status:"success", message: "Wish List delete success"}
    }catch (e) {
        return {status:"fail", message: "Something went Wrong"}
    }
}


module.exports={
    WishListService,
    SaveWishListService,
    RemoveWishListService
}