import FiltersView from './view/filters-view.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';
import PointsModel from './model/trip-points-model.js';
import { getPoints, getDestinations, getOffers } from './mock/point.js';
import { render } from './framework/render.js';
import { generateFilter } from './mock/filter.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPresenter = new TripEventsPresenter(siteMainElement.querySelector('.trip-events'));
const pointsModel = new PointsModel();

const points = getPoints();
const offersByType = getOffers();
const destinations = getDestinations();
const filters = generateFilter(pointsModel.points);

render(new FiltersView(filters), siteHeaderElement.querySelector('.trip-controls__filters'));

pointsModel.init(points, destinations, offersByType);
tripPresenter.init(pointsModel);
