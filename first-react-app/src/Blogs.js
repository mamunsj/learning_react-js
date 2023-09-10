import { Link } from "react-router-dom";
const BlogsList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>

            <button onClick={() => handleDelete(blog.id)}>Delete It</button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsList;
