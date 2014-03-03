Meteor.startup(function(){
	return Meteor.methods({
		'removeArticles':function(){
			Articles.remove({});
		},
		'removeLikes':function(){
			Likes.remove({});
		}
	})	
})
