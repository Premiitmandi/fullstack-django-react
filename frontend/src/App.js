

import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = "http://127.0.0.1:8000/api/items/"; // Backend API URL

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newItem, setNewItem] = useState({ name: "", category: "", description: "" });
  const [editItem, setEditItem] = useState(null); // Track the item being edited

  // Fetch items from API when component loads
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((items) => {
        setData(items);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  //  Create a new item (POST request)
  const handleAddItem = () => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then(() => window.location.reload()); // Refresh the page to show new data
  };

  // Edit an existing item (PUT request)
  const handleEditItem = () => {
    fetch(`${API_URL}${editItem.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editItem),
    })
      .then(() => {
        setEditItem(null);
        window.location.reload();
      });
  };

  //  Delete an item (DELETE request)
  const handleDeleteItem = (id) => {
    fetch(`${API_URL}${id}/`, {
      method: "DELETE",
    }).then(() => window.location.reload()); // Refresh page after deleting
  };

  return (
    <div>
      <h1>Item Dashboard</h1>
      
      {/*  Search Bar */}
      <input
        type="text"
        placeholder="Search by name or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/*  Form to Add New Item */}
      <h2>Add New Item</h2>
      <input type="text" placeholder="Name" onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
      <input type="text" placeholder="Category" onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} />
      <input type="text" placeholder="Description" onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} />
      <button onClick={handleAddItem}>Add Item</button>

      {/*  Edit Item Form */}
      {editItem && (
        <div>
          <h2>Edit Item</h2>
          <input type="text" value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} />
          <input type="text" value={editItem.category} onChange={(e) => setEditItem({ ...editItem, category: e.target.value })} />
          <input type="text" value={editItem.description} onChange={(e) => setEditItem({ ...editItem, description: e.target.value })} />
          <button onClick={handleEditItem}>Save Changes</button>
          <button onClick={() => setEditItem(null)}>Cancel</button>
        </div>
      )}

      {/*  Display Items Table */}
      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()))
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td>
                    <button onClick={() => setEditItem(item)}>Edit</button> {/* Edit Button */}
                    <button onClick={() => handleDeleteItem(item.id)}>Delete</button> {/*  Delete Button */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
