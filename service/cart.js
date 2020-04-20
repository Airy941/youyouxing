import request from './network.js'

export function getLikeMe(openID) {
	return request(
		{
			url:'selectAll/'
		}
	)
	
}