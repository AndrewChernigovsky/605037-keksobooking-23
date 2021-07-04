import {makeCard, offers, insertElement} from './generation.js';
import {formSwitch} from './form.js';

insertElement(makeCard(offers[0]), '#map-canvas');

formSwitch(true);
formSwitch(false);
