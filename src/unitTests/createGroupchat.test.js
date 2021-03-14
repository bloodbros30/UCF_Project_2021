//this is the first unit test
import UserProvider, { UserContext } from "./UserProvider";
import createNewChat from "./ChatOptions"
jest.mock('firebase', () => ({
  firestore: jest.fn().mockReturnValue({
    collection: jest.fn().mockReturnValue({
      add: jest.fn().mockResolvedValue({
        id: 'abc123'
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
      chats: []
    }
  });

  test('Group chat has been created with correct name', async () => {
    var title = "testName"
    var tags = "apples,oranges,peaches"
    createGroupChat();

    // Assert we are looking at the right collection
    expect(mockCollection).toHaveBeenCalledWith('Chats');

    // Assert that we finally request the data
    expect(mockGet).toHaveBeenCalled();
  });
});
