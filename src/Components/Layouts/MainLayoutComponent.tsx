import React, { useEffect } from 'react';
import { MenuBar, FooterBar } from '@Element/Bar';
import { useLocation, Outlet } from 'react-router-dom';

export default function MainLayoutComponent() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);
    return (
        <>
            <MenuBar />
            <Outlet />
            <FooterBar />
        </>
    );
}
