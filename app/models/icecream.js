import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  flavor: attr(),
  description: attr(),
  lowcalorie: attr(),
  image: attr()
});
