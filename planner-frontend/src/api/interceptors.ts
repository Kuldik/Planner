import axios, { type CreateAxiosDefaults } from 'axios'

import { getAccessToken } from '../services/auth-token.service'

const options: CreateAxiosDefaults = {
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})
