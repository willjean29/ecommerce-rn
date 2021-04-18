import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Overlay } from 'react-native-elements';
import { Grid } from 'react-native-animated-spinkit';
import { Colors } from 'utils/enums';

export interface LoadingProps {
  isVisible: boolean;
  text: string;
}
 
const Loading: React.FC<LoadingProps> = ({isVisible, text}) => {
  return (  
    <Overlay 
      isVisible={isVisible}
      overlayStyle={styles.overlay}
    >
      <View
        style={styles.view}
      >
        <Grid size={48} color={Colors.GREEN}/>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 120,
    width: 200,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GREEN,
    borderWidth: 1.5,
    borderRadius: 10
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  text: {
    marginVertical: 10,
    color: Colors.GREEN,
    fontWeight: "bold",
  }
})
 
export default Loading;
