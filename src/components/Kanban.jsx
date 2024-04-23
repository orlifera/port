import React, { useMemo, useState } from 'react'
import ColumnContainer from './ColumnContainer';
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';

function Kanban() {

    const [col, setCol] = useState([]);
    const columnsId = useMemo(() => col.map((column) => column.id), [col]);
    const [activeCol, setActiveCol] = useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 3,
            }
        })
    );
    console.log(col);

    function createColumn() {
        const colToAdd = {
            id: generateId(),
            title: `Column ${col.length + 1}`
        };

        setCol([...col, colToAdd]);
    }

    function generateId() {
        /*Generates a random number between 0 and 10000 */
        const rand = Math.floor(Math.random() * 10001);
        console.log(rand);
        return rand;
    }

    function deleteColumn(id) {
        const filtered = col.filter((column) => column.id !== id)
        console.log(filtered);
        setCol(filtered);
    }

    function onDragStart(e) {
        console.log("Drag Start", e);
        if (e.active.data.current.type === "Column") {
            setActiveCol(e.active.data.current.column);
            return;
        }
    }

    function onDragEnd(e) {
        const { active, over } = e;

        if (!over) return;

        const activeColId = active.id;
        const overColId = over.id;

        if (activeColId === overColId) return;

        setCol((col) => {
            const activeColIndex = col.findIndex((column) => column.id === activeColId);
            const overColIndex = col.findIndex((column) => column.id === overColId);

            return arrayMove(col, activeColIndex, overColIndex);
        })
    }

    function updateCol(id, title) {
        const newCols = col.map((column) => {
            if (column.id !== id) return column;
            return { ...column, title }
        })

        setCol(newCols);
    }


    return (
        <div className='wrapper'>
            <DndContext sensors={ sensors } onDragStart={ onDragStart } onDragEnd={ onDragEnd }>
                <div className='center-div'>
                    <div className='display-columns'>
                        <SortableContext items={ columnsId }>
                            { col.map((column) => (
                                <ColumnContainer
                                    key={ column.id }
                                    column={ column }
                                    deleteColumn={ deleteColumn }
                                    updateCol={ updateCol }
                                />
                            )) }
                        </SortableContext>
                    </div>
                    <button className='addBtn' onClick={ () => { createColumn(); } }>
                        <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" className='icon'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" > <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-464.000000, -1087.000000)" > <path d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z" id="plus-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                        Add Column
                    </button>
                </div>
                { createPortal(
                    <DragOverlay>
                        { activeCol && (<ColumnContainer
                            column={ activeCol }
                            deleteColumn={ deleteColumn }
                        />
                        ) }
                    </DragOverlay>, document.body) }
            </DndContext>
        </div>
    )
}

export default Kanban