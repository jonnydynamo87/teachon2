console.log("helloworld");

let slideURL =
  "https://www.teachon.com/tp/preparation/lesson?onlineClassId=323389726015101&scheduledDateTime=1628663400000&studentId=10275101&lessonId=842905&curriculumVersion=1&serialNumber=MC-L3-U11-LC2-10&channel=86&showType=1";

const myArr = slideURL.split("&");
const arr = [];
const splitArr = myArr.forEach(function (v) {
  arr.push(v.split("="));
});

const flatArr = arr.flat();
console.log(flatArr);

const classID = parseInt(flatArr[1]);
const lessonID = parseInt(flatArr[7]);
console.log(classID, lessonID);
