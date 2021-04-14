import { useState, useEffect } from 'react';

export const BASE_PATH=process.env.NODE_ENV==='production'? 'https://kantimam.github.io/job-board' : '';

export const JOBS = `${BASE_PATH}/jobs.json`;

interface IFetchState {
  data: any,
  isLoading: boolean,
  hasError: boolean,
  errorMessage: string,
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
const useFetchJob = (jobId: string) => useFetch(`${BASE_PATH}/jobForId/${jobId}.json`);

export { useFetchJobs, useFetchJob };

export default useFetch;
