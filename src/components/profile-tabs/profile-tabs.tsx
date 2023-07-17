import React, {FC} from "react";
import styles from "./profile-tabs.module.css";
import classNames from "classnames";
import {EXIT, LOGIN_PATH, ORDER_HISTORY, PROFILE, PROFILE_ORDERS_PATH, PROFILE_PATH} from "../../constants/constants";
import {logout} from "../../services/actions/logout";
import {Link, useNavigate} from "react-router-dom";
import {TProfileTabs} from "../../services/types";
import {useDispatch} from "../../services/hooks/use-dispatch";

const ProfileTabs: FC<TProfileTabs> = ({activeTab}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onCLick = () => {
        dispatch(logout());
        navigate(LOGIN_PATH);
    }

    return (
        <div className={styles.tabs}>
            <Link to={PROFILE_PATH} className={styles.tab}>
                <div
                    className={classNames([styles.tab, 'text text_type_main-medium text_color_inactive', activeTab === PROFILE ? styles.active : ''])}>
                    <p>{PROFILE}</p>
                </div>
            </Link>
            <Link to={PROFILE_ORDERS_PATH} className={styles.tab}>
                <div
                    className={classNames([styles.tab, 'text text_type_main-medium text_color_inactive', activeTab === ORDER_HISTORY ? styles.active : ''])}>
                    <p>{ORDER_HISTORY}</p>
                </div>
            </Link>
            <div
                className={classNames([styles.tab, 'text text_type_main-medium text_color_inactive'])}
                onClick={onCLick}>
                <p>{EXIT}</p>
            </div>
            <div className={classNames([styles.info, 'text text_type_main-default mt-20'])}>
                В этом разделе вы можете
                изменить свои персональные данные
            </div>
        </div>
    )
}

export default ProfileTabs;