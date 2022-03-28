import React from 'react';

export default function ProductOrderInfo({ active }: { active: string }) {
    return (
        <div id="des-details2" className={'tab-pane' + active}>
            <div className="product-description-wrapper">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                <p>
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehend in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                </p>
            </div>
        </div>
    );
}
