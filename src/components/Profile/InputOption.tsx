import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { Colors } from 'utils/enums';

interface Option {
  title: string,
  iconType: string,
  iconEdit: string,
  iconSave: string,
  placeholder: string,
  onPress?: () => void
}
export interface InputOptionProps {
  option: Option
}
 
const InputOption: React.FC<InputOptionProps> = ({option}) => {
  const [editInput, setEditInput] = useState(false);
  const iconName = editInput ? option.iconSave : option.iconEdit;
  const handleUpdateOption = () => {
    if(iconName === option.iconSave) {
      console.log("ACTULIZANDO OPCION");
    }
    setEditInput(!editInput);
    
  }
  return (  
    <View>
    <Text style={styles.txtLabel}>
      {option.title}
    </Text>
    <Input
      // placeholder={option.placeholder}
      disabled={editInput ? false : true}
      inputStyle={styles.inputOption}
      defaultValue={option.placeholder}
      rightIcon={
        <Icon
          type={option.iconType}
          name={iconName}
          size={22}
          onPress={() => handleUpdateOption()}
        />
      }
    />
  </View>
  );
}

const styles = StyleSheet.create({
  txtLabel: {
    marginLeft: 10,
    color: Colors.GREEN,
    fontWeight: "bold",
    fontSize: 16
  },
  inputOption: {
    fontWeight: "bold",
    opacity: 1
  }
})
 
export default InputOption;
