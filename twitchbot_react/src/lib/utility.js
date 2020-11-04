const NumUtil = {
    isInt: (query) => {
        return !isNaN(query) && +query !== NaN && parseInt(query) !== NaN;
    },
    isFloat: (query) => {
        return !isNaN(query) && +query !== NaN && parseFloat(query) !== NaN;
    }
};

export default NumUtil;