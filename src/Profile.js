//import liraries
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Popup from './component/Popup';

// create a component
const Profile = () => {
//   const userdata = useSelector(state => state.userdata.uservalue);
const [userValue,setUserValue] = useState(null)
const [openModal,setOpenModal] = useState(false);

//fetching data from async storage
const fetchdata = async()=>{
    try {
        const jsonValue = await AsyncStorage.getItem('userData')
       if(jsonValue){
        const data = JSON.parse(jsonValue);
        setUserValue(data);
       }
    } catch (error) {
        console.log(error);
        
    }
}
useEffect(() => {
    fetchdata();
}, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.h2}>Profile</Text>
          <View style={styles.profilewrapper}>
            <View style={styles.textwrapper}>
              <Text style={styles.h4}>Name:</Text>
              <Text style={styles.h3}>{userValue && userValue.name}</Text>
            </View>
            <View style={styles.textwrapper}>
              <Text style={styles.h4}>Username:</Text>
              <Text style={styles.h3}>{userValue && userValue.username}</Text>
            </View>
            <View style={styles.textwrapper}>
              <Text style={styles.h4}>Email:</Text>
              <Text style={styles.h3}>{userValue && userValue.email}</Text>
            </View>
            <View style={styles.textwrapper}>
              <Text style={styles.h4}>Password:</Text>
              <Text style={styles.h3}>{userValue && userValue.password}</Text>
            </View>
          </View>
          <View style={{width: '100%', padding: 20}}>
            <TouchableOpacity onPress={()=>setOpenModal(true)}>
              <Text style={styles.btn}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Modal component */}
        <Popup openModal={openModal} setOpenModal={setOpenModal}/>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default Profile;
