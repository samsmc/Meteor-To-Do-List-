import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
 

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      <span>{task.text}</span>
      <button onClick={ () => onDeleteClick(task) }> <DeleteForeverIcon /> </button>

    </li>
  );
};