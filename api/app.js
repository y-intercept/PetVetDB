const app = require('express')()
const http = require('http')
const bodyParser = require('body-parser')
const HTTPError = require('node-http-error')
const port = process.env.PORT || 4000
const cors = require('cors')
app.use(cors({ origin: true, credentials: true}))
app.use(bodyParser.json())
const dal = require('./dal.js')

const server = http.createServer(app)
server.listen(port, () => console.log('server opened on ', server.address(), 'port: ', port))

//////////////////////////////////
////////// CRUDL Owners //////////
//////////////////////////////////

// CREATE
app.post('/owners', function(req, res, next) {
	dal.createOwner(req.body, function(err, data) {
		if (err) {
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
		}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(201).send(data)
		}
	})
});

// READ
app.get('/owners/:id', function(req, res, next) {
	const ownerId = req.params.id
	dal.getDocById(ownerId, function(err, data) {
		if (err) {
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
		}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(200).send(data)
		}
	})
});

// UPDATE
app.put('/owners/:id', function(req, res, next) {
	dal.editEntry(req.body, function(err, data) {
		if (err) {
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
		}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(200).send(data)
		}
	})
});

//DELETE
app.delete('/owners/:id', function(req, res, next) {
	const ownerId = req.params.id
	console.log('id', req.params.id)
	dal.getDocById(ownerId, function(err, data) {
		console.log('api', data)
		if (err) {
			var responseError = BuildResponseError(err)
			return next(new Error(responseError.status, responseError.message, responseError))
		}
		if (data) {
			dal.deleteDoc(data, function(deleteErr, deleteData) {
				if (deleteErr) {
					var responseError = BuildResponseError(err)
					return next(new Error(responseError.status, responseError.message, responseError))
				}
				if (deleteData) {
					res.append('Content-type', 'application/json')
					res.status(202).send(deleteData)
				}
			})
		}
	})
});

// LIST
app.get('/owners', function(req, res, next) {
	dal.listOwners(req.body, function(err, data) {
		if (err) {
			console.log('err: ', err)
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
	}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(200).send(data)
		}
	})
});

//////////////////////////////////
/////////// CRUDL Pets ///////////
//////////////////////////////////

// CREATE
app.post('/pets', function(req, res, next) {
	dal.createPet(req.body, function(err, data) {
		if (err) {
			console.log('err: ', err)
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
		}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(201).send(data)
		}
	})
});

// READ
app.get('/pets/:id', function(req, res, next) {
	const petId = req.params.id
	dal.getDocById(petId, function(err, data) {
		if (err) {
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
		}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(200).send(data)
		}
	})
});

// UPDATE
app.put('/pets/:id', function(req, res, next) {
	dal.editEntry(req.body, function(err, data) {
		if (err) {
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
		}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(201).send(data)
		}
	})
});

// DELETE
app.delete('/pets/:id', function(req, res, next) {
	const petID = req.params.id
	dal.getDocById(petID, function(err, data) {
		if (err) {
			var responseError = BuildResponseError(err)
			return next(new Error(responseError.status, responseError.message, responseError))
		}
		if (data) {
			dal.deleteDoc(data, function(deleteErr, deleteData) {
				if (deleteErr) {
					var responseError = BuildResponseError(err)
					return next(new Error(responseError.status, responseError.message, responseError))
				}
				if (deleteData) {
					res.append('Content-type', 'application/json')
					res.status(202).send(deleteData)
				}
			})
		}
	})
});

// LIST
app.get('/pets', function(req, res, next) {
	dal.listPets(req.body, function(err, data) {
		if (err) {
			console.log('err: ', err)
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
	}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(200).send(data)
		}
	})
});

//////////////////////////////////
//////// CRUDL Glossary //////////
//////////////////////////////////

// CREATE
app.post('/glossary', function(req, res, next) {
	dal.createEntry(req.body, function(err, data) {
		if (err) {
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
		}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(201).send(data)
		}
	})
});

// READ
app.get('/glossary/:id', function(req, res, next) {
	const defId = req.params.id
	dal.getDocById(defId, function(err, data) {
		if (err) {
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
		}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(200).send(data)
		}
	})
});

// UPDATE
app.put('/glossary/:id', function(req, res, next) {
	dal.editEntry(req.body, function(err, data) {
		if (err) {
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
		}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(201).send(data)
		}
	})
});

// DELETE
app.delete('/glossary/:id', function(req, res, next) {
	const defId = req.params.id
	dal.getDocById(defId, function(err, data) {
		if (err) {
			var responseError = BuildResponseError(err)
			return next(new Error(responseError.status, responseError.message, responseError))
		}
		if (data) {
			dal.deleteDoc(data, function(deleteErr, deleteData) {
				if (deleteErr) {
					var responseError = BuildResponseError(err)
					return next(new Error(responseError.status, responseError.message, responseError))
				}
				if (deleteData) {
					res.append('Content-type', 'application/json')
					res.status(202).send(deleteData)
				}
			})
		}
	})
});

// LIST
app.get('/glossary', function(req, res, next) {
	dal.listGlossary(req.body, function(err, data) {
		if (err) {
			//console.log('req: ', req)
			console.log('err: ', err)
			var responseError = BuildResponseError(err)
			return next(new HTTPError(responseError.status, responseError.message, responseError))
	}
		if (data) {
			res.append('Content-type', 'application/json')
			res.status(200).send(data)
		}
	})
});

////////////////////////////
//// BuildResponseError ////
////////////////////////////

function BuildResponseError(err) {

  const statuscheck = isNaN(err.message.substring(0, 3)) === true ? "400" : err.message.substring(0, 3)
  const status = err.status ? Number(err.status) : Number(statuscheck)
  const message = err.status ? err.message : err.message.substring(3)
  const reason = "messagenan"
  const error = status === 400 ? "Bad Request" : err.name
  const name = error

  var errormsg = {}
  errormsg.error = error
  errormsg.reason = reason
  errormsg.name = name
  errormsg.status = status
  errormsg.message = message
  return errormsg
};
