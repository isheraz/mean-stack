const router = require('express').Router();

function routes(step, plugin) {
    const team = require('./routers/team.routes');

    router.use('/team', team);
    return router;

}

module.exports = routes();
