import React, {useEffect} from 'react';
import ProductStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import MasterLayout from "../components/layout/masterLayout.jsx";
import ProductList from "../components/product/product-list.jsx";

const ProductByBrand = () => {
    const {ListByBrandRequest}=ProductStore();

    const {id}=useParams();

    useEffect(() => {
        ( async ()=>{
           await ListByBrandRequest(id);
        })()
    }, [id]);


    return (
        <MasterLayout>
            <ProductList/>
        </MasterLayout>
    );
};

export default ProductByBrand;