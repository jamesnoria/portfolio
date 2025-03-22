# 🏗️ Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar Git (si es necesario)
RUN apk add --no-cache git

# Copiar package.json y package-lock.json para aprovechar la caché
COPY package.json package-lock.json ./

# Instalar TODAS las dependencias (incluyendo devDependencies)
RUN npm ci

# Copiar el código fuente
COPY . .

# Ejecutar el build
RUN npm run build

# 🏠 Etapa final (sin devDependencies)
FROM node:20-alpine AS runner

WORKDIR /app

# Copiar solo el resultado del build y dependencias necesarias
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json /app/package-lock.json ./

# Instalar SOLO dependencias de producción
RUN npm ci --omit=dev && \
    npm cache clean --force

# Instalar serve solo en producción
RUN npm install serve@latest --only=production

EXPOSE 3000
