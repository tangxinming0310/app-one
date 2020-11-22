import React from "react";
import { Button, message  } from 'antd';
import "./header.css";

const ZYHeader = () => {

  const vent = () => {
    message.info('您已发泄成功');
  };

  return (
    <div className='zy-header-container'>
      <div className='zy-header'>
        <div className="zy-app-title">
          ZHIYUAN
        </div>
        <Button danger onClick={vent}>发泄愤怒</Button>
      </div>
    </div>
  );
};

export default ZYHeader;
