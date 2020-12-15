const logModel = require('../models/logs/logs.model.server');

const findAllLogs = () => logModel.find();

const findLogById = (lid) => logModel.findById(lid);

const findLogForTrip = (tid) => logModel.find({tripId: tid});

const createLog = (log) => logModel.create(log);

const deleteLog = (lid) => logModel.remove({_id: lid});

const updateLog = (lid, log) => logModel.updateOne({_id: lid},
                                                                  {$set: log});
const deleteLogsForTrip = (tid) => logModel.remove({tripId: tid});

module.exports = {
    findAllLogs,
    findLogById,
    findLogForTrip,
    createLog,
    deleteLog,
    deleteLogsForTrip,
    updateLog
};
