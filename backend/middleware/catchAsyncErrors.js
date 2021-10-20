module.exports = (theFunc) => (req, res, next) => {
    console.log('catcherror')
    Promise.resolve(theFunc(req, res, next)).catch(next);
};