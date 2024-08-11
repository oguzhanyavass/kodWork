import React from "react";
import { Alert, View } from "react-native";
import Button from "../Button";
import styles from "./DetailFooter.style";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../context/jobSlice";

const DetalFooter = ({ data = {}, navigation = () => {} }) => {
  const dispatch = useDispatch();
  const favoriteJobs = useSelector((state) => state.favorite.favoriteJobs);

  const handleSubmit = (data) => {
    if (favoriteJobs.find((item) => item.id === data.id)) {
      return Alert.alert("This job is already added...");
    }

    dispatch(addFavorite(data));
    navigation.navigate("FavoriteJobs");
  };

  return (
    <View style={styles.container}>
      <Button
        iconName={"login"}
        onPress={() => {
          Alert.alert("Successfully submitted!");
          navigation.navigate("Jobs");
        }}
        title={"Submit"}
      />
      <Button
        iconName={"heart"}
        onPress={() => handleSubmit(data)}
        title={"Favorite Job"}
      />
    </View>
  );
};

export default DetalFooter;
