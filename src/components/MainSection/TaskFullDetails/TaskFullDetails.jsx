import { Wrapper } from '../../';
import { useGlobalContext } from '../../../Context/context';
import { ReactComponent as Ellipses } from '../../../assets/icon-vertical-ellipsis.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icon-chevron-up.svg';

import './TaskFullDetails.css';
import { boards } from '../../../content/data';

function TaskFullDetails() {
  const {
    currentTask,
    setAllBoards,
    currentBoard,
    allBoards,
    showDropdown,
    setShowDropdown,
  } = useGlobalContext();
  const { subtasks, title, id, description } = currentTask;

  const complete = subtasks?.filter((task) => task.isCompleted === true);

  // current board, currentTask, subtask

  // boards[{id, name, columns[{id, name, tasks[{}]}]}]

  // boards[] > columns[{id,name,tasks}] > tasks > subtasks

  const handleChange = (e, subtaskId) => {
    setAllBoards((oldBoards) => {
      return oldBoards.map((board) => {
        return board === currentBoard
          ? {
              ...board,
              columns: board.columns.map((column) => {
                return column.name === currentTask.status
                  ? {
                      ...column,
                      tasks: column.tasks.map((task) => {
                        return task === currentTask
                          ? {
                              ...task,
                              subtasks: task.subtasks.map((subtask) => {
                                return subtask.id === subtaskId
                                  ? {
                                      ...subtask,
                                      isCompleted: e.target.checked,
                                    }
                                  : subtask;
                              }),
                            }
                          : task;
                      }),
                    }
                  : column;
              }),
            }
          : board;
      });
    });
  };

  // console.log(currentTask.status);

  return (
    <article className="task-full-details">
      <Wrapper>
        <div className="title-container">
          <h3>{title}</h3>
          <div className="ellipses-container">
            <Ellipses />
          </div>
        </div>

        <p>{description}</p>

        <h4>
          Subtasks ({complete?.length || 0} of {subtasks?.length || 0})
        </h4>

        <ul>
          {subtasks?.map(({ id: subtaskId, isCompleted, title }) => (
            <li key={subtaskId}>
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={(e) => {
                  handleChange(e, subtaskId);
                }}
              />
              <p>{title}</p>
            </li>
          ))}
        </ul>

        <h4>Current Status</h4>
        <div className="dropdown-container">
          <div
            className="current-status-container"
            onClick={() => setShowDropdown((oldState) => !oldState)}
            // onBlur={setShowDropdown(false)}
          >
            <p>{currentTask.status}</p>

            <div className="arrow-up-container">
              <ArrowUp />
            </div>
          </div>

          {showDropdown && (
            <div className="dropdown">
              {currentBoard.columns.map(({ name, id }) => {
                return <p key={id} onClick={()=>handleDropdownClick(e)}>{name}</p>;
              })}
            </div>
          )}
        </div>
      </Wrapper>
    </article>
  );
}

export default TaskFullDetails;
