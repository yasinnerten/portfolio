# Ensure we use Node.js 14
FROM node:14-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Copy the public folder
COPY ./public ./public

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the app
ENV NODE_ENV=production
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
