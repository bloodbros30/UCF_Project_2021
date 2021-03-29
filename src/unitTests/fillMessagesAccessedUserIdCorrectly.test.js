import UserProvider, { UserContext } from "./UserProvider";
import fillMessages from './chatWindow';


test('tests that the messages id matches sender', () => {




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
        Users: [],
        Messages:{

          messageText: "test",
          userId: "adfkljeij121243",
          sentAt: "12:30 PM",


        };

      }
    });

  fillMessages();


  var messagesUserId = getElementById("chatLog");
  expect(messagesUserId == user.id);




/
});
