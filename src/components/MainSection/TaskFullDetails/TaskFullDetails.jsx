import { Wrapper } from '../../';
import { useGlobalContext } from '../../../Context/context';
import { ReactComponent as Ellipses } from '../../../assets/icon-vertical-ellipsis.svg';

import './TaskFullDetails.css';

function TaskFullDetails() {
  const {
    currentTask: { subtasks, title, description, status },
  } = useGlobalContext();

  const complete = subtasks?.filter((task) => task.isComplete === true);

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
          Subtasks ({complete.length || 0} of {subtasks.length})
        </h4>
        <ul>
          {subtasks?.map(({ id, isCompleted, title }) => (
            <li key={id}>
              <input type="checkbox" checked={isCompleted} />
              <p>{title}</p>
            </li>
          ))}
        </ul>

        <h4>Current Status</h4>
        
      </Wrapper>
    </article>
  );
}

export default TaskFullDetails;
