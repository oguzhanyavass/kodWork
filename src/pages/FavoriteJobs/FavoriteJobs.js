import React from "react";
import { SafeAreaView, Text, View, FlatList, Button } from "react-native";
import styles from "./FavoriteJobs.style";
import JobCard from "../../components/JobCard";
import { useSelector, useDispatch } from "react-redux";
import { selectJob } from "../../context/jobSlice";

const FavoriteJobs = ({ navigation }) => {
  const favoriteJobs = useSelector((state) => state.favorite.favoriteJobs);

  const dispatch = useDispatch();

  const handleOnPressJob = (id) => {
    navigation.navigate("JobDetails", { id });
  };

  const renderItem = ({ item }) => (
    <JobCard
      item={item}
      onPress={() => {
        handleOnPressJob(item.id), dispatch(selectJob(item.name));
      }}
      customButtom
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {favoriteJobs.length == 0 ? (
        <View style={styles.warningContainer}>
          <Text style={styles.warning}>
            You don't have any favourite job yet!
          </Text>
        </View>
      ) : (
        <View style={styles.innerContainer}>
          <FlatList data={favoriteJobs} renderItem={renderItem} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default FavoriteJobs;
