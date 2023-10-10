def jenkinsPipeline = fileLoader.fromGit('common-jenkins-files/JenkinsPipeline',
    'https://git.tools.nykredit.it/scm/code-setup/jenkins-pipeline.git', 'master', 'git-dev', 'LINUX')
 
 
// Build variables used when building the project on Jenkins
// For a complete list of variables see this: https://wiki.tools.nykredit.it/display/IPAS/Jenkins+build+parameters
// OBS: You need to remember to add env. as part of the parameter name - otherwise Jenkins will not take you variable declaration in account.
// Also remember that string values needs to be surrounded by quotes.
 
jenkinsPipeline.buildJob()
