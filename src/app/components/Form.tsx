"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { getQuestionData } from "../lib/data";
import main from "../styles/main.module.css";
import { TForm } from "../lib/types";
import { handleOnSubmit } from "../lib/actions";

export default function Form() {
  const [form, setForm] = useState<TForm>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //   const handleOnSubmit = async (formData: FormData) => {
  //     const form = {
  //       name: formData.get("name"),
  //       email: formData.get("email"),
  //       password: formData.get("password"),
  //     };

  //     console.log(formData);
  //   };

  //   const onSubmit = () => {
  //     handleOnSubmit(form);
  //   };
  return (
    <div className={main.form}>
      <form
        style={{ display: "flex", flexDirection: "column", width: "50%" }}
        action={handleOnSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />
        <Button>Submit</Button>
      </form>
      <button></button>
    </div>
  );
}
