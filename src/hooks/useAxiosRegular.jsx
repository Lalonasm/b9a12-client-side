import axios from 'axios'

export const axiosRegular = axios.create({
    baseURL: 'http://localhost:8000/',
})
const useAxiosRegular = () => {
    return axiosRegular;
}

export default useAxiosRegular;