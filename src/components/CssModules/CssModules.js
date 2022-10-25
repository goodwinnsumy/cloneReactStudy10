import React from 'react';
import styles from './Examples.module.scss';

class CssModules extends React.Component {

  render() {

    console.log( styles['class-example'] );

    return (
      <div>

        <button className={styles.btn}> Кнопка из CSS модулей </button>

        <h2 className='App-title'>Css Modules title example</h2>

        <p className={styles.test}>
          lorem import sds test text
        </p>

        <div className={styles['class-example']}>
          test text in div
        </div>
      </div>
    )
  }
}

export default CssModules;