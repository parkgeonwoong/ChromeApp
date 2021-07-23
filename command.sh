# 1. DockerFile 생성
FROM nginx:alpine
COPY . /usr/share/nginx/html

# 2. nginx 설치
$sudo apt-get install nginx
$nginx -v

# 3. Docker Build
docker build -t dockerid/repository:tagName .

# 4. Docker Images checking
docker Images

# 5. Docker login
docker login

# 6. Docker Push
docker push dockerid/repository:tagName

# 7. WSL

# 8. Docker run
$docker run -d -p 80:80 dockerid/repository:tagName

# 9. Docker ps
$docker ps