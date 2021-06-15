import axios, { AxiosResponse } from 'axios'

export default class HttpRequests  {
  async get(url: string, headers: { [key: string]: string }): Promise<AxiosResponse> {
    const response = await axios
      .get(url, {
        headers,
      })
      .catch(error => error.response || error)
    return response
  }

  async post(url: string, body: string, headers: { [key: string]: string }): Promise<AxiosResponse> {
    const response = await axios.post(url, body, { headers }).catch(error => error.response || error)
    return response
  }

  async put(url: string, body: string, headers: { [key: string]: string }): Promise<AxiosResponse> {
    const response = await axios.put(url, body, { headers }).catch(error => error.response || error)
    return response
  }
}