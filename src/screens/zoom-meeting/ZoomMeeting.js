import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ZoomMeeting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity>
          <View style={styles.joinMeetingContainer}>
            <Text style={styles.joinMeeting}>Join the meeting</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ZoomMeeting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  card: {
    marginTop: 50,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  joinMeetingContainer: {
    borderWidth: 1,
    padding: 15,
    backgroundColor: '#2D8CFF',
    marginHorizontal: 50,
  },
  joinMeeting: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
});
