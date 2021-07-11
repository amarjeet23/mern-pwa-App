const Place = require("../models/place");

const getplacesById = async (req, res, next) => {
  try {
    const Id = req.params.id;
    const places = await Place.findById(Id);
    if (!places) {
      return res.status(404).json({ error: "No places found" });
    }
    res.json({ places });
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};

const getPlaceByUserId = async (req, res, next) => {
  try {
    const Id = req.params.id;
    const places = await Place.find(Id);
    if (!places) {
      return res.status(404).json({ error: "No places found" });
    }
    res.json({ places });
  } catch (err) {}
};
const allPlace = async (req,res,next)=>{
  try{
    const places = await Place.find({});
    return res.status(200).json({places})

  }
  catch(err){
    res.status(500).json({error:"something went wrong"})
  }
}
const createPlace = async (req, res) => {
  try {
    const { title, description, coordinates, address, creator } = req.body;
    const createdPlace = {
      title,
      description,
      location: coordinates,
      address,
      creator
    };
    const newPlace = await new Place(createdPlace);
    await newPlace.save();
    res.status(201).json({ places: newPlace });
  } catch (err) {
    res.json(err);
  }
};
const deletePlace = async (req, res) => {
  try {
    const Id = req.params.id;
    const places = await Place.findByIdAndDelete(Id);
    if (!places) {
      return res.status(404).json({ error: "No places found" });
    }
    res.json({ places });
  } catch (err) {}
};
const updatePlace = (req, res, next) => {};

exports.getplacesById = getplacesById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.deletePlace = deletePlace;
exports.updatePlace = updatePlace;
exports.allPlace = allPlace;