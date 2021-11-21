import React from 'react';
import TableItemBoxComponent from '@Element/Box/TableItemBoxComponent';

export default function CartForm({ list }: any) {
    return (
        <form action="#">
            <div className="table-content table-responsive cart-table-content">
                <table style={{ width: '100%' }}>
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
                            <th>구매하기</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.length > 0 ? (
                            list.map(
                                (
                                    item: {
                                        cartId: number;
                                        productUuid: string;
                                        price: string;
                                        image: string;
                                        count: number;
                                        name: string;
                                    },
                                    i: number
                                ) => (
                                    <TableItemBoxComponent
                                        key={i}
                                        productUuid={item.productUuid}
                                        name={item.name}
                                        price={item.price}
                                        image={item.image}
                                    />
                                )
                            )
                        ) : (
                            <tr>
                                <td colSpan={6}>
                                    <h3>장바구니가 비어 있습니다.</h3>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </form>
    );
}
