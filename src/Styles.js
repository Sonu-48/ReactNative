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
});
export default styles;
