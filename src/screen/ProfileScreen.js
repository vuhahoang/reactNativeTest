// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View , TouchableOpacity,Image, Button} from 'react-native';
// import React, { Component, useState } from "react";

// // export default function App() {
// //     const {navigation} = this.props 
// //     return <ProfileScreen navigation={navigation}/>;
// //    }

// const ProfileScreen = (props) => {
    
//     return (
//         <View>
//             <Text> Tùng béo đz</Text>
//             <Button title='Dz'></Button>
//         </View>
//     )
//   };

import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity,Image, Button} from 'react-native';

function ProfileScreen(props) {
    const {navigation} = props;
    return (
        <View>
        
            <Button title='Dz' onPress={() => {navigation.navigate('Animated')}} ></Button>
        </View>
    )
}

export default ProfileScreen