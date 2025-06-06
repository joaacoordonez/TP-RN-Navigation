import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import NoticeScreen from "../screens/HomeScreen/NoticeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import ShowProfileScreen from "../screens/ProfileScreen/ShowProfileScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import ResultsSearchScreen from "../screens/SearchScreen/ResultsSearchScreen";
import ReviewScreen from "../screens/ReviewScreen/ReviewScreen";
import VerReviewScreen from "../screens/ReviewScreen/VerReviewScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="NoticeScreen" component={NoticeScreen} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen
        name="ShowProfileScreen"
        component={ShowProfileScreen}
      />
    </ProfileStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();
function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
      <SearchStack.Screen
        name="ResultsSearchScreen"
        component={ResultsSearchScreen}
      />
    </SearchStack.Navigator>
  );
}

const ReviewStack = createNativeStackNavigator();
function ReviewStackScreen() {
  return (
    <ReviewStack.Navigator>
      <ReviewStack.Screen name="ReviewScreen" component={ReviewScreen} />
      <ReviewStack.Screen name="VerReviewScreen" component={VerReviewScreen} />
    </ReviewStack.Navigator>
  );
}

export {
  HomeStackScreen,
  ProfileStackScreen,
  SearchStackScreen,
  ReviewStackScreen,
};

const styles = StyleSheet.create({});
