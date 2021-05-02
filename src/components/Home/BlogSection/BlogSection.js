import React from 'react';
import mernStack from '../../../images/mern-stack.png';
import problemSolving from '../../../images/problem-solving.jpg';
import uiUx from '../../../images/ui-ux.png';

const BlogSection = () => {
    const blogs = [
        {
            id: 1,
            title: "Full-Stack Web Development Guide",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et iure, possimus ad eos a.",
            img: mernStack,
        },
        {
            id: 2,
            title: "Problem Solving Ninja Technic",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et iure, possimus ad eos a.",
            img: problemSolving,
        },
        {
            id: 3,
            title: "How to Create Interactive Websites",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et iure, possimus ad eos a.",
            img: uiUx,
        },
        {
            id: 4,
            title: "How to Create Interactive Websites",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et iure, possimus ad eos a.",
            img: uiUx,
        },
    ]
    return (
        <div className="container mx-auto mb-5">
            <h2 className="text-center my-5 pt-5">Blogs</h2>
            <div className="row mx-auto">
                {
                    blogs.map(blog =>
                        <div key={blog.id} className="col-12 col-md-6 mb-4">
                            <div className="row gx-0">
                                <div className="col-12 col-md-5">
                                    <img style={{ width: '100%', height: '100%' }} src={blog.img} alt="" />
                                </div>
                                <div className="col-12 col-md-7">
                                    <div className="darkBg p-3">
                                        <h4>{blog.title}</h4>
                                        <p>{blog.description}</p>
                                        <button className="btn primaryBg">Read more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="text-center my-5">
                <button className="btn primaryBg px-5">More Blogs</button>
            </div>
        </div>
    );
};

export default BlogSection;