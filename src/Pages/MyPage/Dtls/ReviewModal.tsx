import { addReview } from '@Src/Modules/API';
import { _Alert_ } from '@Src/Utils';
import React, { useState } from 'react';
import Modal from 'react-modal';

export default function ReviewModal({
    open,
    onChange,
    uuid,
}: {
    open: boolean;
    onChange: (bool: boolean, uuid: string) => void;
    uuid: string;
}) {
    const [review, setReview] = useState<{ title: string; review: string }>({
        title: '',
        review: '',
    });

    const onClickAddReview = async () => {
        if (review.title === '' || review.review === '') {
            _Alert_.default({ text: '제목과 내용을 입력해주세요.' });
        } else {
            const response = await addReview({ productUuid: uuid, title: review.title, review: review.review });
            if (response.status) {
                _Alert_.default({ text: response.payload.message });
                onChange(false, '');
                setReview({ title: '', review: '' });
            } else {
                _Alert_.default({ text: '일시적인 오류가 발생했습니다. 잠시후 이용해 주세요.' });
            }
        }
    };

    const reviewOnCange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setReview({
            ...review,
            [name]: value,
        });
    };
    return (
        <Modal
            isOpen={open}
            onRequestClose={() => onChange(false, '')}
            ariaHideApp={false}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // backgroundColor: 'rgba(255, 255, 255, 0.75)',
                },
                content: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px',
                    width: '330px',
                    height: '260px',
                },
            }}
        >
            <input
                type="text"
                placeholder="리뷰 제목을 입력해주세요."
                style={{ marginBottom: '20px' }}
                name="title"
                onChange={e => reviewOnCange(e)}
            />
            <textarea
                placeholder="리뷰 내용을 입력해주세요."
                style={{ height: '110px' }}
                name="review"
                onChange={e => reviewOnCange(e)}
            />
            <div className="review">
                <button
                    type="button"
                    style={{ background: '#a749ff', color: '#fff', border: 'none', width: '50%', height: '40px' }}
                    onClick={() => onClickAddReview()}
                >
                    작성하기
                </button>
                <button
                    type="button"
                    onClick={() => onChange(false, '')}
                    style={{
                        background: '#fff',
                        color: '#a749ff',
                        width: '50%',
                        height: '40px',
                        border: '1px solid #a749ff',
                    }}
                >
                    취소
                </button>
            </div>
        </Modal>
    );
}
