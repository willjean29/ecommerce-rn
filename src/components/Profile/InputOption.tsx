import UserContext from 'context/user/user.context';
import React, { useState } from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { Colors, MessagesToast } from 'utils/enums';
import { validationEmail, validationPhone } from 'utils/validations';

interface Option {
  title: string,
  iconType: string,
  iconEdit: string,
  iconSave: string,
  value: string | null | undefined,
  onPress: ((name: string) => Promise<void>) | (() => void)
}
export interface InputOptionProps {
  toast: React.MutableRefObject<any>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  recapcha: React.MutableRefObject<any>;
  setValidationId: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  option: Option
}
 
const InputOption: React.FC<InputOptionProps> = ({option,toast,setIsLoading,setIsVisible,recapcha,setValidationId,setEmail,setPhoneNumber}) => {
  const [editInput, setEditInput] = useState(false);
  const [inputValue, setInputValue] = useState(option.value as string);
  const {userState,sendCode,reloadUser} = useContext(UserContext);
  const iconName = editInput ? option.iconSave : option.iconEdit;

  const handleUpdateOption = async() => {
    if(iconName === option.iconSave) {
      if(!inputValue){
        toast.current.show(MessagesToast.EMPTY);
        setEditInput(!editInput);
        setInputValue(option.value as string);
      }else if(inputValue === option.value) {
        toast.current.show(MessagesToast.VALUE_NO_CHANGE);
        setEditInput(!editInput);
        setInputValue(option.value as string);
      }else{
        switch (option.title) {
          case "Nombre":
            setIsLoading(true);
            try {
              await option.onPress(inputValue);
              setIsLoading(false);
              toast.current.show(MessagesToast.VALUE_CHANGE);
            } catch (error) {
              console.log(error);
              setInputValue(option.value as string);
              setIsLoading(false);
              toast.current.show(MessagesToast.VALUE_CHANGE_ERROR);
            }
            break;
          case "Correo":
              console.log("actulizar email");
              if(!validationEmail(inputValue)){
                toast.current.show(MessagesToast.EMAIL_ERROR);
                setEditInput(!editInput);
                setInputValue(option.value as string); 
              }else{
                try {
                  const validationId = await sendCode(userState.user?.phoneNumber as string, recapcha);
                  setValidationId(validationId);
                  setEmail(inputValue);
                  setIsVisible(true);
                } catch (error) {
                  console.log(error);
                  setInputValue(option.value as string);
                  setIsLoading(false);
                  toast.current.show(MessagesToast.VALUE_CHANGE_ERROR);
                }
              }
            break;
          case "Teléfono":
              console.log("actulizar telefono");
              if(!validationPhone(inputValue)){
                toast.current.show(MessagesToast.NUMBER_ERROR);
                setEditInput(!editInput);
                setInputValue(option.value as string); 
              }else{
                try {
                  const validationId = await sendCode(inputValue, recapcha);
                  setValidationId(validationId);
                  setPhoneNumber(inputValue);
                  setIsVisible(true);
                } catch (error) {
                  console.log(error);
                  setInputValue(option.value as string);
                  setIsLoading(false);
                  toast.current.show(MessagesToast.VALUE_CHANGE_ERROR);
                }

              }
            break;
          default:
            break;
        }
      }
    }
    setEditInput(!editInput);
  }
  return (  
    <View>
    <Text style={styles.txtLabel}>
      {option.title}
    </Text>
    <Input
      placeholder={option.title}
      disabled={editInput ? false : true}
      inputStyle={styles.inputOption}
      defaultValue={inputValue}
      onChangeText={(text: string) => setInputValue(text)}
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
