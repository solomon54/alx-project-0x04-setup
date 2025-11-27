import React from "react";
import Header from "./Header";
import { LayoutProps } from "../interfaces";
import Footer from "./Footer"


const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <>
        <Header/>
        <main>{children}</main>
        <Footer />
        </>
    );
}
export default Layout;