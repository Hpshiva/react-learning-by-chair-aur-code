import React, { useEffect, useState } from "react";

function UseFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      });
  }, [url]);
  return { data, loading };
}

export default UseFetch;
