/*==================================================
PRODUCT FILTER
==================================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Hapus class active dari semua tombol
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Tambahkan active ke tombol yang dipilih
        button.classList.add("active");

        const filter = button.dataset.filter;

        productCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {

                card.style.display = "block";

                setTimeout(() => {

                    card.style.opacity = "1";

                    card.style.transform = "scale(1)";

                }, 100);

            } else {

                card.style.opacity = "0";

                card.style.transform = "scale(.9)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 250);

            }

        });

    });

});

/*==================================================
PRODUCT HOVER EFFECT
==================================================*/

productCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

    });

});