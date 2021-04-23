import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Toast from 'react-native-easy-toast';
import { Colors } from 'utils/enums';
import InputOption from 'components/Profile/InputOption';

export interface AccountOptionsProps {
  
}
 
const AccountOptions: React.FC<AccountOptionsProps> = () => {
  const options = generateOptions();
  return (  
    <View style={styles.viewAccountOptions}>
      {
        options.map((option,index) => (
          <InputOption
            key={index}
            option={option}
          />
        ))
      }
    </View>
  );
}

const generateOptions = () => {
  return [
    {
      title: "Nombre",
      iconType: "material-community",
      iconEdit: "pencil",
      iconSave: "content-save",
      placeholder: "Jean Osco"
    },
    {
      title: "Correo",
      iconType: "material-community",
      iconEdit: "pencil",
      iconSave: "content-save",
      placeholder: "Willjean29@gmail.com"
    },
    {
      title: "Teléfono",
      iconType: "material-community",
      iconEdit: "pencil",
      iconSave: "content-save",
      placeholder: "+51942057603"
    }
  ]
}

const styles = StyleSheet.create({
  viewAccountOptions: {
    // borderWidth: 3,
    marginTop: 40,
    marginHorizontal: 10
  }
})
 
export default AccountOptions;
