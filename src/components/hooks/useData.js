import { useEffect, useState } from "react";

export default function useData({
  url,
  params = {},
  condition = true,
  cache = "force-cache",
  debounceTime = 0,
}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(condition);

  const baseUrl = new URL(url);
  baseUrl.search = new URLSearchParams(params).toString();
  const fetchUrl = baseUrl.toString();

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    if (!condition) {
      abortController.abort();
      setLoading(false);
      return;
    }

    setLoading(true);

    const debounceFetch = setTimeout(
      () =>
        fetch(fetchUrl, { signal, cache })
          .then((res) => res.json())
          .then((result) => {
            if (!signal.aborted) {
              setData(result);
              setError(null);
              setLoading(false);
            }
          })
          .catch((err) => {
            if (!signal.aborted) {
              setError(err);
              setLoading(false);
            }
          }),
      debounceTime,
    );

    return () => {
      clearTimeout(debounceFetch);
      abortController.abort();
    };
  }, [fetchUrl, condition]);

  return { data, error, loading };
}
