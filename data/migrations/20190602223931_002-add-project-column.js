exports.up = function(knex, Promise) {
    return knex.schema.table('projects', function(t) {
        t.string('img_source')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('projects', function(t) {
        t.dropColumn('img_source');
    });
};