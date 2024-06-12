#!/bin/bash

cd /app

echo "Building Spring Boot application with Gradle..."
./gradlew clean build

echo "Moving JAR file to target folder..."
mv ./src/ghub/build/libs/ghub-0.0.1-SNAPSHOT.jar ./app.jar
