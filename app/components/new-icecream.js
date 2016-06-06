import Ember from 'ember';

export default Ember.Component.extend({
  addNewIceCream: false,
  actions: {
    icecreamFormShow() {
      this.set('addNewIceCream', true);
    },

    icecreamSaveFromForm() {
      var params = {
        flavor: this.get("flavor"),
        description: this.get("description"),
        lowcalorie: this.get("lowcalorie") ? this.get('lowcalorie') : false,
        image: this.get("image")
      }; console.log(this.get("lowcalorie"));
      this.set('addNewIceCream', false);
      this.sendAction('iceCreamFunction', params);
    }
  }
});
