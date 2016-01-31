import Ember from 'ember';

export default Ember.Component.extend({
	selectedValue: null,
	content: [],

	actions: {
		selectOption(val) {
			// this.sendAction('action', val);
			this.set('selectedValue', val);
		}
	}
});