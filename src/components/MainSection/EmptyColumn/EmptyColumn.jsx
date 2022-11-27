
import { AddButton } from '../../';
import './EmptyColumn.css'

function EmptyColumn() {
  return (
    <div className='empty-columns'>
      <p>This board is empty. Create a new column to get started.</p>
      <AddButton text={'+ Add New Column'} />
    </div>
  );
}

export default EmptyColumn