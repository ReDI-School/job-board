import { useEffect, useRef } from 'react';
import {useLocation} from 'react-router-dom';


export const formatDate = (isoDate: string): string => {
  try {
    const hoursAgo = Math.floor(
      (new Date(isoDate).getTime() - Date.now()) / (1000 * 60 * 60)
    );
    /* tslint:disable-next-line */
    const rtf = new Intl.RelativeTimeFormat('en');

    if (hoursAgo < 24) {
      return rtf.format(hoursAgo, 'hour');
    }
    return rtf.format(Math.floor(hoursAgo / 24), 'day');
  } catch {
    return '';
  }
};

export function usePrevious<T>(value: T): T {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef<T>();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}
export function parsePageFromQuery(query: URLSearchParams): number {
  const pageQuery=query.get('page');
  const pageNumber=pageQuery ? parseInt(pageQuery) : 1;
  return pageNumber>0? pageNumber : 1;
}
export function usePageQuery(): number {
  const pageQuery=useQuery().get('page');
  const pageNumber=pageQuery ? parseInt(pageQuery) : 1;
  return pageNumber>0? pageNumber : 1;
}

export function setValInQueryString(query:string, key:string, val: string): string {
  const queryObject=new URLSearchParams(query);
  queryObject.set(key, val);
  return queryObject.toString();
}

export function getSearchDifference(search1: URLSearchParams, search2: URLSearchParams): Set<string> {
  const difference=new Set<string>();

  search1.forEach((val, key)=>{
    if(search2.get(key)!==val) difference.add(key);
  });
  search2.forEach((val, key)=>{
    if(search1.get(key)!==val) difference.add(key);
  });
  
  return difference;
}