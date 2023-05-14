import { useState, useEffect } from "react";
import useApiHook from "../../hooks/useApiHook";
import useDebounce from "../../hooks/useDebounce";
import SearchResultsContainer from "./SearchResultsContainer";

function SearchContainer() {
  const [searchInput, setSearchInput] = useState("");

  const debouncedSearchInput = useDebounce(searchInput, 1000);
  const SEARCH_URL = `https://dummyjson.com/products/search?q=${debouncedSearchInput}`;
  const [data, error, status, fetchData] = useApiHook(SEARCH_URL);

  useEffect(() => {
    console.log("Inside useEffect");
    if (debouncedSearchInput) {
      fetchData();
    }
  }, [debouncedSearchInput]);

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function getListData() {
    console.log("Inside getListData - data", data);
    console.log("Inside getListData - data", status);
    if (!searchInput) {
      return [];
    }
    if (data && status == "fetched") {
      console.log("getListData - if - data", data);
      return data.products;
    } else {
      return [];
    }
  }

  return (
    <div>
      <h3>Search Container</h3>
      <div>
        <label htmlFor="searchInput">
          <input value={searchInput} onChange={handleChange}></input>
        </label>
        <SearchResultsContainer data={getListData()} />
      </div>
    </div>
  );
}

export default SearchContainer;
