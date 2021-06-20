import React from 'react';
import './Course.css';

const Course = ({ course, handleAddProduct }) => {
    const { name, price, description, image } = course;

    return (
        <div className="col course-card my-4">
            <div className="card h-100 shadow">
                <img src={image} className="card-img-top" alt="course" />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6><span className="fw-normal">Price:</span> $ {price}</h6>
                    <p className="card-text">{description}</p>
                </div>
                <div className="d-grid gap-2 px-3">
                    <button onClick={handleAddProduct} className="btn btn-danger fw-bold" type="button">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;