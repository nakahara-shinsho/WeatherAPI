
# 課題１： 郵便番号に指定する場所の天気情報を取得する
- url = "https://api.openweathermap.org/data/2.5/weather?zip={郵便番号}&units=metric&appid={API_key}"


- {郵便番号}
  - 例えば："zip=110-0006,JP", 

- API_key:
  - あなたのAPI KEY

# 課題2： 経度・緯度に指定する場所の天気情報を取得する
- url = "https://api.openweathermap.org/data/2.5/weather?lat={緯度}&lon={経度}&units=metric&appid={API_key}"


- {経度}(lat)・{緯度}（lon）の値：
  - Google Mapから右クリックすることで得られます
  - 例えば："lat=35.2932718&lon=139.97671"

- API_key:
  - あなたのAPI KEY
