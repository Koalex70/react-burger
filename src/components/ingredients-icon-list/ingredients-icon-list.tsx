import {FC} from "react";
import styles from './ingredients-icon-list.module.css';

type TIngredientsIconList = {
    images: Array<string>;
}

function prepareImages(images: string[]) {
    let list = [];
    let marginLeft = -40;
    let zIndex = 1000;

    for (let i = 0; i < images.length; ++i) {

        if (i === 6) {
            list.push(
                <div className={styles.filter}
                     style={{marginLeft: marginLeft + "px", zIndex: zIndex.toString()}}>
                    <div className={styles.count}>
                        +{images.length - i}
                    </div>
                </div>
            )

            break;
        }

        marginLeft += 40;
        zIndex = zIndex - 10;

        list.push(
            <div className={styles.image}
                 style={{marginLeft: marginLeft + "px", zIndex: zIndex.toString()}}>
                <div className={styles.black}>
                    <img src={images[i]} alt="icon"/>
                </div>
            </div>
        )
    }

    return list;
}

const IngredientsIconList: FC<TIngredientsIconList> = ({images}) => {

    if (!images) {
        return (
            <></>
        )
    }

    const list = prepareImages(images);

    // let marginLeft = -40;
    // let zIndex = 1000;
    //
    // {
    //     images.map((image, index) => {
    //         marginLeft += 40;
    //         zIndex = zIndex - 10;
    //         return <div key={index} className={styles.image}
    //                     style={{marginLeft: marginLeft + "px", zIndex: zIndex.toString()}}>
    //             <div className={styles.black}>
    //                 <img src={image} alt="icon"/>
    //             </div>
    //         </div>
    //     })
    // }

    return (
        <div className={styles.wrapper}>

            {list.map((image, index) => {
                return <div key={index}>{image}</div>
            })}

        </div>
    )
}

export default IngredientsIconList;