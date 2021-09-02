import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBook } from "../redux";

const BookComponent = () => {
  const numOfBooks = useSelector((state) => state.book.numOfBooks);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>num of books: {numOfBooks}</h1>
      <button onClick={() => dispatch(buyBook())}>buy a Book</button>
    </div>
  );
};

export default BookComponent;
