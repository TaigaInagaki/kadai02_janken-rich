// bodyのIDがtopだった時にだけ処理
if(window.document.body.id === 'top'){
  let selectElement = document.getElementById("select_age");
  for(let i = 1; i <= 100; i++) {
    let option = document.createElement("option");
    option.value = i + '歳';
    option.innerText = i + '歳';
    selectElement.appendChild(option);
  }};



// host Data配列へ要素を入れる
let hostData = [];


  $("#select_sex").change(function () {
    let sexValue = $('#select_sex').val();
    // console.log(sexValue) //確認用
    hostData.push(sexValue);
  });

  $("#select_age").change(function () {
    let ageValue = $('#select_age').val();
    // console.log(ageValue) //確認用
    hostData.push(ageValue);
  });

  $("#select_num").change(function () {
    let numValue = $('#select_num').val();
    // console.log(numValue) //確認用
    hostData.push(numValue);
  });

  // searchボタンでファイルストレージに追加
  $("#search_btn").on('click', function () {
    // Local Storageへ保存する
    console.log(hostData);
    localStorage.setItem('hostData' ,JSON.stringify(hostData));
});


// 検討すべき課題
// ①changeしないと、配列にpushされない設定の解消
// ②複数回選択すると、たくさんのvalueがPUSHされてしまう
// ゴールは、適切にローカルストレージへ吐き出すこと。