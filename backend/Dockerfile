FROM openjdk:21

WORKDIR /app

COPY /target/ghub.jar /app/app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
