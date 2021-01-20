import React, { FunctionComponent } from 'react';

interface IPostAuthor {
    authorId: string | number;
    firstName: string;
    lastName: string;
}

const PostAuthor: FunctionComponent<IPostAuthor> = (props) => {
    const {authorId, firstName, lastName} = props;
    return (
        // <Link to={'/'}></Link>
        <p>{lastName} {firstName}</p>
    );
}

export default PostAuthor;