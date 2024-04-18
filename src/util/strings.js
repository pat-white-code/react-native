export const pluralOrSingle = (num, singleString, pluralString) => {
    if (!pluralString) {
        pluralString = singleString + "s";
    }
    return num === 1 ? singleString : pluralString;
};
