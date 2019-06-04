exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Build Sql DB',
      description:
        'Build SQL DB',
        img_source:'https://images.unsplash.com/photo-1548691905-57c36cc8d935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80'
    },
  ]);
};


