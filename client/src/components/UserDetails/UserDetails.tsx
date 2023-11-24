import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
const UserDetails = () => {
  const { logout } = useLogout();
  const { state } = useAuthContext();
  console.log("user", state);
  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <div>
        <h1>User Details LoggedIn </h1>
        <span>{state.user?.email}</span>
        <button onClick={handleClick}>log out</button>
      </div>
    </div>
  );
};

export default UserDetails;
