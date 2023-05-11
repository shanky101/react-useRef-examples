import { useState, useRef, useEffect } from "react";
import useApiHook from "./useApiHook";
import List from "./List";
import classes from "./UserList.module.css";

const urlT = `https://picsum.photos/v2/list`;
const url = `https://reqres.in/api/users?page=1`;

function UserList() {
  const [page, setPage] = useState(1);

  const url = `https://reqres.in/api/users?page=${page}`;
  const [data, error, status, fetchData] = useApiHook(url);

  useEffect(() => {
    fetchData();
  }, [url]);

  const isDisabled = () => {
    return page == 1;
  };

  const handleNextPageFetch = () => {
    setPage(() => page + 1);
  };

  const handlePreviousPageFetch = () => {
    if (page == 1) return;
    setPage(() => page - 1);
  };

  function getData() {
    if (status == "fetched") {
      const listItems = data?.data;
      return listItems;
    }
  }

  return (
    <div>
      Users List
      <br />
      <br />
      <div className={classes.buttonContainer}>
        <button onClick={handlePreviousPageFetch} disabled={isDisabled()}>
          Fetch previous page
        </button>
        <button onClick={handleNextPageFetch}>Fetch next page</button>
      </div>
      <br />
      {status == "rejected" && <p>Error fetching users. Please try again</p>}
      {status == "fetching" ? (
        <p>Loading data</p>
      ) : (
        <List data={getData()} status={status} />
      )}
    </div>
  );
}

export default UserList;
