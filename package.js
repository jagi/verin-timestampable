Package.describe({
  summary: 'Timestampable behavior for Meteor\'s Verin Model package'
});

Package.on_use(function (api) {
  api.use([
    'verin-model'
  ], ['client', 'server']);
  
  api.add_files('lib/timestampable.js', ['client', 'server']);
});