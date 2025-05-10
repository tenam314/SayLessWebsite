FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN npx next build && npx next export

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "out", "-p", "3000"]

