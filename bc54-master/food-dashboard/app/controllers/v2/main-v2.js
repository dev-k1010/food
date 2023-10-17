import { https } from "../../service/service.js";
import { layThongtinTuForm } from "../v1/controller-v1.js";
import { renderFoodList, showData } from "./controller-v2.js";

let fectFoodList = () => {
  https
    .get("/food")
    .then((res) => {
      console.log(res.data);
      renderFoodList(res.data.reverse());
    })
    .catch((err) => {
      console.log(err);
    });
};
fectFoodList();
//delete
function deleteFood(id) {
  console.log("🙂 ~ deleteFood ~ id:", id);
  https
    .delete(`/food/${id}`)
    .then((res) => {
      fectFoodList();
    })
    .catch((err) => {
      console.log("🙂 ~ deleteFood ~ r:", err);
    });
}
window.deleteFood = deleteFood;
// add
window.addFood = () => {
  let food = layThongtinTuForm();
  https
    .post("/food", food)
    .then((res) => {
      fectFoodList();
      $("#exampleModal").modal("hide");
    })
    .catch((err) => {
      console.log("🙂 ~ err:", err);
    });
};
// edit
window.editFood = (id) => {

  https
    .get(`/food/${id}`)
    .then((res) => {
      console.log("🙂 ~ .then ~ res:", res);
      $("#exampleModal").modal("show");
      showData(res.data);
    })
    .catch((err) => {
      console.log("🙂 ~ err:", err);
    });
};
