import React from "react";
import {Todo} from "../Input";

interface Props {
    todos: Todo[]
}

const TodosList: React.FC<Props> = ({ todos }) => {
    return todos ? (
        <ul className="list-container">
            {
                todos.map(({ value, completed }) => (
                    <li className="list-item">
                        <div className="check-circle"></div>
                        <span>{value}</span>
                    </li>
                ))
            }
        </ul>
    ) : null;
};

export default TodosList;
