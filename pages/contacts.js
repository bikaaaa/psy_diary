import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavigationBar from "../Components/NavigationBar";

const clients = [
  {
    id: 1,
    name: "John Doe",
    number: "000-000-000",
    email: "example@example.com",
    notes: "righjerigjeriogjreojg",
  },
  {
    id: 2,
    name: "John Doe",
    number: "000-000-000",
    email: "example@example.com",
    notes: "righjeriergreregergreg4ergergregergreggjeriogjreojg",
  },
  {
    id: 3,
    name: "John Doe",
    number: "000-000-000",
    email: "example@example.com",
    notes: "righjerigjeriogjreojg",
  },
  {
    id: 4,
    name: "John Doe",
    number: "000-000-000",
    email: "example@example.com",
    notes: "righjerigjeriogjreojg",
  },
  {
    id: 5,
    name: "John Doe",
    number: "000-000-000",
    email: "example@example.com",
    notes: "righjerigjeriogjreojg",
  },
];

export default function about() {
  const [selectedClient, setSelectedClient] = useState({});

  const handleSelectClient = (id) => {
    const client = clients.find((client) => client.id === id);
    setSelectedClient(client);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>PsyDiary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Your Contacts</h1>
        <p className={styles.p}>Here you can find all your clients.</p>

        <div style={{ display: "inline-flex", gap: "15px", width: "100vw" }}>
          <ol>
            {clients.map((client) => (
              <li
                onClick={() => handleSelectClient(client.id)}
                style={{
                  width: "400px",
                  textAlign: "center",
                  padding: "40px 40px",
                  border: "solid 2px white",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
              >
                {client.name}{" "}
              </li>
            ))}
          </ol>{" "}
        </div>
        {selectedClient && (
          <div
            style={{
              position: "absolute",

              marginLeft: "300px",
              border: "solid 2px white",
              width: "40vw",
            }}
          >
            <h1
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: "190px",
                height: "200px",
                textAlign: "center",
                alignItems: "center",
                width: "200px",
                borderRadius: "100px",
                border: "solid 3px white",
              }}
            >
              {selectedClient.name && selectedClient.name.charAt(0)}
            </h1>
            <div
              style={{
                lineHeight: "120px",
                height: "120px",
                textAlign: "center",
                width: "100%",
                border: "solid 3px white",
              }}
            >
              <h1>Name: {selectedClient.name}</h1>
            </div>
            <div
              style={{
                lineHeight: "120px",
                height: "120px",
                textAlign: "center",
                width: "100%",
                border: "solid 3px white",
              }}
            >
              <h1>Phone: {selectedClient.number}</h1>
            </div>
            <div
              style={{
                lineHeight: "120px",
                height: "120px",
                textAlign: "center",
                width: "100%",
                border: "solid 3px white",
              }}
            >
              <h1>Email: {selectedClient.email}</h1>
            </div>
            <div
              style={{
                height: "150px",
                textAlign: "center",
                width: "100%",
                border: "solid 3px white",
              }}
            >
              <h1>Notes:</h1> <p>{selectedClient.notes}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
