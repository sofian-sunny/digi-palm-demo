import React from 'react';
import styles from './home.module.scss'
import {
    Link,
  } from "react-router-dom";

const { loginform, headerTitle, linkItem
    } = styles

export class HomePage extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className={loginform}>
                 <h2 className={headerTitle}>Logged in successfully</h2> 
                 <Link className={linkItem} to="/login">Go to login</Link>           
            </div>
        );
    }
}
