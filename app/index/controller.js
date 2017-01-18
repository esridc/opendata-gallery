import Ember from 'ember';
// hard coding extent for testing purposes
		// var xmin = [43.550884355580386, -116.08308393502303];
		// var xmax = [43.637911071422835, -116.3591154291633];
		// var ymax = [43.637911071422835, -116.08308393502303];
		// var ymin = [43.550884355580386, -116.3591154291633];
		// var testPoly = [xmin,ymin,xmax,ymax];
// end hard coding

export default Ember.Controller.extend({
	queryParams: ['scope'],
	scope: null,

	filteredSites: Ember.computed('scope', 'model', function() {
		var scope = this.get('scope');
		var index = this.get('model');
		
		
		// console.log(coordinates);
		if (scope) {
			return index.filter ( site =>{
				return site.properties.scope.includes(scope); 
			});
		} else {
			return index; 
		}
	}),
});