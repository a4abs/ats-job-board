# Use an official Node.js 20 runtime as a parent image
FROM node:20-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json/yarn.lock files
COPY package*.json ./

# Install dependencies
RUN npm install ci --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Use an official Node.js 20 runtime as a parent image
FROM node:20-alpine AS production

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json/yarn.lock files
COPY package*.json ./

# Install dependencies
RUN npm install ci --legacy-peer-deps --only=production

# Copy the Next.js build output from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
