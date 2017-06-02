namespace Views
{
    export class TableKeys extends View.Tbody
    {
        public initialize()
        {
            this.setElement(
                this.getById("translation-list-content").getElement()
            );
            var translations = this.getArgs()[0];
            this.iterateTables(translations);
            this.getAll(translations.length);
            this.getUntranslated(translations);
        }

        public iterateTables(translations)
        {
            for (var key in translations) {
                var tr = new View.Tr(this.context);
                this.append(
                    tr.append([
                        new View.Td(this.context).attr("width", "40%").append(
                            translations[key].getKey()
                        ),
                        new View.Td(this.context).attr("width", "50%").append(
                            new View.Span(this.context).css("color", "#909090").class("translation-tr-value").append(
                                translations[key].getValue()
                            )
                        ),
                        new View.Td(this.context).attr("width", "5%").append(
                            new View.Button(this.context).class("btn btn-link").css("color", "gray").append(
                                new View.I(this.context).class("fa fa-times translation-btn-delete")
                            )
                        )
                    ])
                );
                tr.click(function (translation) {
                    var lastUpdate   = this.di.get("date")(
                        translation.getLastUpdate()
                    );
                    var creationDate = this.di.get("date")(
                        translation.getLastUpdate()
                    );
                    this.getById("titleKey").empty().append(
                        translation.getKey()
                    );
                    this.getById("editKey").empty().append(
                        translation.getKey()
                    );
                    this.getById("editValue").empty().append(
                        translation.getValue()
                    );
                    this.getById("editLastUpdate").empty().append(
                        lastUpdate
                    );
                    this.getById("editCreationDate").empty().append(
                        creationDate
                    );
                }.bind(this, translations[key]));
            }
            this.getById("loader").hide();
        }

        public getAll(count)
        {
            this.getById("all").empty().append(
                count
            );
        }

        public getUntranslated(translations)
        {
            var count : number = 0;
            for (var key in translations) {
                if (translations[key].getValue() == "" || translations[key].getValue() == null) {
                    count++;
                }
            }
            this.getById("unTranslated").empty().append(
                count
            )
        }
    }
}