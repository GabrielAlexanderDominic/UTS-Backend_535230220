const { errorResponder, errorTypes } = require('../../../core/errors');
const userService = require('./user-service');
const authenticationServices = require('./authentication-service');

async function createUser(request, response, next) {
  const userData = request.body;
  try {
    const newUser = await userService.createUser(userData);
    return response.status(201).json(newUser);
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle login request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function login(request, response, next) {
  const { email, password } = request.body;
  const { page_number = 1, page_size = 10, search, sort } = request.query;

  
    try {
    // Check login credentials
    const loginSuccess = await authenticationServices.checkLoginCredentials(
      email,
      password
    );
    return response.status(200).json(users);
    

    if (!loginSuccess) {
      throw errorResponder(
        errorTypes.INVALID_CREDENTIALS,
        'Wrong email or password'
      );
    }

    return response.status(200).json(loginSuccess);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  login,createUser, readUser,updateUser,deleteUser,
};
