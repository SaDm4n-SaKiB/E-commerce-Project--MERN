import React from 'react';
import MasterLayout from "../components/layout/masterLayout.jsx";
import LoginForm from "../components/user/login-form.jsx";

const LoginPage = () => {
    return (
        <MasterLayout>
            <LoginForm/>
        </MasterLayout>
    );
};

export default LoginPage;