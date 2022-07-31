import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AccordionListItem = ({ title, bgColor, children }) => {
    const [open, setOpen] = useState(false);
    const animatedController = useRef(new Animated.Value(0)).current;
    const [bodySectionHeight, setBodySectionHeight] = useState(0);
  
    const bodyHeight = animatedController.interpolate({
      inputRange: [0, 1],
      outputRange: [0, bodySectionHeight],
    });
  
    const arrowAngle = animatedController.interpolate({
      inputRange: [0, 1],
      outputRange: ['0rad', `${Math.PI}rad`],
    });
  
    const toggleListItem = () => {
      if (open) {
        Animated.timing(animatedController, {
          duration: 300,
          toValue: 0,
          easing: Easing.bezier(0.4, 0.0, 0.2, 1),
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(animatedController, {
          duration: 300,
          toValue: 1,
          easing: Easing.bezier(0.4, 0.0, 0.2, 1),
          useNativeDriver: false,
        }).start();
      }
      setOpen(!open);
    };
  
    return (
      <>
        <TouchableWithoutFeedback onPress={() => toggleListItem()}>
          <View style={[styles.titleContainer, { backgroundColor: bgColor ? bgColor : '#FAFAFA'}]}>
            <Text style={styles.titleText}>{title}</Text>
            <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
              <Icon name="keyboard-arrow-down" size={32} color="#000"/>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
          <View
            style={[styles.bodyContainer, { backgroundColor: bgColor ? bgColor : '#FAFAFA'}]}
            onLayout={event =>
              setBodySectionHeight(event.nativeEvent.layout.height)
            }>
            {children}
          </View>
        </Animated.View>
      </>
    );
  };
  export default AccordionListItem;
  
  const styles = StyleSheet.create({
    bodyBackground: {
      backgroundColor: '#EFEFEF',
      overflow: 'hidden',
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      paddingLeft: 15,
      paddingTop: 49,
      paddingBottom: 22,
    },
    titleText:{
      fontSize: 18,
      fontWeight: '700'
    },
    bodyContainer: {
      paddingBottom: 20,
      paddingHorizontal: 19,
      position: 'absolute',
      bottom: 0,
    },
  });