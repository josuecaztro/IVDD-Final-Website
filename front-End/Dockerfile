FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG REACT_APP_YT_KEY
ARG REACT_APP_YT_CHANNEL
ARG REACT_APP_ADMIN_PASS
ENV REACT_APP_YT_KEY=$REACT_APP_YT_KEY
ENV REACT_APP_YT_CHANNEL=$REACT_APP_YT_CHANNEL
ENV REACT_APP_ADMIN_PASS=$REACT_APP_ADMIN_PASS
RUN echo "Building with REACT_APP_YT_KEY=$REACT_APP_YT_KEY" && npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
