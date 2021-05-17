import React, {useEffect, useState} from 'react';
import { IJob } from '../types';
import FetchWrapper from './FetchWrapper';
import JobListing from './JobListing';
import {v4 as uuid} from 'uuid';
import {Link, useLocation} from 'react-router-dom';
import { JOBS } from '../api/useFetch';
import Button from '@material-ui/core/Button';
import { getSearchDifference, parsePageFromQuery, setValInQueryString, usePrevious, useQuery } from '../utils';


//const allowedQueryParams=["page", ]

const PaginatedJobFeed = () => {
  const [data, setData]=useState([]);
  const [isLoading, setIsLoading]=useState<boolean>(false);
  const [noMoreData, setNoMoreData]=useState(false);
  const [error, setError]=useState(null);
  
  const queryString=useLocation().search;
  const prevQueryString=usePrevious<string>(queryString);
    

  const fetchData = async (pageSize: number, queryString: string) => {
    /* 
      - sanatize query
      - check what changed
      - parse page
      - if only page changed load new page and merge it into what we already have
      - if one of the other searhparams changed replace the data 
    */
    setIsLoading(true);
    setNoMoreData(false);
    try {
      //console.log(`prev: ${prevQueryString} \n next: ${queryString}`);
      const prevQuery=new URLSearchParams(prevQueryString);
      const query=new URLSearchParams(queryString);
      // check what keys in the query changed
      const queryDif=getSearchDifference(prevQuery, query);
      //const adjustedQuery=new URLSearchParams

      

      const skip=(parsePageFromQuery(query) - 1) * pageSize;
      // adjust the query to include skip and limit instead of page
      query.set('skip', String(skip));
      query.set('limit', String(pageSize));
      query.delete('page'); // delete page since our api does not care about that

      const response = await fetch(`${JOBS}?${query.toString()}`);
      const result = await response.json();
      if (response.ok) {
        if(Array.isArray(result)){
          if(queryDif.has('page') && queryDif.size===1){ // if the only value that changed is the page
            // append the new page to the other data
            setData([...data, ...result]);
          }else{
            setData(result);
          }
          
        }else throw Error('Unexpected response format');
      } else if(response.status===404) {
        setNoMoreData(true);
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
      
      {!noMoreData && 
        <Link to={location=>({...location, search: new URLSearchParams({page: "2", name: "hello", a: "b"}).toString()})}>
          <Button color="primary" variant="contained">
              Next
          </Button>
        </Link>
      }
      
    </div>
    }
  </FetchWrapper>;
};

export default PaginatedJobFeed;
