/* @flow */

'use strict';

import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CalendarEvent extends Component {
  propTypes: {
    style: View.propTypes.style,
    title: PropTypes.string.isRequired,
  }

  render() {
    const { style, title } = this.props;
    return (
      <View style={[styles.calendarEvent, style]}>
        <Text>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendarEvent: {
    position: 'absolute',
  },
});
