import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc'
import { List } from 'react-virtualized'

// Connect react-virtualized and react-sortable-hoc
const SortableList = SortableContainer(List, { withRef: true })
const SortableRow = SortableElement(({ children }) => children)

function rowRenderer ({ index, key, style }) {
  return (
    <div key={index} style={style}>
      <SortableRow index={index}>
        {itemsArray[index].name}
      </SortableRow>
    </div>
  )
}

function renderList (props) {
  return (
    <SortableList
      {...props}
      onSortEnd={
        ({ oldIndex, newIndex }) => arrayMove(list, oldIndex, newIndex)
      }
      rowRenderer={rowRenderer}
    />
  )
}
