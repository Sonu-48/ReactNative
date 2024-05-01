import {StyleSheet} from 'react-native';

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
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(82, 103, 211)',
  },
  h4: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    marginTop: 10,
    borderColor: '#000',
    paddingTop: 10,
    paddingBottom: 10,
  },
  profilewrapper: {
    width: '100%',
    padding: 20,
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
  btn2: {
    borderWidth: 1,
    borderColor: 'rgb(82, 103, 211)',
    textAlign: 'center',
    padding: 10,
    borderRadius: 7,
    // color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 40,
    marginLeft: 20,
  },
  red: {
    color: 'red',
  },
  modalinnerwrapper: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  inputicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textfieldicon: {
    flex: 1,
  },
  storyimagewrapper: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 3,
    // borderColor: 'tomato',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  h5:{
    fontSize:15,
    fontWeight:'500'
  },
  postwrapper:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    borderRadius:10,
    padding:20,
    margin:20
  },
  postprofile:{
    width:40,
    height:40,
    borderRadius:100,
    marginRight:10
  },
  postimage:{
    width:'100%',
  },
  postheader:{
    marginBottom:20,
    marginTop:10,
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  h6:{
    marginTop:15
  }
});
export default styles;
