import { Link } from "react-router-dom";

const AdminFeed = () => {
  return (
    <div className="text-center">
      <h4>Go on your dashboard to manage users, courses and many more!</h4>
      <hr className="my-2" />
      <p className="lead">
        <Link className="btn btn-success btn-lg mt-5" to="/admin">
          Get started
        </Link>
      </p>
    </div> 
  )
}

export default AdminFeed;