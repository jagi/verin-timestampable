var events = {
  preInsert: function () {
    this.createdAt = new Date();
  },

  preUpdate: function () {
    this.updatedAt = new Date();
  },

  postRemove: function () {
    delete this.createdAt;
    delete this.updatedAt;
  }
};

Behaviour('timestampable', function () {
  this.events(events);
});
