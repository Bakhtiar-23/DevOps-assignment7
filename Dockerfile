# ---------- Build Stage ----------
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies first to cache them
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Run the build command to create the production-ready files
RUN npm run build

# ---------- Production Stage ----------
FROM nginx:stable-alpine AS production

# Copy built files from build stage to Nginx's serving directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port on which Nginx is running
EXPOSE 8081

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
