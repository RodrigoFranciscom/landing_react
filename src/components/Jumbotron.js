import React from 'react';

const Jumbotron = (props) => {
    return (
        <>
            <div className="jumbotron pb-3 mb-4 border-bottom">
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">lorem ipsum  </p>
                <hr className="my-4" />
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action!</a>
            </div>
        </>
    );
}   
export default Jumbotron;