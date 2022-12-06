import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BodySpinner } from '@Element/Spinners';

const DtlPage = lazy(() => import('./Dtls/Cart'));

export default function WishListPage() {
    const { storeRouterLocation } = useSelector((store: RootState) => ({
        storeRouterLocation: store.router.location,
    }));

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>:: {process.env.REACT_APP_TITLE} :: 장바구니</title>
                <link rel="canonical" href={`${globalThis.location.origin}${storeRouterLocation}`} />
            </Helmet>
            <Suspense fallback={<BodySpinner />}>
                <DtlPage />
            </Suspense>
        </HelmetProvider>
    );
}
