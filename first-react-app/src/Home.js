import { useState, useEffect } from "react";
import BlogsList from "./Blogs";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
    console.log(newBlog);
  };

  // useEffect only run after initial render and in every re-render means when the state is changed; we use dependencies separated by comma to explicity says what to do;

  useEffect(() => {
    setTimeout(() => {
      fetch(" http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not find the data");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setBlogs(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogsList
          blogs={blogs}
          title="All the Blogs Post"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
