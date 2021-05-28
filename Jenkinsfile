pipeline {
    agent any

    tools {nodejs "nodejs"}
    
    stages {
        stage('Talk') {
            steps {
                sh 'echo "Hello World"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
        stage('NPM'){
            steps{
                sh 'npm install'
                sh 'npm --version'
            }
        }
    } 
}