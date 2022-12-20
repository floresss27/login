import React from "react";
import {Route, Routes} from 'react-router-dom'
import {Login} from 'pages/login/index'

const Router = () => {
    return (
        <Routes>
            <Route element={<Login/>} path='/' exact></Route>
        </Routes>
    );
}


export default Router