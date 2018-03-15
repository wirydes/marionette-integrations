import 'bootstrap';
import './scss/app.scss';
import Marionette from 'backbone.marionette';
import template from '../templates/item.jst';

export default Marionette.View.extend({
  template: template
});
