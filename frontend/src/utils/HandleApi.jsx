import axios from "axios";

const baseUrl = "http://localhost:5000";
const getAllTodos = async (setTodo) => {
  await axios.get(baseUrl).then((data) => {
    console.log("data-------->", data.data);
    setTodo(data.data);
  });
};
const saveTodo = async (text, setText, setTodo) => {
  try {
    await axios.post(`http://localhost:5000/save`, { text }).then((data) => {
      console.log(data);
      setText("");
      getAllTodos(setTodo);
    });
  } catch (error) {
    console.log(error);
  }
};
const updateTodo = async (todoId, text, setTodo, setText, setIsUpdating) => {
  try {
    await axios.patch(`${baseUrl}/update/${todoId}`, text).then((data) => {
      console.log(data);
      setIsUpdating(false);
      setText("");
      getAllTodos(setTodo);
    });
  } catch (error) {
    console.log(error);
  }
};
export { getAllTodos, saveTodo, updateTodo };
