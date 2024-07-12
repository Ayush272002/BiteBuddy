import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: { returnTo: API_BASE_URL },
    });
  };

  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        User Profile
      </Link>

      {isAuthenticated && (
        <Button
          onClick={handleLogout}
          className="flex items-center px-3 font-bold hover:bg-gray-500"
        >
          Log Out
        </Button>
      )}
    </>
  );
};

export default MobileNavLinks;
