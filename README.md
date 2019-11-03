# 韭菜盒子远程网页上视频监控

### A、安装

#### 1. 安装nginx，rosbridge-suite，web_video_server

```
sudo apt-get install nginx
sudo apt-get install ros-kinetic-rosbridge-suite
sudo apt-get install ros-kinetic-web-video-server
```

### B、配置

#### 1. 因为IP的地址要配置很多个地方，所以，写到/etc/hosts里面

```shell
# 查看ip地址和用户名
$ ifconfig #得到IP地址
$ hostname # 得到主机名

$ nano /etc/hosts # 在里面添加 IP[tab]Hostname
```

### 2. 打开nginx 添加虚拟服务器的配置

首先找到nginx配置文件的位置

```
$ sudo nginx -t # 查看nginx.conf的路径，cd 到对应目录并用nano打开
$ sudo nano /opt/nginx/conf/nginx.conf 
```

在打开的文件里面的http的花括号中，添加如下代码。

```shell
    server {                                                                
        listen       8090;
        server_name  localhost,sc;
        location / {
            root   /home/sc/Code/TB3_ui; # 这块改成你下载的本git库的路径
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
	}

```



### C、运行 

在TX2上面运行：

```
sudo nginx # 启动，如果失败了，直接运行 sudo nginx -s reload
roslaunch tb3_web.launch
```

然后打开浏览器输入 192.168.43.228:8090



