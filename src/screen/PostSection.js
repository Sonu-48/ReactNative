import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../Styles';
import Icon from 'react-native-vector-icons/Entypo';

const postdata = [
  {
    id: 1,
    profile: require('../assets/user1.jpg'),
    image: require('../assets/user1.jpg'),
    name: 'sonu',
    description:
      "Yesterday I've painted this picture to express my gratitude towards people who always like my posts.",
  },
  {
    id: 2,
    profile: require('../assets/user2.jpg'),
    image: require('../assets/user2.jpg'),
    name: 'Manveet',
    description:
      "Yesterday I've painted this picture to express my gratitude towards people who always like my posts.",
  },
  {
    id: 3,
    profile: require('../assets/user3.jpg'),
    image: require('../assets/user3.jpg'),
    name: 'Rohan',
    description:
      "Yesterday I've painted this picture to express my gratitude towards people who always like my posts.",
  },
];

const renderPost = ({item}) => {
  return (
    <View style={styles.postwrapper}>
      <View style={styles.postheader}>
        <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
          <Image source={item.profile} style={styles.postprofile} />
          <Text style={styles.h5}>{item.name}</Text>
        </View>
        <TouchableOpacity>
            <Icon name="dots-three-horizontal" size={20}/>
        </TouchableOpacity>
      </View>
      <Image source={item.image} style={styles.postimage} />
        <Text style={styles.h6}>{item.description}</Text>
    </View>
  );
};
const PostSection = () => {
  return (
   <View style={{marginTop:50}}>
     <FlatList
      data={postdata}
      renderItem={renderPost}
      keyExtractor={item => item.id.toString()}
    />
   </View>
  );
};
export default PostSection;
