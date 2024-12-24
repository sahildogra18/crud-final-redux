import React, { useEffect, useState } from "react";
import { editPlayer } from "../features/playerDetailSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  let [name, setName] = useState("");
  let [club, setClub] = useState("");
  let [age, setAge] = useState("");
  let [id, setId] = useState("");

  let navigate = useNavigate();

  let dispatch = useDispatch();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem(`name`));
    setClub(localStorage.getItem(`club`));
    setAge(localStorage.getItem(`age`));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("ID:", id);
    dispatch(editPlayer({ id, name, club, age }));
    navigate("/read");
  }

  return (
    <>
      <Link to={"/read"}>
        <button>Get back to list</button>
      </Link>
      <div>
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
    </>
  );
}

export default Edit;
