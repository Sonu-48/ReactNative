import { SafeAreaView, ScrollView, View,Text } from "react-native"
import styles from "./Styles";

const Forgotpassword = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.wrapper}>
                    <Text style={styles.h4}>Forgot Password</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Forgotpassword;