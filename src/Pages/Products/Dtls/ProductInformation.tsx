import React from 'react';

export default function ProductInformation({ active, image }: { active: string; image: { url: string[] } }) {
    return (
        <div id="des-details1" className={'tab-pane' + active}>
            <div
                className="product-anotherinfo-wrapper"
                style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center' }}
            >
                {/*<ul>*/}
                {/*    <li>*/}
                {/*        <span>Weight</span> 400 g*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <span>Dimensions</span>10 x 10 x 15 cm*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <span>Materials</span> 60% cotton, 40% polyester*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <span>Other Info</span> American heirloom jean shorts pug seitan letterpress*/}
                {/*    </li>*/}
                {/*</ul>*/}
                {image.url.map((productImg: string) => (
                    <img src={productImg} alt="img" key={productImg} style={{ display: 'block', width: '100%' }} />
                ))}
            </div>
        </div>
    );
}
