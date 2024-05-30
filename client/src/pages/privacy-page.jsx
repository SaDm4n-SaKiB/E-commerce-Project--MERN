import React, {useEffect} from 'react';
import FeatureStore from "../store/FeatureStore.js";
import MasterLayout from "../components/layout/masterLayout.jsx";
import LegalContents from "../components/features/legal-contents.jsx";

const PrivacyPage = () => {
    const {LegalDetailsRequest}=FeatureStore();
    useEffect(() => {
        (async ()=>{
            await LegalDetailsRequest("privacy")
        })()
    }, []);
    return (
        <MasterLayout>
            <LegalContents/>
        </MasterLayout>
    );
};

export default PrivacyPage;