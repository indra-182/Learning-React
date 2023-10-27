import React, { useEffect, useState } from "react";
import { getUsername } from "../components/services/auth.service";

const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};

export default useLogin;
