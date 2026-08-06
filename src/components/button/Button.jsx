import React from 'react';
import { Button , Flex} from 'antd';
import './Button.css';


const ButtonComponent = ({btnName}) => (
  <Flex gap="small" wrap>
    <Button className='btn' type="primary">{btnName}</Button>
  
  </Flex>
);
export default ButtonComponent;