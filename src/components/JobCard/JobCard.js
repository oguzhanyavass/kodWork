import { TouchableOpacity, Text, View } from "react-native";
import Button from "../Button";
import React, { memo } from "react";
import styles from "./JobCard.style";
import { useDispatch } from "react-redux";
import { removeFavorites } from "../../context/jobSlice";

const JobCard = ({ item = {}, onPress = () => {}, customButtom = false }) => {
  const company = item?.company?.name || "Unknown Company";
  const location = item?.locations?.[0]?.name || "Unknown Location";
  const level = item?.levels?.[0]?.name || "Unknown Level";

  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.jobCard} onPress={onPress}>
      <View style={styles.innerContainer}>
        <Text style={styles.jobTitle}>{item.name}</Text>
        <Text style={styles.jobCompany}>{company}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.jobLocation}>{location}</Text>
        </View>
      </View>
      <Text style={styles.jobLevel}>{level}</Text>
      {customButtom && (
        <View style={styles.customButtonContainer}>
          <Button
            title={"Remove "}
            onPress={() => dispatch(removeFavorites(item.id))}
            iconName={"heart-remove"}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(JobCard);
