import axios from 'axios'
let recommend = (dat) => {
    let url='api/v1/home/page'
   return axios.post(url,{data:dat},{headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
 },})
}
export {recommend}