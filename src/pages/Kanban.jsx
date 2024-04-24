import React, { useMemo, useState, useEffect } from 'react'
import ColumnContainer from '../components/ColumnContainer';
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import TaskCard from '../components/TaskCard';

function Kanban() {

    const [col, setCol] = useState([]);
    const columnId = useMemo(() => col.map((column) => column.id), [col]);
    const [activeCol, setActiveCol] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [activeTask, setActiveTask] = useState(null)

    useEffect(() => {
        // Load column and task data from local storage
        const storedCol = localStorage.getItem('kanbanColumns');
        const storedTasks = localStorage.getItem('kanbanTasks');
        if (storedCol) {
            setCol(JSON.parse(storedCol));
        }
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        // Save column and task data to local storage whenever it changes
        localStorage.setItem('kanbanColumns', JSON.stringify(col));
        localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
    }, [col, tasks]);

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

        const newTasks = tasks.filter(t => t.columnId !== id);

        setTasks(newTasks);
    }

    function onDragStart(e) {
        console.log("Drag Start", e);
        if (e.active.data.current.type === "Column") {
            setActiveCol(e.active.data.current.column);
            return;
        }

        if (e.active.data.current.type === "Task") {
            setActiveTask(e.active.data.current.task);
            return;
        }
    }

    function onDragEnd(e) {
        setActiveTask(null);
        setActiveCol(null);
        const { active, over } = e;

        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (activeId === overId) return;

        setCol((col) => {
            const activeColIndex = col.findIndex((column) => column.id === activeId);
            const overColIndex = col.findIndex((column) => column.id === overId);
            return arrayMove(col, activeColIndex, overColIndex);
        })
    }

    function onDragOver(e) {
        const { active, over } = e;

        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (activeId === overId) return;

        const isActiveTask = active.data.current.type === 'Task';
        const isOverTask = over.data.current.type === 'Task';

        if (!isActiveTask) return;

        if (isActiveTask && isOverTask) {
            setTasks(task => {
                const activeIndex = tasks.findIndex(t => t.id === activeId);
                const overIndex = tasks.findIndex(t => t.id === overId)

                tasks[activeIndex].columnId = tasks[overIndex].columnId;

                return arrayMove(tasks, activeIndex, overIndex);
            })
        }

        const isOverCol = over.data.current.type === 'Column';

        if (isActiveTask && isOverCol) {
            setTasks(task => {
                const activeIndex = tasks.findIndex(t => t.id === activeId);

                tasks[activeIndex].columnId = overId;

                return arrayMove(tasks, activeIndex, activeIndex);
            })
        }

    }

    function updateCol(id, title) {
        const newCols = col.map((column) => {
            if (column.id !== id) return column;
            return { ...column, title }
        })

        setCol(newCols);
    }

    function createTask(columnId) {
        const newTask = {
            id: generateId(),
            columnId,
            content: `Task ${tasks.length + 1}`
        }
        setTasks([...tasks, newTask])
    }

    function deleteTask(id) {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks)
    }

    function updateTask(id, content) {
        const newTasks = tasks.map((task) => {
            if (task.id !== id) return task;
            return { ...task, content };
        })

        setTasks(newTasks);
    }




    return (
        <div className='wrapper'>
            <DndContext
                sensors={ sensors }
                onDragStart={ onDragStart }
                onDragEnd={ onDragEnd }
                onDragOver={ onDragOver }
            >
                <div className='center-div'>
                    <div className='display-columns'>
                        <SortableContext items={ columnId }>
                            { col.map((column) => (
                                <ColumnContainer
                                    key={ column.id }
                                    column={ column }
                                    deleteColumn={ deleteColumn }
                                    updateCol={ updateCol }
                                    createTask={ createTask }
                                    tasks={ tasks.filter((task) => task.columnId === column.id) }
                                    deleteTask={ deleteTask }
                                    updateTask={ updateTask }
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
                            updateCol={ updateCol }
                            createTask={ createTask }
                            tasks={ tasks.filter((task) => task.columnId === activeCol.id) }
                            deleteTask={ deleteTask }
                            updateTask={ updateTask }
                        />
                        ) }
                        { activeTask && (<TaskCard
                            task={ activeTask }
                            deleteTask={ deleteTask }
                            updateTask={ updateTask }

                        />
                        ) }
                    </DragOverlay>, document.body) }
            </DndContext>
        </div>
    )
}

export default Kanban