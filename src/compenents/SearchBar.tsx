import { useState, type FC } from "react";
import type { SearchBarProps } from "../types/types";

const SearchBar: FC<SearchBarProps> = ({onSearch}) => {
  const [term, setTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
         setTerm(e.target.value); // update internal state
         onSearch(e.target.value); // send term to home page
  }

  return (
    <>
    <input type="search" name="search"  placeholder="Search by ID..."  value={term} onChange={handleChange}/>
    </>
  )
}

export default SearchBar
