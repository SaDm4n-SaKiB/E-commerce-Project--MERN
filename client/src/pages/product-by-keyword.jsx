import React, {useEffect} from 'react';
import ProductStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import MasterLayout from "../components/layout/masterLayout.jsx";
import ProductList from "../components/product/product-list.jsx";

const ProductByKeyword = () => {
    const {ListByKeywordRequest}=ProductStore();

    const {keyword}=useParams();

    useEffect(() => {
        ( async ()=>{
            await ListByKeywordRequest(keyword);
        })()
    }, [keyword]);


    return (
        <MasterLayout>
            <ProductList/>
        </MasterLayout>
    );
};

export default ProductByKeyword;