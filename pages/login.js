import React from "react";
import { useRouter } from "next/router";
import NavigationBar from "../Components/NavigationBar";
import styles from "../styles/Home.module.css";

const user = {
  username: "bika",
  password: "12345",
};

export default function login() {
  const router = useRouter();

  const handleSubmit = (event) => {
    // prevent refresh
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username === user.username && password === user.password) {
      localStorage.setItem("login_cookie", true);
      router.push("/");
    } else {
      window.alert("Username or Password Wrong. Please try again");
    }
  };

  return (
    <div className={styles.container}>
      <NavigationBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Login</h1>

        <form onSubmit={handleSubmit} className={styles["login-box"]}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
  );
}
