import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/slices/amount';

const ButtonIncrement = () => {
  const amountCinemas = useSelector((state) => state.amount.value);
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(increment())}>
      {amountCinemas}
    </button>
  );
};

export default ButtonIncrement;
