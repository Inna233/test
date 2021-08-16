# Linux下修改MySQL的用户密码
以root用户为例
## 拥有原来的MySQL的root密码
1. 使用mysqladmin
``` 
# mysqladmin -u root -p password 新密码
Enter password:【输入原来的密码】
```

2. 登录MySQL
```
# mysql -u root -p
Enter password:【输入原来的密码】
mysql>use mysql;
mysql>update user set password=passworD("新密码") where user='root';
mysql>flush privileges;
mysql>exit;
```
## 忘记MySQL的root的密码

1
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s
s

s
s
s
s
s
s
s
s
s
s
s
