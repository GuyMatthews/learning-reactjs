import React, { PropTypes } from 'react';

const Author = ({ firstName, lastName }) => (
    <div className="Author">
        -- {firstName} {lastName}
    </div>
);

export default Author;