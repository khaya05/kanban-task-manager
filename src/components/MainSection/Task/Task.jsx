import { useEffect } from 'react';
import { Wrapper } from '../../';
import { useGlobalContext } from '../../../Context/context';
import './Task.css';

function Task({ name, subtasks, id, columnId }) {
  const {
    currentBoard,
    setCurrentTask,
    currentTask,
    showTaskDetails,
    showOverlay,
    setShowTaskDetails,
    setShowOverlay,
  } = useGlobalContext();

  const completed = subtasks.filter((task) => task.isCompleted === true);

  useEffect(() => { });

  const handleClick = (id) => {
    const task = currentBoard.columns
      .find((column) => column.id === columnId)
      .tasks.find((task) => task.id === id);

    setCurrentTask(task);
    setShowTaskDetails(true);
    setShowOverlay(true);
  };

  return (
    <div className="task-card-container" onClick={() => handleClick(id)}>
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
