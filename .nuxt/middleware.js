const middleware = {}

middleware['authentiacteUser'] = require('..\\middleware\\authentiacteUser.js')
middleware['authentiacteUser'] = middleware['authentiacteUser'].default || middleware['authentiacteUser']

middleware['check-code'] = require('..\\middleware\\check-code.js')
middleware['check-code'] = middleware['check-code'].default || middleware['check-code']

middleware['notify'] = require('..\\middleware\\notify.js')
middleware['notify'] = middleware['notify'].default || middleware['notify']

middleware['protect-forms'] = require('..\\middleware\\protect-forms.js')
middleware['protect-forms'] = middleware['protect-forms'].default || middleware['protect-forms']

export default middleware
