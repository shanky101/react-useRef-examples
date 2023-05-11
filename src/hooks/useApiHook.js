import { useState } from "react";

function useApiHook(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");

  async function fetchData() {
    if (!url) return;

    try {
      setStatus("fetching");
      const response = await fetch(url);
      const data = await response.json();
      setStatus("fetched");
      setData(data);
    } catch (error) {
      console.log("error fetching data", url, error);
      setStatus("rejected");
      setError(error);
    }
  }

  return [data, error, status, fetchData];
}

export default useApiHook;
