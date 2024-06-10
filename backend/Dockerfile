# Base image
FROM openjdk:21

# Set the working directory
WORKDIR /app

# Copy the JAR file from the host system to the container
COPY ./target/*.jar /app/app.jar

# Expose the port the application runs on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
