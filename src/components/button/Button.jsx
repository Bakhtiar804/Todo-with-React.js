import React from 'react';
import { Button , Flex} from 'antd';
import './Button.css';


const ButtonComponent = ({btnName , onClick}) => (
  <Flex gap="small" wrap>
    <Button className='btn' type="primary" onClick={onClick}>
      {btnName}
    </Button>
  </Flex>
);
export default ButtonComponent;