/*==================================================
CONTACT FORM
==================================================*/

const form = document.getElementById("waForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();

        const hp = document.getElementById("hp").value.trim();

        const email = document.getElementById("email").value.trim();

        const layanan = document.getElementById("layanan").value;

        const pesan = document.getElementById("pesan").value.trim();

        // ==========================
        // VALIDASI
        // ==========================

        if(nama === ""){

            alert("Nama lengkap wajib diisi.");

            return;

        }

        if(hp === ""){

            alert("Nomor HP wajib diisi.");

            return;

        }

        // Hanya angka
        const nomor = hp.replace(/\D/g,"");

        if(nomor.length < 10){

            alert("Nomor HP tidak valid.");

            return;

        }

        // ==========================
        // SUSUN PESAN
        // ==========================

        const text =

`Halo UMKM Creative Space,

Perkenalkan saya:

Nama : ${nama}
No. HP : ${hp}
Email : ${email || "-"}

Layanan yang diminati :
${layanan}

Pesan :
${pesan || "-"}

Terima kasih.`;

        const url =

"https://wa.me/62895355214767?text=" +

encodeURIComponent(text);

        window.open(url,"_blank");

    });

}

/*==================================================
PHONE VALIDATION
==================================================*/

const phoneInput = document.getElementById("hp");

if(phoneInput){

    phoneInput.addEventListener("input", function(){

        this.value = this.value.replace(/[^0-9]/g,"");

    });

}

/*==================================================
INPUT ANIMATION
==================================================*/

const inputs = document.querySelectorAll(

".form-group input, .form-group textarea, .form-group select"

);

inputs.forEach(input=>{

    input.addEventListener("focus",()=>{

        input.parentElement.classList.add("active");

    });

    input.addEventListener("blur",()=>{

        input.parentElement.classList.remove("active");

    });

});

