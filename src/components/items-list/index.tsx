import React from 'react';
import {bindActionCreators} from "redux";
import {addItem, removeItem} from "../../actions/itemsList";
import {connect} from "react-redux";

class ItemsList extends React.Component <{}, {}> {
  constructor () {
    // @ts-ignore
    super();

    this.state = {
      inputValue: ''
    }
  }

  get inputValue () {
    // @ts-ignore
    return this.state.inputValue;
  }

  handleChange = (event: any) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  addItem = () => {
    // @ts-ignore
    this.props.actions.addItem(this.state.inputValue);

    this.setState({
      inputValue: ''
    })
  };

  render () {
    // @ts-ignore
    const {itemsList} = this.props;

    // @ts-ignore
    return (
      <div>
        <div>
          {itemsList.map((item: any) => {
            return (
              <div key={item.id}>
                <span>{item.value}</span>
                <span> | </span>
                <span onClick={() => {
                  // @ts-ignore
                  this.props.actions.removeItem(item.id)
                }}>Remove</span>
              </div>
            );
          })}
        </div>
        <div>
          <input type="text" value={this.inputValue} onChange={event => this.handleChange(event)} />
          <button onClick={() => this.addItem()}>Add item</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    counter: state.counter,
    itemsList: state.itemsList
  }
};

const mapActionsToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators({addItem, removeItem}, dispatch)
  }
};

export default connect(mapStateToProps, mapActionsToProps)(ItemsList);

