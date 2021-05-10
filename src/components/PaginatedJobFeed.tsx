import React, {useEffect, useState} from 'react';
import { IJob } from '../types';
import FetchWrapper from './FetchWrapper';
import JobListing from './JobListing';
import {v4 as uuid} from 'uuid';
import {useLocation} from 'react-router-dom';
import { JOBS } from '../api/useFetch';

interface Props {
    pageSize?: number
}

function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

const PaginatedJobFeed = ({pageSize=20}: Props) => {
  const [data, setData]=useState([]);
  const [pagination, setPagination]=useState();
  const [isLoading, setIsLoading]=useState<boolean>(false);
  const [error, setError]=useState(null);
  const pageQuery=useQuery().get('page');
    
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const pageNumber=pageQuery ? parseInt(pageQuery) : 1;
        const page: number=pageNumber>0? pageNumber : 1;
        const skip=(page - 1) * pageSize;
        const response = await fetch(`${JOBS}?skip=${skip}&limit=${pageSize}`);
        const result = await response.json();
        if (response.ok) {
          if(Array.isArray(result)){
            setData([...data, ...result]);
          }else throw 'Unexpected response format';
        } else {
          throw 'Unexpected response code';
        }
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [pageQuery, pageSize]);


  return <FetchWrapper isLoading={isLoading} hasError={!!error} data={data}>
    {({data}:{data: IJob[]})=><>
      {data.map((job: IJob)=><JobListing job={job} key={uuid()}/>)}
    </>
    }
  </FetchWrapper>;
};

export default PaginatedJobFeed;
