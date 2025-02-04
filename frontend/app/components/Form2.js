export function Form2(datos, queryP, datosSucu) {

    //console.log("datos --> ", datos)
    const diccionario = {};
    datosSucu.forEach(data => {
        diccionario[data["id"]] = data["nombre"];
    })

    const $form = document.createElement('form');
    $form.setAttribute("method", "post");
    $form.classList.add('form');
    $form.id = 'form2';
    $form.setAttribute("method", "get");

    const $wrapper = document.createElement('div');
    const $disabled_wrapper = document.createElement('div');

    $wrapper.classList.add = "wrapper";
    $disabled_wrapper.classList.add = "wrapper";

    // ----------------------------------------------------------------------
    // -------         Grupo 1 --> Valor del branch Id
    const $grupo1 = document.createElement('div');
    $grupo1.classList.add("grupo");

    const $label_branch = document.createElement('label');
    $label_branch.innerHTML = "Sucursal seleccionada: ";
    $label_branch.classList.add("disabled-label");
    const $text = document.createElement('input');
    $text.value = diccionario[queryP.branchId];
    $text.setAttribute('readonly', true);
    $text.classList.add("disabled-text");
    $text.name = "sucursal";


    $grupo1.appendChild($label_branch);
    $grupo1.appendChild($text);
    $disabled_wrapper.appendChild($grupo1);


    const $grupo1b = document.createElement('div');
    $grupo1b.classList.add("grupo");

    const $label_branchid = document.createElement('label');
    $label_branchid.innerHTML = "bId: ";
    $label_branchid.classList.add("disabled-label");
    const $textid = document.createElement('input');
    $textid.value = queryP.branchId;
    $textid.setAttribute('readonly', true);
    $textid.classList.add("disabled-text");
    $textid.name = "branchId";
    $textid.setAttribute("type", "hidden");


    //$grupo1b.appendChild($label_branchid);
    $grupo1b.appendChild($textid);
    $disabled_wrapper.appendChild($grupo1b);

    // ----------------------------------------------------------------------
    // -------         Grupo 2 --> Valor de la fecha
    const $grupo2 = document.createElement('div');
    $grupo2.classList.add("grupo");

    const $label_fecha = document.createElement("label");
    $label_fecha.innerHTML = "Fecha seleccionada: ";
    $label_fecha.classList.add("disabled-label");
    const $text2 = document.createElement('input');
    $text2.value = queryP.fecha;
    $text2.setAttribute('readonly', true);
    $text2.classList.add("disabled-text");
    $text2.name = "fecha";
    $grupo2.appendChild($label_fecha);
    $grupo2.appendChild($text2);

    $disabled_wrapper.appendChild($grupo2);
    // ----------------------------------------------------------------------


    // Zona de ingreso de email
    const $grupo_email = document.createElement("div");
    $grupo_email.classList.add("grupo");

    const $email_label = document.createElement('label');
    $email_label.id = "email-label";
    $email_label.innerHTML = "Email:";
    $email_label.setAttribute("for", "email");
    const $email = document.createElement('input');
    $email.id = "email-reserva";
    $email.setAttribute("type", "email");
    $email.setAttribute("name", "email");

    $grupo_email.appendChild($email_label);
    $grupo_email.appendChild($email);
    $wrapper.appendChild($grupo_email);



    // Zona de eleccion del horario
    const $label = document.createElement('label');
    $label.innerHTML = "Seleccione un horario";

    $label.id = "horario-label";
    $wrapper.appendChild($label);



    const $select = document.createElement("select");
    $select.id = "select-horarios";
    $select.name = "select-horarios";

    //console.log("inside form 2 Datos -->", datos)
    if (datos.length > 0) {
        //console.log("datos --> ", datos)
        datos.forEach(element => {
            let fecha_element = element.fecha.split("T")[0];
            let branchId_element = element.branchId;
            //console.log("fecha_element --> ", fecha_element)
            if (fecha_element == queryP["fecha"] && branchId_element == queryP["branchId"]) {
                //console.log("Inside form2 datos.element.fecha que cumple --> ", element.fecha)
                let $option = document.createElement("option");
                let fecha = new Date(element.fecha);
                //$option.value = fecha.getHours();
                $option.value = JSON.stringify(element);
                //console.log("pp element --> ", element)
                $option.text = fecha.toLocaleTimeString();
                $select.appendChild($option)

                //console.log("$option.text --> ", $option.text);
                //console.log("$option.value --> ", $option.value);
            }

            //console.log("$element.fecha --> ", element.fecha);
            //console.log("fecha.toLocaleTimeString() --> ", fecha.toLocaleTimeString())

        });
    }


    $wrapper.appendChild($select);




    const $button = document.createElement("button");
    $button.id = "buscar-turno";
    $button.setAttribute("type", "submit");
    $button.innerHTML = "Reservar Turno";


    $form.appendChild($disabled_wrapper);
    $form.appendChild($wrapper);
    $form.appendChild($button);
    return $form;
}
