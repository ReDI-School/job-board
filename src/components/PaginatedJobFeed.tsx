import React, {useEffect, useState} from 'react';
import { IJob } from '../types';
import FetchWrapper from './FetchWrapper';
import JobListing from './JobListing';
import {v4 as uuid} from 'uuid';
import {Link, useLocation} from 'react-router-dom';
import { JOBS } from '../api/useFetch';
import Button from '@material-ui/core/Button';

interface Props {
    pageSize?: number
}

function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}
function usePageQuery(): number {
  const pageQuery=useQuery().get('page');
  const pageNumber=pageQuery ? parseInt(pageQuery) : 1;
  return pageNumber>0? pageNumber : 1;
}

function setPageInQueryString(query:string, page: number): string {
  const queryObject=new URLSearchParams(query);
  queryObject.set('page', String(page));
  return queryObject.toString();
}

const PaginatedJobFeed = ({pageSize=20}: Props) => {
  const [data, setData]=useState([]);
  //const [pagination, setPagination]=useState();
  const [isLoading, setIsLoading]=useState<boolean>(false);
  const [error, setError]=useState(null);
  const page: number=usePageQuery();
    
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        
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
  }, [page, pageSize]);



  return <FetchWrapper isLoading={isLoading} hasError={!!error} data={data}>
    {({data}:{data: IJob[]})=><div>
      {data.map((job: IJob)=><JobListing job={job} key={uuid()}/>)}
      <Link to={location=>({...location, search: setPageInQueryString(location.search, page + 1)})}>
        <Button color="primary" variant="contained" onClick={()=>console.log('asd')}>
            Next
        </Button>
      </Link>
      
    </div>
    }
  </FetchWrapper>;
};

export default PaginatedJobFeed;
