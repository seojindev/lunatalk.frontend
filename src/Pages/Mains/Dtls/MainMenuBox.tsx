import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryAction } from '@Store/Main';
import { RootState } from 'StoreTypes';
import { MainCategory } from 'CommonTypes';

export default function MainMenuBox() {
    const dispatch = useDispatch();
    const { main_category } = useSelector((store: RootState) => ({
        main_category: store.main.main_category,
    }));
    const [mainCategory, setMainCategory] = useState<{ name: string; imgUrl: string; uuid: string }[]>([]);

    useEffect(() => {
        dispatch(getCategoryAction());
    }, []);

    useEffect(() => {
        if (main_category) {
            const result = main_category.map((item: MainCategory) => {
                return {
                    name: item.name,
                    uuid: item.uuid,
                    imgUrl: item.image.url,
                };
            });
            setMainCategory(result);
        }
    }, [main_category]);
    return (
        <>
            {mainCategory.map((item: { imgUrl: string; name: string; uuid: string }) => {
                return (
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={item.uuid}>
                        <Link to={`category/${item.uuid}`}>
                            <div className="support-wrap mb-20 support-1">
                                <div className="support-icon">
                                    <img className="animated" src={item.imgUrl} alt="" />
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </>
    );
}
