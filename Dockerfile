FROM maven:3.9.5-eclipse-temurin-11
EXPOSE 64017 40535
RUN mkdir /opt/app
COPY . /opt/app/
WORKDIR /opt/app
RUN mvn clean install -am

#mvn -Ddk.nykredit.pmp.core.trackerurl=http://servicevm3-datp3.datalogi.net:62463 -pl example-service verify exec:java
CMD [ "mvn", "-Ddk.nykredit.pmp.core.trackerurl=http://servicevm3-datp3.datalogi.net:62463", "-pl", "example-service" , "exec:java" ]
