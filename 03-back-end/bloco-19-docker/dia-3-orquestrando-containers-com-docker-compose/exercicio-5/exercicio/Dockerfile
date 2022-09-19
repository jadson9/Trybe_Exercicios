FROM node:14-alpine as build-stage
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm i
COPY ["./src", "./src"]
COPY ["./public", "./public"]
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]