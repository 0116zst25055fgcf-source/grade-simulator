
const gradeInputList = document.getElementById("input-grade");//input-gradeを見つける
const runSystem = document.getElementById("run-system")
const displayResults = document.getElementById("display-results")
const gradeCount = [];
const resultNumber = [];
let gradeInputListHtml = "";//htmlを入れる箱
for(let i=5; i>=1; i--){
    gradeInputListHtml += `
        <div class="grade-row">
            <label for="grade-${i}">${i}</label>
            <input id="grade-${i}" type="number" min="0" step="1" value="0">
            <span>個</span>
        </div>
    `;
}
gradeInputList.innerHTML = gradeInputListHtml;
const savedData = localStorage.getItem("savedGrades"); // 1. 保存されたデータを取り出す


if (savedData) { // 2. データが存在する場合だけ実行する
    const gradeData = JSON.parse(savedData); // 3. 文字データをオブジェクトに戻す


    // 4. 各入力欄（grade-1 ～ grade-5）の value に数値をセットする
    document.getElementById("grade-1").value = gradeData.grade1;
    document.getElementById("grade-2").value = gradeData.grade2;
    document.getElementById("grade-3").value = gradeData.grade3;
    document.getElementById("grade-4").value = gradeData.grade4;
    document.getElementById("grade-5").value = gradeData.grade5;
}
//不足している成績を求める関数
function calcLackGrade(){
    let totalCount = 0;
    let completedLessonCount = 0;
    for (let i = 1; i <= 5; i++) {     //成績数の取得 //現在の成績をもとめる
        gradeCount[i] = Number(document.getElementById(`grade-${i}`).value);
        totalCount += i*gradeCount[i];
        completedLessonCount += gradeCount[i];//履修済みの授業数の取得
    }
    const goalAverage = Number(document.getElementById("input-goal-average").value)//目標評定平均の取得
   
    const restLessonCount = Number(document.getElementById("input-rest-lesson-count").value)//残り授業数の取得
    //必要な成績数の合計をもとめる
    const needPoint = Math.ceil(goalAverage * (completedLessonCount + restLessonCount));
    //残りの必要成績
    const lackPointWithThree = needPoint - (totalCount + restLessonCount * 3);
    return {
        lackPointWithThree,
        restLessonCount
    };
}
//5を多くとるモード
function fiveMode(lackPointWithThree,restLessonCount){
    const needGrade = [];
    //5と4でとる場合
    if(lackPointWithThree / 2 <= restLessonCount){
        needGrade[5] = Math.floor(lackPointWithThree / 2);
        if(lackPointWithThree % 2 === 0)
            needGrade[4] = 0;
        else
            needGrade[4] = lackPointWithThree % 2;
        return needGrade;
    }
    else{
        return null;
    }
}
//4を多くとるモード
function fourMode(lackPointWithThree,restLessonCount){
    const needGrade = [];
    if(lackPointWithThree <= restLessonCount){
        needGrade[4] = lackPointWithThree;
        needGrade[5] = 0;
        return needGrade;
    }
    else{
        return null;
    }
}
function showResults(results){
     displayResults.innerHTML = `
        <p>5が${results[5]}個必要</p>
        <p>4が${results[4]}個必要</p>
        `;
}
runSystem.addEventListener("click",function(){
    const point = calcLackGrade();
    const modeSelect = document.getElementById("mode-select").value
    let results;
    if(point.lackPointWithThree <= 0){
        displayResults.innerHTML = `
            <p>残り成績3のみで足ります</p>
            `;
        return;
    }
    switch(modeSelect){
        case "five":
            results = fiveMode(point.lackPointWithThree,point.restLessonCount);
            break;
        case "four":
            results = fourMode(point.lackPointWithThree,point.restLessonCount);
            break;
    }
    if(results === null){
        displayResults.innerHTML = `
            <p>この設定では成績が足りません</p>
            `;
        return;
    }
   
    showResults(results);
});
