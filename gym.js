const members = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Evan",
  "Fiona",
  "George",
  "Hannah",
];

//第一階段:新增課程購買紀錄(優惠定價)

let purchaseRecords = [];
let purchasedMemberName = [];

function addPurchaseRecord(name, courses) {
  //判斷輸入的會員名稱是不是字串
  if (typeof name !== "string") {
    console.log("輸入錯誤，請輸入有效的會員名稱和課程數量。");
    return;
  }
  //判斷會員所購買的課程之單價
  let feePerCourse = 0;
  if (typeof courses !== "number") {
    console.log("輸入錯誤，請輸入有效的會員名稱和課程數量。");
    return;
  } else {
    if (courses <= 10) {
      feePerCourse = 1500;
    } else if (courses >= 11 && courses <= 20) {
      feePerCourse = 1300;
    } else {
      feePerCourse = 1100;
    }
  }

  //計算會員的課程總消費金額
  let costTotal = courses * feePerCourse;
  //作為物件push到陣列購買紀錄陣列
  purchaseRecords.push({
    會員名稱: name,
    購買課程數量: courses,
    課程單價: feePerCourse,
    總金額: costTotal,
  });
  //印出新增購買紀錄結果
  console.log(
    `新增購買紀錄成功!會員${name}購買 ${courses} 堂課，總金額為 ${costTotal}`
  );
  //把所有有買課程的會員名字再列一張表...用於第三階段
  return purchasedMemberName.push(name);
}
//第二階段:計算目前營業額(取出purchaseRecords陣列中所有的總金額，作加總)
//用forEach

function calculateTotalPrice() {
  let totalPrice = 0;
  purchaseRecords.forEach(function (item) {
    totalPrice += item.總金額;
  });
  console.log(`目前總營業額為 ${totalPrice} 元`);
}

//第三階段:篩選出還沒有購課的會員
//製作已買課程的會員陣列，並用.filter篩選
function filterNoPurchaseMember() {
  let notPurchasedMember = members.filter(function (member) {
    return purchasedMemberName.includes(member) === false;
  });
  console.log(notPurchasedMember);
}

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");
calculateTotalPrice();
filterNoPurchaseMember();
