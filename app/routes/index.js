import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('icecream');
  },
  actions: {
    iceCreamSecretCode(params) {
      var newIcecream = this.store.createRecord('icecream', params);
      newIcecream.save();
      this.transitionTo('index');
    },
    // grabIndividualIceCream() {
    //   var newIcecream = icecream.get(1);
    //   return newIcecream;
    // }
  }
});
