import React from 'react'

const Footer = () => {
  return (
    <div>
<footer id="footer" className='bg-teal-500 text-white text-x' >
<section className='max-w-4xl mx-auto flex flex-col sm:flex-row sm:justify-between'>
<div>
    <h2>Bee WebDesign, Inc.</h2>
    Oshodi, Lagos <br />
    FUTA south gate Akure <br />
    Email: <a href="mailto:eblesyno@gmail.com">eblesyno@gmail.com</a> <br />
    Phone: (+234)9042795981
</div>
<nav className='hidden md:flex flex-col gap-2 ' aria-label='#footer'>
    <a href="#webdesign" className='hover:opacity-90'>My WebDesigns</a>
    <a href="#testimonials" className='hover:opacity-90'>Testiomonials</a>
    <a href="#contact" className='hover:opacity-90'>Contact Us</a>

</nav>
<div className='flex flex-col sm:gap-2'>
    <p className='text-right'>Copyright &copy; <span id='year'>2024</span></p>
    <p className='text-right'>All Rights Reserved</p>

</div>
</section>
</footer>


    </div>
  )
}

export default Footer