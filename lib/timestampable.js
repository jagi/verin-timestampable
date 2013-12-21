var hooks = {
  beforeInsert: function () {
    this.createdAt = new Date();
  },

  beforeUpdate: function () {
    this.updatedAt = new Date();
  }
};

Behavior('timestampable', {
  hooks: hooks
});
