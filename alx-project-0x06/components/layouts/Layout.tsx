import React from "react";
import Header from "./Header";
import { LayoutProps } from "@/interfaces";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "@/store/store";


const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <>
        <Provider store={store}>

        <Header/>
        </Provider>
        <main>{children}</main>
        <Footer />
        </>
    );
}
export default Layout;