import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  ); 
  const { addBlogPost } = useContext(Context);

  return <BlogPostForm/>

};
const styles = StyleSheet.create({

});

export default CreateScreen;
