/**
 * @name     lightbox
 * @desc     Show objects like images on a modal.
 * @author   Daniel Souza <me at posix dot dev dot br>
 */

export default function lightbox() {
  const items = document.querySelectorAll(".lightbox")

  items.forEach((item) => {
    const control = item.querySelector(".lightbox--control")
    const modal = item.querySelector(".lightbox--modal")
    // scissor modal to top level to avoid it being overlayed by higher hierarchy elements
    control.setAttribute("aria-expanded", "false")
    document.body.appendChild(modal)

    const showModal = () => {
      modal.hidden = false
      modal.style.display = "flex"
      control.setAttribute("aria-expanded", "true")
      // document.body.style.overflowY = "hidden"

      const hideModal = () => {
        // self-destructible listener
        modal.hidden = true
        modal.style.display = "none"
        control.setAttribute("aria-expanded", "false")
        // document.body.style.overflowY = "scroll"
        document.removeEventListener("click", hideModal)
      }

      setTimeout(() => {
        document.addEventListener("click", hideModal, { passive: true })
      }, 500)
    }

    const toggler = () => {
      const isExpanded = control.getAttribute("aria-expanded")
      if (isExpanded === "false") showModal()
    }

    control.addEventListener("click", toggler)
  })
}

