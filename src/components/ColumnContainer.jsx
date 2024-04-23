import { rectIntersection } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities'
import { useState } from "react";

function ColumnContainer(props) {
    const { column, deleteColumn, updateCol } = props;

    const [editMode, setEditMode] = useState(false)

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging
    }
        =
        useSortable({
            id: column.id,
            data: {
                type: "Column",
                column,
            },
            disabled: editMode,
        });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    if (isDragging) {
        return (<div className="column placeholder" ref={ setNodeRef } style={ style }></div>)
    }

    return (

        <div className="column" ref={ setNodeRef } style={ style }>
            {/*Column Title */ }
            <div className="col-title"
                { ...attributes }
                { ...listeners }
                onClick={ () => {
                    setEditMode(true)
                } }
            >
                <div className="test">
                    <div className="col-number">
                        0
                    </div>
                    <div className="title">

                        { editMode ?
                            <input
                                className="title-input"
                                value={ column.title }
                                onChange={ (e) => updateCol(column.id, e.target.value) }
                                autoFocus
                                onBlur={ () => {
                                    setEditMode(false)
                                } }
                                onKeyDown={ (e) => {
                                    if (e.key !== "Enter") return;
                                    setEditMode(false);
                                } }
                            />
                            :
                            column.title
                        }
                    </div>
                </div>
                <button className="delete" onClick={ () => { deleteColumn(column.id) } }>
                    <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" className="icon">
                        <g id="Page-1" sketch:type="MSPage">
                            <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -1087.000000)">
                                <path d="M584,1117 C576.268,1117 570,1110.73 570,1103 C570,1095.27 576.268,1089 584,1089 C591.732,1089 598,1095.27 598,1103 C598,1110.73 591.732,1117 584,1117 L584,1117 Z M584,1087 C575.163,1087 568,1094.16 568,1103 C568,1111.84 575.163,1119 584,1119 C592.837,1119 600,1111.84 600,1103 C600,1094.16 592.837,1087 584,1087 L584,1087 Z M589.717,1097.28 C589.323,1096.89 588.686,1096.89 588.292,1097.28 L583.994,1101.58 L579.758,1097.34 C579.367,1096.95 578.733,1096.95 578.344,1097.34 C577.953,1097.73 577.953,1098.37 578.344,1098.76 L582.58,1102.99 L578.314,1107.26 C577.921,1107.65 577.921,1108.29 578.314,1108.69 C578.708,1109.08 579.346,1109.08 579.74,1108.69 L584.006,1104.42 L588.242,1108.66 C588.633,1109.05 589.267,1109.05 589.657,1108.66 C590.048,1108.27 590.048,1107.63 589.657,1107.24 L585.42,1103.01 L589.717,1098.71 C590.11,1098.31 590.11,1097.68 589.717,1097.28 L589.717,1097.28 Z" id="cross-circle" sketch:type="MSShapeGroup">

                                </path>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>


            <div div className="col-content" >
                Content
            </div>


            {/*Column Footer */ }

            <div div className="col-footer" > Footer</div>

        </div>

    )
}

export default ColumnContainer