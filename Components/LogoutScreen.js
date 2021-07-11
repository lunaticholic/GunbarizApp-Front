import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';

import { widthPercentageToDP as wpdp, heightPercentageToDP as hpdp } from 'react-native-responsive-screen';

const LogoutScreen: () => React$Node = () => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1.5}} />
            <View style={{flex: 2}}>
                <View style={styles.logoArea}>
                    <Image source={require('../src/MainLogo_01.png')} style={{width: '75%', resizeMode: 'contain'}} />
                </View>
            </View>
            <View style={{flex: 0.5, flexDirection: 'row'}}>
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btnoutline}>
                        <Text>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color: 'white'}}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    logoArea: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    btnArea: {
        //backgroundColor: 'orange',
        flex: 1,
        height: hpdp(6),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        flex: 1,
        width: wpdp(45),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    btnoutline: {
        flex: 1,
        width: wpdp(45),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
  },
});

export default LogoutScreen;
