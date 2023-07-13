"use client";
import styles from "./page.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await getUserData(username, password);
      const userToken = data.token;
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h1 className={styles.heading}>Login</h1>
      <div className={styles.formContainer}>
        {error && <p>{error}</p>}
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={styles.formGroup}>
            <button className={styles.submit} type="submit">
              Login
            </button>
          </div>
        </form>
        <p>
          <Link className={styles.signupLink} href={"#"}>
            Forgot your passord?
          </Link>
        </p>
        <p>
          New user?{" "}
          <Link className={styles.signupLink} href="/signup">
            Sign up here!
          </Link>
        </p>
      </div>
    </div>
  );
}

export async function getUserData(username: string, password: string) {
  const headers = {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch("https://fakestoreapi.com/auth/login", headers);
  const data = await response.json();

  return data;
}
