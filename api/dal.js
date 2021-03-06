const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'));
const db = new PouchDB('https://gookoothablerldomptereav:ced720e29fd1ca2fce9f8637232c5c9e3436028b@y-intercept.cloudant.com/petvetdb')
const dateformat = require('dateformat')
var now = new Date()

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
	listGlossary: listGlossary,
	createExam: createExam,
	listExams: listExams

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

	pet._id = "pet_" + pet.name + "_" + pet.owner_id
	pet.type = "pet"
	pet.pic = "https://smartofficesandsmarthomes.com/wp-content/plugins/loading-page/images/placeholder-image.jpg"

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

	data._id = "definition_" + data.name

	db.post(data, function(err, res) {
		if (err) cb(err)
		if (res) return cb(null, res)
		console.log('201: Definition Created')
	})
};

function createExam(data, cb) {
	if (data.hasOwnProperty('_id') === true) {
		return cb(new Error('400 improper data field'))
	}
	if (data.hasOwnProperty('_rev') === true) {
		return cb(new Error('400 improper data field'))
	}
	console.log('dal',now)

	data._id = "exam_" + data.pet.name + "_" + dateformat(data.now, "mm-dd-yyyy-HH:MM")


	db.post(data, function(err, res) {
		if (err) cb(err)
		if (res) return cb(null, res)
		console.log('201: Exam Created')
	})
};

///////////////////////////////////////
/////////// base functions ////////////
///////////////////////////////////////

function getDocById(id, cb) {
	if (typeof id === "undefined" || id === null) {
		return cb(new Error("400Missing data parameter"))
	} else {
		db.get(id, function(err, res) {
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

function listExams(data, cb) {
	db.allDocs({
		include_docs: true,
		startkey: 'exam_',
		endkey: 'exam_\uffff',
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
