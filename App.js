import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import {
  HomeStackScreen,
  ProfileStackScreen,
  SearchStackScreen,
  ReviewStackScreen,
} from "./src/navigation/Stacks";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: () => (
              <AntDesign name="home" size={24} color={"black"} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarIcon: () => (
              <AntDesign name="user" size={24} color={"black"} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStackScreen}
          options={{
            tabBarIcon: () => (
              <AntDesign name="search1" size={24} color={"black"} />
            ),
          }}
        />
        <Tab.Screen
          name="Review"
          component={ReviewStackScreen}
          options={{
            tabBarIcon: () => (
              <AntDesign name="star" size={24} color={"black"} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
