import React from 'react';
import { HeaderComponent, FooterComponent } from '@CommonLayouts';
import { GlobalStyle } from '../../../Styles/GlobalStyle';

export interface MainLayoutComponentProps {
    children: React.ReactNode;
}

export default function MainLayoutComponent({ children }: MainLayoutComponentProps) {
    return (
        <>
            <GlobalStyle />
            <HeaderComponent />
            {children}
            <FooterComponent />
        </>
    );
}
