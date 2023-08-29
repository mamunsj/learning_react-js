import { useState, useEffect } from "react";
import BlogsList from "./Blogs";

const Home = () => {
  const [name, setName] = useState("Ujjal");
  const [age, setAge] = useState(24);
  const [blogs, setBlogs] = useState([
    {
      title: "My favourite Websites",
      body: "Lorem ispum.....",
      author: "Mamun Ujjal",
      id: 1,
    },
    {
      title: "My favourite Pet",
      body: "Lorem ispum.....",
      author: "Tareq Monwer",
      id: 2,
    },
    {
      title: "My favourite Game",
      body: "Lorem ispum.....",
      author: "Mamun Ujjal",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
    console.log(newBlog);
  };

  // useEffect only run after initial render and in every re-render means when the state is changed; we use dependencies separated by comma to explicity says what to do;

  useEffect(() => {
    console.log("useEffect ran");
  }, [name, blogs]);

  return (
    <div className="home">
      <BlogsList
        blogs={blogs}
        title="All the Blogs Post"
        handleDelete={handleDelete}
      />
      <button
        onClick={() => {
          setName("Mamun Sj");
        }}
      >
        Click me{" "}
      </button>
      <h2>{name}</h2>
    </div>
  );
};

export default Home;
