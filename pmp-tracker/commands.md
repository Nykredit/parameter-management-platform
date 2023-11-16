build image:
    docker build -t tracker:v1 .

run image:
    docker run --rm -p 8080:8080 tracker:v1

url:
    http://localhost:8080/pmp-tracker

