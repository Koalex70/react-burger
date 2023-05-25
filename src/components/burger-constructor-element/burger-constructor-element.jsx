import React, {useRef} from "react";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../burger-constructor-element/burger-constructor-element.module.css";

import {useDispatch} from "react-redux";
import {DELETE_BURGER_CONSTRUCTOR_INGREDIENTS} from "../../services/actions/burger-constructor";
import {REMOVE_BURGER_INGREDIENT_COUNT} from "../../services/actions/burger-ingredients";
import {useDrag, useDrop} from "react-dnd";
import PropTypes from "prop-types";


export default function BurgerConstructorElement({ingredient, index, moveCard}) {

    const dispatch = useDispatch();
    const ref = useRef(null);

    const handleClose = () => {
        dispatch({
            type: DELETE_BURGER_CONSTRUCTOR_INGREDIENTS,
            uuid: ingredient.uuid
        });

        dispatch({
            type: REMOVE_BURGER_INGREDIENT_COUNT,
            id: ingredient._id
        })
    }

    const [{handlerId}, drop] = useDrop({
        accept: 'component',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover(ingredient, monitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = ingredient.index;
            const hoverIndex = index;

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(dragIndex, hoverIndex);
            ingredient.index = hoverIndex;
        }
    });

    const [{isDragging}, drag] = useDrag({
        type: 'component',
        item: () => ({id: ingredient._id, index}),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    const preventDefault = (e) => e.preventDefault();

    return (
        <div className={styles.container} ref={ref} style={{opacity}} onDrop={preventDefault}
             data-handler-id={handlerId}>
            <DragIcon type={"primary"}/>
            <ConstructorElement text={ingredient.name} thumbnail={ingredient.image_mobile} price={ingredient.price}
                                extraClass={styles.element} handleClose={handleClose}/>
        </div>
    )
}

BurgerConstructorElement.propTypes = {
    ingredient: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,
    moveCard: PropTypes.func.isRequired
}