import React, { useState } from 'react'

const Edit = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    price: '',
    date: '',
    type: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  
  const handleSubmit = () => {
    console.log('Form Submitted:', formData);
    // Add logic to process the form data (e.g., send it to an API)
  };

  return (
    <div className="container">
      <div className="dropdown">
          <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Add
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/delete">Delete</a></li>
              </ul>
          </div>
      </div>
      <div className="mb-3"></div>
      <div className="form-floating mb-3">
        <input className="form-control" id="itemName" value={formData.itemName} onChange={handleChange} />
        <label htmlFor="itemName">Name of item</label>
      </div>
      <div className="form-floating mb-3">
        <input className="form-control" id="price" value={formData.price} onChange={handleChange} />
        <label htmlFor="price">Price ($)</label>
      </div>
      <div className="form-floating mb-3">
        <input className="form-control" id="date" value={formData.date} onChange={handleChange} />
        <label htmlFor="date">Date (yyyy/mm/dd)</label>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Type</label>
        <select className="form-select" id="type" value={formData.type} onChange={handleChange}>
          <option value="" disabled>Choose...</option>
          <option value="grocery">Grocery</option>
          <option value="food">Food</option>
          <option value="others">Others</option>
        </select>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Edit