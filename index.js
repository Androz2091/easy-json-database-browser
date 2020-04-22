module.exports = class EasyJsonDBBrowser {
x
    constructor(){
        /**
         * The data stored in the database.
         * @type {object}
         */
        this.data = {};
    }

    /**
     * Get data for a key in the database
     * @param {string} key 
     */
    get(key){
        return this.data[key];
    }

    /**
     * Check if a key data exists.
     * @param {string} key 
     */
    has(key){
        return Boolean(this.data[key]);
    }
    
    /**
     * Set new data for a key in the database.
     * @param {string} key
     * @param {*} value 
     */
    set(key, value){
        this.data[key] = value;
    }

    /**
     * Delete data for a key from the database.
     * @param {string} key 
     */
    delete(key){
        delete this.data[key];
    }

    /**
     * Add a number to a key in the database.
     * @param {string} key 
     * @param {number} count 
     */
    add(key, count){
        this.data[key] += count;
    }

    /**
     * Subtract a number to a key in the database.
     * @param {string} key 
     * @param {number} count 
     */
    subtract(key, count){
        this.data[key] -= count;
    }

    /**
     * Push an element to a key in the database.
     * @param {string} key 
     * @param {*} element 
     */
    push(key, element){
        this.data[key].push(element);
    }

};
