var cityName = "tama"; //都市名・変数宣言
var owmApiKey = "438531953753d6e4bb36354a22ba948a"; //APIキー・変数宣言
var owmURL = "http://api.openweathermap.org/data/2.5/weather?q="
           + cityName +",jp&lang=ja&APPID="+ owmApiKey +""; //URL変数宣言

//一回目の天気情報設定
updateData(); 

//データ更新関数を1分ごとに呼び出し
setInterval(updateData, 60000); //データ更新関数を呼び出し

function updateData() { //データ更新関数
  //データを表示する行の要素を呼び出し（複数タグがあり得るため、インデックスは0から始まる）
  tblBody = document.getElementsByClassName("fixed-row-0")[0]

  fetch(owmURL) //openweathermap（天気予報API）に接続
    .then(response => response.json()) //JSON形式に変換
    .then(data => {

      var now = new Date(); //現在時刻を取得
      messageElement = 
        document.getElementsByClassName("dynamic-column-0");//時間表示要素を取得
      messageElement[0].textContent  = now.getHours()+":"+now.getMinutes() + ":"+ now.getSeconds() ; //時間表示

      messageElement = 
        document.getElementsByClassName("dynamic-column-1");//温度表示要素を取得
      messageElement[0].textContent  = data["main"].temp ; //温度表示
      
      messageElement = document.getElementsByClassName("dynamic-column-2");
      messageElement[0].textContent  = data["main"].feels_like; //体感温度表示
      
      messageElement = document.getElementsByClassName("dynamic-column-3");
      messageElement[0].textContent  = data["main"].humidity; //湿度表示
      
      messageElement = document.getElementsByClassName("dynamic-column-4");
      messageElement[0].textContent  = data["main"].pressure; //気圧表示
      
      messageElement = document.getElementsByClassName("dynamic-column-5");
      messageElement[0].textContent  = data["wind"].speed; //風速表示
      
      messageElement = document.getElementsByClassName("dynamic-column-6");
      messageElement[0].textContent  = 
        data["clouds"].all + " ("+ data["weather"][0].description + ")"; //雲量表示
      
      messageElement = document.getElementsByClassName("dynamic-column-7");
      messageElement[0].textContent  = ("rain" in data) ? data["rain"]: "--"; //降水量表示
      
      messageElement = document.getElementsByClassName("dynamic-column-8");
      messageElement[0].textContent  = ("snow" in data) ? data["snow"]: "--"; //積雪量表示
      
      console.log(data); //データをコンソールに表示
    })
    .catch(error => { //エラー処理
      console.error(error);  //エラーをコンソールに表示
    });
  }
