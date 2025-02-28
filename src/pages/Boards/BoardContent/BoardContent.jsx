import Box from "@mui/material/Box"
import ListColumns from "./ListColumns/ListColumns"
import PropTypes from "prop-types"
import { mapOrder } from "~/utils/sorts"
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners,
} from "@dnd-kit/core"
import { useEffect, useState } from "react"
import { arrayMove } from "@dnd-kit/sortable"
import Column from "./ListColumns/Column/Column"
import CardComponent from "./ListColumns/Column/ListCards/Card/Card"

function BoardContent({ board }) {
  const [orderedColumns, setOrderedColumns] = useState([])
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10
  //   }
  // })
  const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
    CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
  }
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 500,
    },
  })
  const sensors = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    setOrderedColumns(mapOrder(board.columns, board.columnOrderIds, "_id"))
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event
    
    if (!over || !active) return
    {
      /** Drag end card */
    }
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      handleDragCard(event)
    }
    if (
      activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN &&
      active.id !== over.id
    ) {
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
      setOrderedColumns(arrayMove(orderedColumns, oldIndex, newIndex))
    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  const handleDragCard = ({ active, over}) => {
    if (!active || !over) return
    const activeItem = active.data.current
    const overItem = over.data.current
    
    if (activeItem.columnId === overItem.columnId) {
      handleDragSameColumn(orderedColumns, activeItem, overItem)
    } else {
      
      handleDragAcrossColumn(orderedColumns, activeItem, overItem)
    }
  }

  const handleDragAcrossColumn = (columns, activeItem, overItem) => {
    const newColumns = [...columns]
    const activeColumnIdx = columns.findIndex(col => col._id === activeItem.columnId)
    // if target column is an empty column or a card
    const overColumnId = overItem.columnId ?? overItem._id
    const overColumnIdx = columns.findIndex(col => col._id === overColumnId)
    // update cards at active column
    const activeCardIdx = newColumns[activeColumnIdx].cards.findIndex(card => card._id === activeItem._id)
    const [moveCard] = newColumns[activeColumnIdx].cards.splice(activeCardIdx, 1)
    // if target column has no cards
    
    moveCard.columnId = newColumns[overColumnIdx]._id
    newColumns[activeColumnIdx].cardOrderIds = newColumns[activeColumnIdx].cards.map(card => card._id)

    // update cards at over column
    const overCardIdx = newColumns[overColumnIdx].cards.findIndex(card => card._id === overItem._id)
    const newPosition = overCardIdx + 0
    newColumns[overColumnIdx].cards.splice(newPosition, 0, moveCard)
    newColumns[overColumnIdx].cardOrderIds = newColumns[overColumnIdx].cards.map(card => card._id)
    setOrderedColumns(newColumns)
  }

  const handleDragSameColumn = (columns, activeItem, overItem) => {
    // Find active column
    const columnIdx = columns.findIndex(col => col._id === activeItem.columnId)
    // Find old index in cards of column
    const activeCardIdx = columns[columnIdx].cards.findIndex(card => card._id === activeItem._id)
    const overCardIdx = columns[columnIdx].cards.findIndex(card => card._id === overItem._id)

    const newColumns = [...columns]
    const [moveCard] = newColumns[columnIdx].cards.splice(activeCardIdx, 1)
    const newPosition = overCardIdx + 0 // (need to handle below or above)
    newColumns[columnIdx].cards.splice(newPosition, 0, moveCard)
    newColumns[columnIdx].cardOrderIds = newColumns[columnIdx].cards.map(card => card._id)
    
    setOrderedColumns(newColumns)
  }

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemData(event?.active?.data.current)
    setActiveDragItemType(
      event?.active?.data.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    )
  }
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
      sensors={sensors}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          display: "flex",
          height: (theme) => theme.custom.boardContentHeight,
          p: "10px 0",
        }}
      >
        <ListColumns columns={orderedColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
              <Column column={activeDragItemData} />
            )}
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
              <CardComponent card={activeDragItemData} />
            )}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}
BoardContent.propTypes = {
  board: PropTypes.object,
}
export default BoardContent
