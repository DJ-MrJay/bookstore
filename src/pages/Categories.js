import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStatus } from '../redux/categories/categories';

function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button type="button" className="statusBtn" onClick={() => dispatch(checkingStatus())}>
          Check Status
        </button>
        <span className="statusMsg">
          {status}
        </span>
      </div>
    </>
  );
}

export default Categories;
