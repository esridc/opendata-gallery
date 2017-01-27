import Ember from 'ember';


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


	actions: {
		onLoad(e) {
			L.esri.basemapLayer("Gray"). addTo(e.target);
		}
	}
});