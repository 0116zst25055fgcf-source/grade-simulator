const ALL_COURSES = [
    { id: "1101", name:"現代の国語", credit: 2, category: "文系"},
    { id: "1102", name:"言語文化",credit: 2, category:"文系"},
    { id: "1103", name:"国語表現", credit: 2, category: "文系"},
    { id: "1104", name:"文学国語A",credit: 2, category:"文系"},
    { id: "1105", name:"文学国語B", credit: 4, category: "文系"},
    { id: "1106", name:"古典探究A",credit: 2, category:"文系"},
    { id: "1107", name:"古典探究B", credit: 4, category: "文系"},
    { id: "1108", name:"論理国語A",credit: 2, category:"文系"},
    { id: "1109", name:"論理国語B", credit: 4, category: "文系"},
    { id: "1121", name:"地理総合",credit: 2, category:"社会系"},
    { id: "1122", name:"地理探究", credit: 4, category: "社会系"},
    { id: "1123", name:"歴史総合",credit: 2, category:"社会系"},
    { id: "1124", name:"日本史探究", credit: 4, category: "社会系"},
    { id: "1125", name:"世界史探究",credit: 4, category:"社会系"},
    { id: "1131", name:"公共", credit: 2, category: "社会系"},
    { id: "1132", name:"論理",credit: 2, category:"社会系"},
    { id: "1133", name:"政治・経済", credit: 2, category: "社会系"},
    { id: "1141", name:"数学Ⅱ",credit: 4, category:"数学系"},
    { id: "1142", name:"数学Ⅲ",credit: 4, category:"数学系"},
    { id: "1143", name:"数学B",credit: 2, category:"数学系"},
    { id: "1144", name:"数学C",credit: 2, category:"数学系"},
    { id: "1151", name:"物理基礎",credit: 2, category:"理系"},
    { id: "1152", name:"物理",credit: 4, category:"理系"},
    { id: "1153", name:"化学基礎",credit: 2, category:"理系"},
    { id: "1154", name:"化学",credit: 4, category:"理系"},
    { id: "1155", name:"生物基礎",credit: 2, category:"理系"},
    { id: "1156", name:"生物",credit: 4, category:"理系"},
    { id: "1157", name:"地学基礎",credit: 2, category:"理系"},
    { id: "1161", name:"1年体育", credit: 1, category: "保体系"},
    { id: "1162", name:"2年体育",credit: 1, category:"保体系"},
    { id: "1163", name:"柔道", credit: 1, category: "保体系"},
    { id: "1164", name:"トレーニング",credit: 1, category:"保体系"},
    { id: "1165", name:"ダンス", credit: 1, category: "保体系"},
    { id: "1166", name:"バスケットボール",credit: 1, category:"保体系"},
    { id: "1167", name:"バレーボール", credit: 1, category: "保体系"},
    { id: "1168", name:"バドミントン",credit: 1, category:"保体系"},
    { id: "1169", name:"フィットネス",credit: 1, category:"保体系"},
    { id: "1170", name:"器械運動",credit: 1, category:"保体系"},
    { id: "1171", name:"卓球",credit: 1, category:"保体系"},
    { id: "1172", name:"サッカー",credit: 1, category:"保体系"},
    { id: "1173", name:"テニス",credit: 1, category:"保体系"},
    { id: "1174", name:"陸上競技",credit: 1, category:"保体系"},
    { id: "1175", name:"ソフトボール",credit: 1, category:"保体系"},
    { id: "1176", name:"ゴルフ",credit: 1, category:"保体系"},
    { id: "1177", name:"保健A",credit: 1, category:"保体系"},
    { id: "1178", name:"保健B",credit: 1, category:"保体系"},
    { id: "1181", name:"音楽Ⅰ",credit: 2, category:"芸術系"},
    { id: "1182", name:"音楽Ⅱ",credit: 2, category:"芸術系"},
    { id: "1183", name:"音楽Ⅲ",credit: 2, category:"芸術系"},
    { id: "1184", name:"美術Ⅰ",credit: 2, category:"芸術系"},
    { id: "1185", name:"美術Ⅱ",credit: 2, category:"芸術系"},
    { id: "1186", name:"美術Ⅲ",credit: 2, category:"芸術系"},
    { id: "1187", name:"工芸Ⅰ",credit: 2, category:"芸術系"},
    { id: "1188", name:"工芸Ⅱ",credit: 2, category:"芸術系"},
    { id: "1191", name:"英語コミュニケーションⅠ", credit: 4, category: "英系"},
    { id: "1192", name:"英語コミュニケーションⅡ",credit: 4, category:"英系"},
    { id: "1193", name:"英語コミュニケーションⅢ", credit: 4, category: "英系"},
    { id: "1201", name:"家庭基礎",credit: 2, category:"家庭系"},
    { id: "1202", name:"家庭総合",credit: 4, category: "家庭系"},
    { id: "1211", name:"情報Ⅰ",credit: 2, category:"情報系"},
    { id: "1212", name:"情報Ⅱ",credit: 2, category: "情報系"},
    { id: "1221", name:"総合的な探究の時間1年",credit: 1, category: "その他"},
    { id: "1222", name:"総合的な探究の時間2年",credit: 1, category:"その他"},
    { id: "1223", name:"総合的な探究の時間3年",credit: 1, category: "その他"},
    { id: "1231", name:"理数数学1A",credit: 4, category: "数学系"},
    { id: "1232", name:"理数数学1B",credit: 2, category:"数学系"},
    { id: "1241", name:"総合産業実習",credit: 2, category: "その他"},
    { id: "1301", name:"実習A",credit: 2, category:"工学系"},
    { id: "1302", name:"実習B",credit: 2, category:"工学系"},
    { id: "1303", name:"実習C",credit: 2, category:"工学系"},
    { id: "1304", name:"実習D",credit: 2, category:"工学系"},
    { id: "1311", name:"機械製図",credit: 2, category:"工学系"},
    { id: "1321", name:"機械工作",credit: 2, category:"工学系"},
    { id: "1322", name:"機械設計",credit: 2, category:"工学系"},
    { id: "1323", name:"自動車工学",credit: 2, category:"工学系"},
    { id: "1324", name:"電気回路",credit: 2, category:"工学系"},
    { id: "1325", name:"電気技術",credit: 2, category:"工学系"},
    { id: "1331", name:"デザイン史",credit: 2, category:"工学系"},
    { id: "1332", name:"デザイン実践Ⅰ",credit: 2, category:"工学系"},
    { id: "1333", name:"デザイン実践Ⅱ",credit: 2, category:"工学系"},
    { id: "1341", name:"CARテクノロジーⅠA",credit: 1, category:"工学系"},
    { id: "1342", name:"CARテクノロジーⅠB",credit: 1, category:"工学系"},
    { id: "1343", name:"CARテクノロジーⅡA",credit:2, category:"工学系"},
    { id: "1344", name:"CARテクノロジーⅡ",credit: 2, category:"工学系"},
    { id: "1351", name:"工学入門",credit: 1, category:"工学系"},
    { id: "1361", name:"プロジェクトデザインⅠA",credit: 2, category:"工学系"},
    { id: "1362", name:"プロジェクトデザインⅠB",credit: 2, category:"工学系"},
    { id: "1363", name:"プロジェクトデザインⅠC",credit: 2, category:"工学系"},
    { id: "1364", name:"プロジェクトデザインⅡ",credit: 2, category:"工学系"},
    { id: "1371", name:"ロボット工学",credit: 2, category:"工学系"},
    { id: "1372", name:"ロボット製作",credit: 2, category:"工学系"},
    { id: "1373", name:"ロボット応用",credit: 2, category:"工学系"},
    { id: "1381", name:"エレクトリックパワー",credit: 2, category:"工学系"},
    { id: "1391", name:"アルゴリズム基礎",credit: 1, category:"情報系"},
    { id: "1392", name:"プログラミング技術",credit: 2, category:"情報系"},
    { id: "1393", name:"ソフトウェア技術",credit: 2, category:"情報系"},
    { id: "1394", name:"プログラミング応用",credit: 2, category:"情報系"},
    { id: "1395", name:"情報処理概論",credit: 2, category:"情報系"},
    { id: "1396", name:"情報メディア概論",credit: 2, category:"情報系"},
    { id: "1401", name:"地球環境科学",credit: 2, category:"環境バイオ系"},
    { id: "1402", name:"エネルギーサイエンス",credit: 2, category:"環境バイオ系"},
    { id: "1403", name:"環境安全",credit: 1, category:"環境バイオ系"},
    { id: "1404", name:"環境一般実習",credit: 1, category:"環境バイオ系"},
    { id: "1405", name:"環境科学自習A",credit: 2, category:"環境バイオ系"},
    { id: "1406", name:"環境科学実習B",credit: 2, category:"環境バイオ系"},
    { id: "1407", name:"環境リサーチ",credit: 1, category:"環境バイオ系"},
    { id: "1408", name:"ウェザーワークショップ",credit: 1, category:"環境バイオ系"},
    { id: "1409", name:"リサイクル工学実習",credit: 1, category:"環境バイオ系"},
    { id: "1411", name:"バイオエシックス",credit: 1, category:"環境バイオ系"},
    { id: "1412", name:"バイオサイエンスA",credit: 2, category:"環境バイオ系"},
    { id: "1413", name:"バイオサイエンスB",credit: 2, category:"環境バイオ系"},
    { id: "1414", name:"バイオサイエンスC",credit: 2, category:"環境バイオ系"},
    { id: "1415", name:"バイオ探究",credit: 1, category:"環境バイオ系"},
    { id: "1416", name:"バイオテクノロジー入門",credit: 1, category:"環境バイオ系"},
    { id: "1417", name:"応用微生物実習",credit: 1, category:"環境バイオ系"},
    { id: "1421", name:"総合産業数学α",credit: 2, category:"科学"},
    { id: "1422", name:"総合産業数学β",credit: 2, category:"科学"},
    { id: "1423", name:"総合産業物理",credit: 2, category:"科学"},
    { id: "1424", name:"総合産業科学",credit: 2, category:"科学"},
    { id: "1425", name:"総合産業生物",credit: 2, category:"科学"},
    { id: "1431", name:"総合産業国語",credit: 2, category:"リベラルアーツ"},
    { id: "1432", name:"総合産業プレゼンテーション",credit: 2, category:"リベラルアーツ"},
    { id: "1441", name:"マーケティング",credit: 2, category:"リベラルアーツ"},
    { id: "1442", name:"ビジネス基礎",credit: 2, category:"リベラルアーツ"},
    { id: "1443", name:"ビジネスコミュニケーション",credit: 2, category:"リベラルアーツ"},
    { id: "1444", name:"簿記",credit: 2, category:"リベラルアーツ"},
    { id: "1445", name:"ソフトフェア活用",credit: 2, category:"リベラルアーツ"},
    { id: "1461", name:"クリティカル・シンキング・スキル入門",credit: 2, category:"リベラルアーツ"},
    { id: "1462", name:"クリティカル・シンキング・スキル基礎",credit: 2, category:"リベラルアーツ"},
    { id: "1463", name:"クリティカル・シンキング・スキル    アドバンス",credit: 2, category:"リベラルアーツ"},
    { id: "1464", name:"新異文化理解",credit: 1, category:"リベラルアーツ"},
    { id: "1465", name:"Spech&Presentation",credit: 2, category:"リベラルアーツ"},
    { id: "1467", name:"総合産業英語α",credit: 2, category:"リベラルアーツ"},
    { id: "1468", name:"総合産業英語β",credit: 2, category:"リベラルアーツ"},
    { id: "1471", name:"保育基礎",credit: 2, category:"リベラルアーツ"},
    { id: "1472", name:"ファッション造形基礎",credit: 2, category:"リベラルアーツ"},
    { id: "1473", name:"フードデザイン",credit: 2, category:"リベラルアーツ"},
    { id: "1481", name:"こころの科学",credit: 2, category:"リベラルアーツ"},
    { id: "1482", name:"身体パフォーマンスアーツ入門",credit: 1, category:"リベラルアーツ"},
    { id: "1483", name:"素描",credit: 2, category:"リベラルアーツ"},
    { id: "1484", name:"ツーリズム・ワークショップ",credit: 2, category:"リベラルアーツ"},
    { id: "1485", name:"カラーコーディネート入門",credit: 2, category:"リベラルアーツ"},
    { id: "1486", name:"編集技術",credit: 2, category:"リベラルアーツ"},
    { id: "0001", name:"課題研究Ⅰ",credit: 2, category:"その他"},
    { id: "0002", name:"課題研究Ⅱ",credit: 2, category:"その他"},
]








const tbody = document.getElementById("tableBody"); //html[tableBody]を変数tbodyに代入
ALL_COURSES.forEach(subject => { //forEach = 配列のデータを先頭から取り出し同じ処理を繰り返す
    const row = tbody.insertRow(); // 表の一番下に新しい行を追加
   
    const checkCell = row.insertCell(0); // ① 行の先頭（0番目）に新しいセル（マス）を作る
    const checkbox = document.createElement("input"); // ② input要素を作る
    checkbox.type = "checkbox"; // ③ inputの種類を「checkbox」に設定する
    checkbox.value = subject.id; // ④ チェックされた時のためにコースのIDを仕込んでおく
    checkCell.appendChild(checkbox); // ⑤ 作ったチェックボックスをセルの中に入れる
    row.insertCell(1).textContent = subject.id;//授業コードを表示
    row.insertCell(2).textContent = subject.name;//授業名を表示
    row.insertCell(3).textContent = subject.credit;//単位数を表示
    row.insertCell(4).textContent = subject.category;//分野を表示
    const year1Semester1Cell = row.insertCell(5);
    const year1Semester2Cell = row.insertCell(6);
    const year2Semester1Cell = row.insertCell(7);
    const year2Semester2Cell = row.insertCell(8);
    const year3Semester1Cell = row.insertCell(9);
    const year3Semester2Cell = row.insertCell(10);




    const year1Semester1Input = document.createElement("input")
    const year1Semester2Input = document.createElement("input")
    const year2Semester1Input = document.createElement("input")
    const year2Semester2Input = document.createElement("input")
    const year3Semester1Input = document.createElement("input")
    const year3Semester2Input = document.createElement("input")




    year1Semester1Input.type = "number";
    year1Semester1Input.min = 0;
    year1Semester1Input.max = 5;
    year1Semester2Input.type = "number";
    year1Semester2Input.min = 0;
    year1Semester2Input.max = 5;
    year2Semester1Input.type = "number";
    year2Semester1Input.min = 0;
    year2Semester1Input.max = 5;
    year2Semester2Input.type = "number";
    year2Semester2Input.min = 0;
    year2Semester2Input.max = 5;
    year3Semester1Input.type = "number";
    year3Semester1Input.min = 0;
    year3Semester1Input.max = 5;
    year3Semester2Input.type = "number";
    year3Semester2Input.min = 0;
    year3Semester2Input.max = 5;








    year1Semester1Cell.appendChild(year1Semester1Input);
    year1Semester2Cell.appendChild(year1Semester2Input);
    year2Semester1Cell.appendChild(year2Semester1Input);
    year2Semester2Cell.appendChild(year2Semester2Input);
    year3Semester1Cell.appendChild(year3Semester1Input);
    year3Semester2Cell.appendChild(year3Semester2Input);




});












const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category-filter");
const creditFilter = document.getElementById("credit-filter");
const checkFilter = document.getElementById("check-filter"); // ① 追加

function filterTable() {
    const keyword = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedCredit = creditFilter.value;
    const selectedCheck = checkFilter.value; // ② 選ばれた値（"", "1", "0"）を取得

    const rows = tbody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const checkbox = row.cells[0].querySelector("input"); // ③ チェックボックスを取得
        const courseNumber = row.cells[1].textContent.toLowerCase();
        const courseName = row.cells[2].textContent.toLowerCase();
        const courseCredit = row.cells[3].textContent;
        const courseCategory = row.cells[4].textContent;

        const matchKeyword = courseName.includes(keyword) || courseNumber.includes(keyword);
        const matchCategory = (selectedCategory === "" || courseCategory === selectedCategory);
        const matchCredit = (selectedCredit === "" || courseCredit === selectedCredit);

        // ④ チェック状態の判定（"": すべて表示 / "1": チェックあり / "0": チェックなし）
        let matchCheck = true;
        if (selectedCheck === "1") {
            matchCheck = checkbox.checked;
        } else if (selectedCheck === "0") {
            matchCheck = !checkbox.checked;
        }

        // ⑤ 4つの条件すべて（&&）を満たしていれば表示
        if (matchKeyword && matchCategory && matchCredit && matchCheck) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}

searchInput.addEventListener("input", filterTable);
categoryFilter.addEventListener("change", filterTable);
creditFilter.addEventListener("change", filterTable);
checkFilter.addEventListener("change", filterTable); // ⑥ イベント登録を追加
