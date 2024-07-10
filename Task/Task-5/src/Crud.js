import React, { useState, useEffect } from 'react';
import './App.css';

function Crud() {
  const [formData, setFormData] = useState({
    C_name: '',
    D_name: '',
    email: '',
    number: '',
    about: '',
    address: ''
  });

  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setDataList(savedData);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editMode && editId !== null) {
      const updatedList = dataList.map(item => {
        if (item.id === editId) {
          return { id: editId, ...formData };
        }
        return item;
      });
      setDataList(updatedList);
      setEditMode(false);
      setEditId(null);
    } else {
      const newData = { id: new Date().getTime(), ...formData };
      const updatedList = [...dataList, newData];
      setDataList(updatedList);
    }

    localStorage.setItem('formData', JSON.stringify(dataList));
    setFormData({
      C_name: '',
      D_name: '',
      email: '',
      number: '',
      about: '',
      address: ''
    });
  };

  const handleEdit = (id) => {
    const selectedData = dataList.find(item => item.id === id);
    setFormData(selectedData);
    setEditMode(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const updatedList = dataList.filter(item => item.id !== id);
    setDataList(updatedList);
    localStorage.setItem('formData', JSON.stringify(updatedList));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="manage_user" encType="multipart/form-data">
        <div className="row">
          <div className="col-md-6 border-right">
            <b className="text-muted">Company Information</b>
            <div className="form-group">
              <label htmlFor="C_name" className="control-label">Company Name</label>
              <input type="text" name="C_name" value={formData.C_name} onChange={handleChange} className="form-control form-control-sm" required/>
            </div>
            <div className="form-group">
              <label htmlFor="D_name" className="control-label">Director Name</label>
              <input type="text" name="D_name" value={formData.D_name} onChange={handleChange} className="form-control form-control-sm" required/>
            </div>
            <div className="form-group">
              <label htmlFor="image" className="control-label">Image</label>
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" name="image" onChange={handleChange} required/>
                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="about" className="control-label">About</label>
              <textarea name="about" id="about" value={formData.about} onChange={handleChange} cols="30" rows="4" className="form-control"></textarea>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email" className="control-label">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control form-control-sm" required/>
            </div>
            <div className="form-group">
              <label htmlFor="number" className="control-label">Contact Number</label>
              <input type="text" name="number" value={formData.number} onChange={handleChange} className="form-control form-control-sm" required/>
            </div>
            <div className="form-group">
              <label htmlFor="address" className="control-label">Address</label>
              <textarea name="address" id="address" value={formData.address} onChange={handleChange} cols="30" rows="4" className="form-control" required></textarea>
            </div>
          </div>
        </div>
        <hr />
        <div className="col-lg-12 text-right justify-content-center d-flex">
          <button type="submit" className="btn btn-primary mr-2">Save</button>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Director Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>About</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map(item => (
            <tr key={item.id}>
              <td>{item.C_name}</td>
              <td>{item.D_name}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>{item.about}</td>
              <td>{item.address}</td>
              <td>
                <button className="btn btn-sm btn-primary mr-2" onClick={() => handleEdit(item.id)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Crud;
