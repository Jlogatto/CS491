import { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState(['test']);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };






  return (
    <div className="p-10 min-h-screen">
      <div className="max-w-lg mx-auto p-8">
        <h1 className="text-center mb-8 text-3xl">To-Do List</h1>
        
        <div className="flex gap-3 mb-5">
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Enter a task"
            className="flex-1 p-3 border border-gray-600 rounded bg-gray-800 text-white"
          />
          <button
            onClick={addTask}
            className="px-6 py-3 bg-gray-700 text-white border-none rounded cursor-pointer hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-50 mb-3 rounded"
            >
              <span className="text-black">{task}</span>
              <button
                onClick={() => deleteTask(index)}
                className="!text-red-800 bg-transparent border-none cursor-pointer text-2xl"
              >×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;