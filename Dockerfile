# build environment
FROM --platform=linux/amd64 node:14 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN echo "hello"
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent
COPY . /app
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/test.conf

RUN ls /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]