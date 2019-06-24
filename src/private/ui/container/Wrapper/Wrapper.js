import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataAsync } from '../../../engine/core/dataMain/saga/asyncAction';
import Style from './Wrapper.module.scss';
// import SearchPanel from '../../components/SearchPanel';
// import AddFrom from '../../components/AddForm';
// import TodoList from '../../components/TodoList';
// import Done from '../../components/Done';

class Wrapper extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className={Style.Wrapper}>
        <div className={Style.Wrapper__Container}>
          {/* <SearchPanel /> */}
          {/* <AddFrom /> */}
          {/* <TodoList /> */}
          {/* <Done /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.dataReducer.get('data'),
});

const mapDispatchToProps = {
  getData: getDataAsync.getDataAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
