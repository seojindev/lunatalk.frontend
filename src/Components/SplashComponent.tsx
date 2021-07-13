import React, { useEffect } from 'react';
import { useRoot } from '@Hooks';
import PulseLoader from 'react-spinners/PulseLoader';
// import { PageSpinnerStyle } from '@Src/Styles/SpinnersStyles';

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
        // <PageSpinnerStyle>
        <PulseLoader color="#ddd" size="15" />
        // </PageSpinnerStyle>
    );
}
