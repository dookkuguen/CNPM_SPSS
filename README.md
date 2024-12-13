# HCMUT_SSPS

## Overview
HCMUT_SSPS là dịch vụ in ấn thông minh dành cho sinh viên ĐHBK nhằm sử dụng cơ sở vật chất in ấn tại ĐHBK hiệu quả hơn. Sinh viên có thể sử dụng hệ thống này để đặt hàng trước nhu cầu in ấn của mình mà không cần phải chờ đợi. 
chờ đợi theo phương pháp truyền thống. Hệ thống còn cung cấp tính năng lưu trữ thông tin in ấn của bạn như metadata của tài liệu, số lượng, ngày, giờ, địa điểm... của từng đơn hàng. 
Sau đó, sinh viên có thể xem tất cả chi tiết về việc sử dụng hệ thống của họ trong lịch sử. Hệ thống này được quản lý bởi Cán bộ Dịch vụ In ấn Sinh viên (SPSO). Họ chịu trách nhiệm cấu hình hệ thống, 
quản lý máy in và xem số liệu thống kê cũng như hiệu suất của HCMUT_SSPS. SPSO cũng có thể xem lịch sử in ấn của người dùng.

## Solution Stack
- Front-end: ReactJS, Bootstrap, và các thư viện bổ sung khác được cung cấp bởi npm.
- Back-end: NodeJS (v20), ExpressJS.
- Database: MySQL.

## Drawbacks
- Không có sự ủy quyền giữa học sinh và SPSO
- Phương thức thanh toán chưa được tích hợp

## Installation
Để sử dụng ứng dụng, hãy làm theo các bước sau:

### Clone the repository
Mở terminal tại thư mục bạn chọn và nhập các lệnh sau:
```
  git clone https://github.com/dookkuguen/CNPM_SPSS.git
  cd CNPM_SSPS
```
Bên trong thư mục **CNPM_SSPS** sẽ thấy các thư mục con sau: *client*, *server*, etc.

### Install dependencies
Trước tiên, nếu chưa cài đặt [NodeJS](https://nodejs.org/), hãy truy cập https://nodejs.org/ và tải xuống.

Tiếp theo sẽ phải cài đặt tất cả các phần phụ thuộc của dự án của chúng tôi. Trước tiên hãy vào thư mục "server" và nhập các lệnh sau:
```
  cd server
  npm install
```

Sau đó, đi tới thư mục "client" và thực hiện tương tự bằng cách nhập các lệnh sau:
```
  cd client
  npm install
```
Bạn đã cài đặt tất cả các dependencies.

### Set up a database server
Ứng dụng cũng sẽ cần một máy chủ MySQL cho phần phụ trợ để kết nối với cơ sở dữ liệu. Nếu máy không có bất kỳ máy chủ MySQL nào, hãy cài đặt một trong các tùy chọn của bạn ([MySQL official website](https://www.mysql.com/) hoặc [XAMPP](https://www.apachefriends.org/download.html)). Khởi động máy chủ tại port 3306 (port này hầu hết được chọn theo mặc định). Nhập tệp "hcmut_ssps.sql" để khởi tạo cơ sở dữ liệu.
<!-- Create a database called "hcmut_ssps" and add some data to it. -->

Bây giờ đã sẵn sàng. Hãy bắt đầu ứng dụng!

### Run the application
Có 2 cách để chạy ứng dụng:

#### Start each folder separately
Bắt đầu hai phiên bản đầu cuối trong thư mục **CNPM_SSPS**. Trong trường hợp đầu tiên, hãy chạy các lệnh sau:
```
  cd server
  npm start
```

Trong trường hợp thứ hai, hãy chạy các lệnh sau:
```
  cd client
  npm start
```

Ứng dụng sẽ được bắt đầu. Ứng dụng ReactJS sẽ chạy trên http://localhost:3000 và ứng dụng Express sẽ chạy trên http://localhost:8080.

Để đăng nhập với tư cách sinh viên:
* Email: `john.doe@hcmut.edu.vn`
* Password: `123456`

Để đăng nhập với tư cách admin:
* Username: `adminqc`
* Password: `23571113`

Bây giờ đã sẵn sàng để khám phá ứng dụng của chúng tôi!

#### Start both folders concurrently in dev mode
Chạy `npm install` trong thư mục gốc (chỉ thực hiện việc này lần đầu tiên), thao tác này sẽ cài đặt gói [concurrently](https://www.npmjs.com/package/concurrently). Ngoài ra, [nodemon](https://www.npmjs.com/package/nodemon) cũng đã được thêm vào *server* trước đó.

Bây giờ, để bắt đầu dự án ở chế độ dev, hãy chạy lệnh này trong thư mục gốc:
```
  npm run dev
```

## Contributor
Dự án này được phát triển bởi một nhóm sinh viên Khoa khoa học và Kỹ thuật Máy tính đến từ Trường Đại học Bách khoa - ĐHQG TP.HCM. Các thành viên trong nhóm bao gồm:
* Lê Minh Tuấn - 2252868
* Huỳnh Đức Nguyên - 2252542
* Mai Hoàng Huynh - 2211314
* Nguyễn An Khang - 2211441
* Hồ Ngọc Anh Tuấn - 2213768
* Nông Văn Trung - 2213707
