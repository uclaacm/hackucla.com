'use strict';
module.exports = function (teamDb) {
    const express = require('express');
    let router = express.Router();

    const teamController = require('../controllers/TeamController')(teamDb);

    router.get('/', teamController.getAll);

    /**
     * @api {get} /team/find Find a team
     * @apiName Find
     * @apiGroup Team
     * @apiExample {curl} Example usage:
     *     curl -i http://localhost/team/find?name=name
     *     curl -i http://localhost/team/find?id=5ad25b30501efe0010a7b896
     *
     * @apiParam {String} [name] Find team by name.
     * @apiParam {String} [id] Find team by ID.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *      {
     *          "_id": "5ad25b30501efe0010a7b896",
     *          "name": "name",
     *          "__v": 1,
     *          "members": [
     *              "5ad255a41b1721001058a782"
     *          ]
     *      }
     */
    router.get('/find', teamController.find);
    
    router.get('/test', teamController.test);

    /**
     * @api {post} /team/new Create new team
     * @apiName New
     * @apiGroup Team
     * @apiExample {curl} Example usage:
     *      curl -H "Content-Type: application/json" -X POST -d '{"name":"name", "members":["5ad255a41b1721001058a782"]}' http://localhost:8080/team/new
     *
     * @apiParam {String} [name] Name of new team.
     * @apiParam {String[]} [members] Array of User IDs
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *      {
     *          "_id": "5ad25b30501efe0010a7b896",
     *          "name": "name",
     *          "__v": 1,
     *          "members": [
     *              "5ad255a41b1721001058a782"
     *          ]
     *      }
     */
    router.post('/new', teamController.create);

    router.post('/:id/member', teamController.addMember);
    router.delete('/:id/member', teamController.removeMember);

    return router;
};