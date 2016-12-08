const dal = require('./public/dal/dal')

const owners = [{
		"lastName": "robinson",
		"firstName": "joseph",
		"stAddress": "3345 pinetree dr.",
		"city": "smyrna",
		"state": "ga",
		"zip": "30080",
		"email": "jcdaniel55@gmail.com",
		"pets": [{
				"petId": "owner_jcdaniel55@gmail.com_pet_puck"
			},
			{
				"petId": "owner_jcdaniel55@gmail.com_pet_deuce"
			}]
		},
		{
		"lastName": "daniel",
		"firstName": "melanie",
		"stAddress": "1367 ft. johnson rd.",
		"city": "charleston",
		"state": "sc",
		"zip": "29412",
		"email": "mdaniel4@gmail.com",
		"pets": [{
				"petId": "owner_mdaniel4@gmail.com_pet_lily"
			},
			{
				"petId": "owner_mdaniel4@gmail.com_pet_lila"
			}]
		},
		{
			"lastName": "daniel",
			"firstName": "stephen",
			"stAddress": "3345 pinetree dr.",
			"city": "smyrna",
			"state": "ga",
			"zip": "30080",
			"email": "stephen.daniel@gmail.com",
			"pets": [{
					"petId": "owner_stephen.daniel@gmail.com_pet_max"
				}]
		}]

		function cb(msgHeader) {
		  return function(err, response) {
		    if (err) return console.log('ERROR:\n', err.message)
		    return console.log(msgHeader, response)
		  }
		}

		owners.forEach(function(data) {
			dal.createOwner(data, cb)
		})
