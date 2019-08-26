import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import TABS from './Tabs.constants';
import styles from './Tabs.module.css';

const Tabs = ({ location: { pathname } }) => {
  const tabs = TABS.map(tab => (
    <li key={tab.path} className={classNames(styles.tab, { [styles.active]: pathname === tab.path })}>
      <Link to={tab.path}>{tab.label}</Link>
    </li>
  ));
  return (
  <div>
    <nav>
      <ul className={styles.tabsWrapper}>
        {tabs}
      </ul>
    </nav>
  </div>
)};

export default withRouter(Tabs);
