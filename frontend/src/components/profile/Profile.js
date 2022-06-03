import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        {JSON.stringify(user, null, 2)}
        <div>{user.name}</div>
        <img src={user.picture} alt="profileImg" />
      </div>
    )
  );
};

export default Profile;
