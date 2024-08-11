import React from "react";
import { Text, View } from "react-native";
import styles from "./DetailHeader.style";

const DetailHeader = ({ item = {} }) => {
  const name = item?.name || "Unknown Job";
  const location = item?.locations?.[0]?.name || "Unknown Location";
  const level = item?.levels?.[0]?.name || "Unknown Level";

  return (
    <View style={styles.headContainer}>
      <Text style={styles.jobTitle}>{name}</Text>
      <Text style={styles.jobInfo}>
        <Text style={styles.infoTitle}>Locations: </Text>
        {location}
      </Text>
      <Text style={styles.jobInfo}>
        <Text style={styles.infoTitle}>Job Level: </Text>
        {level}
      </Text>
      <Text style={styles.detailTitle}>Job Detail</Text>
    </View>
  );
};

export default DetailHeader;
