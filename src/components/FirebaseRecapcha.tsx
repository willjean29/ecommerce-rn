import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from 'database/firebase';
export interface FirebaseRecapchaProps {
  recapcha: React.MutableRefObject<any>
}
 
const FirebaseRecapcha: React.FC<FirebaseRecapchaProps> = ({recapcha}) => {
  return (  
    <FirebaseRecaptchaVerifierModal
      ref={recapcha}
      title="CONFIRMA QUE NO ERES UN ROBOT"
      cancelLabel="X"
      firebaseConfig={firebaseConfig}
    />
  );
}
 
export default FirebaseRecapcha;