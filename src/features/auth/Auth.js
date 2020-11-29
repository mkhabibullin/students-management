import React from 'react';
import styles from './Auth.module.scss';

export function Auth() {
    return <div className={styles.Page}>
      <form className={styles.Form + ' ' + styles.RegisterForm}>
          <input type="text" placeholder="name"/>
          <input type="password" placeholder="password"/>
          <input type="text" placeholder="email address"/>
          <button>create</button>
          <p className={styles.Message}>Already registered? <a href="#">Sign In</a></p>
        </form>
        <form className={styles.Form}>
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <p className={styles.Message}>Not registered? <a href="#">Create an account</a></p>
      </form>
    </div>;
}
