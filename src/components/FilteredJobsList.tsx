import React, {useEffect, useState} from 'react';
import { IJob } from '../types';
import FetchWrapper from './FetchWrapper';
import JobListing from './JobListing';
import {v4 as uuid} from 'uuid';
import {useHistory} from 'react-router-dom';
import { JOBS } from '../api/useFetch';
import { parsePageFromQuery } from '../utils';
import Pagination from '@material-ui/lab/Pagination';


const PaginatedJobFeed = () => {
  const [data, setData]=useState([]);
  const [isLoading, setIsLoading]=useState<boolean>(false);
  const [error, setError]=useState(null);
  const [paginationState, setPagination]=useState<any>();
  const history=useHistory();
  const queryString=history.location.search;
  const query=new URLSearchParams(queryString);
  const [page, setPage]=useState(parsePageFromQuery(query));

  const fetchData = async (pageSize: number, queryString: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const query=new URLSearchParams(queryString);
      const pageFromQuery=parsePageFromQuery(query);
      const skip=(page - 1) * pageSize;
      // adjust the query to include skip and limit instead of page
      query.set('skip', String(skip));
      query.set('limit', String(pageSize));
      query.delete('page'); // delete page since our api does not care about that

      const response = await fetch(`${JOBS}?${query.toString()}`);
      const result = await response.json();
      if (response.ok) {
        if(Array.isArray(result.jobs)){
          setData(result.jobs);
          // find the current page
          const totalItems=result.count;
          const totalPages=Math.ceil((totalItems / pageSize) || 0);
          const currentPage=Math.floor(result.start / pageSize);

          setPagination({
            //start: result.start,
            //end: result.start + result.loaded,
            //loaded: result.loaded,
            //total: result.cont,
            currentPage,
            totalPages
          })
          
        }else throw Error('Unexpected response format');
      }else {
        throw Error('Unexpected response code');
      }
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(2, queryString);
  }, [queryString]);


  return <FetchWrapper isLoading={isLoading} hasError={!!error} data={data}>
      {({data}:{data: IJob[]})=><div>
        {data.map((job: IJob)=><JobListing job={job} key={uuid()}/>)}

      </div>
      }
    </FetchWrapper>
};

export default PaginatedJobFeed;
