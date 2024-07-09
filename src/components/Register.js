import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: '',
        username: '',
        profilePicture: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            profilePicture: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                
                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                
                <label>City:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                
                <label>State:</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                
                <label>Zip Code:</label>
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                
                <label>Country:</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                
                <label>Phone Number:</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                
                <label>Date of Birth:</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                
                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                
                <label>Profile Picture:</label>
                <input type="file" name="profilePicture" onChange={handleFileChange} />
                
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
