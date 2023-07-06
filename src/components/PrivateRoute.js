import { Navigate, Outlet } from "react-router-dom";
import { useGetUserDetailsQuery } from "../features/usersApiSlice";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const PrivateRoute = () => {
  const { data: user, isLoading, isError, error } = useGetUserDetailsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) {
    console.log(error);
    dispatch(logout());
    return <Navigate to="/login" replace />;
  } else return <Outlet />;
};

export default PrivateRoute;
