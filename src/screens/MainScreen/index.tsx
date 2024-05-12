import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { styleDefault, styleDark, styleLight } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonPrimary } from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "../../components/select";

export interface DataTodo {
  id: number;
  name: string;
  description: string;
  status: string;
}

export const status = [
  {
    key: "TODO",
    name: "Todo"
  },
  {
    key: "IN_PROGRESS",
    name: "In Progress"
  },
  {
    key: "DONE",
    name: "Done"
  },
]

const MainScreen: React.FC = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const [tabActive, setTabActive] = useState<string>('TODO');
  const [btnShowIds, setBtnShowIds] = useState<number[]>([]);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const styles = isDarkMode ? styleDark : styleLight;

  const toggleExpanded = (id: number) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(prevIds => prevIds.filter(item => item !== id));
    } else {
      setExpandedIds(prevIds => [...prevIds, id]);
    }
  };

  const isExpanded = (id: number) => {
    return expandedIds.includes(id);
  };

  const isShowBtn = (id: number) => {
    return btnShowIds.includes(id);
  };

  const renderTodoBox = (v: DataTodo, i: number) => {
    const onTextLayout = (e: any) => {
      e.nativeEvent.lines.length > 4 && setBtnShowIds([...btnShowIds, v.id]);
    };

    return (
      <View key={i} style={[styleDefault.todoBox]}>
        <View style={[styleDefault.headTodo]}>
          <Text
            style={[styleDefault.titleTodo, styles.titleTodo]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {v.name}
          </Text>
          <View style={[styleDefault.btnEdit]}>
            <ButtonPrimary title="Edit" />
          </View>
        </View>
        <SelectDropdown
          onChange={() => { }}
          value={v.status}
          option={status}
        />
        {isExpanded(v.id) ?
          <Text>
            {v.description}
          </Text>
          :
          <Text
            numberOfLines={isShowBtn(v.id) ? 4 : undefined}
            ellipsizeMode="tail"
            onTextLayout={onTextLayout}
          >
            {v.description}
          </Text>}
        {isShowBtn(v.id) && <TouchableOpacity
          onPress={() => toggleExpanded(v.id)}
          style={[styleDefault.btnShow]}
        >
          <Text style={[styleDefault.txtShow]}>{isExpanded(v.id) ? 'Show less' : 'Show more'}</Text>
        </TouchableOpacity>}
      </View>
    )
  }

  return (
    <SafeAreaView style={[styleDefault.container, styles.container]}>
      <View style={[styleDefault.boxHead]}>
        <View style={[styleDefault.head]}>
          <Text style={[styleDefault.title, styles.title]}>Todo List</Text>
          <ButtonPrimary title="Add+" />
        </View>
        <View style={[styleDefault.boxBtnTab]}>
          {status.map((v, i) => (
            <TouchableOpacity
              key={i}
              style={[styleDefault.btnTab]}
              onPress={() => setTabActive(v.key)}
            >
              <Text style={tabActive === v.key ? styleDefault.btnTabActive : {}}>
                {v.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={[
          {
            id: 1,
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            status: 'TODO'
          },
        ]}
        keyExtractor={item => `TODO_LIST_${item.id}`}
        renderItem={({ item, index }) => renderTodoBox(item, index)}
        style={[styleDefault.todoList]}
      />
    </SafeAreaView >
  );
};

export default MainScreen;
