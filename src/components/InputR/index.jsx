import React from 'react';

import { IconContainer, InputContainer, InputText} from './styles';
// import { Controller } from "react-hook-form";

const InputR = ({leftIcon, name, ...rest}) => {
  return (
    <>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InputText {...rest}/>
    </InputContainer>
    </>
  )
}

export { InputR };
