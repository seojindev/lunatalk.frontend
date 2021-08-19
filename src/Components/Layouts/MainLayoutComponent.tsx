import React from 'react';
import { MenuBar, FooterBar } from '@Element/Bar';

export default function MainLayoutComponent({ children }: { children: any }) {
    return (
        <>
            <MenuBar />
            {children}
            <FooterBar />
        </>
    );
}
