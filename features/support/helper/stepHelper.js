import pageFactory from '../factory/pageFactory';
import formatClassName from '../format/formatClassName';
import formatMethodName from '../format/formatMethodName';

export function executeStepNoData(unformattedClassName, unformattedMethodName){
    const className = formatClassName(unformattedClassName);
    const methodName = formatMethodName(unformattedMethodName);
    const myClass = pageFactory(className);
    return myClass[methodName]();
}

export function executeStepWithData (unformattedClassName, unformattedMethodName, data) {
    const className = formatClassName(unformattedClassName);
    const methodName = formatMethodName(unformattedMethodName);
    const myClass = pageFactory(className);
    return myClass[methodName](data);
}