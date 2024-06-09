export function fail_service(response){
      return {
        Status : true,
        error : response ,
        response_code : 500,
        result : null
    }
}

export function success_service(response){
    return {
        Status : false,
        error : null,
        response_code : 200,
        result : response
    }
}
