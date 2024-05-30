const FeaturesModel = require("../models/FeaturesModel");
const LegalDetailsModel = require("../models/LegalDetailsModel");
const FeaturesListService = async () => {
    try{
        let data = await FeaturesModel.find();
        return {status: "success", data:data}
    }
    catch (e) {
        return {status: "fail", data:e}.toString()
    }
}

const LegalDetailsService = async (req) => {
    try{
        let type=req.params.type;
        let data = await LegalDetailsModel.find({type:type});
        return {status: "success", data:data}
    }
    catch (e) {
        return {status: "fail", data:e}.toString()
    }
}

module.exports={
    FeaturesListService,LegalDetailsService
}