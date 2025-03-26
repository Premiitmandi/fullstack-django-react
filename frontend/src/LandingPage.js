import React, { useEffect, useState } from "react";
import axios from "axios";

const LandingPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/items/")  //  Ensure correct API URL
      .then(response => {
        console.log("API Response:", response.data);  //  Debugging step
        setItems(response.data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Item Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No items found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LandingPage;
