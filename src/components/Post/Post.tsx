import {FC} from "react";

import {IPost} from "../../interfaces";

interface IProps {
    post: IPost;
}

const Post: FC<IProps> = ({post: {id, body, title}}) => {
    return (
        <div>
            <div>{id}. {body}</div>
            <div>{title}</div>
            <br/>
        </div>
    );
};

export {Post};
