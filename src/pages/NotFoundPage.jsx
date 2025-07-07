import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section>
        <h1>404 not Found</h1>
        <Link to="/">Back Home</Link>
    </section>
  )
}

export default NotFoundPage