import React, { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, ActivityIndicator } from "react-native";
import styles from "./Jobs.style";
import useFetch from "../../hooks/useFetch/useFetch";
import LoadingAnimation from "../../components/LoadingAnimation";
import ErrorAnimation from "../../components/ErrorAnimation";
import { JOB_URL } from "../../constant/api";
import { useNavigation } from "@react-navigation/native";
import JobCard from "../../components/JobCard";
import { selectJob } from "../../context/jobSlice";
import { useDispatch, useSelector } from "react-redux";

const Jobs = ({ navigation }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [jobsData, setJobsData] = useState([]);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const { data, loading, error, fetchData } = useFetch(
    `${JOB_URL}?page=${pageNumber}`
  );
  const dispatch = useDispatch();

  // Veri yüklendikten sonra sadece isimleri al
  useEffect(() => {
    fetchData(`${JOB_URL}page=${pageNumber}`);
  }, [pageNumber]);

  useEffect(() => {
    if (data?.results) {
      setJobsData((prevJobs) => [...prevJobs, ...data.results]);
      setIsFetchingMore(false); // Yükleme tamamlandığında sıfırla
    }
  }, [data]);

  const handleOnPressJob = (id) => {
    navigation.navigate("JobDetails", { id });
  };

  const handleLoadMore = () => {
    if (!loading && !isFetchingMore) {
      setIsFetchingMore(true); // Yeni veriler yüklenirken göster
      setPageNumber((prevPage) => prevPage + 1);
    }
  };

  const renderItem = ({ item }) => (
    <JobCard
      item={item}
      onPress={() => {
        handleOnPressJob(item.id), dispatch(selectJob(item.name));
      }}
    />
  );

  if (loading && pageNumber === 1) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <ErrorAnimation />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={jobsData}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${index}`} // Benzersiz key oluştur
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingMore ? (
              <ActivityIndicator size="large" color="#F2545B" />
            ) : null
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Jobs;
