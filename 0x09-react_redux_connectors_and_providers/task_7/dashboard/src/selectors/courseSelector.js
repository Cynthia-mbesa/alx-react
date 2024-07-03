import { Map } from 'immutable';

export function filterTypeSelected(state) {
    return state.get('filter');
}

export function getcourse(state) {
    return Map(state.get('course'));
}

export function getUnreadcourse(state) {
    return Map(state.get('course')).filter((item => !item.isRead));
}
