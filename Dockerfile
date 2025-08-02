# 🏗️ Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar Git (si es necesario)
RUN apk add --no-cache git

# Copiar package.json y package-lock.json para aprovechar la caché
COPY package*.json ./

# Instalar TODAS las dependencias (incluyendo devDependencies)
RUN npm ci --only=production --ignore-scripts && \
    npm ci --only=development --ignore-scripts

# Copiar el código fuente
COPY . .

# Ejecutar el build
RUN npm run build

# 🏠 Etapa final (sin devDependencies)
FROM node:20-alpine AS runner

WORKDIR /app

# Instalar wget para health checks y serve en una sola capa
RUN apk add --no-cache wget && \
    npm install -g serve@latest

# Copiar solo el resultado del build
COPY --from=builder /app/build ./build

EXPOSE 3000

# Comando para servir la aplicación
CMD ["serve", "-s", "build", "-l", "3000"]
