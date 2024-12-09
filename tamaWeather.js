//openweathermap（天気予報API）に接続
var cityName = "tama";　//都市名
var owmApiKey = "438531953753d6e4bb36354a22ba948a"; //APIキー
var owmURL = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName +",jp&lang=ja&APPID="+ owmApiKey +""; //URL

//デバッグ用にコンソールにURLを表示
console.log(owmURL);

//htmlのtbody要素を呼び出し
tblBody = document.getElementsByTagName("tbody")[0]

//初めの「値：」表示セル
var messageElement = document.createElement("th"); //セルを作成
messageElement.setAttribute("class", "fixed-column-0 table-light") //クラスを設定
messageElement.innerHTML = "値：" //テキストを設定
tblBody.append(messageElement);  //セルを追加

//天気情報を格納するセル
fetch(owmURL)
  .then(response => {
    return response.json();  //結果データをJSON形式に変換
  })
  .then(data => {
    console.log(data); //データをコンソールに表示
    messageElement = document.createElement("th"); //セルを作成
    messageElement.setAttribute("class", "fixed-column-1 table-light") //クラスを設定
    messageElement.textContent  = data["main"].temp ; //温度
    tblBody.append(messageElement); //セルを追加

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-2")
    messageElement.textContent  = data["main"].feels_like; //体感温度
    tblBody.append(messageElement);

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-3")
    messageElement.textContent  = data["main"].humidity; //湿度
    tblBody.append(messageElement);

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-4")
    messageElement.textContent  = data["main"].pressure; //気圧
    tblBody.append(messageElement);

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-5")
    messageElement.textContent  = data["wind"].speed; //風速
    tblBody.append(messageElement);

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-6")
    messageElement.textContent  = data["clouds"].all + " ("+　data["weather"][0].description + ")"; //雲量
    tblBody.append(messageElement);

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-7")
    messageElement.textContent  = ("rain" in data) ? data["rain"]: "--"; //降水量
    tblBody.append(messageElement);

    messageElement = document.createElement("th");
    messageElement.setAttribute("class", "fixed-column-8")
    messageElement.textContent  = ("snow" in data) ? data["snow"]: "--"; //積雪量
    tblBody.append(messageElement);
  })
  .catch(error => {
    console.error(error);  
  });
