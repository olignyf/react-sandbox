import * as React from 'react';

export interface IGroupProps {
  /**
   * Theme that is defined from CreateHaiThemeContext
   */
  children?: any; 
  id?: any;
}

const VerticalGroup = (props: IGroupProps) => {
  const {
    ...rest
  } = props;
    
  return (
    <div {...rest} className={`vertical-group`}>
      {props.children}      
    </div>
  );
};

export default VerticalGroup;