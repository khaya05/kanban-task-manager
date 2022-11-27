import { useGlobalContext } from '../../../Context/context';
import { Task } from '../../';

function BoardColumns() {
  const { currentBoard } = useGlobalContext();
  const boardColumns = currentBoard.columns;
  return (
    <div className="column">
      {boardColumns.map(({ name, tasks, id }) => (
        <>
          <div className="task-info" key={id}>
            <div className="task-status-color"></div>
            <p>
              {name} ({tasks.length})
            </p>
          </div>
          <Task name={name} tasks={tasks} />
        </>
      ))}
    </div>
  );
}

export default BoardColumns;
