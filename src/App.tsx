import * as React from 'react';
import * as Table from '@blueprintjs/table';
import * as Layout from './components/layout';
import Money from './components/Money';

import * as styles from './App.scss';

const Header = ({name = 'Midas'}) => (
  <h1 className={styles.header}>
    {name}
  </h1>
);

interface Table2State {
  initialized: boolean;
  width: number;
  height: number;
}

class Table2 extends React.Component<Table.ITableProps> {
  state: Table2State = {
    initialized: false,
    height: 0,
    width: 0,
  };

  private table: Table.Table | null;

  render() {
    return (
      <div style={this.containerStyle}>
        <Table.Table
          {...this.props}
          ref={table => this.table = table}
        />
      </div>
    );
  }

  get containerStyle(): React.CSSProperties {
    if (this.state.initialized) {
      return {
        paddingTop: 1,
        height: 31 + this.state.height,
        width: 30 + this.state.width,
      };
    }

    return {
      width: '100%',
    };
  }

  componentDidMount() {
    const table = this.table;
    if (!table) {
      return;
    }

    if (table.state.rowHeights && table.state.columnWidths) {
      this.setState({
        initialized: true,
        width: table.grid.getWidth(),
        height: table.grid.getHeight(),
      });
    }
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Header/>

        <Money amount={1348.45}/>

        <Layout.Row>
          <Layout.Column>
            <Table2 numRows={20} defaultRowHeight={25} defaultColumnWidth={110}>
              <Table.Column/>
              <Table.Column/>
              <Table.Column/>
              <Table.Column/>
              <Table.Column/>
            </Table2>
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