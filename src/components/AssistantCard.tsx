import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
export default function AssistantCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.caption}>Asistente Intelly</Text>
            <Text style={styles.message}>
                Taigo, tu puntaje bajó <Text style={styles.highlight}>28%</Text> la semana pasada
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    card: { backgroundColor: colors.pink, borderRadius: 24, padding: 16, gap: 8 },
    caption: { fontSize: 12, color: colors.text },
    message: { fontSize: 15, fontWeight: 'bold', color: colors.text },
    highlight: { color: colors.alert },
});