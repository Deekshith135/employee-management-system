# Stage 1: Build the application
FROM maven:3.8.5-openjdk-17 AS build
# Copy the entire project (backend and frontend) into the build container
COPY . .
# Set the working directory to the backend folder
WORKDIR /ems-backend
# Run the Maven build from within the backend folder
RUN mvn clean package -DskipTests

# Stage 2: Create the final, smaller image
FROM openjdk:17-jdk-slim
# Copy the built JAR from the correct path in the build stage
COPY --from=build /ems-backend/target/ems-backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]