import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faMapMarker, faBuilding } from "@fortawesome/free-solid-svg-icons";
import "./UserList.css";
import "./LoaderSpinner.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
      zipcode: "",
    },
    company: {
      name: "",
    },
  });
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          setLoading(false);
          toast.error("Failed to fetch users.");
        });
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    if (
      !newUser.name ||
      !newUser.username ||
      !newUser.email ||
      !newUser.phone
    ) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    setLoading(true);

    const createUser = () => {
      const generatedId = Math.max(...users.map((user) => user.id)) + 1;
      const newUserWithId = { ...newUser, id: generatedId };
      setUsers((prevUsers) => [...prevUsers, newUserWithId]);
      toast.success("User added successfully.");
    };

    const updateUser = () => {
      const updatedUsers = users.map((user) =>
        user.id === selectedUserId ? { ...newUser, id: selectedUserId } : user
      );
      setUsers(updatedUsers);
      setSelectedUserId(null);
      toast.success("User updated successfully.");
    };

    setTimeout(() => {
      if (selectedUserId) {
        updateUser();
      } else {
        createUser();
      }
      setNewUser({
        name: "",
        username: "",
        email: "",
        phone: "",
        address: {
          street: "",
          city: "",
          zipcode: "",
        },
        company: {
          name: "",
        },
      });
      setLoading(false);
    }, 2000);
  };

  const confirmDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setLoading(true);
      setTimeout(() => {
        handleDeleteUser(id);
        setLoading(false);
      }, 2000);
    }
  };

  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    toast.success("User deleted successfully.");
  };

  const handleEditUser = (user) => {
    setTimeout(() => {
      setNewUser(user);
      setSelectedUserId(user.id);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setLoading(false);
    }, 20)
  };

  return (
    <div className="user-list-container">
      <h1>List Kenya</h1>

      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <form onSubmit={handleAddUser} className="user-form">
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
              />
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                type="text"
                name="username"
                value={newUser.username}
                onChange={handleInputChange}
                placeholder="Username"
                required
              />
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faPhone} className="input-icon" />
              <input
                type="tel"
                name="phone"
                value={newUser.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                required
              />
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faBuilding} className="input-icon" />
              <input
                type="text"
                name="company"
                value={newUser.company.name}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    company: {
                      name: e.target.value,
                    },
                  })
                }
                placeholder="Company"
                required
              />
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faMapMarker} className="input-icon" />
              <input
                type="text"
                name="street"
                value={newUser.address.street}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    address: {
                      ...newUser.address,
                      street: e.target.value,
                    },
                  })
                }
                placeholder="Street"
                required
              />
            </div>

            <button type="submit">
              {selectedUserId ? "Update User" : "Add User"}
            </button>
          </form>

          <ul className="user-list">
            {users.map((user) => (
              <li key={user.id} className="user-item">
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Company: {user.company.name}</p>
                <p>Street: {user.address.street}</p>
                <div className="user-actions">
                  <button
                    className="btn btn-edit"
                    onClick={() => handleEditUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => confirmDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <ToastContainer position="top-right" autoClose={3000} theme="dark" />
        </>
      )}
    </div>
  );
};

export default UserList;
