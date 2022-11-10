import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button type="button" onClick={() => dispatch(checkingStatus())}>
          Check Status
        </button>
        <br />
        <br />
        <span className="statusMsg">
          {status}
        </span>
      </div>
    </>
  );
}

export default Categories;
