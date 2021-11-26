import React from 'react';

export default function ProductReview({ active, reviews }: { active: string; reviews: any[] }) {
    return (
        <div id="des-details3" className={'tab-pane' + active}>
            {reviews.length > 0 ? (
                reviews.map((item: any) => (
                    <div className="row" key={item.id} style={{ width: '100%', marginLeft: '1%', display: 'block' }}>
                        <div className="col-lg-15">
                            <div className="review-wrapper">
                                <div className="single-review">
                                    <div className="review-content" style={{ width: '100%' }}>
                                        <div className="review-top-wrap">
                                            <div className="review-left">
                                                <div className="review-name">
                                                    <h4>{item.title}</h4>
                                                </div>
                                                <div className="review-name">
                                                    <h4>{item.user_name}</h4>
                                                </div>
                                            </div>
                                            <div className="review-left">{item.created_at.type3}</div>
                                        </div>
                                        <div className="review-bottom">
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                                {item.answer.length === 0 ? null : (
                                    <div className="single-review child-review">
                                        <div className="review-content">
                                            <div className="review-top-wrap">
                                                <div className="review-left">
                                                    <div className="review-name">
                                                        <h4>{item.answer.title}</h4>
                                                    </div>
                                                    <div className="review-name">
                                                        <h4>Lunatalk</h4>
                                                    </div>
                                                </div>
                                                <div className="review-left">{item.answer.created_at.type3}</div>
                                            </div>
                                            <div className="review-bottom">
                                                <p>{item.answer.contents}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h3 style={{ textAlign: 'center', letterSpacing: '-1px' }}>리뷰가 존재 하지 않습니다.</h3>
            )}
        </div>
    );
}
