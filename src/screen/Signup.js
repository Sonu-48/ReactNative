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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { adduser } from '../redux/slice/UserdataSlice';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  name: yup.string()
  .matches(
    /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/,
    'Please enter a valid full name'
  )
  .required('Full name is required'),
username: yup.string()
  .matches(
    /^[a-zA-Z0-9_]{4,}$/,
    'Username must be at least 4 characters long and contain only letters, digits, and underscores'
  )
  .required('Username is required'),
password: yup.string()
  .min(8, 'Password must be at least 8 characters long')
  .required('Password is required'),
repeatPassword: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
  .required('Repeat password is required'),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit=(values)=>{
    // const {name,username,email,password}=values;
    // const user={
    //   name,
    //   username,
    //   email,
    //   password
    // }
    dispatch(adduser(values));
    navigation.navigate('Login');
   
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Formik
          initialValues={{name:'',username:'',email:'',password:'',repeatPassword:''}}
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
                  <Text style={styles.logintext}>Create an account</Text>
                  <View style={{marginTop: 30}}>
                    <Text>Full name</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Name Surname"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    {touched.name && errors.name && (
                      <Text style={styles.errorText}>{errors.name}</Text>
                    )}
                  </View>
                  <View style={{marginTop: 20}}>
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
                    <View>
                      <Text>Email</Text>
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your password"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {touched.email && errors.email && (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                  </View>
                  <View style={{marginTop: 20}}>
                    <View>
                      <Text>Password</Text>
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
                  <View style={{marginTop: 20}}>
                    <View>
                      <Text>Repeat password</Text>
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your password"
                      secureTextEntry={true}
                      onChangeText={handleChange('repeatPassword')}
                      onBlur={handleBlur('repeatPassword')}
                      value={values.repeatPassword}
                    />
                    {touched.repeatPassword && errors.repeatPassword && (
                      <Text style={styles.errorText}>{errors.repeatPassword}</Text>
                    )}
                  </View>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.btn}>Sign up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signupText}>Log in</Text>
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

export default Signup;
