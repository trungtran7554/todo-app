import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";
import { styleDefault, styleDark, styleLight } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonPrimary } from "../../components/button";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as todoServices from "../../services/todo";
import { DataTodo } from "../MainScreen";

const FormScreen: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const data = params as DataTodo;
  const isDarkMode = useColorScheme() === 'dark';
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const styles = isDarkMode ? styleDark : styleLight;

  useEffect(() => {
    if (data) {
      setTitle(data.name)
      setDescription(data.description)
    }
  }, [])

  const onSubmit = async () => {
    if (!title || !description) {
      Alert.alert('Please fill out both title and description.');
      return;
    }

    if (params) {
      await todoServices.update({
        ...data,
        name: title,
        description,
      });
    } else {
      await todoServices.create({
        id: Date.now(),
        name: title,
        description,
        status: 'TODO'
      });
    }

    onBack();
  }

  const onBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={[styleDefault.container, styles.container]}>
      <View style={[styleDefault.headerContainer]}>
        <View style={[styleDefault.headerLeft]}>
          <TouchableOpacity onPress={onBack}>
            <Text style={[styleDefault.txtBack]}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={[styleDefault.headerCenter]}>
          <Text style={[styleDefault.titleCenter]}>{params ? "Edit" : "Add new"}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={[styleDefault.formContainer]}>
          <Text style={[styleDefault.title]}>Title</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Enter title"
            style={[styleDefault.input]}
          />

          <Text style={[styleDefault.title]}>Description</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Enter description"
            multiline
            numberOfLines={4}
            style={[styleDefault.input]}
          />

          <ButtonPrimary
            title="Submit"
            btnStyle={[styleDefault.btnSubmit]}
            onPress={onSubmit}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormScreen;
