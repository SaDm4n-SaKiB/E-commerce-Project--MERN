import cartStore from "../../store/CartStore.js";
import {useEffect} from "react";
import CartSkeleton from "../../skeleton/cart-skeleton.jsx";
import CartSubmitButton from "../cart/CartSubmitButton.jsx";
import NoData from "../wish/no-data.jsx";
import {Link} from "react-router-dom";

const InvoiceList = () => {
    const {InvoiceList,InvoiceListRequest}=cartStore();

    useEffect(() => {
        (async ()=>{
            await InvoiceListRequest();
        })()
    }, []);
    if(InvoiceList===null){
        <CartSkeleton/>
    }else if (InvoiceList.length===0){
        return (
            <NoData/>
        );
    }else {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                            <ul className="list-group list-group-flush">
                                {
                                    InvoiceList.map((item, i) => {
                                        // let price = item['product']['price']
                                        // if (item['product']['discount'] === true) {
                                        //     price = item['product']['discountPrice']
                                        // }
                                        return (
                                            <li key={i} className="listgroup-item d-flex justify-content-between align-items-start border-bottom mb-2 py-2">
                                                <div className="ms-2 me-auto">
                                                    <p className="fw-lighter m-0"><strong className="fw-bold me-1">Invoice No: </strong> {item['tran_id']}</p>
                                                    <p className="fw-lighter m-0"><strong className="fw-bold me-1">Customer: </strong> {item['cus_details']}</p>
                                                    <p className="fw-lighter m-0"><strong className="fw-bold me-1">Shipping: </strong> {item['ship_details']}</p>
                                                    {
                                                        item['payment_status']==="success"?(
                                                            <p className="fw-lighter m-0"><strong className="fw-bold me-1">Payment: </strong> <span className="text-success fw-bold text-capitalize">{item['payment_status']}</span></p>
                                                        ):(
                                                            <p className="fw-lighter m-0"><strong className="fw-bold me-1">Payment: </strong> <span className="text-danger fw-bold text-capitalize">{item['payment_status']}</span></p>

                                                        )
                                                    }
                                                    {
                                                        item['delivery_status']==="success"?(
                                                            <p className="fw-lighter m-0"><strong className="fw-bold me-1">Delivery: </strong> <span className="text-success fw-bold text-capitalize">{item['delivery_status']}</span></p>
                                                        ):(
                                                            <p className="fw-lighter m-0"><strong className="fw-bold me-1">Delivery: </strong> <span className="text-primary fw-bold text-capitalize">{item['delivery_status']}</span></p>

                                                        )
                                                    }
                                                </div>
                                                <Link to={`/invoiceDetails/${item._id}`} className="btn btn-sm btn-success">Details</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default InvoiceList;