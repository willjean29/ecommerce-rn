import React, { useState } from 'react';

export const useForm = <T extends Object>(data:T) => {
  const [dataForm, setDataForm] = useState(data);

  const onChangeValue = (value: string | number, key: keyof T) => {
    setDataForm({
      ...dataForm,
      [key] : value
    })
  }

  return {
    dataForm,
    onChangeValue
  }
}
 
