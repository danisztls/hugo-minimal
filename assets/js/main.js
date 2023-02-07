import lightbox from "./_lightbox.js"
import logoSwitchOnScroll from "./_logo-switch-on-scroll.js"

if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", DOMReadyHandler, {
    passive: true
  })
else DOMReadyHandler()

function DOMReadyHandler() {
  lightbox()
  logoSwitchOnScroll()
}

