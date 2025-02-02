const links = document.querySelectorAll(".link");
      const filter_buttons = document.querySelectorAll(
        ".filter_buttons button"
      );
      const filter_cards = document.querySelectorAll(".filterable_cards .card");
      console.log(links);

      function filterCards(e) {
        const clicked = e.target;
        document.querySelector(".actived").classList.remove("actived");
        clicked.classList.add("actived");
        //console.log(e.target);

        filter_cards.forEach((card) => {
          card.classList.add("hidden");

          if (
            card.dataset.name === clicked.dataset.name ||
            clicked.dataset.name === "all"
          ) {
            card.classList.remove("hidden");
          }
        });
      }

      filter_buttons.forEach((btn) => {
        btn.addEventListener("click", filterCards);
      });

      /*---------links--------*/
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          document.querySelector(".active").classList.remove("active");
          link.classList.add("active");
        });
      });

      /*------------mode mobile-------------*/
      const toggleBtn = document.querySelector(".nav-links")
      console.log(toggleBtn);
      document.querySelector(".check-icon").addEventListener("click", (e) => {
        toggleBtn.classList.toggle("display")
      })