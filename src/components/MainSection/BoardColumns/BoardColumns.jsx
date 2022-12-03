import { useGlobalContext } from '../../../Context/context';
import { Task } from '../../';
import './BoardColumns.css';
import { useSelector } from 'react-redux';

function BoardColumns() {
  // const { currentBoard } = useGlobalContext();
  const currentBoard = useSelector(state => state.boards.currentBoard)
  const boardColumns = currentBoard.columns;

  return (
    <div className="column">
      {boardColumns.map(({ name, tasks, id: columnId }) => (
        <div key={columnId}>
          <div className="task-info">
            <div className="task-status-color"></div>

            <p>
              {name} ({tasks.length})
            </p>
          </div>

          <div className="tasks-container">
            {tasks.map(({ title, subtasks, id ,status}) => (
              <Task
                name={title}
                subtasks={subtasks}
                key={id}
                id={id}
                columnId={columnId}
                status={status}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoardColumns;
