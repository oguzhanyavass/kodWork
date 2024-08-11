import React from "react";
import { Alert, SafeAreaView, ScrollView } from "react-native";
import styles from "./JobDetails.style";
import useFetch from "../../hooks/useFetch/useFetch";
import { JOB_URL } from "../../constant/api";
import RenderHTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import DetailHeader from "../../components/DetailHeader";
import DetalFooter from "../../components/DetailFooter/DetailFooter";

import LoadingAnimation from "../../components/LoadingAnimation";

const JobDetails = ({ route, navigation }) => {
  const { id } = route.params;
  const { width } = useWindowDimensions();
  const { data, error, loading } = useFetch(`${JOB_URL}/${id}`);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return Alert.alert(error);
  }

  const source = {
    html: `${data.contents}`,
  };

  return (
    <SafeAreaView style={styles.container}>
      <DetailHeader item={data} />
      <ScrollView style={styles.descriptionContainer}>
        <RenderHTML source={source} contentWidth={width} />
      </ScrollView>
      <DetalFooter data={data} navigation={navigation}/>
    </SafeAreaView>
  );
};

export default JobDetails;
