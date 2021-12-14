import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";

const Home = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("biztosan törlöd a felhasználót?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>

      <div className="my__table container mt-4">
        <div className="row bg-dark text-light p-3">
          <button
            className="col-1 me-5"
            onClick={() => history.push("/addUser")}
          >
            Új tag
          </button>
          <div className="col-2">Vezetéknév</div>
          <div className="col-2">Keresztnév</div>
          <div className="col-2">Születési év</div>
          <div className="col-2">E-mail cím</div>
        </div>
        {users &&
          users.map((user) => (
            <div key={user.id} className="row bg-light text-dark p-3">
              <div className="col-1 me-5">{user.id}</div>
              <div className="col-2">{user.firstname}</div>
              <div className="col-2">{user.lastname}</div>
              <div className="col-2">{user.birth}</div>
              <div className="col-2">{user.email}</div>
              <div className="col-2">
                <button
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                  className="me-4"
                >
                  törlés
                </button>
                <button onClick={() => history.push(`/editUser/${user.id}`)}>
                  szerkesztés
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
