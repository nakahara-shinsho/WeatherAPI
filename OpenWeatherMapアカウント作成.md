OpenWeatherアカウント作成から天気データ取得まで

1. [ウェブページ](https://home.openweathermap.org/users/sign_in) をクリックしてアクセスする
　 ![サイン画面](images/singin.jpg)

2. 画面の[Create an Account]をクリックして、アカウントを作成する
   ![アカウント作成画面](images/singin.jpg)

3. 「メール」と「パスワード」を入力して、I agree to the Terms of Service and Privacy Policy にチェックを入れ Create Account をクリック

4. 目的を確認する画面に、[Company]欄に大学名を入れて、[Purpose]欄に、「Weather widget for web]を選択してクリック
   ![alt text](images/purpose.png)

5. ログインにしたら、アカウント名->[My API Keys]をクリックして、下記のapi Key画面が表示される
   ![api Key画面](images/apikey.jpg)

6. この画面の"Key"の下の文字列をコピーして、下記のURLのappidを書き換えて、
　　https://api.openweathermap.org/data/2.5/weather?q=tama,jp&lang=ja&units=metric&appid= 438531953753d6e4bb36354a22ba948a

7. appidを書き換えたURLをブラウザからアクセスすれば、下記の多摩市の天気情報がjsonフォーマットで表示される。

   ```
   {
    "coord": {
        "lon": 139.4435,
        "lat": 35.6372
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "雲",
            "icon": "03n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 5.34,
        "feels_like": 3.25,
        "temp_min": 4.11,
        "temp_max": 6.72,
        "pressure": 1013,
        "humidity": 66,
        "sea_level": 1013,
        "grnd_level": 999
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.57,
        "deg": 350
    },
    "clouds": {
        "all": 40
    },
    "dt": 1733580503,
    "sys": {
        "type": 2,
        "id": 2078606,
        "country": "JP",
        "sunrise": 1733521122,
        "sunset": 1733556538
    },
    "timezone": 32400,
    "id": 1850144,
    "name": "Tama",
    "cod": 200
   }
   ```
8. 収集データ説明

 - 上から順にざっくり説明すると、以下の通りになります。
   (https://openweathermap.org/currentより抜粋)
   - キー	説明
   - coord	緯度、経度
   - main	気温、湿度、気圧、最低気温、最高気温、etc
   - wind	風速、風向き
   - clouds	曇りの確率
   - sys	国コードや日の出時刻、日の入り時刻 etc

