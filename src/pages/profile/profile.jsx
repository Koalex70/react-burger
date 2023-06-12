import React from "react";
import Profile from "../../components/profile/profile";
import styles from './profile.module.css';
import ProfileTabs from "../../components/profile-tabs/profile-tabs";
import {PROFILE} from "../../constants/constants";

const ProfilePage = () => {

    return (
        <div className={styles.wrapper}>
            <ProfileTabs activeTab={PROFILE}/>
            <Profile/>
        </div>
    )
}

export default ProfilePage;