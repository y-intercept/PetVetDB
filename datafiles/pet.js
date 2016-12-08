const dal = require('./public/dal/dal')

const pets =  [
		{
			"id": "owner_jcdaniel55@gmail.com_pet_puck",
			"name": "puck",
			"speciies": "feline",
			"breed": "tabby",
			"color": "black",
			"markings": "white toe front right",
			"sex": "m",
			"dob": "10/17/15",
			"type": "pet"
		},
		{
			"id": "owner_jcdaniel55@gmail.com_pet_deuce",
			"name": "deuce",
			"speciies": "feline",
			"breed": "tabby",
			"color": "black",
			"markings": "white chest, white toe front left",
			"sex": "f",
			"dob": "06/04/13",
			"type": "pet"
		},
		{
			"id": "owner_stephen.daniel@gmail.com_pet_max",
			"name": "max",
			"speciies": "canine",
			"breed": "toy poodle",
			"color": "white",
			"markings": "slight build",
			"sex": "m",
			"dob": "11/12/13",
			"type": "pet"
		},
		{
			"id": "owner_mdaniel4@gmail.com_pet_lily",
			"name": "lily",
			"speciies": "canine",
			"breed": "rat terrier mix",
			"color": "black and tan",
			"markings": "white tipped tail",
			"sex": "f",
			"dob": "11/12/13",
			"type": "pet"

		},
		{
			"id": "owner_mdaniel4@gmail.com_pet_lila",
			"name": "lila",
			"speciies": "canine",
			"breed": "mixed whippet",
			"color": "speckled black and white",
			"markings": "slight build",
			"sex": "f",
			"dob": "09/13/14",
			"type": "pet"
		},
		{
			"id": "owner_mdaniel4@gmail.com_pet_lenny",
			"name": "lenny",
			"speciies": "canine",
			"breed": "mixed amercan fox hound",
			"color": "white and auburn",
			"markings": "long, slender",
			"sex": "f",
			"dob": "12/24/15",
			"type": "pet"
		}
	]

	function cb(msgHeader) {
		return function(err, response) {
			if (err) return console.log('ERROR:\n', err.message)
			return console.log(msgHeader, response)
		}
	}

	pets.forEach(function(data) {
		dal.createPet(data, cb)
	})
