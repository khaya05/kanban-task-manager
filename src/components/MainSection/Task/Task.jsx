// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from '../../';
import { boardActions } from '../../../store/boards-slice';
import { uiActions } from '../../../store/ui-slice';
import './Task.css';

function Task({ name, subtasks, id, columnId, status }) {
  const dispatch = useDispatch();

  const completed = subtasks.filter((task) => task.isCompleted === true);
  const currentBoard = useSelector((state) => state.boards.currentBoard);

  const handleClick = (id) => {
    dispatch(boardActions.getCurrentTask({ id, status }));
    // const task = currentBoard.columns
    //   .find((column) => column.id === columnId)
    //   .tasks.find((task) => task.id === id);

    // setCurrentTask(task);
    // dispatch(uiActions.toggleOverlay());
    // dispatch(uiActions.toggleTaskDetails());
  };

  return (
    <div
      className="task-card-container"
      onClick={() => handleClick({ id, status })}
    >
      <Wrapper>
        <p className="task-name">{name}</p>
        <p>
          {completed?.length || 0} of {subtasks.length} subtasks
        </p>
      </Wrapper>
    </div>
  );
}

export default Task;
