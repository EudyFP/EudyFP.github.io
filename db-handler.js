const db = new Dexie("Parcial");

db.version(1).stores({
  contacts: `
        id,
        name,
        lastname,
        email,
        phoneNumber,
        message
    `,
});

const form = document.querySelector("#form");
const table = document.querySelector("#table");

const loadContactIntoTable =  () => {
  db.contacts.toArray().then(contacts => {
    let rows = ""

    contacts.forEach(c => {
      rows += `
        <tr>
          <td>${c.id}</td>
          <td>${c.name}</td>
          <td>${c.lastname}</td>
          <td>${c.email}</td>
          <td>${c.phoneNumber}</td>
          <td>${c.message}</td>
        </tr>
      `
    });

    table.innerHTML = `
      <thead>
        <tr>
          <th>ID</>
          <th>Nombre</>
          <th>Apellido</>
          <th>Email</>
          <th>Telefono</>
          <th>Mensaje</>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    `
  })
}

if(form) {

  $("#form").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        apellido: {
          required: true,
          minlength: 3,
          maxlength: 30
        },
        correo: {
            required: true,
            email: true
        },
        telefono: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        comentario: {
            required: true,
            minlength: 3,
            maxlength: 30
        }
    },
    submitHandler: (form) => {
      const formData = new FormData(form) 

      db.contacts.put({
        id: Date.now(), 
        name: formData.get('nombre'), 
        lastname: formData.get('apellido'), 
        email: formData.get('correo'),
        phoneNumber: formData.get('telefono'),
        message: formData.get('comentario')
      }).then( () => {
        form.reset()
        loadContactIntoTable()
        alert('Correo enviado satisfactoriamente')
      })
    }
  })
}

if(table) {
  loadContactIntoTable()
}