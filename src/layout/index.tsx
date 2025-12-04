import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { LayoutContainer, PageContainer } from "./styles";
import { Sidebar } from "../components/sidebar";
import { useState } from "react";

export function Layout(){
    const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

    return (
        <LayoutContainer>
            <Navbar  setIsOpen={setSidebarIsOpen} isOpen={sidebarIsOpen}/>
            <Sidebar setIsOpen={setSidebarIsOpen} isOpen={sidebarIsOpen}/>
            <PageContainer>
                <Outlet />
            </PageContainer>
        </LayoutContainer>
    )
}