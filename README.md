## 使用openssl创建公钥私钥

```bash
openssl
genrsa -out private.key 4096
rsa -in private.key -pubout -out public.key
```

## Docker运行mysql

```bash
docker run --name mysql-photo-app -v photo-app:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=iivuuvii0621 -dp 3306:3306 mysql:8
```
`docker volume create mysql-photo-app`创建一个`Named Volume`来持久化`Docker`中的`mysql`数据
`docker exec -it <containerId> bash`进入到容器中
`mysql -u root -p`以`root`用户登录到`mysql`

## 创建表

`post`表新增`userId`列
```sql
ALTER TABLE `post`
ADD `userId` int(11) DEFAULT NULL;
```
建立`post`表`userId`字段与`user`表`id`关联
```sql
ALTER TABLE `post`
ADD FOREIGN KEY(`userId`)
REFERENCES `user`(`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION;
```