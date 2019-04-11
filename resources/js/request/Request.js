import axios from 'axios';
import qs from 'qs';

axios.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        const responseError = {
            message: '',
            fields: {}
        };

        if (error.response && error.response.status == 422) {
            responseError.fields = error.response.data.errors;
        } else {
            responseError.message = error.response.data.message;
        }

        return Promise.reject(responseError);
    }
);

class Request {
    static get(url, data = {}) {

        return axios.get(
            url,
            {
                params: data
            }
        )
    }

    static post(url, data = {}) {
        return axios.post(
            url,
            qs.stringify(data),
        )
    }

}

export default Request;