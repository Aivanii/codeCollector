FROM node:16

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

RUN npm install -g vite
   
# Запускаем сборку приложения
RUN npm run build

EXPOSE 5000
CMD ["npm", "run", "dev", "--", "--host"]
