import MasterLayout from "../components/layout/masterLayout.jsx";
import InvoiceList from "../components/invoice/invoice-list.jsx";

const OrderPage = () => {
    return (
        <MasterLayout>
            <InvoiceList/>
        </MasterLayout>
    );
};

export default OrderPage;