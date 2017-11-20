export default function formatClassName(className) {
    let classArray = className.split(" ");
    for(let i = 0; i < classArray.length; i++) {
        classArray[i] = classArray[i].charAt(0).toUpperCase() + classArray[i].slice(1);
    }
    return classArray.join("");
}