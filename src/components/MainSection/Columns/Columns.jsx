import { EmptyColumn, BoardColumns } from '../../';
import { useGlobalContext } from '../../../Context/context';
import './Columns.css';

function Columns() {
  const { currentBoard } = useGlobalContext();
  const currentBoardColumns = currentBoard.columns;
  console.log(currentBoardColumns);

  return (
    <main id="board-columns">
      {currentBoardColumns.length === 0 ? <EmptyColumn /> : <BoardColumns />}
    </main>
  );
}

export default Columns;
