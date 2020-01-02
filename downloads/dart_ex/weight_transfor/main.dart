KtoL(num kg) {
  return kg * 2.20462262;
}

LtoK(num lb) {
  return lb / 2.20462262;
}

main() {
  int len;
  var type;
  var number;
  List temp = ["25K", "30L", "56L", "14K", "68L", "198K"];
  for (var data in temp) {
    len = data.length;
    type = data[len - 1];
    number = data.substring(0, len - 1);
    number = int.parse(number);
    if (type == "K") {
      //print("KG: $type, $number");
      print("$number Kg =  ${KtoL(number)} lb");
    } else {
      //print("LB: $type, $number");
      print("$number lb =  ${LtoK(number)} Kg");
    }
  } // for
} // main
