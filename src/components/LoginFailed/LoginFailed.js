import React from 'react';
import styles from './failed.module.scss'
import {
    Link,
  } from "react-router-dom";

const { loginform, headerTitle, linkItem
    } = styles

export class LoginFailed extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className={loginform}>
                 <h2 className={headerTitle}>Login failed</h2>      
                    <Link className={linkItem} to="/login">Go to login</Link>
            </div>
        );
    }
}
