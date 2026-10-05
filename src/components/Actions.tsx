import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function Actions() {
    return (
        <View style={styles.row}>
            <Pressable style={styles.mainButton}>
                <Text style={styles.mainText}>Agendar chequeo</Text>
            </Pressable>
            <Pressable style={styles.iconButton}>
                <AntDesign name="experiment" size={22} color={colors.text} />
            </Pressable>
            <Pressable style={styles.iconButton}>
                <AntDesign 
                    name="instagram"
                    size={22}
                    color={colors.text}
                />
            </Pressable>
            <Pressable style={styles.iconButton}>
                <Ionicons name="paper-plane-outline" size={20} color={colors.text} />
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    row: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 },
    mainButton: {
        backgroundColor: colors.dark,
        borderRadius: 24,
        paddingHorizontal: 20,
        height: 44,
        justifyContent: 'center',
    },
    iconButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: colors.soft,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: { fontSize: 15, fontWeight: 'bold', color: '#000000' },
});
