import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';

type Props = {
    onAddPress: () => void;
};
export default function TabBar({ onAddPress }: Props) {
    return (
        <View style={styles.bar}>
            <Ionicons name="camera" size={24} color={colors.pink} />
            <AntDesign name="instagram" size={22} color="#000000" />
            <Pressable style={styles.addButton} onPress={onAddPress}>
                <Ionicons name="bulb" size={30} color={colors.dark} />
            </Pressable>
            <Ionicons name="car" size={22} color="#000000" />
            <AntDesign name="coffee" size={22} color="#000000" />
        </View>
    );
}
const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.dark,
        borderRadius: 28,
        height: 64,
        marginHorizontal: 20,
        marginBottom: 8,
    },
    addButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: colors.pink,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -36,
        borderWidth: 4,
        borderColor: colors.background,
    },

});
