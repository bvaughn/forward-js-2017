import Draggable from 'react-draggable';
import { List } from 'react-virtualized';

function rowRenderer ({ index, isScrolling, key, style }) {
  return (
    <div
      key={index}
      style={style}
    >
      {...}

      <Draggable
        axis='y'
        onStop={
          (event, data) => updateRowSize({ delta: data.y, index })
        }
      />
    </div>
  );
}

function renderList (listProps) {
  return (
    <List
      {...listProps}
      ref={(ref) => this._list = ref}
      rowRenderer={rowRenderer}
    />
  );
}
