import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import OrderSection from "../OrderSection/OrderSection";
import Footer from "../Footer/Footer";
import './wrapper.scss';

const Wrapper = () => {

    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <Content />
            <OrderSection/>
            <Footer/>
        </div>
    )
}

export default Wrapper;