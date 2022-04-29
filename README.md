### 1. 直接 copy build 目录就可以使用

### 2. 接口结构参考

[mock/index.js](/src/mock/index.js)

### 3. Run by docker nginx

```
docker run -it --rm  -p 8080:80 --name web -v ${PWD}/build:/usr/share/nginx/html  -v  ${PWD}/nginx.conf:/etc/nginx/nginx.conf nginx
```

open

http://127.0.0.1:8080
