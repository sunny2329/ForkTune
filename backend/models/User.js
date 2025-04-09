import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        validate: {
            validator: function (value) {
                // Require at least one uppercase letter, one lowercase letter, one digit, and one special character
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
            },
            message:
                'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character'
        }
    },
    savedProducts : [{
        type: mongoose.Schema.Types.ObjectId, ref:'Product'
    }],
    image: {
        type: String
    }
},{timestamps:true});

export const User = mongoose.model('User',userSchema);