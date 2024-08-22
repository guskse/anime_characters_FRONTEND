import styles from "./Form.module.scss";

import React, { useState } from "react";
import axios from "axios";

//floating img component
import FloatingImage from "../FloatingImage/FloatingImage";

//toasitfy
import { toast } from "react-toastify";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    power: "",
    age: "",
    race: "",
    isAdult: false,
  });

  const [loading, setLoading] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true); // Show loading indicator

    try {
      // Send POST request using Axios
      const response = await axios.post(
        "http://localhost:5000/new-character",
        formData
      );
      // Handle response
      toast.success("Created!");
      console.log("Response:", response.data);
    } catch (err) {
      // Handle error
      console.error("Error:", err);
      toast.success("Error. Could not create new Character");
    } finally {
      setLoading(false); // Hide loading indicator
      setFormData({  //set formdata back to initial state
        name: "",
        power: "",
        age: "",
        race: "",
        isAdult: false,
      });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="off"
          placeholder="Goku"
        />
      </div>

      <div>
        <label htmlFor="power">Power:</label>
        <input
          type="text"
          id="power"
          name="power"
          value={formData.power}
          onChange={handleChange}
          required
          placeholder="Kamehameha"
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min={0}
          max={300}
          required
        />
      </div>

      <div>
        <label htmlFor="race">Race:</label>
        <input
          type="text"
          id="race"
          name="race"
          value={formData.race}
          onChange={handleChange}
          required
          placeholder="Sayajin"
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="isAdult">
          <input
            type="checkbox"
            id="isAdult"
            name="isAdult"
            checked={formData.isAdult}
            onChange={handleChange}
          />
          Is Adult
        </label>
      </div>

      <button type="submit">Submit</button>
      <FloatingImage />
    </form>
  );
};

export default Form;
