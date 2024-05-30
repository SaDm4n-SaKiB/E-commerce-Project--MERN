import React, {useEffect} from "react";
import ProductsSkeleton from "../../skeleton/products-skeleton.jsx";
import WishStore from "../../store/WishStore.js";
import NoData from "./no-data.jsx";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import productStore from "../../store/ProductStore.js";

const WishList = () => {
    const {BrandListRequest}=productStore()
    const {WishList,WishListRequest,RemoveWishListRequest}=WishStore();

    useEffect(() => {
        (async ()=>{
            await WishListRequest()
            await BrandListRequest()
        })()
    }, []);

    const remove=async (productID)=>{
        await RemoveWishListRequest(productID);
        await WishListRequest();
    }

    if (WishList===null){
        return (
            <div className="container">
                <div className="row">
                    <ProductsSkeleton/>
                </div>
            </div>
        )
    }else if (WishList.length===0){
        return (
            <NoData/>
        )
    }else {
        return (
            <div className="container">
                <div className="row">
                    {
                        WishList.map((item,i)=>{
                                let price=<p className="bodyMedium text-dark my-1">Price: ${item['product']['price']}</p>
                                if (item['product']['discount']===true){
                                    price=<p className="bodyMedium text-dark my-1">Price: <strike>${item['product']['price']}</strike>${item['product']['discountPrice']}</p>
                                }
                                return (
                                    <div key={i} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                        <div className="card shadow-sm h-100 rounded-3 bg-white">
                                            <img className="w-100 rounded-top-2" src={item['product']['image']}/>
                                            <div className="card-body">
                                                <p className="bodySmal text-secondary my-1">{item['product']['title']}</p>
                                                {price}
                                                <StarRatings rating={parseFloat(item['product']['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px"/>
                                                <p className="mt-3">
                                                    <button onClick={async ()=>{await remove(item['productID'])}} className="btn btn-danger btn-sm">Remove</button>
                                                    <Link className="btn btn-sm btn-outline-success mx-2" to={`/details/${item['productID']}`}>Details</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        );
    }
};

export default WishList;