import queryString from 'query-string';

function getUrlDetails() {
    return queryString.parseUrl(window.location.href)
}

export default getUrlDetails;