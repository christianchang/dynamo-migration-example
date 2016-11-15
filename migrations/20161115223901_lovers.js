'use strict';

exports.up = function(migrator, config){
	return migrator().createTable('lovers', function(t){
		t.string('_id').hashKey();
		t.number('timestamp').rangeKey();
		t.provisionedThroughput(2, 2); // read, write
	});
};

exports.down = function(migrator, config){
	return migrator().deleteTable('chats');
};
