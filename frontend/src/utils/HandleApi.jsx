import axios from "axios";

const baseUrl = "http://localhost:5000";
const getAllTodos = async (setTodo) => {
  await axios.get(baseUrl).then((data) => {
    console.log("data-------->", data.data);
    setTodo(data.data);
  });
};
export { getAllTodos };
