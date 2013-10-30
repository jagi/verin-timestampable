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

Behavior('timestampable', function (options) {
  defaultOptions = {};
  
  this.options(_.extend(defaultOptions, options));

  this.events(events);
});
