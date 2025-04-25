pipeline {
    agent {
      kubernetes {
        label 'docker-agent'
        defaultContainer 'docker'
      }
    }

    environment {
        IMAGE_NAME = 'hello-express'

        CONTAINER_NAME = 'express-container'
        PORT = '5050'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Akshay2642005/jenkins-express-tutorial' // Replace with your repo
            }
        }

        stage('Build Docker Image') {
            steps {
                script {

                    sh "docker build -t $IMAGE_NAME ."
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    // Stop and remove existing container if running
                    sh "docker rm -f $CONTAINER_NAME || true"

                    // Run the container on the new port
                    sh "docker run -d -p $PORT:$PORT --name $CONTAINER_NAME $IMAGE_NAME"
                }

            }
        }
    }
}

