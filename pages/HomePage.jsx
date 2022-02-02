import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { Button, Modal, Portal, Provider } from "react-native-paper";
import { getPosts } from "../Server/PostsData";
import { useState, useEffect } from "react";
import CssPostCard from "../component/CssPostCard";
import { LoadingPage } from "./LoadingPage";
import { ChooseTopic } from "../component/ChooseTopics";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";

export const HomePage = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1000000000000000000000);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPost, setLoadingPosts] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const showModalSearch = () => setVisibleSearch(true);
  const hideModelSearch = () => setVisibleSearch(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    setIsLoading(true);
    getPosts({ Page: page }).then((data) => {
      setPosts(data);
      setIsLoading(false);
    });
  }, []);

  const loadPosts = (newPage) => {
    setLoadingPosts(true);
    getPosts({ Page: newPage }).then((data) => {
      setPosts((curr) => {
        return [...curr, ...data];
      });
      setLoadingPosts(false);
    });
  };

  const filterByTopic = () => {
    if (selectedTopics.length) {
      setIsLoading(true);
      getPosts({ Page: 1000000000000000000000, Topics: selectedTopics }).then(
        (data) => {
          setPosts(data);
          setIsLoading(false);
        }
      );
    }
  };
  const filterByLocation = async ({ searchName, longitude, latitude }) => {
    setIsLoading(true);
    const locName = await Location.reverseGeocodeAsync({ longitude, latitude });
    if (locName.length) {
      getPosts({
        Page: 1000000000000000000000,
        Location: searchName,
      }).then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
    } else {
      Alert.alert("Locations within oceans are not supported");
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  //refresh button which calls get posts again
  // enable firebase live update
  return (
    <Provider>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/backgroundlogin.png")}
          resizeMode="cover"
          style={styles.Background}
          blurRadius={5}
        >
          <Portal>
            <Modal
              visible={visible}
              onDismiss={() => {
                hideModal();
                filterByTopic();
              }}
              contentContainerStyle={styles.topicsWrap}
            >
              <ChooseTopic
                setSelectedTopics={setSelectedTopics}
                selectedTopics={selectedTopics}
              />
            </Modal>
          </Portal>

          <Portal>
            <Modal
              visible={visibleSearch}
              onDismiss={() => {
                hideModelSearch();
              }}
              contentContainerStyle={styles.topicsWrap}
            >
              <GooglePlacesAutocomplete
                placeholder="Search location"
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                  rankby: "distance",
                }}
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  console.log(details.formatted_address);
                  filterByLocation({
                    searchName: details.formatted_address,
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  });
                  hideModelSearch();
                }}
                query={{
                  key: "AIzaSyAZ_TcJdgwv2a33-EW_x7yQgud2ECu9hWU",
                  language: "en",
                }}
                styles={{
                  container: {
                    width: "100%",
                    zIndex: 9999,
                    paddingHorizontal: 10,
                  },
                  listView: {
                    backgroundColor: "white",
                    zIndex: 9999,
                  },
                }}
              />
            </Modal>
          </Portal>

          <>
            <FlatList
              data={posts}
              extraData={true}
              renderItem={({ item }) => (
                <CssPostCard posts={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
              style={{ paddingTop: 30 }}
              ItemSeparatorComponent={() => (
                <View style={{ marginVertical: 5 }}></View>
              )}
              ListHeaderComponent={() => (
                <>
                  <Button
                    mode="contained"
                    dark={true}
                    onPress={showModal}
                    color="#7C9A92"
                    style={styles.Loading}
                  >
                    Topics Filter
                  </Button>
                  <Button
                    mode="contained"
                    dark={true}
                    onPress={showModalSearch}
                    color="#7C9A92"
                    style={styles.Loading}
                  >
                    search for loaction
                  </Button>
                </>
              )}
              ListFooterComponent={() => (
                <View style={styles.mb5}>
                  {!loadingPost ? (
                    <Button
                      mode="contained"
                      dark={true}
                      onPress={() => {
                        setPage(posts[posts.length - 1].createdDate);
                        loadPosts(posts[posts.length - 1].createdDate);
                      }}
                      color="#7C9A92"
                      style={styles.Loading}
                    >
                      Load more...
                    </Button>
                  ) : (
                    <Text style={styles.textThick}>Loading ...</Text>
                  )}
                </View>
              )}
            />
          </>
        </ImageBackground>
      </View>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  Background: {
    height: "100%",
    width: "100%",
  },
  Loading: {
    width: "35%",
    paddingVertical: 3,
    alignSelf: "center",
    marginBottom: 10,
  },
  topicsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    marginBottom: 10,
  },
  textThick: {
    fontWeight: "bold",
    color: "#FFF",
    paddingVertical: 6,
    alignSelf: "center",
    marginBottom: 40,
    fontSize: 20,
  },
});
