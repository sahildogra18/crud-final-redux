import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deletePalyer,
  editPlayer,
  showPlayer,
} from "../features/playerDetailSlice";

function Read() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const data = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showPlayer());
  }, []);

  function handleDelete(id) {
    dispatch(deletePalyer({ id }));
    dispatch(showPlayer());
  }

  function sendDataLocalStorage(id, name, club, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("club", club);
    localStorage.setItem("age", age);
    navigate("/edit");
  }

  return (
    <>
      <Link to={"/"}>
        <button>Get back to create Page</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Club Name</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.user &&
            Object.entries(data.user).map(([id, player]) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{player.player_name}</td>
                  <td>{player.player_club}</td>
                  <td>{player.player_age}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={"/edit"}>
                      <button
                        onClick={() => {
                          sendDataLocalStorage(
                            id,
                            player.player_name,
                            player.player_club,
                            player.player_age
                          );
                        }}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Read;
