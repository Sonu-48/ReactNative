import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
    Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Switch
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = yup.object().shape({
  username: yup.string()
  .matches(
    /^[a-zA-Z0-9_]{4,}$/,
    'Username must be at least 4 characters long and contain only letters, digits, and underscores'
  )
  .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = () => {
  const navigation = useNavigation();
  // const userdata = useSelector((state)=>state.userdata.uservalue)

  const handleSubmit = async (values) => {
   
    try {
      const uservalue = await AsyncStorage.getItem('userData');
      if (uservalue) {
        const parseuserdata = JSON.parse(uservalue);
        console.log("AsyncStorage user data:", parseuserdata);
  
        // Now you can compare the username and password with the fetched user data
        if (values.username === parseuserdata.username && values.password === parseuserdata.password) {
          Alert.alert("Login Successfully")
          values.username = ''
          values.password = ''
          navigation.navigate('Home')
        } else {
          Alert.alert("Invalid username or password")
        }
      } else {
        Alert.alert("Invalid username or password")
        values.username = ''
        values.password = ''
      }
    } catch (error) {
      console.error("Error fetching user data from AsyncStorage:", error);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Formik
          initialValues={{username: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={(values)=>handleSubmit(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.main}>
              <View style={styles.textbox}>
                <Text style={styles.heading}>Connected</Text>
                <Text style={styles.para}>Your favorite social network</Text>
              </View>
              <View style={styles.loginWrapper}>
                <View>
                  <Text style={styles.logintext}>Log in</Text>
                  <View style={{marginTop: 30}}>
                    <Text>Username</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your username"
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                    />
                    {touched.username && errors.username && (
                      <Text style={styles.errorText}>{errors.username}</Text>
                    )}
                  </View>
                  <View style={{marginTop: 20}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text>Password</Text>
                      <TouchableOpacity onPress={()=>navigation.navigate('Forgot Password')}>
                        <Text style={[styles.signupText, styles.forgottext]}>
                          Forgot your password
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your password"
                      secureTextEntry={true}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    {touched.password && errors.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                  </View>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.btn}>Log in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  main: {
    backgroundColor: 'rgb(82, 103, 211)',
    margin: 10,
    borderRadius: 20,
    paddingTop: 30,
    flex: 1,
  },
  loginWrapper: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    flex: 1,
  },
  textbox: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  para: {
    fontSize: 13,
    color: '#fff',
    marginBottom: 10,
  },
  logintext: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  btn: {
    backgroundColor: 'rgb(82, 103, 211)',
    textAlign: 'center',
    padding: 10,
    borderRadius: 7,
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 40,
  },
  bottomContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontWeight: 'bold',
    color: 'rgb(82, 103, 211)',
    marginLeft: 10,
  },
  forgottext: {
    fontSize: 12,
  },
  errorText: {
    color: 'red',
  },
});

export default Login;
