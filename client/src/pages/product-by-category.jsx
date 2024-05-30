import {useEffect} from 'react';
import ProductStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import MasterLayout from "../components/layout/masterLayout.jsx";
import ProductList from "../components/product/product-list.jsx";

const ProductByCategory = () => {
    const {ListByCategoryRequest}=ProductStore();

    const {id}=useParams();

    useEffect(() => {
        ( async ()=>{
            await ListByCategoryRequest(id);
        })()
    }, [id]);


    return (
        <MasterLayout>
            <ProductList/>
        </MasterLayout>
    );
};

export default ProductByCategory;