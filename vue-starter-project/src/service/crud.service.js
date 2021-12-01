import axios from 'axios';
import HttpService from 'http.service'

class CrudService extends HttpService {

    constructor(model) {
        super()
        this.model = model;
    }

    getData = () => {
        return axios.get(`${this.baseURL}/${this.model}`);
    }

    create = (item) => {
        return axios.post(`${this.baseURL}/${this.model}`, item)
    }

    update = (item) => {
        return axios.put(`${this.baseURL}/${this.model}/${item.id}`, item)
    }

    delete = (item) => {
        return axios.delete(`${this.baseURL}/${this.model}/${item.id}`)
    }

    show = (id) => {
        return axios.get(`${this.baseURL}/${this.model}/${id}`)
    }

}

export default CrudService ;