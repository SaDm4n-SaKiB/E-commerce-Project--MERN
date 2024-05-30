import AppNavBar from "./appNavBar.jsx";
import Footer from "./footer.jsx";
import {Toaster} from "react-hot-toast";

const MasterLayout = (props) => {
    return (
        <>
            <AppNavBar/>
            {
                props.children
            }
            <Toaster position="bottom-center"/>
            <Footer/>
        </>
    );
};

export default MasterLayout;