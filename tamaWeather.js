var cityName = "tama"; //都市名・変数宣言
var owmApiKey = "438531953753d6e4bb36354a22ba948a"; //APIキー・変数宣言
var owmURL = "http://api.openweathermap.org/data/2.5/weather?q="
      + cityName +",jp&lang=ja&APPID="+ owmApiKey +""; //URL変数宣言

//デバッグ用にコンソールにURLを表示
console.log(owmURL);

//htmlのtbody要素を呼び出し（複数タグがあり得る、インデックスは0から始まる）
tblBody = document.getElementsByTagName("tbody")[0]

//初めの「値：」表示セル
var messageElement = document.createElement("th");
messageElement.setAttribute("class", "fixed-column-0 table-light")
messageElement.innerHTML = "値：" //テキストを設定
tblBody.append(messageElement);  //セルを追加

fetch(owmURL) //openweathermap（天気予報API）に接続
  .then(response => {
    return response.json();  //結果データをJSON形式に変換
  })
  .then(data => {
    console.log(data); //データをコンソールに表示
    messageElement = document.createElement("th"); //温度表示要素を作成
    messageElement.setAttribute("class", "fixed-column-1 table-light")
    messageElement.textContent  = data["main"].temp ; //温度を取得
    tblBody.append(messageElement); //温度表示要素を親要素に追加

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-2")
    messageElement.textContent  = data["main"].feels_like; //体感温度
    tblBody.append(messageElement);　//体感温度表示要素を親要素に追加

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-3")
    messageElement.textContent  = data["main"].humidity; //湿度
    tblBody.append(messageElement);　//湿度表示要素を親要素に追加

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-4")
    messageElement.textContent  = data["main"].pressure; //気圧
    tblBody.append(messageElement);　//気圧表示要素を親要素に追加

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-5")
    messageElement.textContent  = data["wind"].speed; //風速
    tblBody.append(messageElement);　//風速表示要素を親要素に追加

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-6")
    messageElement.textContent  = data["clouds"].all + " ("+ data["weather"][0].description + ")"; //雲量
    tblBody.append(messageElement);　//雲量表示要素を親要素に追加

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-7")
    messageElement.textContent  = ("rain" in data) ? data["rain"]: "--"; //降水量
    tblBody.append(messageElement);　//降水量表示要素を親要素に追加

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-8")
    messageElement.textContent  = ("snow" in data) ? data["snow"]: "--"; //積雪量
    tblBody.append(messageElement);　//積雪量表示要素を親要素に追加
  })
  .catch(error => { //エラー処理
    console.error(error);  //エラーをコンソールに表示
  });
