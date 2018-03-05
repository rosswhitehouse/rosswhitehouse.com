import React from 'react';

const Blog = () => {
    return (
        <div className="panel panel--blue">
            <h2 className="heading heading--blue">Stuff I Wrote</h2>
            <p>I started writing about code very recently to help deepen my knowledge. Check out more of my stuff <a href="https://medium.com/@RossWhitehouse">on Medium</a></p>
            <ul>
                <li>Post One</li>
                <li>Post Two</li>
            </ul>
            <a href="https://medium.com/@RossWhitehouse">More on Medium ></a>
        </div>
    );
}

export default Blog;
