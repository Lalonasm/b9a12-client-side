import axios from 'axios'
// import apartment from '../../public/apartments.json'
// import apartment from '../../public/apartments.json'

export const axiosRegular = axios.create({
    baseURL: 'https://b9a12-server-side-fawn.vercel.app',
    // baseURL: 'https://b9a12-server-side-6rznhe4fu-lalonasms-projects.vercel.app',
    // baseURL: apartment,
})
const useAxiosRegular = () => {
    return axiosRegular;
}

export default useAxiosRegular;