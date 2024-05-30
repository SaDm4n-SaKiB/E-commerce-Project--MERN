import React, {useEffect} from 'react';
import FeatureStore from "../store/FeatureStore.js";
import MasterLayout from "../components/layout/masterLayout.jsx";
import LegalContents from "../components/features/legal-contents.jsx";

const ComplainPage = () => {
    const {LegalDetailsRequest}=FeatureStore();
    useEffect(() => {
        (async ()=>{
            await LegalDetailsRequest("complain")
        })()
    }, []);
    return (
        <MasterLayout>
            <LegalContents/>
        </MasterLayout>
    );
};

export default ComplainPage;