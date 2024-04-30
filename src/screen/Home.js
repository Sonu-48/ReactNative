import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from '../Styles';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [uservalue, setUservalue] = useState({});
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const dataString = await AsyncStorage.getItem('userData');
        if (dataString) {
          const userData = JSON.parse(dataString);
          // Now you can use userData as an array of objects
          setUservalue(userData);
        } else {
          console.log('No user data found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error fetching user data from AsyncStorage:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.h2}>Welcome</Text>
          <Text style={styles.h3}>{uservalue && uservalue.name}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
