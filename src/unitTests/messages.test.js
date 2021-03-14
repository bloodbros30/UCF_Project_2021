//tests the ability to store message data in database
import sendMessage from './ChatWindow'
import firebase from 'firebase';
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
      chats: [{ Sports: [{message1: 'abcd'}, {message2: '1234'}] }]
    }
  });

  test('Message can be sent to database', async () => {

    sendMessage();

    // Assert we are looking at the right collection
    expect(mockCollection).toHaveBeenCalledWith('Chats');

    // Assert that we finally request the data
    expect(mockGet).toHaveBeenCalled();
  });
});

test('Message can be sent to database', async () =>{



})
