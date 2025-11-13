import { useEffect, useState } from "react";
import { getGuests, getSingleGuest } from "./guests";

function GuestList({ setGuestId }) {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const syncGuests = async () => {
      const data = await getGuests();
      console.log("data", data);
      setGuests(data);
    };
    syncGuests();
  }, []);
  return (
    <ul className="guest-list">
      {guests.map((guest) => (
        <li
          key={guest.id}
          onClick={() => {
            console.log("selectedGuest: ", guest);
            setGuestId(guest.id);
          }}
        >
          <strong>{guest.name}</strong>
          <span>{guest.email}</span>
          <br />
          <span>{guest.phone}</span>
        </li>
      ))}
    </ul>
  );
}

function GuestDetails({ oneGuestId, setGuestId }) {
  let [oneGuest, setOneGuest] = useState(null);

  useEffect(() => {
    const syncGuestDetails = async () => {
      if (!oneGuestId) return;
      const data = await getSingleGuest(oneGuestId);
      setOneGuest(data);
    };

    syncGuestDetails();
  }, [oneGuestId]);

  if (!oneGuest) {
    return <p>Select a recipe to see more details.</p>;
  }

  return (
    <section className="guest-details">
      <h2>Name: {oneGuest.name}</h2>
      <p>Email: {oneGuest.email}</p>
      <p>Phone: {oneGuest.phone}</p>
      <p>Bio: {oneGuest.bio}</p>
      <p>Job: {oneGuest.job}</p>
      <button onClick={() => setGuestId(null)}>Back</button>
    </section>
  );
}

export default function App() {
  const [guestId, setGuestId] = useState(null);

  return (
    <>
      {!guestId ? (
        <>
          <h1>Guest List</h1>
          <GuestList setGuestId={setGuestId} />
          <p>Select a recipe to see more details.</p>
        </>
      ) : (
        <GuestDetails oneGuestId={guestId} setGuestId={setGuestId} />
      )}
    </>
  );
}
