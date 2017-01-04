import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['scope'],
	scope: null,

	filteredSites: Ember.computed('scope', 'model', function() {
		var scope = this.get('scope');
		var index = this.get('model');

		// console.log(scope);
		if (scope) {
			return index.filter ( site =>{
				return site.tags === scope; 
			});
		} else {
			return index; 
		}
	})
});
