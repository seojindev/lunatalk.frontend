import React, { useEffect } from 'react';
import { MenuBar, FooterBar } from '@Element/Bar';
import { useLocation } from 'react-router-dom';

export default function MainLayoutComponent({ children }: { children: any }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);
    return (
        <>
            <MenuBar />
            {children}
            <FooterBar />
        </>
    );
}
