# Cách để sử dụng project

## git clone our app

## Setup Back-end

` Install mongoDB and install Robot3T`
`Install mongoDB xong rồi thì nhớ chạy để nó lên server 27017 nhé`
`(1)/Users/thuongle/mongodb/bin/mongod --dbpath (2) /Users/thuongle/mongodb-data`

> **Note (1):**: path đến cái mongod khi cài mongodb
> **Note (2):**: path đến cái file để lưu trữ data trên localy
> `cd back-end file and npm install`

### Set Up data at Back-end

Gỡ comment từ dòng 16 tới dòng 23 ở file `server.js` rồi `npm start `
Set up xong thì comment lại nha

> **Note:**: Nếu có bug thằng `nodemon` chưa cài thì cài nhé vì mình cài globaly ở máy

# Set Up Client

`cd client file and npm install => npm start`

## SET UP USER ADMIN

Vì chưa setup User Admin ở trong database thì mình dùng Postman để tiện nhé
`{ "email": "admin@gmail.com", "password" :"thuong123", "confirmPassword":"thuong123", "name": "Admin", "address":"Ha Noi", "phoneNumber" : "0983786614", "roles" : "admin" } `
