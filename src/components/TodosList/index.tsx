import React from "react";

import {Todo} from "../Input";
import Check from '../../check.svg';

interface Props {
    todos: Todo[];
    onComplete: (t: Todo) => void;
}

const TodosList: React.FC<Props> = ({ onComplete, todos }) => {
    return todos ? (
        <ul className="list-container">
            {
                todos.map(todo => (
                    <li className="list-item">
                        <div className="check-circle" onClick={() => onComplete(todo)}>
                            {
                                todo.completed ? <img src={Check} /> : null
                            }
                        </div>
                        <span>{todo.value}</span>
                    </li>
                ))
            }
        </ul>
    ) : null;
};

export default TodosList;
