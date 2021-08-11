console.log("helloworld");

let slideURL =
  "https://www.vipkid.com/tp/preparation/lesson?onlineClassId=323389726015101&scheduledDateTime=1628663400000&studentId=10275101&lessonId=842905&curriculumVersion=1&serialNumber=MC-L3-U11-LC2-10&channel=86&showType=1";

const myArr = slideURL.split("&");
const arr = [];

const myArrSplit = myArr.forEach(function (v) {
  arr.push(v.split("="));
});
console.log(arr);

const classID = parseInt(arr[0][1]);
const lessonID = parseInt(arr[3][1]);
console.log(classID, lessonID);
