const fetch = require('isomorphic-fetch')

const url = process.env.REACT_APP_API

module.exports = function() {
  const list = function (model) {
    return fetch(`${url}/${model}`)
      .then(res => res.json())
      .catch(err => err.message)
  }

  const post = function(model, doc) {
    return fetch(`${url}/${model}`, {
      method: 'post',
      body: JSON.stringify(doc),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
    .catch(err => err.message)
  }

  const put = function(model, id, doc) {
    return fetch(`${url}/${model}/${id}`, {
      method: 'put',
      body: JSON.stringify(doc),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json()).catch(err => err.message)

  }

	const get = function (model, id) {
		return fetch(`${url}/${model}/${id}`)
			.then(res => res.json())
      .catch(err => err.message)
	}

  const remove = function (model, id, doc) {
    return fetch(`${url}/${model}/${id}`, {
      method: "DELETE",
      body: JSON.stringify(doc),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
    .catch(err => err.message)

  }


  return {
    list,
    post,
		get,
    remove,
    put
  }
}
