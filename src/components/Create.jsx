import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPlayer } from "../features/playerDetailSlice";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  let [name, setName] = useState("Haaland");
  let [age, setAge] = useState("26");
  let [club, setClub] = useState("Barcelona");

  let navigate = useNavigate();

  let dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createPlayer({ name, age, club }));
    navigate("read");
  }

  return (
    <div>
      <button>Get back to list</button>

      <form onSubmit={handleSubmit}>
        <label>
          Enter Your Name
          <input
            type="text"
            placeholder="your name"
            name="player_name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />

        <label>
          Enter Your Team
          <input
            type="text"
            placeholder="your team"
            name="player_club"
            value={club}
            onChange={(e) => {
              setClub(e.target.value);
            }}
          />
        </label>
        <br />

        <label>
          Enter Your Age
          <input
            type="number"
            placeholder="your age"
            name="player_age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </label>
        {/* <Link to={"/"}> */}
        <div>
          <input type="submit" value="Submit" />
        </div>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default Create;
