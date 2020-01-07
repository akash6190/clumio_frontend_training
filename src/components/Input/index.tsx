import React, {ChangeEventHandler, FormEventHandler, useState} from 'react';

interface Todo {
    value: string;
    completed: boolean;
}

const Input: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
        setValue(e.target.value);
    };

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        setTodos([{ completed: false, value: value.trim() }]);
        setValue('');
    };

    console.log(todos);

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                className="input"
                placeholder="What needs to be done?"
                value={value}
                onChange={handleChange}
            />
        </form>
    );
};

export default Input;
