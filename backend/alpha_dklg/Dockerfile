FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

# Copie du fichier pom.xml
COPY pom.xml .

# Copie du code source
COPY src ./src

# Installation de Maven et compilation du projet
COPY mvnw .
COPY .mvn .mvn
RUN chmod +x mvnw

# Exposition du port
EXPOSE 8080

# Variables d'environnement par défaut
ENV SPRING_PROFILES_ACTIVE=dev
ENV PORT=8080

# Commande pour démarrer l'application
CMD ["./mvnw", "spring-boot:run"] 