import React, { useState } from 'react';
import { SetStateAction } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Colors } from 'utils/enums';
export interface ModalProps {
  isVisible: boolean;
  children: React.ReactElement;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}
 
const Modal: React.FC<ModalProps> = ({children, isVisible, setIsVisible}) => {
  return (  
    <Overlay
      isVisible={isVisible}
      overlayStyle={styles.overlayStyle}
      onBackdropPress={() => setIsVisible(false)}
    >
      {children}
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlayStyle: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    borderColor: Colors.GREEN,
    borderWidth: 2,
    height: "auto",
    width: "90%"
  }
})
 
export default Modal;