import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Books from "./Books";
import EditarLivroScreen from "./EditarLivro";
import AddLivro from "./AddLivro";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="black" />
      <Stack.Navigator>
        <Stack.Screen
          name="Books"
          component={Books}
          options={{
            title: "Resenha de Livros",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="EditarLivro"
          component={EditarLivroScreen}
          options={{
            title: "Editar Livro",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="AddLivro"
          component={AddLivro}
          options={{
            title: "Adicionar Livro",
            headerStyle: {
              backgroundColor: "black"
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
