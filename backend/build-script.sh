#!/bin/bash

# 스크립트 파일의 디렉토리 위치로 이동
cd "$(dirname "$0")"

# target 디렉토리 비우기
rm -rf target/*

# Gradle을 사용하여 Spring Boot 애플리케이션을 빌드합니다.
echo "Building Spring Boot application with Gradle..."
cd ./src/ghub/
./gradlew clean build
cd -

# 생성된 JAR 파일을 target 폴더로 이동시킵니다.
echo "Moving JAR file to target folder..."
mv src/ghub/build/libs/ghub-0.0.1-SNAPSHOT.jar target/ghub.jar
