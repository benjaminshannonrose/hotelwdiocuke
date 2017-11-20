import {defineSupportCode} from 'cucumber';

import {executeStepNoData, executeStepWithData} from "../support/helper/stepHelper";

defineSupportCode(({ Given }) => {
    Given(/^user '([^']*)' the '([^']*)'$/, function (actionName, pageName) {
        executeStepNoData(pageName, actionName);
    });
});