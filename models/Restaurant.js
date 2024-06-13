const mongoose = require('mongoose');
const generateOtp = require('../utils/otp_generator')
const restaurantSchema = new mongoose.Schema({
    title: {type: String , required: true},
    time: {type: String , required: true},
    imageUrl: {type: String , required: true},
    foods: {type: Array , default: []},
    pickup: {type: Boolean , default: true},
    delivery: {type: Boolean, default: true},
    owner: {type: String , required: true},
    isAvailable: {type: Boolean , default: false},
    code: {type: String , required: true},
    logoUrl: {type: String , required: true},
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 3
    },
    ratingCount: {type: String, default: "210"},
    verification: {type: String ,default: "Pending", enum: ["Pending", "Verified", "Rejected"]},
    verificationMessage: {type: String, default: "Espere hasta 24 horas para que se procese su verificación. Recibirá una notificación una vez que se complete su verificación."},
    coords: {
        id: {type: String, default: generateOtp() },
        latitude: {type: Number , required: true},
        longitude: {type: Number , required: true},
        latitudeDelta:{type: Number , default: 0.0122},
        longitudeDelta: {type: Number , default: 0.0221},
        address: {type: String , required: true},
        title: {type: String , required: true},
    },
    earnings: {type: Number, default: 0.868787}
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
