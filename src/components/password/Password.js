import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../store/constants";
import { set } from "react-hook-form";
const Password = () => {
  const [email, setEmail] = useState("");
  const forgot = async () => {
    const reset = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}
        `,
      { requestType: "PASSWORD_RESET", email: email }
    );
    console.log("RESETTED", reset);
  };
  return (
    <div>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={forgot}>Submit</button>
    </div>
  );
};

export default Password;
