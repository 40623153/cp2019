// 因為要使用超文件表單, 因此導入 html 程式庫
import "dart:html";
KtoL(num kg) {
  return kg * 2.20462262;
}
LtoK(num lb) {
  return lb / 2.20462262;
}
// 每一個 Dart 程式都從 main() 開始執行
main() {
    // 透過表單, 取得使用者輸入的溫度值, 語法為數字加上 C 或 F
    InputElement tempInput = querySelector("#temp");
    querySelector("#submit").onClick.listen((e) => convert(tempInput.value));
}
convert(String data){
  // 宣告 len 整數變數, 準備設為各字串的長度
  int len;
  // 宣告 var 變數 type, 準備設為各字串最後一個字元, 可能為 kg 或 lb
  var type;
  // 宣告 var 變數 number, 準備設為各字串中的數字
  var number;
  // 準備將轉換結果顯示在 output Label 區
  LabelElement output = querySelector("#output");
  // 直接取得單一輸入 data 字串
  len = data.length;
  // 取得各筆資料的最後一個字元
  type = data[len-1];
  number = data.substring(0, len-1);
  // 將字串轉為數字
  number = int.parse(number);
  if (type == "k" || type == "kg"){
     output.innerHtml = " $number k =  ${KtoL(number).toStringAsFixed(2)} l";
  } else if ((type == "l" || type == "lb")){
     output.innerHtml = " $number l = ${LtoK(number).toStringAsFixed(2)} k";
  } else {
     output.innerHtml = "請輸入數字加上 k 或 l!";
  }
} // convert
