Behaviour('timestampable', function () {
  this.fields({
    createdAt: null,
    updatedAt: null,
  });

  this.required({
    createdAt: 'The `createdAt` attribute is required',
    updatedAt: 'The `updatedAt` attribute is required'
  });
});
