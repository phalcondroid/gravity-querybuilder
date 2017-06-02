
///<reference path="../../Definitions/gravity.d.ts"/>

namespace Controllers
{
    export class IndexController extends View.Controller
    {
        private root;
        private tbody;

        /**
         * Create your code here
         */
        public initialize()
        {
            this.tbody = this.getById("tbody");
            var builder = new Mvc.Query(this.di.get("getJson"))
            this.data(builder.get());
        }

        private data(data)
        {
            this.tbody.empty();
            for (var key in data) {
                var tr = new View.Tr(this).append([
                    new View.Td(this).append(
                        data[key]["id"]
                    ),
                    new View.Td(this).append(
                        data[key]["deviceGroup"]
                    ),
                    new View.Td(this).append(
                        data[key]["platform"]
                    ),
                    new View.Td(this).append(
                        data[key]["version"]
                    ),
                    new View.Td(this).append(
                        data[key]["quality"]
                    ),
                    new View.Td(this).append(
                        data[key]["resolution"]
                    ),
                    new View.Td(this).append(
                        data[key]["fps"]
                    ),
                    new View.Td(this).append(
                        data[key]["batterySpent"]
                    ),
                    new View.Td(this).append(
                        data[key]["batteryDuration"]
                    )
                ]);
                this.tbody.append(tr);
            }
        }

        public combo(combo)
        {
            var columns = new Mvc.Query(this.di.get("getJson")).getColumns();
            for (var key in columns) {
                combo.append(
                    new View.Option(this).append(
                        columns[key]
                    )
                );
            }
        }

        public search(button)
        {
            button.click(function () {
                var combo = this.getById("combo");
                var content = combo.getSelected().getContent();
                var builder = new Mvc.Query(this.di.get("getJson"));
                if (this.getById("textbox").val() != "") {
                    switch (content) {
                        case "id":
                                builder.where(new Builder.And({
                                    "id" : this.getById("textbox").val()
                                }))
                            break;
                        case "deviceGroup":
                                builder.where(new Builder.And({
                                    "deviceGroup" : this.getById("textbox").val()
                                }))
                            break;
                        case "platform":
                                builder.where(new Builder.And({
                                    "platform" : this.getById("textbox").val()
                                }))
                            break;
                        case "version":
                                builder.where(new Builder.And({
                                    "version" : this.getById("textbox").val()
                                }))
                            break;
                        case "quality":
                                builder.where(new Builder.And({
                                    "quality" : this.getById("textbox").val()
                                }))
                            break;
                        case "resolution":
                                builder.where(new Builder.And({
                                    "resolution" : this.getById("textbox").val()
                                }))
                            break;
                        case "fps":
                                builder.where(new Builder.And({
                                    "fps" : this.getById("textbox").val()
                                }))
                            break;
                        case "batterySpent":
                                builder.where(new Builder.And({
                                    "batterySpent" : this.getById("textbox").val()
                                }))
                            break;
                        case "batteryDuration":
                                builder.where(new Builder.And({
                                    "batteryDuration" : this.getById("textbox").val()
                                }))
                            break;
                    }
                }
                console.log(this.getById("textbox").val() != "", builder.get());
                this.data(builder.get());
            }.bind(this));
        }
    }
}
