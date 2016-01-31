import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
	var arg1 = params[0],
			arg2 = params[1];

	if(arg1 === arg2){
		return true;
	}else {
		return false;
	}
});