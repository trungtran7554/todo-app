import React, { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";
import { styleDefault, styleDark, styleLight } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonPrimary } from "../../components/button";
import { useNavigation } from "@react-navigation/native";

const FormScreen: React.FC = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const styles = isDarkMode ? styleDark : styleLight;

  const onSubmit = () => {
    if (!title || !description) {
      Alert.alert('Please fill out both title and description.');
      return;
    }
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
          <Text style={[styleDefault.titleCenter]}>{"Add new"}</Text>
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
