import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';


export const TaskForm = () => {
    const [text, setText] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
  
      if (!text) return;
  
      Meteor.call('tasks.insert', text);
  
      setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit"> <AddIcon /> </button>
    </form>
  );
};
