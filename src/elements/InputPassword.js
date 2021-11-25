import React, {useState} from 'react';
import Input from '~elements/Input';

const InputPassword = props => {
  const [secureText, setSecureText] = useState(true);

  return <Input autoComplete="password" secureTextEntry={secureText} textContentType="password" {...props} />;
};

export default InputPassword;
