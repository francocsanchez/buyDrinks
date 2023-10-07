import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { View, FlatList ,Text } from "react-native";

import { DrinkCard } from "./components";

import { styles } from "./Drinks.Styles";


const Drinks = ({navigation}) => {
  const drinksType = useSelector((state) => state.drink.filterType);
  const filterItem = useSelector((state) => state.drink.filterItem);
  const uri = `${drinksType.url}${filterItem}`
  console.log(uri)

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/${uri}`
        );
        console.log(response.data.drinks)
        setDrinks(response.data.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Aca imprimo la bebida</Text>
      {/* <FlatList
        data={drinks}
        keyExtractor={(drink, index) => index.toString()}
        contentContainerStyle={styles.container}
        numColumns={2}
        renderItem={({ item }) => <DrinkCard drink={item} navigation={navigation} />}
      /> */}
    </View>
  );
};

export default Drinks;
