import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 44,
      }}
      spin
    />
  );

  return (
    <>
      <div className="catContainer">
        <Spin indicator={antIcon} />
        <button type="button" className="statusBtn" onClick={() => dispatch(checkingStatus())}>
          Check Status
        </button>
        <span className="statusMsg">
          {status.message}
        </span>
      </div>
    </>
  );
}

export default Categories;
