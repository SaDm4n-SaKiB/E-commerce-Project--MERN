import React, {useEffect} from 'react';
import MasterLayout from "../components/layout/masterLayout.jsx";
import LegalContents from "../components/features/legal-contents.jsx";
import FeatureStore from "../store/FeatureStore.js";

const AboutPage = () => {
    const {LegalDetailsRequest}=FeatureStore();
    useEffect(() => {
        (async ()=>{
            await LegalDetailsRequest("about")
        })()
    }, []);
    return (
        <MasterLayout>
            <LegalContents/>
        </MasterLayout>
    );
};

export default AboutPage;