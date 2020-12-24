const Team = require('../models').Team;

const defaultResponse= require('../utils/defaultResponse');
const constants= require('../utils/constants');
const responseStatus= require('../utils/responseStatus');

exports.getTeam = async (req, res) => {
    try {
        const team = await Team.findAll();
        if (team) {
            defaultResponse().success(constants.DATA_RETRIEVED, team, res, responseStatus.SUCCESS);
        } else
           defaultResponse().success(constants.DATA_NOT_FOUND, null, res, responseStatus.SUCCESS);
    } catch (exception) {
        defaultResponse().error({message:exception.message}, res, responseStatus.ERROR)
    }
}

exports.saveTeam = async (req, res) => {
    try {
        let requestBody = req.body != null ? req.body : defaultResponse().error({ message: constants.INVALID_BODY }, res, errorCode.INVALID_BODY);
        const team= await Team.create(requestBody);
        if (team) {
            defaultResponse().success(constants.DATA_SAVED, team, res, responseStatus.SUCCESS);
        } else
           defaultResponse().error(constants.DATA_NOT_FOUND, res, responseStatus.ERROR);
    } catch (exception) {
        console.log(exception.message)
        defaultResponse().error({message:exception.message}, res, responseStatus.ERROR)
    }
}

exports.update= async (req,res)=>{
    try{
        if(req.body){
        const team= await Team.update(req.body, {
            where: { id: req.params.id},
            returning: true,
            plain: true
          });
          if (team) {
            defaultResponse().success(constants.DATA_UPDATED, team, res, responseStatus.SUCCESS);
        } else
           defaultResponse().error(constants.DATA_NOT_FOUND, res, responseStatus.ERROR);
        }
    }catch(exception){
        defaultResponse().error({message:exception.message}, res, responseStatus.ERROR)
    }
}

exports.delete= async(req,res)=>{
    try{
        const team= await Team.destroy({where:{id:req.params.id}})
        if (team) {
            defaultResponse().success(constants.DATA_DELETED, team, res, responseStatus.SUCCESS);
        } else
           defaultResponse().error(constants.DATA_NOT_FOUND, res, responseStatus.ERROR);
    }catch(exception){
        defaultResponse().error({message:exception.message}, res, responseStatus.ERROR)
    }
}
