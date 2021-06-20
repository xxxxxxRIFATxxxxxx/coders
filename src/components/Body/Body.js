import React, { useState } from 'react';
import './Body.css';
import Course from './Course/Course';
import Cart from './Cart/Cart';
import courses from '../../data/courses';

const Body = () => {
    const [courseList] = useState(courses);
    const [cart, setCart] = useState([]);
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className="light-black-bg body">
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {/* Courses */}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                        <h2 className="text-white text-center">Courses</h2>
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row row-cols-1 row-cols-md-2 g-4 p-2">
                                    {courseList.map(course => {
                                        return (
                                            <Course
                                                course={course}
                                                key={course.id}
                                                handleAddProduct={() => handleAddProduct(course)}
                                            >
                                            </Course>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cart */}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                        <h2 className="text-white text-center">Cart <span className="fw-normal">({cart.length})</span></h2>
                        <div className="card">
                            <div className="card-body">
                                <table className="table table-dark table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cart.map((product) => {
                                            return <Cart product={product} key={Math.random()}></Cart>
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className="card-footer d-flex justify-content-between">
                                <h4 className="fw-normal">Total Price:</h4>
                                <h4>{totalPrice}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;