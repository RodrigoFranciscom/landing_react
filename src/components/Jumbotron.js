import React from 'react';

const Jumbotron = (props) => {
    return (
        <>
            <div className="jumbotron pb-3 mb-4 border-bottom">
                <h1 className="display-4">{props.welcome}</h1>
                <p className="lead">{props.text} </p>
                <hr className="my-4" />
                <a className="btn btn-primary btn-lg" href="https://github.com/RodrigoFranciscom/Instagram-Feed-con-Bootstrap.git" role="button">{props.button}</a>
            </div>
        </>
    );
}   
export default Jumbotron;