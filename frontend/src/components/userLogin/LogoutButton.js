import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button onClick={() => logout()}>
        <LogoutIcon />
      </Button>
    )
  );
};

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export default LogoutButton;
