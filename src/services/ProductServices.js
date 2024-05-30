const BrandModel = require('../models/BrandModel');
const CategoryModel = require('../models/CategoryModel');
const ProductSliderModel = require('../models/ProductSliderModel');
const ProductModel = require('../models/ProductModel');
const ProductDetailsModel = require('../models/ProductDetailsModel');
const ReviewModel = require('../models/ReviewModel');
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;


const BrandListService = async () => {
    try{
        let data = await BrandModel.find();
        return {status: "success", data:data}
    }
    catch (e) {
        return {status: "fail", data:e}.toString()
    }
}
const CategoryListService = async () => {
    try{
        let data = await CategoryModel.find();
        return {status: "success", data:data}
    }
    catch (e) {
        return {status: "fail", data:e}.toString()
    }
}
const SliderListService = async () => {
    try{
        let data = await ProductSliderModel.find();
        return {status: "success", data:data}
    }
    catch (e) {
        return {status: "fail", data:e}.toString()
    }
}




const ListByBrandService = async (req) => {
    try{
        let BrandID =new ObjectID(req.params.BrandID);
        let MatchStage = {$match:{brandID:BrandID}}
        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage = {$unwind:"$brand"}; // To convert Array to Object
        let UnwindCategoryStage = {$unwind:"$category"}; // To convert Array to Object

        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage, JoinWithCategoryStage,
            UnwindBrandStage, UnwindCategoryStage,
            ProjectionStage
        ])

        return {status: "success", data:data};
    }
    catch (e) {
        return {status: "fail", data:e}.toString()
    }
}
const ListByCategoryService = async (req) => {
    try{
        let CategoryID =new ObjectID(req.params.CategoryID);
        let MatchStage = {$match:{categoryID:CategoryID}}
        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage = {$unwind:"$brand"}; // To convert Array to Object
        let UnwindCategoryStage = {$unwind:"$category"}; // To convert Array to Object

        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage, JoinWithCategoryStage,
            UnwindBrandStage, UnwindCategoryStage,
            ProjectionStage
        ])

        return {status: "success", data:data};
    }
    catch (e) {
        return {status: "fail", data:e}.toString()
    }
}
const ListByRemarkService = async (req) => {
    try{
        let Remark =req.params.Remark;
        let MatchStage = {$match:{remark:Remark}}
        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage = {$unwind:"$brand"}; // To convert Array to Object
        let UnwindCategoryStage = {$unwind:"$category"}; // To convert Array to Object
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage, JoinWithCategoryStage,
            UnwindBrandStage, UnwindCategoryStage,
            ProjectionStage
        ])

        return {status: "success", data:data};
    }
    catch (e) {
        return {status: "fail", data:e}.toString()
    }
}



const ListBySmilierService = async (req) => {
    try{
        let CategoryID =new ObjectID(req.params.CategoryID);
        let MatchStage = {$match:{categoryID:CategoryID}}
        let limitStage={$limit:20}

        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage = {$unwind:"$brand"}; // To convert Array to Object
        let UnwindCategoryStage = {$unwind:"$category"}; // To convert Array to Object
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data = await ProductModel.aggregate([
            MatchStage, limitStage,
            JoinWithBrandStage, JoinWithCategoryStage,
            UnwindBrandStage, UnwindCategoryStage,
            ProjectionStage
        ])

        return {status: "success", data:data};
    }
    catch (e) {
        return {status: "fail", data:e}.toString()
    }
}
const DetailsService = async (req) => {
    try {
        let ProductID =new ObjectID(req.params.ProductID);
        let MatchStage = {$match:{_id:ProductID}}

        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let JoinWithDetailsStage = {$lookup:{from:"productDetails",localField:"_id",foreignField:"productID",as:"details"}};


        let UnwindBrandStage = {$unwind:"$brand"}; // To convert Array to Object
        let UnwindCategoryStage = {$unwind:"$category"}; // To convert Array to Object
        let UnwindDetailsStage = {$unwind:"$details"}; // To convert Array to Object


        let ProjectionStage={$project:{'brand._id':0,'category._id':0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage, JoinWithCategoryStage, JoinWithDetailsStage,
            UnwindBrandStage, UnwindCategoryStage, UnwindDetailsStage,
            ProjectionStage
        ])
        return {status: "success", data:data};
    }catch (e) {
        return {status: "fail", data:e}.toString()
    }
}
const ListByKeywordService = async (req) => {
   try {
       let SearchRegex={"$regex":req.params.Keyword, "$options":"i"}
       let SearchParams=[{title:SearchRegex},{shortDes:SearchRegex},]
       let SearchQuery={$or:SearchParams}

       let MatchStage = {$match:SearchQuery}

       let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
       let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
       let UnwindBrandStage = {$unwind:"$brand"}; // To convert Array to Object
       let UnwindCategoryStage = {$unwind:"$category"}; // To convert Array to Object
       let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

       let data = await ProductModel.aggregate([
           MatchStage,
           JoinWithBrandStage, JoinWithCategoryStage,
           UnwindBrandStage, UnwindCategoryStage,
           ProjectionStage
       ])
       return {status: "success", data:data};
   }catch (e) {
       return {status: "fail", data:e}.toString()
   }
}



const ReviewListService = async (req) => {
    try {
        let ProductID =new ObjectID(req.params.ProductID);
        let MatchStage = {$match:{productID:ProductID}}

        let JoinWithProfileStage = {$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}};
        let UnwindProfileStage = {$unwind:"$profile"};
        let ProjectionStage={$project:{'des':1, 'rating':1, 'profile.cus_name':1}}

        let data = await ReviewModel.aggregate([
            MatchStage,
            JoinWithProfileStage,
            UnwindProfileStage,
            ProjectionStage
        ])



        return {status: "success", data:data};
    }catch (e) {
        return {status: "fail", data:e}.toString()
    }
}


const CreateReviewService = async (req) => {
    try {
        let user_id= req.headers.user_id;
        let reqBody= req.body;
        let data= await ReviewModel.create({
            productID:reqBody['productID'],
            userID:user_id,
            des:reqBody['des'],
            rating:reqBody['rating']
        })


        return {status: "success", data:data};
    }catch (e) {
        return {status: "fail", data:e}.toString()
    }
}

const ListByFilterService = async (req) => {
    try {
        // Based on Brand & Category
        let matchConditions = {};
        if (req.body['categoryID']){
            matchConditions.categoryID=new ObjectID(req.body['categoryID']);
        }
        if (req.body['brandID']){
            matchConditions.brandID=new ObjectID(req.body['brandID']);
        }
        let MatchStage = {$match:matchConditions};



        // Based on Pricing
        let AddFieldsStage = {
            $addFields: {numericPrice: {$toInt:"$price"}}
        };
        let priceMax = parseInt(req.body['priceMax']);
        let priceMin = parseInt(req.body['priceMin']);
        let PriceMatchConditions = {};
        if(!isNaN(priceMin)){
            PriceMatchConditions['numericPrice'] = {$gte:priceMin};
        }
        if (!isNaN(priceMax)){
            PriceMatchConditions['numericPrice'] = {...(PriceMatchConditions['numericPrice'] || {}), $lte:priceMax};
        }
        let PriceMatchStage = {$match: PriceMatchConditions};




        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage = {$unwind:"$brand"}; // To convert Array to Object
        let UnwindCategoryStage = {$unwind:"$category"}; // To convert Array to Object
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            AddFieldsStage,
            PriceMatchStage,
            JoinWithBrandStage, JoinWithCategoryStage,
            UnwindBrandStage, UnwindCategoryStage,
            ProjectionStage
        ])
        return {status: "success", data:data};
    }catch (e) {
        return {status: "fail", data:e}.toString()
    }
}




module.exports={
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByCategoryService,
    ListByBrandService,
    ListByRemarkService,
    ListBySmilierService,
    ListByKeywordService,
    DetailsService,
    ReviewListService,
    CreateReviewService,
    ListByFilterService
}