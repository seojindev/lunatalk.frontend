import React from 'react';
import TableItemBoxComponent from '@Element/Box/TableItemBoxComponent';

export default function CartForm({ list, checkBoxOnChange, checkBox }: any) {
    return (
        <form action="#">
            <div className="table-content table-responsive cart-table-content">
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>
                                {list.length > 0 ? (
                                    <input
                                        type="checkbox"
                                        name="All"
                                        onChange={e => checkBoxOnChange(e)}
                                        checked={checkBox.length === list.length}
                                    />
                                ) : null}
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
                                        cartId={item.cartId}
                                        productUuid={item.productUuid}
                                        name={item.name}
                                        price={item.price}
                                        image={item.image}
                                        checkBox={checkBox}
                                        onChange={checkBoxOnChange}
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
