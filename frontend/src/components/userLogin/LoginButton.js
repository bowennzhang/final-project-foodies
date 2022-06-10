import { useAuth0 } from "@auth0/auth0-react";

import styled from "styled-components";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";

const LoginButton = () => {
  const [currentuser, setCurrentuser] = useState({});
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/api/add-user", {
        method: "POST",
        body: JSON.stringify({
          user: user,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          setCurrentuser(data.message);
        });
    }
  }, [user]);

  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>
        <AccountCircleIcon currentuser={currentuser} />
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
