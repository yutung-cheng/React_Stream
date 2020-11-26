/*
In the next lecture we are going to be creating our history object. 
As of React Router DOM v4.4.0 you will get a warning in your console:

Warning: Please use `require("history").createBrowserHistory` 
instead of `require("history/createBrowserHistory")`. 
Support for the latter will be removed in the next major release.

To fix, our history.js file should instead look like this:


import { createBrowserHistory } from 'history'; 
export default createBrowserHistory();
*/

/*********************************************************************/

// import createHistory from 'history/createBrowserHistory';
// export default createHistory;

import { createBrowserHistory } from 'history';
export default createBrowserHistory();
