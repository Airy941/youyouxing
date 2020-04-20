export default function request (options) {
	return new Promise((resolve,reject) =>{
		wx.request({
			url:`https://www.youyougongqianxing.xyz:4430/${options.url}`,
			method:'get',
			data:options.data ||{},
			success:resolve,
			fail:reject
			}
		)
	})
}