# Use the official Node.js 20 image
FROM node:20-alpine

# Create and set working directory
WORKDIR /usr/src/app

# Copy package manifests and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy application source
COPY . .

# Expose your application port
EXPOSE 5000

# Start the server
CMD ["node", "src/config/server.js"]