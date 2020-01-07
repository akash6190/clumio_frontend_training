import React, {useState} from 'react';

import Input, {Todo} from "../../components/Input";
import TodosList from "../../components/TodosList";

const Index: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const updateTodos = (t: Todo) => {
        if (t.value.trim() === '') {
            return;
        }
        setTodos([...todos, { ...t, id: todos.length }]);
    };

    const updateCompleted = (t: Todo) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(({ id }) => id === t.id);
        if (index > -1) {
            newTodos[index] = { ...t, completed: !t.completed };
        }

        setTodos(newTodos);
    }

    return (
        <div className="container">
            <p className="heading">todos</p>
            <Input onFormSubmit={updateTodos}  />
            <TodosList todos={todos} onComplete={updateCompleted} />
        </div>
    );
};

export default Index;
