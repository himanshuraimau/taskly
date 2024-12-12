import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { theme } from "../theme";
import React from "react";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorCerulean }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping List",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clockcircleo" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Counter",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="lightbulb " size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
