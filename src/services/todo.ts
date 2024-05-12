import { DataTodo } from "../screens/MainScreen";
import { getItemObject, setItemObject } from "./utils";

export const get = async (): Promise<DataTodo[]> => {
  const res = await getItemObject("data");
  return res;
};

export const create = async (data: DataTodo) => {
  const res = await getItemObject("data");
  const newData = res ? [...res, data] : [data];
  await setItemObject("data", newData);
};

export const update = async (data: DataTodo) => {
  const res = await getItemObject("data");
  const newData = res.map((obj: DataTodo) => {
    if (obj.id === data.id) {
      return data;
    }
    return obj;
  });
  await setItemObject("data", newData);
};

export const deletes = async (id: number) => {
  const res = await getItemObject("data");
  const newData = res.filter((obj: DataTodo) => obj.id !== id);
  await setItemObject("data", newData);
};
