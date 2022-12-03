import { useSelector } from 'react-redux';
import { EmptyColumn, BoardColumns } from '../../';
import './Columns.css';

function Columns() {
  const currentBoard = useSelector(state => state.boards.currentBoard)
  const currentBoardColumns = currentBoard.columns;

  return (
    <main id="board-columns">
      {currentBoardColumns.length === 0 ? <EmptyColumn /> : <BoardColumns />}
    </main>
  );
}

export default Columns;
