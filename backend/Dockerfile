FROM openjdk:21 AS builder

WORKDIR /app

COPY build-script.sh .
RUN chmod +x build-script.sh
COPY . .

RUN ./build-script.sh

FROM openjdk:21

WORKDIR /app

COPY --from=builder /app/app.jar .

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
