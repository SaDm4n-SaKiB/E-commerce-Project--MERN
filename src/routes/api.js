const express = require('express');
const  router=express.Router();
const AuthVerification = require('../middlewares/AuthVerification');
const ProductController=require('../controllers/ProductController');
const UserController=require("../controllers/UserController");
const WishListController=require('../controllers/WishListController');
const CartListController= require('../controllers/CartListController');
const InvoiceController= require('../controllers/InvoiceController');
const FeaturesController= require('../controllers/FeaturesController');


//PRODUCT
router.get("/ProductBrandList",ProductController.ProductBrandList);
router.get("/ProductCategoryList",ProductController.ProductCategoryList);
router.get("/ProductSliderList",ProductController.ProductSliderList);

router.get("/ProductListByBrand/:BrandID",ProductController.ProductListByBrand);
router.get("/ProductListByCategory/:CategoryID",ProductController.ProductListByCategory);
router.get("/ProductListByRemark/:Remark",ProductController.ProductListByRemark);

router.get("/ProductListBySmilier/:CategoryID",ProductController.ProductListBySmilier);
router.get("/ProductDetails/:ProductID",ProductController.ProductDetails);
router.get("/ProductListByKeyword/:Keyword",ProductController.ProductListByKeyword);

router.get("/ProductReviewList/:ProductID",ProductController.ProductReviewList);
router.post("/ProductListByFilter",ProductController.ProductListByFilter);


// USER
router.get("/UserOTP/:email",UserController.UserOTP);
router.get("/VerifyLogin/:email/:otp",UserController.VerifyLogin);
router.get("/UserLogout",AuthVerification,UserController.UserLogout);
router.post("/CreateProfile",AuthVerification,UserController.CreateProfile);
router.post("/ProfileUpdate",AuthVerification,UserController.UpdateProfile);
router.get("/ReadProfile",AuthVerification,UserController.ReadProfile);


// Wish List
router.post("/CreateWishList",AuthVerification,WishListController.SaveWishList);
router.post("/RemoveWishList",AuthVerification,WishListController.RemoveWishList);
router.get("/WishList",AuthVerification,WishListController.WishList);


// Cart List
router.post("/SaveCartList",AuthVerification,CartListController.SaveCartList);
router.post("/UpdateCartList/:cardID",AuthVerification,CartListController.UpdateCartList);
router.post("/RemoveCartList",AuthVerification,CartListController.RemoveCartList);
router.get("/CartList",AuthVerification,CartListController.CartList);


// Invoice & Payment
router.get("/CreateInvoice",AuthVerification,InvoiceController.CreateInvoice);
router.get("/InvoiceList",AuthVerification,InvoiceController.InvoiceList);
router.get("/InvoiceProductList/:invoice_id",AuthVerification,InvoiceController.InvoiceProductList);

router.post("/PaymentSuccess/:trxID",InvoiceController.PaymentSuccess);
router.post("/PaymentCancel/:trxID",InvoiceController.PaymentCancel);
router.post("/PaymentFail/:trxID",InvoiceController.PaymentFail);
router.post("/PaymentIPN/:trxID",InvoiceController.PaymentIPN);


//Features
router.get("/FeaturesList",FeaturesController.FeaturesList);
router.get("/LegalDetails/:type",FeaturesController.LegalDetails);

// Create Review
router.post("/CreateReview",AuthVerification,ProductController.CreateReview);



module.exports=router;