module.exports = class EasyJsonDBBrowser {

    constructor(){
        /**
         * The data stored in the database.
         * @type {object}
         */
        this.data = {};

        this.fetchDataFromStorage();
    }

    /**
     * Get data from the localStorage variable and store it in the data property.
     */
    fetchDataFromStorage(){
        const savedData = localStorage.getItem('easyjsondatabase')
        if(typeof savedData === "object"){
            this.data = savedData;
        }
    }

    /**
     * Save data in the localStorage variable.
     */
    saveDataToStorage(){
        localStorage.setItem('easyjsondatabase', this.data)
    }

    /**
     * Get data for a key in the database
     * @param {string} key 
     */
    get(key){
        this.fetchDataFromStorage();
        return this.data[key];
    }

    /**
     * Check if a key data exists.
     * @param {string} key 
     */
    has(key){
        this.fetchDataFromStorage();
        return Boolean(this.data[key]);
    }
    
    /**
     * Set new data for a key in the database.
     * @param {string} key
     * @param {*} value 
     */
    set(key, value){
        this.data[key] = value;
        this.saveDataToStorage();
    }

    /**
     * Delete data for a key from the database.
     * @param {string} key 
     */
    delete(key){
        delete this.data[key];
        this.saveDataToStorage();
    }

    /**
     * Add a number to a key in the database.
     * @param {string} key 
     * @param {number} count 
     */
    add(key, count){
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] += count;
        this.saveDataToStorage();
    }

    /**
     * Subtract a number to a key in the database.
     * @param {string} key 
     * @param {number} count 
     */
    subtract(key, count){
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.saveDataToStorage();
    }

    /**
     * Push an element to a key in the database.
     * @param {string} key 
     * @param {*} element 
     */
    push(key, element){
        this.data[key].push(element);
        this.saveDataToStorage();
    }

    /**
     * Clear the database.
     */
    clear(){
        this.data = {};
        this.saveDataToStorage();
    }

};
