const AWS = require('aws-sdk')
const uuidv4 = require('uuid') //We call package 'uuid' which generates random characters to assign productId
const productsService = require('../services/products')

//We write our configs to access our account in DynamoDB
AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIAS53ZYVGGOEAXMIHO',
  secretAccessKey: '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',
  endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
})

let docClient = new AWS.DynamoDB.DocumentClient()
var table = 'Products'
//specify the name of our table in DynamoDB.

exports.add = async (req, res) => {
  const response = await productsService.add(req.body)
  res.send(response)
}

exports.getAll = async (req, res) => {
  const response = await productsService.getAll()
  res.send(response)
}

exports.getSingle = async (req, res) => {
  const response = await productsService.getSingle(req.params)
  res.send(response)
}

exports.updateStock = async (req, res) => {
  const response = await productsService.updateStock(req.body)
  res.send(response)
}

exports.getDiscount = async (req, res) => {
  const response = await productsService.getDiscount(req.params)
  res.send(response)
}

exports.delete = async (req, res) => {
  const response = await productsService.delete(req.params)
  res.send(response)
}
