const citiesModel = require('../models/cities/cities.model.server');

const findAllCities = () => citiesModel.find();

const findCityById = (cid) => citiesModel.findById(cid);

const findCitiesForUser = (uid) => citiesModel.find({userId: uid});

const createCity = (city) => citiesModel.create(city);

const deleteCity = (cid) => citiesModel.remove({_id: cid});

const updateCity = (cid, city) => citiesModel.updateOne({_id: cid},
                                                     {$set: city});

const topCities = () => citiesModel.aggregate([{"$group":{_id:"$name", count:{$sum:1}}}])
    .sort({count: -1})
    .limit(10);

module.exports = {
    findAllCities,
    findCityById,
    findCitiesForUser,
    createCity,
    deleteCity,
    updateCity,
    topCities
};
