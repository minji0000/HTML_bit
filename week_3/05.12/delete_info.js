let user_info = {
  first: { name: "박찬호", addr: "성남", tel: "0101" },
  second: { name: "권혁하", addr: "시흥", tel: "0102" },
  third: { name: "조주현", addr: "파주", tel: "0103" },
};
console.log(user_info);
// console.log(user_info.third);
// delete user_info.third.name;
// console.log(user_info.third);

function rmSome() {
  let title = document.getElementById("del_name").value;
  let keys = Object.keys(user_info);
  let values = Object.values(user_info);

  console.log("keys", keys);

  for (i = 0; i < keys.length; i++) {
    if (values[i].name == title) {
      delete values[i].name;
    }
  }
  console.log(user_info);

  return false;
}

