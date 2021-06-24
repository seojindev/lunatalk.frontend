import React, { useEffect } from 'react';
import { useRoot } from '@Hooks';

export default function SplashComponent({ appLoading }: { appLoading: () => void }) {
    const { AppBaseCheckState } = useRoot();

    useEffect(() => {
        const setAppMainLoading = (loading: boolean) => {
            if (loading === true) {
                appLoading();
            }
        };

        setAppMainLoading(AppBaseCheckState);
    }, [AppBaseCheckState]);

    return (
        <React.Fragment>
            <>로딩중...</>
        </React.Fragment>
    );
}
