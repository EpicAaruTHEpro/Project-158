AFRAME.registerComponent("cursor-events", {
    schema: {
        selectedItemId: {default: "", type: "string"}
    },
    init: function () {
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handleMouseEnterEvents: function() {
        this.el.addEventListener("mouseenter", () => {
            this.handlePlacesListState()
        })
    },
    handlePlacesListState: function() {
        const placesId = ["superman", "spiderman", "captain-aero", "outer-space"]
        const id = this.el.getAttribute("id")
        if (placesId.includes(id)) {
            const placesContainer = document.querySelector("#places-container")
            placesContainer.setAttribute("cursor-events", {
                selectedItemId: id
            })
            this.el.setAttribute("material", {
                color: "#D76B30",
                opacity: 1
            })
        }
    },
    handleMouseLeaveEvents: function() {
        this.el.addEventListener("mouseleave", () => {
            this.handlePlacesListStateLeave()
        })
    },

    handlePlacesListStateLeave: function() {
        const {selectedItemId} = this.data
        if (selectedItemId) {
            const el = document.querySelector(`#${selectedItemId}`)
            el.setAttribute("material", {
                color: "#fff",
                opacity: 1
            })
        }
    },
  });
  