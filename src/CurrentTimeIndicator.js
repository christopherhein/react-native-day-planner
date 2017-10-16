/* @flow */

'use strict';

import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CurrentTimeIndicator extends Component {
  propTypes: {
    displayTime: PropTypes.string.isRequired,
    top: PropTypes.number.isRequired,
  }

  render() {
    const { displayTime, top } = this.props;
    return (
      <View style={[styles.container, { top }]}>
        <Text style={styles.text}>{displayTime}</Text>
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  text: {
    fontSize: 12,
    width: 50,
    paddingRight: 10,
    textAlign: 'right',
    color: 'red',
  },
  line: {
    flex: 1,
    borderTopWidth: 3,
    borderColor: 'red',
  }
});
