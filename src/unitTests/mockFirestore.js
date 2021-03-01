class FakeFirestore {

  collection(name) {
    this.currentCollection = name;
    return this;
  }

  where() {
    return this;
  }

  add() {
    return this;
  }

  get() {
    // do some logic
    // return the query
  }
}

module.exports ={
  
    FakeFirestore

}
