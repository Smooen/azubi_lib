'use client'
export default function ScrollButton() {

  function scrollToTop(e): void {
    console.log('SCROLLING TO TOP');
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <button onClick={(e) => {scrollToTop(e)}}>Button</button>
  )
}
