pipeline {
    environment {
	registry = "claytondevops/appglogo"
	registryCredential = 'dockerhub'
	dockerImage = ''
    }
    agent any
    stages {
	stage('Cloning our Git') {
	    steps {
	    git 'https://github.com/ClaytonOSouza/appnode.git'
            sh 'ls -lrth'
         }
    }
	stage('Building our image') {
	    steps{
	        script {
		    dockerImage = docker.build registry + ":$BUILD_NUMBER"
	            sh 'docker login'
                    sh 'docker images'
                    sh 'ls -lrth'
                    sh 'pwd'
              }
	  }	 
    }
	stage('Deploy our image') {
	    steps{
	        script {
	            docker.withRegistry( '', registryCredential ) {
			dockerImage.push()
	              }	
	        }	 	
	  }
    }	
	 stage('Cleaning up') {
	     steps{
	         sh "docker rmi $registry:$BUILD_NUMBER"
		}
	  }
    }
}

