const { User } = require('../../../models');
async function getUserByEmail(email) {
  return User.findOne({ email });
}
async function updateUser(user) {
  return user.save();
}
if (search) {
  query.$or = [{ email: { $regex: search, $options: 'i' } }, { name: { $regex: search, $options: 'i' } }];
}
const totalCount = await User.countDocuments(query);
const totalPages = Math.ceil(totalCount / pageSize);
const users = await User.find(query)
    .sort(sortOption)
    .skip(skip)
    .limit(pageSize);
/**
 * Get user by email for login information
 * @param {string} email - Email
 * @returns {Promise}
 */
async function getUserByEmail(email) {
  return User.findOne({ email });
}

module.exports = {
  getUserByEmail,
  updateUser,
};
