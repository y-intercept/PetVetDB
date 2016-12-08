const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'));
const db = new PouchDB('http://localhost:5984/petvet')

/////////////////////////////////////
//////// exported functions /////////
/////////////////////////////////////

const dal = {
	createOwner: createOwner,
	createPet: createPet,
	getDocById: getDocById,
	deleteDoc: deleteDoc,
	editEntry: editEntry,
	createEntry: createEntry,
	createView: createView,
	listOwners: listOwners,
	listPets: listPets,
	listGlossary: listGlossary
}

////////////////////////////////
////// create functions ////////
////////////////////////////////

function createOwner(data, cb) {
	if (data.hasOwnProperty('_id') === true) {
		return cb(new Error('400 improper data field'))
	}
	if (data.hasOwnProperty('_rev') === true) {
		return cb(new Error('400 improper data field'))
	}

	data._id = "owner_" + data.email
	data.type = "owner"

	db.post(data, function(err, res) {
		if (err) cb(err)
		if (res) return cb(null, res)
		console.log("201: Owner Created")
	})
};

function createPet(pet, cb) {
	if (pet.hasOwnProperty('_id') === true) {
		return cb(new Error('400 improper data field'))
	}
	if (pet.hasOwnProperty('_rev') === true) {
		return cb(new Error('400 improper data field'))
	}

	pet._id = "pet_" + pet.name + pet.dob
	pet.type = "pet"

	db.post(pet, function(err, res) {
		if (err) cb(err)
		if (res) return cb(null, res)
		console.log('201: Pet Created')
	})
};

function createEntry(data, cb) {
	if (data.hasOwnProperty('_id') === true) {
		return cb(new Error('400 improper data field'))
	}
	if (data.hasOwnProperty('_rev') === true) {
		return cb(new Error('400 improper data field'))
	}

	//data._id = "definition_" + data.name

	db.post(data, function(err, res) {
		if (err) cb(err)
		if (res) return cb(null, res)
		console.log('201: Definition Created')
	})
};

///////////////////////////////////////
/////////// base functions ////////////
///////////////////////////////////////

function getDocById(ownerId, cb) {
	if (typeof ownerId === "undefined" || ownerId === null) {
		return cb(new Error("400Missing data parameter"))
	} else {
		db.get(ownerId, function(err, res) {
			if (err) {
				console.log('err: ', err)
				return cb(err)
			}
			if (res) {
				return cb(null, res)
			}
		})
	}
};

function editEntry(data, cb) {
  if (data.hasOwnProperty('_id') !== true) {
    return cb(new Error('400 Missing _id property'))
  }
  if (data.hasOwnProperty('_rev') !== true) {
    return cb(new Error('400 Missing _rev property'))
  }

  db.put(data, function(err, res) {
		console.log('dal err: ', err)
    if (err) return cb(err)
    if (res) return cb(null, res)
    console.log('202: Edits Accepted')
  })
};

function deleteDoc(data, cb) {
	console.log('dal', data)
	if (data === undefined || data === null) {
		return cb(new Error('404Missing Data'))
	}
	if (data.hasOwnProperty('_id') !== true) {
		return cb(new Error('400Missing _id property'))
	}
	if (data.hasOwnProperty('_rev') !== true) {
		return cb(new Error('400Missing _rev property'))
	}
		db.remove(data, function(err, result) {
			if (err) return cb(err)
			if (result) return cb(null, result)
		})
};

///////////////////////////////////////
////////// list functions /////////////
///////////////////////////////////////

function listOwners(data, cb) {
	db.query('listOwners', {
	  key: 'owner',
	  include_docs: true
	}, function (err, result) {
	  if (err) {
			return console.log(err);
		}
	  if (result) {
			return cb(null, result);
		}
	})
};

function listPets(data, cb) {
	db.query('listPets', {
		key: 'pet',
		include_docs: true
	}, function (err, result) {
		if (err) {
			return console.log(err)
		}
		if (result) {
			return cb(null, result)
		}
	})
};

function listGlossary(data, cb) {
	db.allDocs({
		include_docs: true,
		startkey: 'definition_',
		endkey: 'definition_\uffff',
		attachments: true
	}, function(err, res) {
		if (err) {
			return console.log(err)
		}
		if (res) {
			return cb(null ,res)
		}
	})
};

/////////////////////////////////////
/////////// Create View /////////////
/////////////////////////////////////

function createView(view) {
  db.put(view, function(err, response) {
    if (err) {
      return console.log(err)
    }
    if (response) {
      console.log("response: ", JSON.stringify(response, null, 4))
    }
  })
};

module.exports = dal
