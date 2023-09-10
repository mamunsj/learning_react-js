// //  testing purpose*******************
// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const abortController = new AbortController();

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url, { signal: abortController.signal });

//         if (!response.ok) {
//           throw new Error("Could not find the data");
//         }

//         const responseData = await response.json();
//         setIsPending(false);
//         setData(responseData);
//         setError(null);
//       } catch (err) {
//         if (err.name === "AbortError") {
//           console.log("Fetch Aborted");
//         } else {
//           setIsPending(false);
//           setError(err.message);
//         }
//       }
//     };

//     fetchData();

//     return () => {
//       abortController.abort();
//     };
//   }, [url]);

//   return { data, isPending, error };
// };

// export default useFetch;

import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // useEffect only run after initial render as well as in every re-render means when the state is changed; we use dependencies separated by comma to explicity says what to do;

  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not find the data");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 500);
    return () => {
      abortController.abort();
    };
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
