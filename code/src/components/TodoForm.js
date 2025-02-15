import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

import todos from 'reducers/todos';

const TodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uniqid(),
      description: value,
      isComplete: false,
    };
    dispatch(todos.actions.addTodo(newTodo));
    setValue('');
  };
  return (
    <div className='form-container'>
      <form onSubmit={onFormSubmit}>
        <input
          className='input-field'
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='To Do'
        />
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
