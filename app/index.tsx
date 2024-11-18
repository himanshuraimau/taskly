import { StyleSheet, TextInput, ScrollView } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { theme } from "../theme";
import { useState } from "react";

type ShoppingListItemType = {
  name: string;
  id: string;
};

const initialList: ShoppingListItemType[] = [
  { name: "Coffee", id: "1" },
  { name: "Tea", id: "2" },
  { name: "Milk", id: "3" },
  { name: "Bread", id: "4" },
];

export default function App() {
  const [shoppingList, setShoppingList] =
    useState<ShoppingListItemType[]>(initialList);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        ...shoppingList,
        { name: value, id: Date.now().toString() },
      ];
      setShoppingList(newShoppingList);
      setValue("");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
      <TextInput
        placeholder="E.g. Coffee"
        style={styles.textInput}
        value={value}
        onChangeText={setValue}
        keyboardType="default"
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingList.map((item) => (
        <ShoppingListItem key={item.id} name={item.name} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorWhite,
    flex: 1,
    padding: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: theme.colorWhite,
  },
});
