// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    //FaceBook
    'facebookAuth' : {
        'clientID'        : '', // your App ID
        'clientSecret'    : '', // your App Secret
        'callbackURL'     : '' // your App Secret
    }, 

    //Twitter
    'twitterAuth' : {
        'consumerKey'        : '',
        'consumerSecret'     : '',
        'callbackURL'        : ''
    }, 

    //Google
    'googleAuth' : {
        'clientID'         : '',
        'clientSecret'     : '',
        'callbackURL'      : ''
    },

    //Github
    'githubAuth' : {
        'clientID'         : '',
        'clientSecret'     : '',
        'callbackURL'      : ''
    },

    //Linkedin
    'linkedinAuth' : {
        'consumerKey'         : '',
        'consumerSecret'     : '',
        'callbackURL'      : ''
    }

};
