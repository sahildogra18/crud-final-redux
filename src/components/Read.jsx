import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showPlayer } from "../features/playerDetailSlice";

function Read() {
  let dispatch = useDispatch();

  const data = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showPlayer());
  }, [dispatch]);

  return (
    <>
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
                    <button>Delete</button>
                  </td>
                  <td>
                    <Link to={"/edit"}>
                      <button>Edit</button>
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
