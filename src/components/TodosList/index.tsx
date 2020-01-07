import React from "react";
import {Todo} from "../Input";

interface Props {
    todos: Todo[]
}

const TodosList: React.FC<Props> = ({ todos }) => {
    return (
        <div>Todos list</div>
    );
};

export default TodosList;
