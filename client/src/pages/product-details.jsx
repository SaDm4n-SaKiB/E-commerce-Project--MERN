import React, {useEffect} from 'react';
import MasterLayout from "../components/layout/masterLayout.jsx";
import Brands from "../components/product/brands.jsx";
import {useParams} from "react-router-dom";
import Details from "../components/product/Details.jsx";
import ProductStore from "../store/ProductStore.js";
// import Details from "../components/product/de"

const ProductDetails = () => {

    const {DetailsRequest,ReviewList,ReviewListRequest,BrandList,BrandListRequest}=ProductStore();
    const {id}=useParams();

    useEffect(() => {
        (async ()=>{
            await DetailsRequest(id);
            await ReviewListRequest(id);
            BrandList===null?await BrandListRequest():null;
        })()
    }, []);

    return (
        <MasterLayout>
            <Details/>
            <Brands/>
        </MasterLayout>
    );
};

export default ProductDetails;