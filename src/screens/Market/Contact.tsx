import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import MessagesContext from 'context/messages/messages.context';
import UserContext from 'context/user/user.context';
export interface ContactProps {
  
}
 
const Contact: React.FC<ContactProps> = () => {

  return (  
    <View>
      <Text>Contact</Text>
    </View>
  );
}
 
export default Contact;