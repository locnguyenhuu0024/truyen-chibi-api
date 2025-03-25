FROM node:20.14.0-alpine

# Set Node.js memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"

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
