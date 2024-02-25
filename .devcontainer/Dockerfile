# Use the Node.js 18 base image
FROM node:18

# Clone the ChatGPT repository from GitHub
RUN git clone https://github.com/chokiproai/ChatGPT-Plugins.git

# Set the working directory inside the container
WORKDIR "ChatGPT-Plugins"

# Install dependencies using npm
RUN npm install

# Build the project
RUN npm run build

# Expose port 3000 for accessing the application
EXPOSE 3000

# Specify the command to run the application
CMD ["npm", "run", "start"]