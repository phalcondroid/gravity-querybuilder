namespace Models
{
    export class Translations extends ModelData.AjaxModel
    {
        private id     : number = 0;
        private key    : string = "";
        private value  : string = "";
        private locale : number = 0;
        private lastUpdate   : number = 0;
        private creationDate : number = 0;

        public setId(id : number)
        {
            this.id = id;
        }

        public getId()
        {
            return this.id;
        }

        public setKey(key : string)
        {
            this.key = key;
        }

        public getKey()
        {
            return this.key;
        }

        public setValue(value: string)
        {
            this.value = value;
        }

        public getValue()
        {
            return this.value;
        }

        public setLocale(locale : number) {
            this.locale = locale;
        }

        public getLocale() : number {
            return this.locale;
        }

        public setLastUpdate(update : number)
        {
            this.lastUpdate = update;
        }

        public getLastUpdate() : number {
            return this.lastUpdate;
        }

        public setCreationDate(date : number)
        {
            this.creationDate = date;
        }

        public getCreationDate() : number {
            return this.creationDate;
        }
    }
}