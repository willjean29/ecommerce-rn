import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from 'utils/enums';

export interface SpinnerLoadingProps {
  
}
 
const SpinnerLoading: React.FC<SpinnerLoadingProps> = () => {
  return (  
    <View style={styles.viewSpinner}>
      <ActivityIndicator color={Colors.GREEN} size="large"/>
      <Text>
        Cargando ...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewSpinner: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
    alignItems: "center"
  }
})
 
export default SpinnerLoading;
