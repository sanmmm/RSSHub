
module.exports = {
	FeedTags: {
		social: '1001',
		Programme: '1002',
		live: '1003',
		shoping: '1004',
	},
	RedisKeys: {
		subscribeCount: uid => `usersubscribeCount:${uid}`
	},
	FeedOriginTypes: {
		diff: 'diff',
		increase: 'increase'
	},
	FeedOriginPriorityTypes: {
		main: 'main',
		second: 'second'
	}
}