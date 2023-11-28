FROM maven:3.9.5-eclipse-temurin-11
RUN mkdir /opt/app
COPY . /opt/app/
WORKDIR /opt/app
RUN mvn clean install -am
CMD [ "mvn", "-pl", "example-service" , "exec:java" ]
