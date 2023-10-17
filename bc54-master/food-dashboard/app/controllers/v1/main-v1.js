import { layThongtinTuForm } from "./controller-v1.js";

let themMon = () => {
  let data = layThongtinTuForm();
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhAnh, moTa } = data;

  // showw tt lên form
  document.getElementById("spMa").innerText = ma;
  document.getElementById("spTenMon").innerText = ten;
  document.getElementById("spLoaiMon").innerText = loai;
  document.getElementById("spGia").innerText = gia;
  document.getElementById("spTT").innerText = tinhTrang == "0" ? "hết" : "kkk";
  document.getElementById("imgMonAn").src = hinhAnh;
  document.getElementById("pMoTa").innerText = moTa;
  document.getElementById("spKM").innerText = khuyenMai;
};
window.themMon = themMon;
