import React from 'react';

export default function WishListForm() {
    return (
        <form action="#">
            <div className="table-content table-responsive cart-table-content">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>이미지</th>
                            <th>상품 정보</th>
                            {/* <th>판매가</th> */}
                            <th>수량</th>
                            <th>판매가</th>
                            <th>장바구니</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*{[...Array(4)].map((x, i: number) => (*/}
                        {/*// <TableItemBoxComponent key={i} />*/}
                        {/*// ))}*/}
                    </tbody>
                </table>
            </div>
        </form>
    );
}
