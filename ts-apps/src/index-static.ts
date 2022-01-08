//static  variables

class ErrorMessage {
    static  SERVER_ERROR = 'Server error';
    static INVALID_TOKEN = 'Token is invalid';
    static TOKEN_NOTFOUND = 'Token Not suppllied';
}

const getInfo = () => {
    console.log(ErrorMessage.SERVER_ERROR)
    console.log(ErrorMessage.INVALID_TOKEN)
    console.log(ErrorMessage.TOKEN_NOTFOUND)
}
getInfo();