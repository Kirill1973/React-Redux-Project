const compose = (...func) => (comp) => {
    return func.reduceRight((acc, next) => next(acc), comp);
}

export default compose;