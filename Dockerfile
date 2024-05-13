# STAGE 1

# A Dockerfile is a configuration file that defines the image for your Docker container. 
# In your React project directory, create a file named Dockerfile (without any file extension) and add the following content:
# Use an official Node.js runtime as the base image
FROM node:18 as BUILD_IMAGE

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Create a production build of our application
RUN npm run build

# Use Nginx as the production server
FROM nginx:1-alpine-slim

# Copy the built React app to Nginx's web server directory
COPY --from=BUILD_IMAGE /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]

# # Multi-stage build reduces size and does not expose code in our container
# # STAGE 2
# FROM node:18-alpine as PRODUCTION_IMAGE

# WORKDIR /app

# COPY --from=BUILD_IMAGE /app/dist/ /app/dist/

# RUN npm install -g vite

# # Expose a port (e.g., 8080) for the application
# EXPOSE 8080

# COPY package*.json ./

# COPY vite.config.js .

# # Start the React app when the container runs
# CMD [ "npm", "run", "preview" ]

# # In order to build an image from a Dockerfile, run the following command:
# # docker build . -t "website:v2"
# #
# # Check the list of available docker images on our local system by running the following command:
# # docker images
# #
# # Run the following command to spin up a container:
# # docker run -p 8080:8080 website:v2
