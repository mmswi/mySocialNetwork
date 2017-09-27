const userCtrl = (UsersModel) => {
  const post = (req, res) => {
    let user = new UsersModel(req.body)
    if (!req.body.name) {
      res.status(400)
      res.send('Title is required')
    } else {
      user.save()
      res.status(201)
      res.send(user)
    }
  }

  const get = (req, res) => {
    // listing all users
    UsersModel.find({}, (err, users) => {
      if (err) {
        res.status(500).send(err)
      } else {
        // ADDING HATEOS
        const allUsers = [{'name': 'user 1'}, {'name': 'user 2'}]
        console.log('all users are ', allUsers)
        users.forEach((element) => {
          // adding links on the element, but not in the db
          let user = element.toJSON()
          user.links = {}
          user.links.self = 'http://' + req.headers.host + '/api/books/' + user._id
          allUsers.push(user)
        })
        res.json(allUsers)
      }
    })
  }

  // Revealing module pattern
  return {
    post: post,
    get: get
  }
}

module.exports = userCtrl
