const dal = require('./dal.js')

const glossary = [
	{
		"name": "Anthelmintic",
		"def": "Medication which kills certain types of intestinal worms; dewormer."
	},
	{
		"name": "Atopy",
		"def": "An allergy to something that is inhaled such as pollen or house dust. Also called 'inhalant allergy'."
	},
	{
		"name": "Beta-carotene",
		"def": "A plant pigment which can be converted to Vitamin A by many animals, but not by cats."
	}
]



function cb(msgHeader) {
	return function(err, response) {
		if (err) return console.log('ERROR:\n', err.message)
		return console.log(msgHeader, response)
	}
}

glossary.forEach(function(data) {
	dal.createEntry(data, cb)
})
