import { useState, useEffect } from 'react';

export const BASE_PATH = 'https://jobs-api.communityredi.school';
//export const BASE_PATH='http://localhost:8000';

export const JOBS = `${BASE_PATH}`;

interface IFetchState {
  data: any;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
}

const useFetch = (url: string): IFetchState => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (response.ok) {
          setData(result);
        } else {
          setHasError(true);
          setErrorMessage(result);
        }
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, hasError, errorMessage };
};

const useFetchJobs = () => useFetch(JOBS);
const useFetchJob = (jobId: string) => useFetch(`${JOBS}/${jobId}`);

export { useFetchJobs, useFetchJob };

export default useFetch;
