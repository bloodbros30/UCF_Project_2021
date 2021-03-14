import firebase from 'firebase';
import fs from './fire';
import createProfile from './UserPage';

jest.mock('firebase', () => ({
  firestore: jest.fn().mockReturnValue({
    collection: jest.fn().mockReturnValue({
      add: jest.fn().mockResolvedValue({
        id: 'abc123',
        name:'johnny appleseed',
        address:'yeet street',
        interests:'yes'
      })
    })
  })
}));

const {
  mockCollection,
  mockGet,
  mockWhere,
} = require('./mockFirestore');

jest.mock('Firebase');

const { mockFirebase } = require('./mockFirestore');

describe('Sending Messages', () => {
  mockFirebase({
    database: {
      Users: [];
    }
  });


test('tests the upload of user info to the user profile', () => {

  editProfile();


 expect(mockCollection).toHaveBeenCalledWith('Users');

  // Assert that we finally request the data
  expect(mockGet).toHaveBeenCalled();


  });
