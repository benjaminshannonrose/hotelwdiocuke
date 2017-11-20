import {defineSupportCode} from 'cucumber';

import {executeStepNoData, executeStepWithData} from "../support/helper/stepHelper";

defineSupportCode(({ When }) => {
    When(/^user '([^']*)' on the '([^']*)'$/, function (actionName, pageName) {
        executeStepNoData(pageName, actionName);
    });

    When(/^user enters '([^']*)' '([^']*)' on the '([^']*)'$/, function (data, actionName, pageName) {
        executeStepWithData(pageName, actionName, data);
    });
});