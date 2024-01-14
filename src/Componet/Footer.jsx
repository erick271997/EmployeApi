import React from 'react'

function Footer() {
  return (
    <div>
    <footer class="footer">
  <div class="footer-content">
    <div class="footer-item">
      <h4>Company Name</h4>
      <p>123 Main Street, Anytown USA 12345</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: <a href="mailto:info@companyname.gov">info@companyname.gov</a></p>
    </div>
    <div class="footer-item">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms-of-use">Terms of Use</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-item">
      <h4>Follow Us</h4>
      <ul>
        <li><a href="https://www.facebook.com/companyname" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i> Facebook</a></li>
        <li><a href="https://www.twitter.com/companyname" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i> Twitter</a></li>
        <li><a href="https://www.linkedin.com/company/companyname" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i> LinkedIn</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-copyright">
    <p>&copy; 2023 Company Name. All rights reserved.</p>
  </div>
</footer>
    </div>
  )
}

export default Footer
