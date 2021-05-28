pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
      stage('Test') {
            steps {
                sh 'node --version'
            }
        }
        stage('Talk') {
            steps {
                sh 'echo "Hello World"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
    } 
        
}