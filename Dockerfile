FROM node:20.11.1-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# Bundle app source
COPY . .

# Build the application
RUN yarn build:prod

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["yarn", "start:prod"]
