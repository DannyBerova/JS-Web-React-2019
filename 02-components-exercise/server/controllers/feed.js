const House = require('../models/House');
const Street = require('../models/Street');
const bodyParser = require('body-parser');

module.exports = {
  createStreet: (req, res) => {
    // create a street and return it with a message
    let location = req.body.location;
    Street.create({
      location
    })
    .then((street) => {
      res
      .status(201)
      .json({
        message: 'Street created successfully.',
        street
      })
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      console.log(error)
      //next(error);
    })
  }, 
  createHouse: (req, res) => {
    // Create a house, add it to a street and return it with a message
    let location = req.body.location;
    let type = req.body.type;
    let description = req.body.description;
    let price = req.body.price;
    let imageUrl = req.body.imageUrl;
    House.create({
      type,
      description,
      price,
      imageUrl
    })
    .then((house) => {
        Street.findOne({
            location
          })
          .then((street) => {
            street.homes.push(house._id);
            street.save()
              .then(() => {
                res
                  .status(200)
                  .json({
                    message: 'House created successfully.',
                    house
                  });
              })
          })
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        console.log(error)
        //next(error);
      })
  },
  editHouse: async (req, res)  => {
    let id = req.params.id;
    
    let imageUrl = req.body.imageUrl;
    try {
      let house = await House.findById(id);
      console.log(house)
     house.imageUrl = imageUrl;
     let street = await Street.find({location: house.location});
     console.log(street);
     
     await house.save()
     .then(() => {
      res
        .status(200)
        .json({
          message: 'House edited successfully.',
          house
        });
    });
     return
      
    } catch (error) {
      console.log(error)
    }
  },
  // deleteHouse: async (req, res)  => {
  //   let id = req.params.id;
    
  //   try {
  //     let house = await House.findById(id);
  //     if(house) {

  //       let street = await Street.findById("5c6d3242bf7ba94668ce87c5")
  //       console.log(street);
  //       street.homes.filter(h => h._id !== house._id);
  //       await House.deleteOne(house);
  //      //await street.save();
       
  //      await street.save()
  //      .then(() => {
  //       res
  //         .status(200)
  //         .json({
  //           message: 'House deleted successfully.',
  //           house
  //         });
  //     });
  //      return
        
  //     }
  //      return
  //   } catch (error) {
  //     console.log(error)
  //   }
   
  // },
  getStreets: (req, res) => {
    // Retrieve all streets in JSON format
    Street.find()
      .populate('homes')
      .then((streets) => {
        res
          .status(200)
          .json({
            message: 'Fetched streets successfully.',
            streets
          });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }

        next(error);
      });
  },
  getHouses: (req, res) => {
    // Retrieve all streets in JSON format
    House.find()
      .then((houses) => {
        res
          .status(200)
          .json({
            message: 'Fetched houses successfully.',
            houses: houses
          });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }

        next(error);
      });
  }
}