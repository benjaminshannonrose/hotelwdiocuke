import {defineSupportCode} from 'cucumber';

import {executeStepNoData, executeStepWithData} from "../support/helper/stepHelper";

defineSupportCode(({ Then }) => {
    Then(/^there should be an? '([^']*)' on the '([^']*)'$/, function (actionName, pageName) {
        executeStepNoData(pageName, actionName);
    });

    Then(/^user should land on '([^']*)' with '([^']*)'$/, function (pageName, actionName) {
        executeStepNoData(pageName, actionName);
    });

    Then(/^user should '([^']*)' on the '([^']*)'$/, function (actionName, pageName) {
        executeStepNoData(pageName, actionName);
    });

});