//test for searching on a chat name

import doSearch from './ChatSearch';
import firebase from 'firebase';
jest.mock('firebase', () => ({
  firestore: jest.fn().mockReturnValue({
    collection: jest.fn().mockReturnValue({
      add: jest.fn().mockResolvedValue({
        chat: 'testChat'
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

describe('Getting a chat form tags', () => {
  mockFirebase({
    database: {
      chats: [{ Sports: [Tags: ["a", "b"]] }]
    }
  });


  test('tests if a search for a relevant tag returns the given chat', () => {
    //in this test we instead search by name to verify it works for tags AND names

    doSearch("Sports");
    expect(chats.includes("Sports")).toBe(true);


    });
