import {Modal, Text, View, TouchableOpacity, Alert} from 'react-native';
import styles from '../Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Popup = ({openModal, setOpenModal}) => {
    const navigation = useNavigation();

  //Logout function
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      Alert.alert('Success', 'Successfully logged out');
      setOpenModal(false)
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}    
      visible={openModal}
      onRequestClose={() => {
        setOpenModal(false);
      }}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.modalinnerwrapper}>
          <Text style={styles.h4}>Do you want to Logout?</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.btn}>Yes</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setOpenModal(false)}>
                <Text style={styles.btn2}>NO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default Popup;
