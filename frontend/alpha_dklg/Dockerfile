# Stage de build
FROM node:20-alpine

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances avec un registre plus rapide
RUN npm config set registry https://registry.npmjs.org/ && \
    npm install

# Installation de Angular CLI globalement
RUN npm install -g @angular/cli

# Copie du reste du code source
COPY . .

# Exposition du port
EXPOSE 4200

# Commande pour démarrer l'application en mode développement
CMD ["ng", "serve", "--host", "0.0.0.0"] 