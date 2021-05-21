import React, {useEffect, useState} from 'react';
import { IJob } from '../types';
import FetchWrapper from './FetchWrapper';
import JobListing from './JobListing';
import {v4 as uuid} from 'uuid';
import {useHistory} from 'react-router-dom';
import { JOBS } from '../api/useFetch';
import { parsePageFromQuery, usePrevious, useQuery } from '../utils';
import Pagination from '@material-ui/lab/Pagination';
import Search from './Search';

const pageSize=4;

const PaginatedJobFeed = () => {
  const [data, setData]=useState([]);
  const [isLoading, setIsLoading]=useState<boolean>(false);
  const [error, setError]=useState(null);
  const [paginationState, setPagination]=useState<any>();
  const history=useHistory();
  const [query, setQuery]=useState(useQuery());
  const previousQuery=usePrevious(query);

  const fetchData = async (pageSize: number, query: URLSearchParams) => {
    setIsLoading(true);
    setError(null);
    try {
      const skip=(parsePageFromQuery(query) - 1) * pageSize;
      
      const requestQuery=new URLSearchParams(query.toString()); // create a new query
      requestQuery.set('skip', String(skip));
      requestQuery.set('limit', String(pageSize));
      requestQuery.delete('page'); // delete page since our api does not care about that

      const response = await fetch(`${JOBS}?${requestQuery.toString()}`);
      const result = await response.json();
      if (response.ok) {
        if(Array.isArray(result.jobs)){
          setData(result.jobs);
          // find the current page
          const totalItems=result.count;
          const totalPages=Math.ceil((totalItems / pageSize) || 0);
          const currentPage=Math.floor(result.start / pageSize);
          console.log(totalPages);
          setPagination({
            currentPage,
            totalPages
          });
          
        }else throw Error('Unexpected response format');
      }else {
        throw Error('Unexpected response code');
      }
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      setPagination(null);
    }
  };


  useEffect(()=>{
    const unregister=history.listen((location)=>{
      if(query?.toString()!==previousQuery?.toString()){
        setQuery(new URLSearchParams(location.search));
      }
    });
    fetchData(pageSize, query);
    return ()=> unregister();
  }, [query]);

  

  const updatePage=(page: number)=>{
    query.set('page', String(page));
    history.push({ 
      pathname: history.location.pathname,
      search: query.toString(),
      
    });
  };

  return <div>
    <Search/>
    <FetchWrapper isLoading={isLoading} hasError={!!error} data={data}>
      {({data}:{data: IJob[]})=><div>
        {data.map((job: IJob)=><JobListing job={job} key={uuid()}/>)}

      </div>
      }
    </FetchWrapper>
    {paginationState && 
      <Pagination 
        count={paginationState.totalPages} 
        defaultPage={1}
        page={parsePageFromQuery(query)} 
        onChange={(_, page: number)=>updatePage(page)}
      />
    }
  </div>
  ;
};

export default PaginatedJobFeed;
