import React from 'react';
import code from '../../assets/images/code.png';

const Blogs = () => {
    return (
        <div className='max-w-lg mx-auto'>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-10">
                <div class="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <p>Need to keep state local where necessary.Make sure component receive necessary props.It control the CPU consumption and avoid over-rendering.And the solution is to create a functional component.Also do not use repeat code.</p>
                </div>
            </div>
            <div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p>There are some types of state that we properly manage react apps,such as- Local state, Global state, Server State, URL state</p>
                </div>
            </div>
            <div tabindex="2" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div class="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p>Prototypical inheritance meaning that objects and method can be shared, extended, and copied.Prototypical inheritance allow us to resuse the properties or method from one to another through a reference pointer function.</p>
                </div>
            </div>
            <div tabindex="3" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div class="collapse-title text-xl font-medium">
                    What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p>Unit test is automated test. A Software development process in which the smallest testable parts of an application.Unit test is isolate a function,class or method and only test that piece of code.</p>
                </div>
            </div>
            <div tabindex="4" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div class="collapse-title text-xl font-medium">
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div class="collapse-content">
                    <img src={code} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;