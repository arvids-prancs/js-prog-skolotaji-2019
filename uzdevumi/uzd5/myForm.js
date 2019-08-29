class myForm {
    constructor() {
        this.idx = 0;
    }
    addTo(root) {
        while (root.firstChild)
        root.removeChild(root.firstChild); //nodzēš saturu
        
        let formField = document.createElement("formField");
        root.appendChild(formField);       
        //forma
        let form = document.createElement("form");
        form.id = "form1";
        formField.appendChild(form);

        //button add
        let add = document.createElement("button");
        add.innerHTML = "Pievienot elementu [+]";
        add.addEventListener("click", this.addElement);
        add.className = "col-md-auto btn btn-success";
        formField.appendChild(add);

        //button view
        let view = document.createElement("button");
        view.innerHTML = "Skatīt vērtības";
        view.addEventListener("click", this.viewValues);
        view.className = "col-md-auto btn btn-primary";
        formField.appendChild(view);

        let values = document.createElement("values");
        values.id = "values";
        formField.appendChild(values);
        return 1;
    }
    addElement = () => {
        this.idx++;        
        let row = document.createElement("div");
        row.id = "row_" + this.idx;
        document.getElementById("form1").appendChild(row);
        let input1 = document.createElement("input");
        row.appendChild(input1);
        let input2 = document.createElement("input");
        row.appendChild(input2);
        let button = document.createElement("button");
        button.type = "button";
        button.innerHTML = "Dzēst elementu [-]";
        button.addEventListener("click", () => this.removeElement(row.id));
        button.className = "col-md-auto btn btn-danger";
        row.appendChild(button);
    }

    removeElement(idx) {        
        document.getElementById(idx).remove();
    }

    viewValues() {
        let obj = {};
        let i = 0;
        document.querySelectorAll("#form1 input").forEach(function (node) {
            obj["field_" + i] = node.value;
            i++;
        });
        document.getElementById("values").innerHTML = JSON.stringify(obj);
    }
}