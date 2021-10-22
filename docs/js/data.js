var personArray = new Array;
var nameList = [
    "Alva Mu",
    "Bill Huang",
    "Clark Liu",
    "Jerry Zhou",
    "Kyle Peng",
    "Ocean Li",
    "Larissa Lv",
    "Li Jing",
    "Max Li",
    "Vincent Chu"
];

function initData() {
    //var $people = localStorage.getItem("peopleData");
    //if(!$people){
    //    localStorage.setItem("peopleData", nameList);
    //}else {
    //    nameList = $people.split(',');
    //}
    personArray = [];
    for (var i = 0; i < nameList.length; i++) {
        var person = {
            id: i,
            image: "img/tx" + (i + 1) + ".jpg",
            thumb_image: "img/tx" + (i + 1) + ".jpg",
            name: nameList[i]
        }
        personArray.push(person)
    }
}
initData()

