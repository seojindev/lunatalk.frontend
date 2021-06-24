import React from 'react';
import { HeaderComponent, FooterComponent } from '@CommonLayouts';

export interface MainLayoutComponentProps {
    children: React.ReactNode;
}

export default function MainLayoutComponent({ children }: MainLayoutComponentProps) {
    return (
        <>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </>
    );
}
