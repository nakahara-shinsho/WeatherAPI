//htmlのul要素（id = 'messages'）を呼び出し
var messageList = $('#messages');

//openweathermap（天気予報API）に接続
//var request = new XMLHttpRequest();
var cityName = "tama";
var owmApiKey = "438531953753d6e4bb36354a22ba948a";
var owmURL = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName +",jp&lang=ja&APPID="+ owmApiKey +"";

console.log(owmURL);

fetch(owmURL)
  .then(response => {
    return response.json();  
  })
  .then(data => {
    console.log(data);
    var messageElement = $("<il><p class='weather'>" + data["weather"][0]["main"] + "</p></il>");
    //HTMLに取得したデータを追加する
    messageList.append(messageElement);
  })
  .catch(error => {
    console.error(error);  
  });
