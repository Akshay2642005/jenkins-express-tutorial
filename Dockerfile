# Use official Node.js image
FROM node:23

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port and run

EXPOSE 5000
CMD [ "npm", "start" ]

