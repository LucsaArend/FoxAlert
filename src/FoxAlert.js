function FA_ShowMessage(prMessage)
{
    /* Retorno Padrão Sucesso */
    if (typeof prMessage.success != "undefined") {
        if (prMessage.success) {
            return FA_showSuccessMessage(prMessage);
        }
    }
    /* Retorno Padrão Erro */
    if (typeof prMessage.error != "undefined") {
        return FA_showErrorMessage(prMessage);
    }
    /* Retorno Laravel */
    if (typeof prMessage.responseJSON != "undefined") {
        prMessage = prMessage.responseJSON;
    }
    if (typeof prMessage.message != "undefined") {
        return FA_showErrorMessage(prMessage);
    }

}
function FA_showSuccessMessage(prOBJ)
{
    if (typeof prOBJ.title != "undefined") {
        if (typeof prOBJ.reload != "undefined") {
            Swal.fire(
                prOBJ.title,
                prOBJ.message,
                'success'
            ).then(function() {
                document.location.reload(true);
            });
        } else {
            Swal.fire(
                prOBJ.title,
                prOBJ.message,
                'success'
            )
        }
    } else {
        if (typeof prOBJ.reload != "undefined") {
            Swal.fire(
                'Sucesso',
                prOBJ.message,
                'success'
            ).then(function() {
                document.location.reload(true);
            });
        } else {
            Swal.fire(
                'Sucesso',
                prOBJ.message,
                'success'
            )
        }
    }
}

function FA_showErrorMessage(prOBJ)
{
    if (typeof prOBJ.title != "undefined") {
        if (typeof prOBJ.reload != "undefined") {
            Swal.fire(
                prOBJ.title,
                prOBJ.message,
                'error'
            ).then(function() {
                document.location.reload(true);
            });
        } else {
            Swal.fire(
                prOBJ.title,
                prOBJ.message,
                'error'
            )
        }
    } else {
        if (typeof prOBJ.reload != "undefined") {
            Swal.fire(
                prOBJ.title,
                prOBJ.message,
                'error'
            ).then(function() {
                document.location.reload(true);
            });
        } else {
            Swal.fire(
                'Oops',
                prOBJ.message,
                'error'
            )
        }
    }
}
