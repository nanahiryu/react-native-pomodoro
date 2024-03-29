import { StyleSheet } from "react-native";

import { Box, Text } from "@gluestack-ui/themed";

export default function TabOneScreen() {
  return (
    <Box>
      <Text style={styles.title}>Tab One</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
