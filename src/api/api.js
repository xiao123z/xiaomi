import axios from 'axios'
import qs from 'qs'
let recommend = () => {
  let url = 'api/v1/home/page'
  var data = {
    client_id: 180100031051,
    channel_id: '',
    webp: 1,
    page_type: 'activity',
    page_id: 18845,
  }
  var dataObj = qs.stringify(data)
  return axios.post(
    url,
    { dataObj },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
}
let phone = () => {
  let url = 'api/v1/home/page'
  var dat = {
    client_id: 180100031051,
    channel_id: '',
    webp: 1,
    page_type: 'activity',
    page_id: 13176,
  }
  var dataOb = qs.stringify(dat)

  return axios.post(
    url,
    { data:dataOb },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
}
export { recommend, phone }
