import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDetailsQuery } from "../../features/usersApiSlice";

const UserDashboard = () => {
  const dispatch = useDispatch();

  // const { data: user, isLoading } = useGetUserDetailsQuery(22);

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {}, []);

  return (
    <>
      {/* {!isLoading && token && user.id} */}
      <div>UserDashboard</div>
    </>
  );
};

export default UserDashboard;
