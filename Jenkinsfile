pipeline {
    agent any
    stages {
        stage('Talk') {
            steps {
                sh 'echo "Hello World"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                    npm --version
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