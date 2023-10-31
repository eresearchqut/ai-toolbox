import React from 'react';

export default function useData(url, params) {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const fetchUrl = new URL(url);
        fetchUrl.search = new URLSearchParams(params).toString();
        fetch(fetchUrl)
            .then(res => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);
    return {data, error, loading};
}
