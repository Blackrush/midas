import * as React from 'react';
import * as Layout from './components/layout';
import Money from './components/Money';

import * as styles from './App.scss';

const Header = ({name = 'Midas'}) => (
  <h1 className={styles.header}>
    {name}
  </h1>
);

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Header/>

        <Money amount={1348.45}/>

        <Layout.Row>
          <Layout.Column>
            hello
          </Layout.Column>

          <Layout.Column>
            hello
          </Layout.Column>

          <Layout.Column>
            hello
          </Layout.Column>
        </Layout.Row>
      </div>
    );
  }
}