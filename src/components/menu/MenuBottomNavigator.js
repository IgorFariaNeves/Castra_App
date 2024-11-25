import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClienteView from "../../views/cadastro/ClienteView";
import AnimalView from "../../views/cadastro/AnimalView";
import VeterinarioView from "../../views/cadastro/Veterinario";

const Tabs = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tabs.Navigator initialRouteName="cli">
      <Tabs.Screen name="cli" component={ClienteView} />
      <Tabs.Screen name="ani" component={AnimalView} />
      <Tabs.Screen name="vet" component={VeterinarioView} />
    </Tabs.Navigator>
  );
}
