"use Client";
import React from "react";
import Costom from "../pages/Costom";
import Navigationbar from "@/components/Navigationbar/Navigationbar";
import Footer from "@/components/Footer/footer";


const Layout = () => {
    return (
        <div>
            <Navigationbar />
            <Costom />
            <Footer />

        </div>
    );
};

export default Layout;
