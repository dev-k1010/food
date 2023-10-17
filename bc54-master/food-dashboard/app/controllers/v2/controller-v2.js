export let renderFoodList = (foodArr) => {
  console.log("🙂 ~ renderFoodList ~ foodArr:", foodArr);
  let contentHTML = "";

  foodArr.forEach((food) => {
    let { ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh } = food;
    let trString = `<tr>
    <td>${ma}</td>
    <td>${ten}</td>
    <td>${loai}</td>
    <td>${gia}</td>
    <td>${khuyenMai}</td>
    <td>0</td>
    <td>${tinhTrang}</td>
    <td>
    <button onclick=deleteFood(${ma}) class="btn btn-danger" >Xóa
    </button>
    <button onclick=editFood(${ma}) class="btn btn-warning" >Sửa
    </button>
    </td>
    </tr>`;
    contentHTML = contentHTML + trString;
  });
  document.getElementById("tbodyFood").innerHTML = contentHTML;
};
// Show data
const monChay = "loai1";
const chay = true;
const monMan = "loai2";

// tinh trang
const conMon = "1";
const con = true;
const hetMon = "0";
export function showData(product) {
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh } = product;
  // console.log(document.getElementById("loai").value);
  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;
  document.getElementById("loai").value = loai == chay ? monChay : monMan;
  document.getElementById("giaMon").value = gia;
  document.getElementById("tinhTrang").value =
    tinhTrang == con ? conMon : hetMon;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("moTa").value = moTa;
  document.getElementById("hinhMon").value = hinhAnh;
}
