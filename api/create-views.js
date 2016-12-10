const dal = require('./dal.js')

///////////////////////////////////////
////////////// views //////////////////
///////////////////////////////////////

const listOwners = {
	_id: "_design/listOwners",
	views: {
		listOwners: {
			map: function(doc) {
				if (doc.type === "owner") {
					emit(doc.type)
				}
			}.toString()
		}
	}
}

const listPets = {
	_id: "_design/listPets",
	views: {
		listPets: {
			map: function(doc) {
				if (doc.type === "pet") {
					emit(doc.type)
				}
			}.toString()
		}
	}
}

const petsByOwner = {
	_id: "_design/petsByOwner",
	views: {
		petsByOwner: {
			map: function(doc) {
				if (doc.type === 'pet') {
					emit(doc.name, {
						"include_docs": true
					})
				}
			}.toString()
		}
	}
};

// dal.createView(listOwners) //[created]
dal.createView(listPets)
