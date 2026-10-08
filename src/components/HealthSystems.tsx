import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export type HealthSystem = {
    name: string;
    score: number;
};
type Props = {
    systems: HealthSystem[];
};
export default function HealthSystems({ systems }: Props) {
    return (
        <View style={styles.section}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>Sistemas del cuerpo</Text>
                <View style={styles.filter}>
                    <Text style={styles.filterText}>Todos</Text>
                    <Ionicons name="chevron-down" size={14} color="#FFFFFF" />
                </View>
            </View>
            <ScrollView style={styles.list}>
                {systems.map((system, index) => (
                    <View key={index} style={styles.item}>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons name="heart-pulse" size={20} color={colors.text} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>{system.name}</Text>
                            <View style={styles.track}>
                                <View style={[styles.fill, { width: `${system.score * 10}%` }]} />
                            </View>
                        </View>
                        <Text style={styles.value}>{system.score}</Text>
                        <Text style={styles.max}>de 10</Text>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    section: { gap: 14 },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: { fontSize: 22, fontWeight: 'bold', color: colors.text },
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: colors.dark,
        borderRadius: 16,
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    filterText: { fontSize: 13, color: '#0000000' },
    item: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.yellow,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: { flex: 1, gap: 6 },
    name: { fontSize: 14, color: colors.text },
    track: { height: 12, borderRadius: 6, backgroundColor: colors.soft },
    fill: { height: 12, borderRadius: 6, backgroundColor: colors.yellow },
    value: { fontSize: 22, fontWeight: 'bold', color: colors.text },
    max: { fontSize: 11, color: colors.textMuted },
    list: { maxHeight: 104 },

});
