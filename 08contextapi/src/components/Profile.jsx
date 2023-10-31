import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return <div>Profile {user?.userName}</div>;
};

export default Profile;
