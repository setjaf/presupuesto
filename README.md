# Sin nombre

# Visión General

> El sitio permite comparar un **Presupuesto**, con la duración del periodo o ciclo(mensual, quincenal o semanal) que tú desees, y el **Estado Actual** . Este sitio permite realizar el registro de ingresos, gastos, préstamos a plazos, ahorros y dinero prestado.

 - En el sitio existen dos partes, el **Presupuesto** y el **Estado Actual**. El **Presupuesto** es la parte con la que primeramente se va a tener contacto, en esta se registra toda la información del periodo del presupuesto, los datos que se sabe se van a repetir cada que termine un periodo y comience uno nuevo, esto se explicará mejor en los puntos siguientes. El **Estado Actual** es el lugar en donde se registra toda la actividad que se tiene en el periodo, este registro se puede realizar en cualquier momento. Tiene una dependencia del **Presupuesto** (esta dependencia se explicara posteriormente) que nos va a permitir automatizar algunas tareas.

# Detalles del funcionamiento

 - El usuario del sitio debe contar con una cuenta de Google para hacer uso del sitio, con esta cuenta el es como se va a identificar al usuario para guardar toda su información. Una vez que el usuario se registre, es necesario que nos indique la **Duración del periodo** (puede ser mensual, quincenal y semanal) y un **Día de referencia como inicio del periodo**, para que desde esa fecha el sitio puede trabajar con el periodo.

## Registro de Presupuesto

En el registro del **Presupuesto** se deben incluir los **Ingresos**, **Gastos**, **Préstamos** y **Ahorros**.

 - **Registrar Ingresos** en el **Presupuesto** implica indicar *Nombre del ingreso* o *Concepto*, *Importe* o *Cantidad de dinero que se va a recibir* en el periodo completo. Este registro es importante para la sección de **Estado Actual** ya que estos ingresos cada que inicie un periodo se van a agregar después de confirmar al "Capital Disponible" del **Estado Actual**.
 - **Registrar Gastos** en el **Presupuesto** implica indicar *Nombre del gasto* o *Concepto*, *Importe* o *Cantidad de dinero que se va a gastar* en el periodo completo.  Los *Conceptos* que se registren aquí, se van a utilizar en la sección de **Estado Actual** en donde cada vez que se registre un nuevo gasto se podrá colocar en alguno de los conceptos que se registraron o se registrará por defecto en *Otros Gastos*, esto nos permitirá realizar una mejor comparación del **Presupuesto** con el **Estado Actual**.
 - **Registrar Préstamos** en el **Presupuesto** implica indicar *Nombre del préstamo* o *Concepto*, *Importe* o *Cantidad de dinero que se solicitó*, *Tipo de pago* (mensual, quincenal, semanal), *Número de plazos*, si el tiempo para realizar el pago es más largo que el periodo del presupuesto se va a dividir el pago en el número de periodos que comprenden ese tiempo.
 - **Registrar Ahorro** en el **Presupuesto** implica indicar *Nombre del ahorro* o *Concepto*, *Importe* o *Cantidad de dinero que se va a guardar*, esta cantidad se mantendrá hasta que se termine el "Capital disponible" del estado actual.

## Registro del Estado Actual

 - Los **Ingresos** están dados por los **Ingresos** que se registran en el **Presupuesto**, así que están automatizados, también se pueden agregar nuevos ingresos que no se presupuestaron.
 - Los **Gastos** es necesario que se registre cada uno de los gastos de forma individual, los **Gastos** tienen dos estados, uno de ellos es "no pagado", significa que se sabe que el gasto pertenece a este periodo, pero aún no se ha realizado el pago o aún no se ha realizado el gasto pero se va a realizar en un futuro durante el periodo en curso. Los pagos se pueden realizar parcialmente o completos; cuando se realiza un pago se descuenta la cantidad pagada de los "Capital disponible".
 - 
