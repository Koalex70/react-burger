import React, {FC, useRef} from "react";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../burger-constructor-element/burger-constructor-element.module.css";

import {DELETE_BURGER_CONSTRUCTOR_INGREDIENT} from "../../services/actions/burger-constructor";
import {REMOVE_BURGER_INGREDIENT_COUNT} from "../../services/actions/burger-ingredients";
import {DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {TBurgerConstructorElement} from "../../services/types";
import {useDispatch} from "../../services/hooks/use-dispatch";

const BurgerConstructorElement: FC<TBurgerConstructorElement> = ({ingredient, index, moveCard}) => {

    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        dispatch({
            type: DELETE_BURGER_CONSTRUCTOR_INGREDIENT,
            uuid: ingredient.uuid
        });

        dispatch({
            type: REMOVE_BURGER_INGREDIENT_COUNT,
            id: ingredient.id
        })
    }

    const [, drop] = useDrop<{ index: number }>({
        accept: 'component',
        hover(item, monitor: DropTargetMonitor): void {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            const hoverBoundingRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();

            if (!clientOffset) {
                return;
            }

            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    });

    const [{isDragging}, drag] = useDrag({
        type: 'component',
        item: () => ({id: ingredient.id, index}),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    const preventDefault = (e: { preventDefault: () => void; }) => e.preventDefault();

    return (
        <div className={styles.container} ref={ref} style={{opacity}} onDrop={preventDefault}>
            <DragIcon type={"primary"}/>
            <ConstructorElement text={ingredient.name} thumbnail={ingredient.image_mobile} price={ingredient.price}
                                extraClass={styles.element} handleClose={handleClose}/>
        </div>
    )
}

export default BurgerConstructorElement;