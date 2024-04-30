import {NavigationContainer} from '@react-navigation/native';
import Stacknavigation from './src/navigation/Stacknavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stacknavigation />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
