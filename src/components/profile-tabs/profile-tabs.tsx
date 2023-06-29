import React, {FC} from "react";
import styles from "./profile-tabs.module.css";
import classNames from "classnames";
import {EXIT, LOGIN_PATH, ORDER_HISTORY, PROFILE} from "../../constants/constants";
import {useDispatch} from "react-redux";
import {logout} from "../../services/actions/logout";
import {useNavigate} from "react-router-dom";
import {TProfileTabs} from "../../services/types";

const ProfileTabs: FC<TProfileTabs> = ({activeTab}) => {
    const dispatch = useDispatch() as any;
    const navigate = useNavigate();

    const onCLick = () => {
        dispatch(logout());
        navigate(LOGIN_PATH);
    }

    return (
        <div className={styles.tabs}>
            <div
                className={classNames([styles.tab, 'text text_type_main-medium text_color_inactive', activeTab === PROFILE ? styles.active : ''])}>
                <p>{PROFILE}</p>
            </div>
            <div
                className={classNames([styles.tab, 'text text_type_main-medium text_color_inactive', activeTab === ORDER_HISTORY ? styles.active : ''])}>
                <p>{ORDER_HISTORY}</p>
            </div>
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