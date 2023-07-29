class DataNotFoundError extends Error {
    constructor(message, status) {
        super(message);
        //this.name = "DataNotFoundError";
        this.statusCode = status;
    }
}

module.exports = {
    DataNotFoundError
};