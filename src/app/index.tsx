import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Actions from '../components/Actions';
import AddSystemModal from '../components/AddSystemModal';
import AssistantCard from '../components/AssistantCard';
import Header from '../components/Header';
import HealthSystems, { HealthSystem } from '../components/HealthSystems';
import ScoreRing from '../components/ScoreRing';
import TabBar from '../components/TabBar';
import { colors } from '../constants/colors';
const [systems, setSystems] = useState<HealthSystem[]>([
  { name: 'Sistema endocrino', score: 8.3 },
]);

export default function Index() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Header />
        <ScoreRing />
        <Actions />
        <AssistantCard />
        <HealthSystems systems={systems} />
        {/* COMPONENTS: add each one right above this line */}
      </View>
      <TabBar onAddPress={() => setIsAddOpen(true)} />
      <AddSystemModal visible={isAddOpen} onClose={() => setIsAddOpen(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 44,
    gap: 14,
    justifyContent: 'space-between',
  },
});
