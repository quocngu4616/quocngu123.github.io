import Swal from 'sweetalert2'

export const notify=(icon,text)=>{
    return Swal.fire({
        icon,
        text,
        title: 'Oops...',
        showConfirmButton: false,
        timer: 1500
    })
}