import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

export default function BodySpinnerComponent() {
    return (
        <div className="page-spinner">
            <PulseLoader color="#ddd" size="15" />
        </div>
    );
}
