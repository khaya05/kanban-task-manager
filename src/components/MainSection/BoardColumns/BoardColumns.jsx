import { useGlobalContext } from '../../../Context/context';
import { Task } from '../../';
import './BoardColumns.css';

function BoardColumns() {
  const { currentBoard } = useGlobalContext();
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
            {tasks.map(({ title, subtasks, id }) => (
              <Task
                name={title}
                subtasks={subtasks}
                key={id}
                id={id}
                columnId={columnId}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoardColumns;
