import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PublishPageStyle.css';
import publishList from '@Src/Data/publish-list';

export default function PublishPage() {
    const [pubList, setPublist] = useState<
        {
            name: string;
            component: string;
            progress: string;
        }[]
    >([]);

    useEffect(() => {
        const setPageList = (
            pageItem: {
                name: string;
                component: string;
                progress: string;
            }[]
        ) => {
            setPublist(
                pageItem.map((e: { name: string; component: string; progress: string }) => {
                    return {
                        name: e.name,
                        component: e.component,
                        progress: e.progress,
                    };
                })
            );
        };

        if (publishList && publishList.length > 0) {
            setPageList(publishList);
        }
    }, []);

    return (
        <>
            <div className="title-wrapper">
                <h2>LunaTalk Publish List</h2>
            </div>

            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>컴포넌트</th>
                            <th>링크</th>
                            <th>진행상황</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pubList &&
                            pubList.map((item, n) => {
                                return (
                                    <tr key={n}>
                                        <td>{item.name}</td>
                                        <td>{`@Publish/${item.component}`}</td>
                                        <td>
                                            <Link
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                to={process.env.PUBLIC_URL + `/publishs/${item.name}`}
                                            >
                                                {`${process.env.PUBLIC_URL}/publishs/${item.name}`}
                                            </Link>
                                        </td>
                                        <td>{item.progress}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
