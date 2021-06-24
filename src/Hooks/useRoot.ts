import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useRoot() {
    // 체크 상태.
    const [AppBaseCheckState, setAppBaseCheckState] = useState<boolean>(false);

    return {
        AppBaseCheckState,
    };
}
