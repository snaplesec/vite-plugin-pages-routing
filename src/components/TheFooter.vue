<template>
  <footer class="footer">
    <div class="container-fluid">
        <div class="row">
			<div class="col-5 col-lg-2 order-1">
				<img src="../assets/images/footer-utility-logo.png" class="w-45 footer-image" alt="Financial Strength Rating A Excellent">
			</div>
			<div class="col-12 col-lg-5 order-lg-2">
				<div class="footer-copyright">
					<span> &copy; Andover Companies</span>
		            <a href="https://www.andovercos.com/madisclosure/disclosureForm.action" target="_blank" rel="noopener noreferrer">MA General Laws Disclosure Login</a>
		            <a href="/privacy#ny-dvp">NY Protocol for Victims of Domestic Abuse Policy</a>
		            <a href="/privacy">Privacy Policy</a>
		            <a href="/terms">Terms of Use</a>
	            </div>
            </div>
			<div class="col-7 col-lg-5 order-2 order-lg-3">
				<nav class="footer-nav" aria-label="footer navigation">
		    		<ul class="d-block d-sm-flex justify-content-end">
		    		    <li class="nav-item">
			                <span class="fa fa-question-circle-o"></span>
			                <a class="nav-link" href="/faq"><span aria-hidden="true">FAQs</span><span class="sr-only">Frequently Asked Questions</span></a>
			            </li>
			            <li class="nav-item">
			            	<span class="fa fa-phone"></span> 
			                <a class="nav-link" href="https://www.andovercompanies.com/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a>
			            </li>
		    		</ul>
		    	</nav>
		    	<div class="nav-item d-flex justify-content-sm-end contrast-row">
	            	<span class="fa fa-eye"></span>
				   	<button class="btn btn-plain btn-contrast">Alternate Contrast</button>
	            </div>
			</div>
        </div>
    </div>
    <div class="logout-overlay" style="display: none;"></div>
    <div class="logout-message-wrapper" style="display: none;">
    	<div class="logout-message">Your session is about to expire. Do you wish to continue working?</div>
    	<div class="stay-logged-in"><button class="btn btn-default">Continue Working</button></div>
    </div>
  </footer>
</template>
