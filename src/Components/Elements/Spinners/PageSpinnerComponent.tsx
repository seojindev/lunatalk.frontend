import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

export default function PageSpinnerComponent() {
    return (
        <div className="page-spinner">
            <BounceLoader color="#ddd" size="15px" />
        </div>
    );
}
