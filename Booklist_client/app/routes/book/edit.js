import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		willTransition(transition) {
			if(this.controller.get('model').get('_isDirty') 
							&& transition.targetName === 'index'
							&& !confirm('Are you sure you want to abandon your edits?')) {
        transition.abort();
      } else if(this.controller.get('model').get('_isEmpty')) {
        alert('You cannot have an empty book. Please fill it at least a title.');
        transition.abort();
      } else {
        return true;
      }
		}
	},

	activate() {
		this.controllerFor('book').set('isNotEditing', false);
		// this.controller.set('isNotEditing', false);
	},

	deactivate() {
    this.controllerFor('book').set('isNotEditing', true);
    // this.controller.set('isNotEditing', true);
  }
});