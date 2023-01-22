import React from "react";
import Card from "../common/Card";
const withFunctions = (Component) => () => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => {
        localStorage.setItem("auth", "true");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <Card>
            <Component onLogin={onLogin} onLogOut={onLogOut} isAuth={isAuth} />
        </Card>
    );
};

export default withFunctions;
