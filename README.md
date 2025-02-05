# E-commerce-Project--MERN
This ecommerce project is the final project of OSTAD mern-stack course


===========================================================================




Building E-Commerce Models, middlewares, controllers, routes, and services with Mongoose



You have been tasked with developing the backend for a full-fledged e-commerce website. Your first step is to create the necessary Mongoose models to represent the core entities of the application.



Task 1: BrandModel


Create a Mongoose model named brands to store user information. The User model should have the following fields: - brandName, brandImg



Task 2: CartModel


Create a Mongoose model named carts to store user information. The User model should have the following fields: - productID, userID, color, price, qty, size



Task 3: CategoryModel


Create a Mongoose model named categories to store user information. The User model should have the following fields: - categoryName, categoryImg


Task 4: FeaturesModel


Create a Mongoose model named features to store user information. The User model should have the following fields: - name, description, img



Task 5: InvoiceModel


Create a Mongoose model named invoices to store user information. The User model should have the following fields: - userID, payable, cus_details, ship_details, tran_id, val_id, payment_status, delivery_status, total, vat



Task 6: InvoiceProductModel


Create a Mongoose model named invoiceproducts to store user information. The User model should have the following fields: - userID,productID, invoiceID, qty, price, color, size


Task 7: PaymentSettingModel


Create a Mongoose model named paymentsettings to store user information. The User model should have the following fields: - store_id, store_passwd, currency, success_url, fail_url, cancel_url, ipn_url, init_url



Task 8: ProductDetailsModel


Create a Mongoose model named paymentsettings to store user information. The User model should have the following fields: - img1, img2, img3, img4, des, color, size, productID



Task 9: ProductModel


Create a Mongoose model named products to store user information. The User model should have the following fields: - title, shortDes, price, discount, discountPrice, image, star, stock, remark, categoryID, brandID



Task 10: ProductSliderModel


Create a Mongoose model named productsliders to store user information. The User model should have the following fields: - title, des, price, img, productID



Task 11: ProfileModel


Create a Mongoose model named profiles to store user information. The User model should have the following fields: - userID, cus_add, cus_city, cus_country, cus_fax, cus_name, cus_phone, cus_postcode, cus_state, ship_add, ship_city, ship_country, ship_name, ship_phone, ship_postcode, ship_state


Task 12: ReviewModel


Create a Mongoose model named reviews to store user information. The User model should have the following fields: - productID, userID, des, rating



Task 13: UserModel


Create a Mongoose model named users to store user information. The User model should have the following fields: - email, otp



Task 14: WishModel


Create a Mongoose model named wishes to store user information. The User model should have the following fields: - productID, userID


 


Task 15: create middlewares for control security.


Task 16: Create the required controllers and services for the above models.


Task 17: All the Router to be made are : 



router.get('/ProductBrandList')


router.get('/ProductCategoryList')


router.get('/ProductSliderList')


router.get('/ProductListByBrand/:BrandID')


router.get('/ProductListByCategory/:CategoryID')


router.get('/ProductListBySmilier/:CategoryID')


router.get('/ProductListByKeyword/:Keyword')


router.get('/ProductListByRemark/:Remark')


router.get('/ProductDetails/:ProductID')


router.get('/ProductReviewList/:ProductID')


router.get('/UserOTP/:email')


router.get('/VerifyLogin/:email/:otp')


router.get('/UserLogout')


router.post('/CreateProfile')


router.post('/UpdateProfile')


router.get('/ReadProfile')


router.post('/SaveWishList')


router.post('/RemoveWishList')


router.get('/WishList')


router.post('/SaveCartList')


router.post('/RemoveCartList')


router.get('/CartList')


===========================================================================
