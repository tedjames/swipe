import React, { Component } from 'react';
import { View, Animated } from 'react-native';

export default class Ball extends Component {
  componentWillMount() {
    // Initialize and declare initial position
    this.position = new Animated.ValueXY(0, 0);

    // Using the Animated.Spring template,
    // take this.position and start animating it's x and y values
    Animated.spring(this.position, {
      // this object defines where and how to animate
      toValue: { x: 200, y: 500 }
    }).start();
  }
  render() {
    return (
      // Be sure to apply this.position.getLayout() to an Animated.View component!
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
};
