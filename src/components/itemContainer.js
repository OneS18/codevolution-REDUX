import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>item - {props.item}</h2>
      <button onClick={props.buyItem}>buy items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFuntion = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFuntion,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
