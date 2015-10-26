# Authentication using NodeJS, PassportJS and Mongo DB

Authentication using Passport to authenticate users locally, with Facebook, Twitter, Github, Linkedin and Google. I've fork this tutorial from Scotch.io and extend this to have Github and Linkedin passport strategy. Also make it compatible for OpenShift Redhat Nodejs deployment. 

#### Express Version

Use ExpressJS 4.0

## Instructions

1. Clone the repo: `git clone repo`
2. Install packages: `npm install`
3. Launch: `node server.js`
4. Visit in your browser at: `http://localhost:8080`

### OpenShit RedHat Deployment
1. Update config/auth.js with App client Id and Secrets 
2. [Nodejs getting started guide OpenShift RedHat](https://developers.openshift.com/en/node-js-getting-started.html)