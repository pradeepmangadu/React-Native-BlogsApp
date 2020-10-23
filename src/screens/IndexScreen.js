import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import BlogContext from "../context/BlogContext";
import { FlatList } from "react-native-gesture-handler";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen </Text>
      <Button title="Add Post" onPress={addBlogPost}></Button>
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
