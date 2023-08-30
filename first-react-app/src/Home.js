import { useState, useEffect } from "react";
import BlogsList from "./Blogs";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  const [updatedBlogs, setUpdatedBlogs] = useState([]);

  useEffect(() => {
    if (blogs) {
      setUpdatedBlogs(blogs);
    }
  }, [blogs]);

  const handleDelete = (id) => {
    const newBlogs = updatedBlogs.filter((blog) => blog.id !== id);
    setUpdatedBlogs(newBlogs);
    console.log(newBlogs);
  };

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {updatedBlogs && (
        <BlogsList
          blogs={updatedBlogs}
          title="All the Blogs Post"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
