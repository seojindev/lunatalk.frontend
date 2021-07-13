import React, { useEffect } from 'react';
import publishList from '@Src/Data/publish-list';
export default function PublishPage() {
    useEffect(() => {
        console.debug(publishList);
    }, []);

    return <>PublishPage</>;
}
