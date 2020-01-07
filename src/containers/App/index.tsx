import React, {useState} from 'react';

import Input, {Todo} from "../../components/Input";
import TodosList from "../../components/TodosList";

const mock: Todo[] = [{
    value: 'Todo item 1',
    completed: false,
}, {
    value: 'Todo item 2',
    completed: false,
}, {
    value: 'Todo item 3',
    completed: false,
}]

const Index: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(mock);

    const updateTodos = (t: Todo) => {
        setTodos([t]);
    };

    return (
        <div className="container">
            <p className="heading">todos</p>
            <Input onFormSubmit={updateTodos}  />
            <TodosList todos={todos} />
        </div>
    );
};

export default Index;
