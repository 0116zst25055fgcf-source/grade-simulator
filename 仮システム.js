function runSystem(){
    const rows = tbody.getElementsByTagName("tr");
    let grade1count = 0;
    let grade2count = 0;
    let grade3count = 0;
    let grade4count = 0;
    let grade5count = 0;


    // ① まず、チェックボックスが1つでも入っているか確認する
    let hasChecked = false;
    for (let i = 0; i < rows.length; i++) {
        const checkbox = rows[i].cells[0].querySelector("input");
        if (checkbox.checked) {
            hasChecked = true;
            break; // 1つでも見つかれば確認終了
        }
    }


    // ② 評定をカウントする（チェックがある場合はチェックされた行のみ対象）
    for (let j = 5; j <= 10; j++){
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const checkbox = row.cells[0].querySelector("input");


            // チェックが入っている行があるのに、この行にチェックがなければスキップ
            if (hasChecked && !checkbox.checked) {
                continue;
            }


            const input = row.cells[j].querySelector("input");
            const GradesNumber = Number(input.value);
            if (GradesNumber >= 1 && GradesNumber <= 5) {
                if (GradesNumber == 1){
                    grade1count += 1;
                }
                else if(GradesNumber == 2){
                    grade2count += 1;
                }
                else if(GradesNumber == 3){
                    grade3count += 1;
                }
                else if(GradesNumber == 4){
                    grade4count += 1;
                }
                else{
                    grade5count += 1;
                }
            }
        }
    }


    const gradeData = {
        grade1: grade1count,
        grade2: grade2count,
        grade3: grade3count,
        grade4: grade4count,
        grade5: grade5count
    };
    localStorage.setItem("savedGrades", JSON.stringify(gradeData));
    window.location.href = "評定平均システム.html";
}


const runInput = document.getElementById("run-button");
runInput.addEventListener("click", runSystem);


