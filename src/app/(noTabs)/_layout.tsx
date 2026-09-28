import { Stack } from "expo-router";

const NoTabs = () => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default NoTabs;
