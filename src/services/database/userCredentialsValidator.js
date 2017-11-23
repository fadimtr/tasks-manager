import firebaseDB from './firebaseDBConfig';

export default function validate(userCredentials){
    return getDBUsers()
    .then( 
        function(result){
            return validateUser(userCredentials,result);
    })
    .catch(
        function(error){
            console.log('cant retrieve users')
    });
}

function validateUser(credentials,users){
    for(let user in users){
        if(users[user].username == credentials.username && users[user].password == credentials.password){
            return true;
        }
    }
    return false;
}

function getDBUsers(){
    return firebaseDB.ref('/users/').once('value').then(function(snapshot) {
        return snapshot.val();
    }).catch(function(error){
        console.log(error)
    });
}
