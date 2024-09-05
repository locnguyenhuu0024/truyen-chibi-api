FROM node:20.11.1-alpine


# Create app directory
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
# Install app dependencies
RUN yarn install

# Bundle app source
COPY ./ ./
RUN yarn build:prod

CMD [ "yarn", "start:prod" ]
