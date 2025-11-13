import { useState } from "react";

let guests = [
  {
    id: 1,
    name: "Penny Nickel",
    email: "penny@quarter.com",
    phone: "123-456-7890",
    bio: "oatmeal advocate",
    job: "Global Accounts Engineer",
  },
  {
    id: 2,
    name: "Puszek Kłebuszek",
    email: "Puszek@quarter.com",
    phone: "987-654-6543",
    bio: "koci advocate",
    job: "Global Accounts Myszka",
  },
  {
    id: 3,
    name: "Kizia Mizia",
    email: "Mizia@kizia.com",
    phone: "475-473-9987",
    bio: "dziabeł",
    job: "Global Dziabeł",
  },
];

function GuestList({ setGuest }) {
  return (
    <ul>
      {guests.map((guest) => (
        <li
          key={guest.id}
          onClick={() => {
            console.log("selectedGuest: ", guest);
            setGuest(guest);
          }}
        >
          {guest.name} {guest.email} {guest.phone}
        </li>
      ))}
    </ul>
  );
}

function GuestDetails({ oneGuest, setGuest }) {
  return (
    <section>
      <h2>Name: {oneGuest.name}</h2>
      <p>Email: {oneGuest.email}</p>
      <p>Phone: {oneGuest.phone}</p>
      <p>Bio: {oneGuest.bio}</p>
      <p>Job: {oneGuest.job}</p>
      <button onClick={() => setGuest(null)}>Back</button>
    </section>
  );
}

export default function App() {
  const [guest, setGuest] = useState(null);

  return (
    <>
      <h1>Guest List</h1>
      {!guest ? (
        <>
          <GuestList setGuest={setGuest} />
          <p>Select a recipe to see more details.</p>
        </>
      ) : (
        <GuestDetails oneGuest={guest} setGuest={setGuest} />
      )}
    </>
  );
}
