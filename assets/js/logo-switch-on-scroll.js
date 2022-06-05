/* Alternate logos visibility based on scroll position. */
function logoSwitchOnScroll() {
  const logo = document.getElementById("logo")
  const imgBig = logo.querySelector("img.big")
  const imgSmall = logo.querySelector("img.small")

  function showBig() {
    imgBig.hidden = false 
    imgBig.style.visibility = "visible"
    imgSmall.hidden = true
    imgSmall.style.visibility = "hidden"
  }

  function showSmall() {
    imgBig.hidden = true
    imgBig.style.visibility = "hidden"
    imgSmall.hidden = false
    imgSmall.style.visibility = "visible"
  }

  function scrollHandler() {
    const isPageScrolled = (window.scrollY > 0) ? true : false

    if (isPageScrolled) {
      showSmall()
    
    } else {
      showBig()
    }
  }

  document.addEventListener('scroll', scrollHandler, {passive: true})
}

logoSwitchOnScroll()
