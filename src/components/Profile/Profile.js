import React, { useEffect, useState } from 'react';
import { GET_PROFILE } from '../../constants/urls';
import { request, replaceParams } from '../../utils/utils';
import styles from './Profile.module.css';

const Profile = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    if (!Object.keys(profile).length) {
      request(replaceParams(GET_PROFILE, { userId: 1 })).then(response => setProfile(response));
    }
  });
  return (
    <div className={styles.profileContainer}>
      <div className={styles.avatarWrapper}>
        <img className={styles.avatar} alt="avatar" src={profile.profile_picture}/>
      </div>
      <div className={styles.nameContainer}>
        <h3 className={styles.name}>{profile.name}</h3>
        <div className={styles.email}>{profile.email}</div>
      </div>
      <div className={styles.goalContainer}>
        <h3>Current Goal</h3>
        <span>{profile.fitness_goal}</span>
      </div>
    </div>
  );
};

export default Profile;
