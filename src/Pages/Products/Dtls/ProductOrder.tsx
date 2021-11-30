import React, { useEffect, useState } from 'react';
import { _Alert_ } from '@Util/index';
import _ from 'lodash';
import { IoClose } from 'react-icons/io5';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { addProductToCart } from '@API';

export default function ProductOrder({
    uuid,
    name,
    originalPrice,
    price,
    numberPrice,
    color,
    wireless,
    quantity,
    reviewCount,
}: {
    uuid: string;
    name: string;
    originalPrice: string;
    price: string;
    numberPrice: number;
    color: any;
    wireless: any;
    quantity: number;
    reviewCount: number;
}) {
    const [selectProduct, setSelectProduct] = useState<
        {
            name: string;
            color?: string;
            wireless?: string;
            count: number;
        }[]
    >([]);

    const [selectOption, setSelectOption] = useState<{ color: string; wireless?: string }>({
        color: '',
        wireless: '',
    });

    const onChangeSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSelectOption({
            ...selectOption,
            [name]: value,
        });
    };

    const productCountPlusOrMinus = (name: string, status: string) => {
        const find = _.find(selectProduct, { name: name });
        if (find?.count && find.count === 1 && status === 'minus') {
            _Alert_.default({ text: `0개 이상 구매하여야 합니다.` });
        } else if (find?.count && find.count >= quantity) {
            setSelectProduct(
                selectProduct.map(product => (product.name === name ? { ...product, count: 1 } : product))
            );
            _Alert_.default({ text: `한정 수량 ${quantity}개 이상 구매 할 수 없습니다.` });
        } else {
            setSelectProduct(
                selectProduct.map(product =>
                    product.name === name
                        ? { ...product, count: status === 'plus' ? product.count + 1 : product.count - 1 }
                        : product
                )
            );
        }
    };

    const onChangeProductCountInput = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) > quantity) {
            setSelectProduct(
                selectProduct.map(product => (product.name === name ? { ...product, count: 1 } : product))
            );
            _Alert_.default({ text: `한정 수량 ${quantity}개 이상 구매 할 수 없습니다.` });
        } else {
            setSelectProduct(
                selectProduct.map(product =>
                    product.name === name ? { ...product, count: Number(e.target.value) } : product
                )
            );
        }
    };

    const deleteSelectProduct = (name: string) => {
        setSelectProduct(selectProduct.filter(product => product.name !== name));
    };

    const selectedOption = () => {
        if (selectOption.color !== '') {
            if (wireless.length === 0) {
                if (selectOption.color) {
                    const find = _.find(selectProduct, product => {
                        return product.color === selectOption.color;
                    });
                    if (find) {
                        _Alert_.default({ text: '이미 선택된 옵션 입니다.' });
                        setSelectOption({ color: '', wireless: '' });
                    } else {
                        const selectedProduct = {
                            name: name,
                            color: selectOption.color,
                            count: 1,
                        };
                        setSelectOption({ color: '', wireless: '' });
                        setSelectProduct([...selectProduct, selectedProduct]);
                    }
                }
            } else {
                const find = _.find(selectProduct, product => {
                    return product.color === selectOption.color && product.wireless === selectOption.wireless;
                });
                if (find) {
                    _Alert_.default({ text: '이미 선택된 옵션 입니다.' });
                    setSelectOption({ color: '', wireless: '' });
                } else {
                    const selectedProduct = {
                        name: name,
                        color: selectOption.color,
                        wireless: selectOption.wireless,
                        count: 1,
                    };
                    setSelectOption({ color: '', wireless: '' });
                    setSelectProduct([...selectProduct, selectedProduct]);
                }
            }
        }
    };

    const productToCart = async (uuid: string) => {
        const response = await addProductToCart({ productUuid: uuid });
        if (response.status) {
            _Alert_.default({ text: response.payload.message });
        } else {
            _Alert_.default({ text: response.message });
        }
    };

    useEffect(() => {
        selectedOption();
    }, [selectOption]);

    return (
        <div className="col-lg-6 col-md-6">
            <div className="product-details-content ml-70">
                <h2>{name}</h2>
                <div className="product-details-price">
                    <span>{price}원</span>
                    <span className="old">{originalPrice}원 </span>
                </div>
                <div className="pro-details-rating-wrap">
                    <span>
                        <a href="#">{reviewCount} 리뷰</a>
                    </span>
                </div>
                <div className="pro-details-size-color">
                    {color.length > 0 ? (
                        <select
                            name="color"
                            onChange={e => onChangeSelectOption(e)}
                            value={selectOption.color}
                            // onClick={() => selectedOption()}
                        >
                            <option value="">색상을 선택해주세요.</option>
                            {color.map((item: any) => (
                                <option value={item.name} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    ) : null}
                    {wireless.length > 0 ? (
                        <select
                            name="wireless"
                            onChange={e => onChangeSelectOption(e)}
                            value={selectOption.wireless}
                            // onClick={() => selectedOption()}
                        >
                            <option value="">옵션을 선택해주세요.</option>
                            {wireless.map((item: any) => (
                                <option value={item.name} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    ) : null}
                </div>
                {selectProduct.length > 0
                    ? selectProduct.map((product, i) => (
                          <div key={i} style={{ border: '1px solid #ececec', padding: '10px' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                  <p>
                                      {product.color} {product.wireless}
                                  </p>
                                  <button
                                      type="button"
                                      onClick={() => deleteSelectProduct(product.name)}
                                      style={{ background: '#fff', border: 'none' }}
                                  >
                                      <IoClose size={20} />
                                  </button>
                              </div>
                              <div
                                  style={{
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      padding: '10px 0',
                                      alignContent: 'center',
                                  }}
                              >
                                  <input
                                      type="text"
                                      name="count"
                                      value={product.count}
                                      onChange={e => onChangeProductCountInput(product.name, e)}
                                      style={{ width: '45px', paddingLeft: '0', textAlign: 'center' }}
                                  />
                                  <div>
                                      <button
                                          type="button"
                                          onClick={() => productCountPlusOrMinus(product.name, 'plus')}
                                          style={{ background: '#fff' }}
                                          disabled={product.count === quantity}
                                      >
                                          <AiOutlinePlus />
                                      </button>
                                      <button
                                          type="button"
                                          onClick={() => productCountPlusOrMinus(product.name, 'minus')}
                                          style={{ background: '#fff' }}
                                          disabled={product.count === 1}
                                      >
                                          <AiOutlineMinus />
                                      </button>
                                  </div>
                              </div>
                          </div>
                      ))
                    : null}
                <div
                    style={{
                        padding: '20px 0',
                        borderTop: '1px solid #e4e4e5',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <p>총 상품 가격</p>
                    <p>
                        {selectProduct.length > 0
                            ? _.sumBy(selectProduct, product => {
                                  return product.count * numberPrice;
                              }).toLocaleString()
                            : 0}
                        원
                    </p>
                </div>
                <div className="btn_wrap">
                    <button type="button" className="large btn-hover">
                        구매하기
                    </button>
                    <button type="button" className="large btn-hover" onClick={() => productToCart(uuid)}>
                        장바구니
                    </button>
                    {/*<button type="button" className="btn-favor">*/}
                    {/*    <BsFillHeartFill />*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    );
}
