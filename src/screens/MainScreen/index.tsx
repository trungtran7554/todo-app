import React, { useCallback, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { styleDefault, styleDark, styleLight } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonPrimary } from "../../components/button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import SelectDropdown from "../../components/select";
import * as todoServices from "../../services/todo";

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
  const [data, setData] = useState<DataTodo[]>([]);

  const styles = isDarkMode ? styleDark : styleLight;

  const getData = async () => {
    const res = await todoServices.get();
    setData(res);
  }

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const updateStatus = async (obj: DataTodo, status: string) => {
    await todoServices.update({
      ...obj,
      status,
    })

    getData();
  }

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

  const onDelete = (id: number) => {
    Alert.alert(
      'Confirm deletion',
      'Are you sure you want to delete?',
      [
        { text: 'Cancel', onPress: () => { }, style: 'cancel' },
        {
          text: 'Delete', onPress: async () => {
            await todoServices.deletes(id);
            getData();
          }
        }
      ],
      { cancelable: false }
    );
  }

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
          <View style={[styleDefault.boxBtnAction]}>
            <ButtonPrimary title="Edit" onPress={() => navigation.navigate('Form', v)} />
            <ButtonPrimary
              title="Delete"
              onPress={() => onDelete(v.id)}
              btnStyle={styleDefault.btnDelete}
              titleStyle={styleDefault.txtDelete}
            />
          </View>
        </View>
        <SelectDropdown
          onChange={(value) => updateStatus(v, value)}
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
          <ButtonPrimary title="Add+" onPress={() => navigation.navigate('Form')} />
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
        data={data?.filter((v: DataTodo) => v.status === tabActive)}
        keyExtractor={item => `TODO_LIST_${item.id}`}
        renderItem={({ item, index }) => renderTodoBox(item, index)}
        style={[styleDefault.todoList]}
      />
    </SafeAreaView >
  );
};

export default MainScreen;
