<h1>Arquitectura Web</h1>

<h2>Grupo</h2>

<p>Nombre del grupo: <br />
<p>Integrante: Jean Carlos Oballe Sarmiento<br />
<p>Descripción del negocio elegido: Asignacion de Ordenes Tecnicas<br />

<h2>Atributos</h2>

<p>Usuarios<br />
<p>Cliente<br />
<p>Movil<br />
<p>Tecnico<br />
<p>Region<br />
<p>Orden_tecnica<br />
<p>Servicio<br />

<h2>EndPoints</h2>

<p>GET /clientes<br />
Retorna todos los clientes.
Response: 200 OK

<p>POST /clientes<br />
Agrega un cliente a la BD.
Response: 201 Created

<p>GET /clientes/{id}<br />
Retorna los datos del cliente con un id especifico.
Response: 200 OK

<p>GET /clientes/dni/{dni}<br />
Retorna los datos del cliente con un dni especifico.
Response: 200 OK

<p>PUT /clientes/{id}<br />
Modifica los datos de un cliente especifico ya existente segun su id.

<p>PUT /clientes/dni/{dni}<br />
Modifica los datos de un cliente especifico ya existente segun su dni.

<p>DELETE /clientes/{id}<br />
Elimina los datos de un cliente especifico segun su id.

<p>DELETE /clientes/dni/{dni}<br />
Elimina los datos de un cliente especifico segun si dni.

---

<p>GET /api/persona<br />
Retorna todos los usuarios de acceso a la plataforma.

<p>POST /api/persona<br />
Agrega un usuario a la BD.

<p>GET /users/{alias}<br />
Retorna los datos de un usuario con un alias especifico.

<p>PUT /api/persona/:persona_id<br />
Modifica los datos de un usuario especifico ya existente segun su alias.

<p>DELETE /users/{alias}<br />
Elimina los datos de un usuario especifico segun su alias.

---




