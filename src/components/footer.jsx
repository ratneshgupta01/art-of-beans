import React from 'react'

function Footer(){
    return(
        <footer class="footer">
        <div class="footer__container container">
          <h1 class="footer__title">Art<span>Of</span>Beans</h1>
          <p class="footer__description">
            The best place to work <br />
            and be more productive.
          </p>
  
          <div class="footer__content grid">
            <div class="footer__data">
              <h2 class="footer__subtitle">Address</h2>
              <p class="footer__information">
                Art Of Beans <br/>
                Opp. Rangoli  Gardens<br />
                Vaishali Nagar, jaipur
              </p>
            </div>
            <div class="footer__data">
              <h2 class="footer__subtitle">Contact</h2>
              <p class="footer__information">
                +91 7597575966 <br />
                guptaratnesh75975@gmail.com
              </p>
            </div>
            <div class="footer__data">
              <h2 class="footer__subtitle">Cafe Timings</h2>
              <p class="footer__information">
                Monday - Sunday <br />
                9AM - 10PM
              </p>
            </div>
            
          </div>
  
          <div class="footer__group">
            <ul class="footer__social">
              <a href="#" target="_blank" class="footer__social-link">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="#" target="_blank" class="footer__social-link">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="#" target="_blank" class="footer__social-link">
                <i class="bx bxl-twitter"></i>
              </a>
            </ul>
  
            <span class="footer__copy"> &#169; AOB.co  All rigths reserved </span>
          </div>
        </div>
      </footer>
    );
}

export default Footer;