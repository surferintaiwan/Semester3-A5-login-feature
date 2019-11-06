# 登入驗證頁面
此為驗證使用者帳號密碼之網頁。

## 網站截圖
![網站截圖](https://github.com/surferintaiwan/Semester3-A5-login-feature/blob/master/screenshot%20of%20website.png?raw=true)

## 功能說明
1. 使用者輸入正確的帳號及密碼後，可跳轉至歡迎頁面
系統內已設計好5筆使用者資料可供測試，如下:

* 名字: Tony, email: tony@stark.com, 密碼: iamironman
* 名字: Steve, email: captain@hotmail.com, 密碼: icandothisallday
* 名字: Peter, email: peter@parker.com, 密碼: enajyram
* 名字: Natasha, email: natasha@gamil.com, 密碼: *parol#@$!
* 名字: Nick, email: nick@shield.com, 密碼: password
2. 使用者若輸入錯誤的帳號或密碼，則會有紅色警示文字出現


## 開始使用
1. 下載本專案檔案至本地端
```
git clone https://github.com/surferintaiwan/Semester3-A5-login-feature.git
```
2. 於終端機打開專案檔案
```
cd Semester3-A5-login-feature
```
3. 於終端機安裝npm

此命令會查詢package.json看本專案使用了哪些套件，並自動安裝
```
npm install
```
4. 於終端機啟用並監聽伺服器
```
nodemon app.js
```
5. 於瀏覽器輸入 [http://localhost:3000/](http://localhost:3000/) 即可開始使用建立於本地端之幹話產生器網站

6. 若欲停止伺服器運行，可於終端機輸入Ctrl + C ，即可停用伺服器

## 環境配置
* node.js > v12.12.0

## 套件
* express
* express-handlebars
* body-parser
* nodemon
* bootstarp

## 專案貢獻者
[Shawn](https://github.com/surferintaiwan)