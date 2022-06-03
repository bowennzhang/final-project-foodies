import { useAuth0 } from "@auth0/auth0-react";

import styled from "styled-components";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>
        <AccountCircleIcon />
      </Button>
    )
  );
};

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #feae49;
  }
`;

export default LoginButton;
