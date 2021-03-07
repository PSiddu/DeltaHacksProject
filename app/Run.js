import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

state = {
    timer: null,
    counter: '00',
    miliseconds: '00',
    startDisabled: true,
    stopDisabled: false
}

 
export const Run = ({navigation}) =>{
 
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [stopwatchTime, setIsStopwatchTime] = useState(0);
    const [resetStopwatch, setResetStopwatch] = useState(false);
 
    return (
        <View style={styles.container}>
            <Stopwatch
                laps
                start={isStopwatchStart}
                //To start
                reset={resetStopwatch}
                //To reset
                options={options}
                //options for the styling
                getTime={(time) => {
                    setIsStopwatchTime(time)
                }}
          />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.usrBtn}
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}>
            <Text style={styles.btnText}>
              {!isStopwatchStart ? 'START' : 'STOP'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.usrBtn}
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}>
            <Text style={styles.btnText}>RESET</Text>
          </TouchableOpacity>
        </View>
        </View>
    )}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#7e9abf'
        },
        title: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
          },
          sectionStyle: {
            flex: 1,
            marginTop: 32,
            alignItems: 'center',
            justifyContent: 'center',
          },
          btnContainer:{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            marginTop: 8,
            marginLeft: 5
          },
          usrBtn:{
            marginTop: 10,
            backgroundColor: '#f9aa33',
            padding: 10,
            width: '45%',
            borderRadius: 5
          },
          btnText:{
            fontSize: 20,
            textAlign: 'center',
          }
    });

    const options = {
        container: {
          padding: 5,
          width: 200,
          alignItems: 'center',
        },
        text: {
          fontSize: 40,
          color: 'black',
          marginLeft: 7,
        },
      };
    
export default Run
