import APIRequest from '../configs/axios.config';

export function getRandomChuck() {
    return APIRequest.get('/random', {
        validateStatus: function(status){
            return status < 500;
        }
    })

}
