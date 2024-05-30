import MasterLayout from "../components/layout/masterLayout.jsx";
import WishList from "../components/wish/wish-list.jsx";
import Brands from "../components/product/brands.jsx";

const WishPage = () => {
    return (
        <MasterLayout>
            <WishList/>
            <Brands/>
        </MasterLayout>
    );
};

export default WishPage;