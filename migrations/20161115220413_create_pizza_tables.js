'use strict';

exports.up = function(migrator, config){
	return migrator().createTable('pizzas', function(t){
		t.string('room_id').hashKey();
		t.number('timestamp').rangeKey();
		t.provisionedThroughput(2, 2); // read, write

		t.globalSecondaryIndex('indexName1', function(t){
			t.string('user_id').hashKey();
			t.provisionedThroughput(2, 2); // read, write
			t.projectionTypeAll(); //default is NONE
		});

		t.localSecondaryIndex('indexName2', function(t){
			t.string('room_id').hashKey();
			t.number('user_id').rangeKey();
			t.projectionTypeAll(); //default is NONE
		});
	});
};

exports.down = function(migrator, config){
	return migrator().deleteTable('chats');
};
