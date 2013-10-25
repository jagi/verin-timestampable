Package.describe({
  summary: 'Timestampable Behaviour (ZeitgeistModel) for Meteor'
});

Package.on_use(function (api) {
  api.use([
    'zeitgeist-model'
  ], ['client', 'server']);
  
  api.add_files('lib/timestampable.js', ['client', 'server']);
});