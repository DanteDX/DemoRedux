FROM node:alpine as builder
WORKDIR '/app'
COPY package.json ./
RUN npm install --legacy-peer-deps
RUN npm install -D jest@26.6.0
COPY ./ ./
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html