import React from 'react';
import { widthPercentageToDP as wpdp, heightPercentageToDP as hpdp } from 'react-native-responsive-screen';

import 'react-native-gestrue-handler';

import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

function LoginScreen({navigation: {navigate}}) {
    return (
        <View style={styles.container}>
            <View style={styles.topArea}>
                <View style={styles.titleArea}>
                    <Image source={require('../src/Login.png')} style={{width: wpdp(30), resizeMode: 'contain'}}/>
                </View>
                <View style={styles.TextArea}>
                    <Text style={styles.Text}>Gunbariz의 서비스를 이용하시려면</Text>
                    <Text style={styles.Text}>로그인을 진행해주세요.</Text>
                </View>
            </View>

            <View style={styles.formArea}>
                <TextInput style={styles.textFromTop} placeholder={'아이디'} />
                <TextInput style={styles.textFromBottom} placeholder={'비밀번호'} />
                <Text style={styles.TextValidation}>유효하지 않은 ID입니다.</Text>
            </View>
            
            <View style={{flex: 0.75}}>
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={(styles.Text, {color: 'white'})}>로그인</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 3}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingLeft: wpdp(7),
        paddingRight: wpdp(7),
    },
    topArea: {
        flex: 1,
        paddingTop: wpdp(2),
    },
    titleArea: {
        flex: 0.7,
        justifyContent: 'center',
        paddingTop: wpdp(3),
    },
    TextArea: {
        flex: 0.3,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    Text: {
        fontSize: wp('4%'),
    },
    TextValidation: {
        fontSize: wp('4%'),
        color: 'red',
        paddingTop: wp(2),
    },

    formArea: {
        justifyContent: 'center',
        // paddingTop: wp(10),
        flex: 1.5,
    },
    textFormTop: {
        borderWidth: 2,
        borderBottomWidth: 1,
        borderColor: 'black',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        width: '100%',
        height: hp(6),
        paddingLeft: 10,
        paddingRight: 10,
    },
    textFormBottom: {
        borderWidth: 2,
        borderTopWidth: 1,
        borderColor: 'black',
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
        width: '100%',
        height: hp(6),
        paddingLeft: 10,
        paddingRight: 10,
    },
    btnArea: {
        height: hp(8),
        // backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: hp(1.5),
    },
    btn: {
        flex: 1,
        width: '100%',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
});

export default LoginScreen;