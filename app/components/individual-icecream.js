import Ember from 'ember';

export default Ember.Component.extend({
  individual: Ember.computed('icecreams', function() {
    return this.get('icecreams').filterBy('flavor','Minty Fresh').get('firstObject')
  })
});
