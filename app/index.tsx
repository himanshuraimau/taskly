import { StyleSheet, TextInput, Text, FlatList, View } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { theme } from "../theme";
import { useEffect, useState } from "react";
import { getFromStorage, setInStorage } from "../utils/storage";

type ShoppingListItemType = {
  name: string;
  id: string;
  completedAtTimestamp?: number;
  lastUpdatedTimestamp: number;
};

const storageKey = "shoppingList";

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFromStorage(storageKey);
      setShoppingList(data || []);
    };
    fetchData();
  }, []);

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        ...shoppingList,
        {
          name: value,
          id: Date.now().toString(),
          lastUpdatedTimestamp: Date.now(),
        },
      ];
      setShoppingList(newShoppingList);
      setInStorage(storageKey, newShoppingList);
      setValue("");
    }
  };

  const handleDelete = (id: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setInStorage(storageKey, newShoppingList);
    setShoppingList(newShoppingList);
  };

  const handleToggleComplete = (id: string) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          lastUpdatedTimestamp: Date.now(),
          completedAtTimestamp: item.completedAtTimestamp
            ? undefined
            : Date.now(),
        };
      }

      return item;
    });
    setShoppingList(newShoppingList);
    setInStorage(storageKey, newShoppingList);
  };

  return (
    <FlatList
      data={orderShoppingList(shoppingList)}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>
            Your shopping list is empty. Add items using the input above.
          </Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          placeholder="E.g. Coffee"
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          keyboardType="default"
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
      renderItem={({ item }) => (
        <ShoppingListItem
          name={item.name}
          onDelete={() => handleDelete(item.id)}
          onToggleComplete={() => handleToggleComplete(item.id)}
          isCompleted={Boolean(item.completedAtTimestamp)}
        />
      )}
    />
  );
}

function orderShoppingList(shoppingList: ShoppingListItemType[]) {
  return shoppingList.sort((item1, item2) => {
    if (item1.completedAtTimestamp && item2.completedAtTimestamp) {
      return item2.completedAtTimestamp - item1.completedAtTimestamp;
    }

    if (item1.completedAtTimestamp && !item2.completedAtTimestamp) {
      return 1;
    }

    if (!item1.completedAtTimestamp && item2.completedAtTimestamp) {
      return -1;
    }

    if (!item1.completedAtTimestamp && !item2.completedAtTimestamp) {
      return item2.lastUpdatedTimestamp - item1.lastUpdatedTimestamp;
    }

    return 0;
  });
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorWhite,
    flex: 1,
    padding: 12,
  },
  listEmptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
