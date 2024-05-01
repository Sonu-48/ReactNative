import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../Styles';

const storydata = [
  {
    id: 1,
    image: require('../assets/plus.png'),
    name: 'You',
  },
  {
    id: 2,
    image: require('../assets/user1.jpg'),
    name: 'sonu',
  },
  {
    id: 3,
    image: require('../assets/user2.jpg'),
    name: 'Rohan',
  },
  {
    id: 4,
    image: require('../assets/user3.jpg'),
    name: 'Manveet',
  },
  {
    id: 5,
    image: require('../assets/user.png'),
    name: 'Kapil',
  },
  {
    id: 6,
    image: require('../assets/user.png'),
    name: 'Arun',
  },
];

const renderStory = ({item}) => (
  <TouchableOpacity>
    <View style={{alignItems: 'center', marginHorizontal: 10}}>
      <View
        style={[
          styles.storyimagewrapper,
          {borderColor: item.name === 'You' ? '#000' : 'tomato'},
        ]}>
        <Image
          source={item.image}
          style={{
            width: item.name === 'You' ? 30 : 60,
            height: item.name === 'You' ? 30 : 60,
            borderRadius: 100,
          }}
        />
      </View>
      <Text style={styles.h5}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const Store = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={storydata}
        renderItem={renderStory}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Store;
