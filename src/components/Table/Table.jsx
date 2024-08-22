import React, { useState, useEffect } from "react";
import styles from "./Table.module.scss";

import axios from "axios";
import { toast } from "react-toastify";

//floating image
import FloatingImage from "../FloatingImage/FloatingImage";

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/characters");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("result:", result);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle delete request
  const handleDelete = async (id) => {
    try {
      // Replace with your actual API endpoint
      await axios.delete(`http://localhost:5000/characters/${id}`);

      // Update local state to reflect deletion
      setData((prevData) => prevData.filter((item) => item.id !== id));
      toast.success("Character Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.table_container}>
      {data.length === 0 ? (
        <div>
          <h2 className={styles.text}>No Characters yet...</h2>
          <FloatingImage />
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Power</th>
              <th>Age</th>
              <th>Race</th>
              <th>Is Adult</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.power}</td>
                <td>{item.age}</td>
                <td>{item.race}</td>
                <td>{item.isadult ? "Yes" : "No"}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
