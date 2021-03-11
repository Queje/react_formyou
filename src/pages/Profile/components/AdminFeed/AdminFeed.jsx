import { Link } from "react-router-dom";

const AdminFeed = () => {
  return (
    <div className="text-center">
      <h4>Go on your dashboard to manage users, courses and so much more!</h4>
      <hr className="my-2" />
      <Link className="btn btn-success mt-5" to="/admin">
        Get started
      </Link>
    </div> 
  )
}

export default AdminFeed;