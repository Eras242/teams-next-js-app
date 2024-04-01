"use client";

import React, { useEffect, useState } from "react";
import login from "../styles/login.module.css";
import main from "../styles/main.module.css";
import { Button } from "../components/Button";
import { TForm } from "../lib/types";

import { handleLogin } from "../lib/actions";
export default function LoginForm() {
  const [loginSignUp, setLoginSignUp] = useState<boolean>(false);
  const [form, setForm] = useState<TForm>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // function loginSubmit() {
  //   setLoading(true);
  //   handleLogin(form);
  // }

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div className={login.container}>
      <form className={login.form}>
        <h1>Login</h1>
        <input
          className={login.inputText}
          name="email"
          value={form.email}
          type="text"
          placeholder="Email"
          onChange={onChange}
          required
        />
        <input
          className={login.inputText}
          name="password"
          value={form.password}
          type="text"
          placeholder="Password"
          onChange={onChange}
          required
        />
        {/* <div className={login.btnContainer}> */}
        <Button className={main.btn} formAction={handleLogin}>
          Login
        </Button>
        {/* </div> */}
      </form>
    </div>
  );
}
