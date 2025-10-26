import { useEffect, useState } from "react";

export const useDebounce = <T,>(value: T, delay = 500)=>{
          const [isDebounced , setIsDebounced] = useState<T>(value);

          useEffect(()=>{
                 const timeout = setTimeout(()=>{
                  setIsDebounced(value)
                 }, delay);
                 return ()=> clearTimeout(timeout);
          },[value, delay])
          return isDebounced
}