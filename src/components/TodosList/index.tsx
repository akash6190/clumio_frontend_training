import React from "react";

import {Todo} from "../Input";
import Check from '../../check.svg';
import Close from '../../x.svg';
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/types";
import { toggleTodo, deleteTodo } from "../../store/actions";

interface Props {
}

const TodosList: React.FC<Props> = () => {
    const todos = useSelector((state: AppState) => state.todos)
    const dispatch = useDispatch();

    console.log(todos);
    return todos ? (
        <ul className="list-container">
            {
                todos.map(todo => (
                    <li className="list-item" key={todo.id}>
                        <div className="section-left">
                            <div className="check-circle" onClick={() => dispatch(toggleTodo({id: todo.id}))}>
                                {
                                    todo.completed ? <img src={Check} alt="Mark Completed" /> : null
                                }
                            </div>
                            <span>{todo.value}</span>
                        </div>
                        <img src={Close} alt={"Clear todo"} className="clear-todo" onClick={() => dispatch(deleteTodo({id: todo.id}))} />
                    </li>
                ))
            }
        </ul>
    ) : null;
};

export default TodosList;
