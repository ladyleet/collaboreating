import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		signup: function () {
			var newSignup = this.store.createRecord (
				'user', {
					firstName: this.get ('firstName')
				});
			newSignup.save();
				this.setProperties ({
					firstName: ''
				});
		}
	}
});
