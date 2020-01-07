import React, {useState} from 'react';

import Input, {Todo} from "../../components/Input";
import TodosList from "../../components/TodosList";

const Index: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const updateTodos = (t: Todo) => {
        setTodos([t]);
    };

    console.log(todos)

    return (
        <div className="container">
            <p className="heading">todos</p>
            <Input onFormSubmit={updateTodos}  />
            <TodosList todos={todos} />
        </div>
    );
};

export default Index;
