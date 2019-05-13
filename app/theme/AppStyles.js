import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import FontSize from './FontSize';
import colors from './Colors'

const window = Dimensions.get('window');

export default AppStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: FontSize.normal,
        color: colors.BLUE,
    },
    titleText: {
        fontSize: FontSize.medium,
        color: colors.WHITE,
        textAlign: 'center'
    },
    header: {
        width: window.width,
        height: 56,
        alignItems: 'center',
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'gray',
        backgroundColor: colors.ORANGE,
        alignItems: 'center',
        justifyContent: 'center'
    }
})