FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY src/main/resources/application.properties src/main/resources/application.properties
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]