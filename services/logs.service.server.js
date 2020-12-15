const logsDao = require('../daos/logs.dao.server');

const findAllLogs = () => logsDao.findAllLogs();

const findLogById = (lid) => logsDao.findLogById(lid);

const findLogForTrip = (tid) => logsDao.findLogForTrip(tid);

const createLog = (itinerary) => logsDao.createLog(itinerary);

const deleteLog = (lid) => logsDao.deleteLog(lid);

const deleteLogsForTrip = (tid) => logsDao.deleteLogsForTrip(tid);

const updateLog = (lid, log) => logsDao.updateLog(lid, log);


module.exports = {
    findAllLogs,
    findLogById,
    findLogForTrip,
    createLog,
    deleteLog,
    updateLog,
    deleteLogsForTrip
};
