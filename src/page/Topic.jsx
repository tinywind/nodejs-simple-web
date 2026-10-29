import React from "react";
import {useMatch} from "react-router";

const Topic = () => {
    const match = useMatch("/topic/*");
    return (
        <div>
            <h3>Topic</h3>
            match.url: {match.pathnameBase}
        </div>
    );
};

export default Topic;