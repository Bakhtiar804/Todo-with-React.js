import React from 'react';
import { Input } from 'antd';
import './Input.css';

const InputComponent = ({ value, onChange }) => (
  <Input
    className="inp"
    placeholder="Add a todo"
    value={value}
    onChange={onChange}
  />
);

export default InputComponent;