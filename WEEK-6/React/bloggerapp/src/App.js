import "./App.css";
import { books, blogs, courses } from "./books";

function App() {

  const bookdet = (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  const content = (
    <ul>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <h4>{blog.author}</h4>
          <p>{blog.description}</p>
        </div>
      ))}
    </ul>
  );

  const coursedet = (
    <ul>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.cname}</h2>
          <h4>{course.date}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div>

      <div className="container">

        <div className="course">
          <h1>Course Details</h1>
          {coursedet}
        </div>

        <div className="book">
          <h1>Book Details</h1>
          {bookdet}
        </div>

        <div className="blog">
          <h1>Blog Details</h1>
          {content}
        </div>

      </div>

    </div>
  );
}

export default App;