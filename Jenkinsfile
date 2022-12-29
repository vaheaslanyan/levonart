// updateGitlabCommitStatus state: 'pending'
pipeline {
    // Makes our pipeline run on any node
    agent any
    // agent {
    //     label 'master'
    // }
    // options {
    //     gitLabConnection('gitlab')
    // }

    // environment {
    //     GOOGLE_APPLICATION_CREDENTIALS = '/root/key.json'
    //     KUBECONFIG = '/root/.kube/kubeconfig.yaml'
    //     CI = 'true'
    // }
    tools {
        nodejs 'nodejs'
    }
    
    stages  {
        // stage('check-for-rebase-before') {
        //     when {
        //         expression {
        //             return env.GIT_BRANCH != 'origin/master'
        //         }
        //     }
        //     steps {
        //         script {
        //             try {
        //                 sh 'git merge-base --is-ancestor origin/master origin/${githubSourceBranch}'
        //                 updateGitlabCommitStatus name: 'Check-For-Rebase-Before', state: 'success'
        //             } catch (exec) {
        //                 updateGitlabCommitStatus name: 'Check-For-Rebase-Before', state: 'failed'
        //                 println "You're behind on commits, make sure to pull"
        //                 throw exec
        //             }
        //         }
        //     }
        // }
        stage('Build') {
            steps {
                script {
                    try {
                        checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/vaheaslanyan/levonart']]])
                        sh 'npm install'
                        // updateGitlabCommitStatus name: 'Build', state: 'success'
                    } catch (exec) {
                        // updateGitlabCommitStatus name: 'Build', state: 'failed'
                        throw exec
                    }
                }
            }
        }
        // stage('test') {
        //     when {
        //         expression {
        //             return env.GIT_BRANCH != 'origin/develop'
        //         }
        //     }
        //     steps {
        //         script {
        //             try {
        //                 sh 'npm install'
        //                 sh 'npm run test'
        //                 updateGitlabCommitStatus name: 'Test', state: 'success'
        //             } catch (exec) {
        //                 updateGitlabCommitStatus name: 'Test', state: 'failed'
        //                 throw exec
        //             }
        //         }
        //     }
        // }

        // stage('sonar & QA') {
        //     when {
        //         expression {
        //             return env.GIT_BRANCH != 'origin/develop'
        //         }
        //     }
        //     steps {
        //         script {
        //             try {
        //                 sh 'npm install sonar-scanner'

        //                 withSonarQubeEnv('Sonar_GCP'){
        //                     sh 'npm run sonar'
        //                 }

        //                 timeout(time: 5, unit: 'MINUTES') {
        //                     // sleep is only a temporary fix to a bug
        //                     sleep(10)
        //                     waitForQualityGate abortPipeline: true
        //                 }                        
        //             } catch (exec) {
        //                 updateGitlabCommitStatus name: 'sonar', state: 'failed'
        //                 throw exec
        //             }
        //             updateGitlabCommitStatus name: 'sonar', state: 'success'
        //         }

        //     }
        // }
        
    //     stage('check-for-rebase-after') {
    //         when {
    //             expression {
    //                 return env.GIT_BRANCH != 'origin/master'
    //             }
    //         }
    //         steps {
    //             script {
    //                 try {
    //                     checkout scm
    //                     sh 'git merge-base --is-ancestor origin/master origin/${githubSourceBranch}'
    //                     updateGitlabCommitStatus name: 'Check-For-Rebase-After', state: 'success'
    //                 } catch (exec) {
    //                     updateGitlabCommitStatus name: 'Check-For-Rebase-After', state: 'failed'
    //                     println "Somebody else must've merged while pipeline was running, make sure to pull and rerun"
    //                     throw exec
    //                 }
    //             }
    //         }
    //     }
    //     stage("build-image") {
    //         when {
    //             expression {
    //                 return env.GIT_BRANCH == 'origin/master'
    //             }
    //         }
    //         steps {
    //             sh 'docker build . -t gcr.io/cde-rdc-dallas/quizmonster-angular-ui:latest'
    //         }
    //     }
    //     stage("push-image") {
    //         when {
    //             expression {
    //                 return env.GIT_BRANCH == 'origin/master'
    //             }
    //         }
    //         steps {
    //             sh 'docker push gcr.io/cde-rdc-dallas/quizmonster-angular-ui'
    //         }
    //     }
    //     stage("deploy-image") {
    //         when {
    //             expression {
    //                 return env.GIT_BRANCH == 'origin/master'
    //             }
    //         }
    //         steps {
    //             sh 'kubectl rollout restart deployment/quizmonster-angular-ui --namespace=quizmonster'
    //         }
    //      }
    // }
    // post {
    //     always {
    //         // Cleans the workspace - so Jenkins will run fast and efficiently
    //         cleanWs()
    //     }
    //     success {
    //         updateGitlabCommitStatus state: 'success'
    //     }
    //     failure {
    //         updateGitlabCommitStatus state: 'failed'
    //     }
    }
}
