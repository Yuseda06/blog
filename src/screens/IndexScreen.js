import { Button, StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";
import React, { useContext } from "react";
import { FlatList } from "react-native-gesture-handler";

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);


  return (
    <View>
      <Text>IndexScreen </Text>
      <Button title="Add Post"  onPress={addBlogPost}/>
      <FlatList
        data={data}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
