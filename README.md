# HCMUT_SSPS

## Overview
HCMUT_SSPS là dịch vụ in ấn thông minh dành cho sinh viên ĐHBK nhằm sử dụng cơ sở vật chất in ấn tại ĐHBK hiệu quả hơn. Sinh viên có thể sử dụng hệ thống này để đặt hàng trước nhu cầu in ấn của mình mà không cần phải chờ đợi. 
chờ đợi theo phương pháp truyền thống. Hệ thống còn cung cấp tính năng lưu trữ thông tin in ấn của bạn như metadata của tài liệu, số lượng, ngày, giờ, địa điểm... của từng đơn hàng. 
Sau đó, sinh viên có thể xem tất cả chi tiết về việc sử dụng hệ thống của họ trong lịch sử. Hệ thống này được quản lý bởi Cán bộ Dịch vụ In ấn Sinh viên (SPSO). Họ chịu trách nhiệm cấu hình hệ thống, 
quản lý máy in và xem số liệu thống kê cũng như hiệu suất của HCMUT_SSPS. SPSO cũng có thể xem lịch sử in ấn của người dùng.

## Technology Stack
- Front-end: ReactJS, Bootstrap, and other additional libraries provided by npm.
- Back-end: NodeJS (v20), ExpressJS.
- Database: MySQL.

## Drawbacks
- No authorization between students and SPSOs
- Payment methods not integrated

## Installation
To use the application, you can follow the following steps:

### Clone the repository
Open a terminal at a directory of your choice and enter these commands (change the folder name if you want to):
```
  git clone https://github.com/quancao2310/CNPM_HCMUT_SSPS.git
  cd CNPM_HCMUT_SSPS
```
Inside **CNPM_HCMUT_SSPS** folder, you will see several subfolders: *client*, *server*, etc.

### Install dependencies
First, if you haven't installed [NodeJS](https://nodejs.org/), please visit https://nodejs.org/ and download it.

Next, you will have to install all the dependencies of our project. Let's go to the "server" directory first and enter these commands:
```
  cd server
  npm install
```

Then, go to the "client" directory and do the same thing by entering these commands:
```
  cd client
  npm install
```
You have installed all the dependencies.

### Set up a database server
The application will also need a MySQL server for the backend to connect to the database. If your machine does not have any MySQL server, install one of your preference ([MySQL official website](https://www.mysql.com/) or [XAMPP](https://www.apachefriends.org/download.html)). Start the server at port 3306 (this port is mostly chosen by default). Import the file "hcmut_ssps.sql" to initialize the database.
<!-- Create a database called "hcmut_ssps" and add some data to it. -->

You are ready now. Let's start the application.

### Run the application
There are two ways to start the application.

#### Start each folder separately
Start two terminal instances in the **CNPM_HCMUT_SSPS** directory. For the first instance, run these commands:
```
  cd server
  npm start
```

For the second one, run these commands:
```
  cd client
  npm start
```

The application should be starting. The ReactJS application will run on http://localhost:3000 and the Express application will run on http://localhost:8080.

To log in as a student:
* Email: `john.doe@hcmut.edu.vn`
* Password: `123456`

To log in as an admin:
* Username: `adminqc`
* Password: `23571113`

You are now ready to explore our application!

#### Start both folders concurrently in dev mode
Run `npm install` in the root folder (do this for the first time only), this will install the [concurrently](https://www.npmjs.com/package/concurrently) package. Besides, [nodemon](https://www.npmjs.com/package/nodemon) has also been added to the *server* before.

Now, to start the project in dev mode, run this command in root folder:
```
  npm run dev
```

## Contributor
This project is developed by a group of Computer Science students from Ho Chi Minh University of Technology (HCMUT). Our members of the team:
* Cao Minh Quân - 2112109
* Huỳnh Nguyên Phúc - 2110451
* Dương Phúc Thắng - 2112327
* Nguyễn Quốc Thắng - 2114837
* Trần Bảo Phúc - 2114452
* Nguyễn Tiến Phát - 2114381
