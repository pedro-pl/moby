import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { LayoutContainer, PageContainer } from "./styles";
import { Sidebar } from "../components/sidebar";
import { useEffect, useRef, useState } from "react";

export function Layout(){
    const [sidebarIsOpen, setSidebarIsOpen] = useState(true);const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ left: 0 });

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const updatePosition = () => {
            const rect = element.getBoundingClientRect();
            setPosition({ left: rect.left });
        };

        const handleScroll = () => requestAnimationFrame(updatePosition);
        const handleResize = () => requestAnimationFrame(updatePosition);

        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(updatePosition);
        });

        resizeObserver.observe(element);
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        updatePosition();

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <LayoutContainer>
            <Navbar  setIsOpen={setSidebarIsOpen} isOpen={sidebarIsOpen}/>
            <Sidebar setIsOpen={setSidebarIsOpen} isOpen={sidebarIsOpen}/>
            <PageContainer isOpen={sidebarIsOpen} distance={position.left} ref={ref}>
                <Outlet />
            </PageContainer>
        </LayoutContainer>
    )
}