/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export const useAsyncData = (loader, deps = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    const run = async () => {
      try {
        setLoading(true);
        setError('');
        const result = await loader();
        if (active) setData(result);
      } catch (err) {
        if (active) setError(err.message || 'حدث خطأ أثناء جلب البيانات');
      } finally {
        if (active) setLoading(false);
      }
    };

    run();

    return () => {
      active = false;
    };
  }, deps);

  return { data, loading, error, setData };
};
