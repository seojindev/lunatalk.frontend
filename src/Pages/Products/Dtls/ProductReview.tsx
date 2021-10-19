import React from 'react';

export default function ProductReview({ active }: { active: string }) {
    return (
        <div id="des-details3" className={'tab-pane' + active}>
            <div className="row">
                <div className="col-lg-7">
                    <div className="review-wrapper">
                        <div className="single-review">
                            <div className="review-img">
                                <img
                                    src="http://dev.media.lunatalk.co.kr/storage/assets/img/testimonial/1.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="review-content">
                                <div className="review-top-wrap">
                                    <div className="review-left">
                                        <div className="review-name">
                                            <h4>White Lewis</h4>
                                        </div>
                                        <div className="review-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="review-left">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                                <div className="review-bottom">
                                    <p>
                                        Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae
                                        Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam
                                        nisi, congue id nulla.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="single-review child-review">
                            <div className="review-img">
                                <img
                                    src="http://dev.media.lunatalk.co.kr/storage/assets/img/testimonial/2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="review-content">
                                <div className="review-top-wrap">
                                    <div className="review-left">
                                        <div className="review-name">
                                            <h4>White Lewis</h4>
                                        </div>
                                        <div className="review-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="review-left">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                                <div className="review-bottom">
                                    <p>
                                        Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Sus
                                        pen disse viverra ed viverra. Mauris ullarper euismod vehicula.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                        <h3>Add a Review</h3>
                        <div className="ratting-form">
                            <form action="#">
                                <div className="star-box">
                                    <span>Your rating:</span>
                                    <div className="ratting-star">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="rating-form-style mb-10">
                                            <input placeholder="Name" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="rating-form-style mb-10">
                                            <input placeholder="Email" type="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="rating-form-style form-submit">
                                            <textarea name="Your Review" placeholder="Message"></textarea>
                                            <input type="submit" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
