import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavigationBar from "../Components/NavigationBar";

export default function about() {
  const router = useRouter();
  const [days, setDays] = useState([
    { monday: [] },
    { tuesday: [] },
    { wednesday: [] },
    { thursday: [] },
    { friday: [] },
    { saturday: [] },
    { sunday: [] },
  ]);

  useEffect(() => {
    const storedCal = JSON.parse(localStorage.getItem("calendar"));

    if (storedCal) {
      setDays(storedCal);
    }
  }, []);

  const handleAddEvent = (event) => {
    event.preventDefault();

    const day = event.target.day.value;
    const name = event.target.name.value;

    days.forEach((dayObj) => {
      if (day === Object.keys(dayObj)[0]) {
        dayObj[day].push({ name });
      }
    });
    localStorage.setItem("calendar", JSON.stringify(days));
    router.push("/calendar");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>PsyDiary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Calendar</h1>
        <p className={styles.p}> Find all your past and upcoming sessions.</p>
        <form onSubmit={handleAddEvent}>
          <h2>Add Event</h2>
          <label htmlFor="day">Day</label>
          <select style={{ marginLeft: "20px" }} id="day">
            {days.map((day) => (
              <option value={Object.keys(day)[0]}>
                {Object.keys(day)[0].toUpperCase()}
              </option>
            ))}
          </select>{" "}
          <label style={{ marginLeft: "20px" }} htmlFor="name">
            Name
          </label>
          <input id="name" style={{ marginLeft: "20px" }} type="text" />
          <button>Add</button>
        </form>
        <div className={styles["calendar-container"]}>
          {days.map((day) => (
            <div>
              <h1>{Object.keys(day)[0].toUpperCase()}</h1>
              <div>
                {Object.values(day)[0].map((event) => (
                  <div style={{ border: "solid 2px white", textAlign: "center" }}>
                    <p>{event.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
