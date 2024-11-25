import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import HomeView from "../../views/HomeView"
import loginView from "../../views/loginView"
import OSlistView from "../../views/OSlistView"
import CadastroView from "../../views/CadastroView"



const Drawer = createDrawerNavigator()

export default menuDrawerNavigator = ()=>{


return(
    <NavigationContainer >
        <Drawer.Navigator initialRouteName="home">

            <Drawer.Screen name="home" component={HomeView} />

            <Drawer.Screen name="login" component={loginView} />

            <Drawer.Screen name="listaOS" component={OSlistView} />

            <Drawer.Screen name="cadastro" component={CadastroView} />

        </Drawer.Navigator>


    </NavigationContainer>




)


}