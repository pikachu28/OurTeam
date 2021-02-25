'use strict';
let header = $(`
<div class="nav-container">
<header>
  <nav>
    <ul>
      <li><a href="#">Events</a></li>
      <li><a href="#">Executive Body</a></li>
      <li><a href="#">Past Workshops</a></li>
    </ul>
  </nav>  
</header>
</div>`)

let footer = $(`
<section class="footer">
          <div class="footer-images">
            <img src="img/acm.png" alt="ACM Logo">
            <img src="img/acm.png" alt="IGDTUW Logo">  
          </div>
          <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum accusamus rerum harum veniam velit quidem? Soluta ipsa sequi quis nemo voluptates debitis eveniet earum voluptatum provident, magni laborum ut.</p>
          <div class="footer-social">
            <p>Reach out to us!</p>
            <ul>
              <li><a href="#"><img class="social-icon" src="assets/facebook-icon.svg" alt="Check out ACM IGDTUW on Facebook"></a></li>
              <li><a href="#"><img class="social-icon" src="assets/linkedin-icon.svg" alt="Check out ACM IGDTUW on LinkedIn"></a></li>
              <li><a href="#"><img class="social-icon" src="assets/twitter-icon.svg" alt="Check out ACM IGDTUW on Twitter"></a></li>
              <li><a href="#"><img class="social-icon" src="assets/instagram-icon.svg" alt="Check out ACM IGDTUW on Instagram"></a></li>    
            </ul>
          </div>
        </section>
  <section class="copyright-section">
        <p>Designed & Developed By ACM IGDTUW Student Chapter</p>
        </section>
`);

$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
});
