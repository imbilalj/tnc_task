const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'user'],
      required: true,
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

// Mongoose hook to hash password on save
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const saltRounds = 10;

    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
