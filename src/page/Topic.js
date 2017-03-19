import React from "react";

const Topic = ({match}) => {
    return (
        <div>
            <h3>Topic</h3>
            match.url: {match.url}
        </div>
    );
};

export default Topic;