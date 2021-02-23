<template>
<header class="header fixed-top">
<!--	<div v-if="loggedIn" class="header-wrapper logged-in"> -->
		<!-- Logged in -->
<!--	    <div class="container-fluid position-relative logged-in">
	      <img class="myandover-logo" src="src/assets/images/myAndover.svg" alt="My Andover">
	    	<nav class="d-none d-lg-block top-nav" aria-label="top bar navigation">
	    		<ul class="d-flex">
	    			<li class="nav-item">
		                <span class="fa fa-cog"></span>
		                <a class="nav-link" href="/admin/home">Admin</a>
		            </li>
		            <li class="nav-item">
		                <span class="fa fa-cog"></span>
		                <a class="nav-link" href="/customer-service/home">Admin</a>
		            </li>
	    		    <li class="nav-item">
		                <span class="fa "></span>
		                <a class="nav-link" href="https://www.andovercompanies.com/" rel="noreferrer" target="_blank">Back to Main Site</a>
		            </li>
		            <li class="nav-item">
		            	<span class="fa fa-phone"></span>
		                <a class="nav-link" href="https://www.andovercompanies.com/contact-us" rel="noreferrer" target="_blank">Contact Us</a>
		            </li>
		            <li class="nav-item">
		            	<span class="fa fa-lock"></span>
		                <form name="logout" formaction="/logout" method="get" class="logout-link">
					   		<input class="btn btn-plain btn-logout nav-link" type="submit" value="Log Out"/>
					    </form> 
		            </li>
	    		</ul>
	    	</nav>
	        <nav class="navbar navbar-expand-lg" aria-label="Main Navigation">
	            <a class="navbar-brand" href="/">
	                <img src="src/assets/images/andover-logo-white.svg" alt="Andover Companies">
	            </a>
	            <a class="navbar-toggler" href="#navbarNav" data-toggle="collapse" data-target="#navbarNav"
	               aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	                <span class="toggle-bar bar1"></span>
	                <span class="toggle-bar bar2"></span>
	                <span class="toggle-text">Menu</span>
	            </a>
	            <a class="navbar-brand" href="/">
	                <img src="src/assets/images/andover-logo-white.svg" alt="Andover Companies">
	            </a>
	            <div class="collapse navbar-collapse" id="navbarNav">
	                <ul class="navbar-nav ml-auto">
	                    <li>
	                        <a class="nav-link" href="/">Home</a>
	                    </li>
	                    <li class="nav-item d-block d-lg-none">
	                        <a class="nav-link" href="https://www.andovercompanies.com/" rel="noreferrer" target="_blank">Back to Main Site</a>
	                    </li>
	                    <li>
	                         <button id="policyCenter" onclick="stopClick()" class="nav-link">Policy Center</button>
	                    </li>
	                    <li>
	                        <a class="nav-link" href="/make-payment">Payment Center</a>
	                    </li>
	                    <li>
	                        <a class="nav-link" href="/claim-center">Claim Center</a>
	                    </li>
	                    <li class="d-block d-lg-none nav-item dropdown-toggle">
	                        <div id="adminDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	                        	<a class="nav-link" href="/">Admin</a>
	                        	<a class="nav-link" href="/">Content Editor</a>
								<a class="nav-link" href="/">BillingCSR</a>
	                        </div>
	                        <ul class="dropdown-menu" aria-labelledby="adminDropdownMenuLink">
	                        	<li><a class="dropdown-item" href="/admin/notifications">Broadcast</a></li>
	                        	<li><a class="dropdown-item" href="/admin/login-page">Login</a></li>
	                        	<li><a class="dropdown-item" href="/admin/create-account">Create Account</a></li>
	                        	<li><a class="dropdown-item" href="/admin/pay-bill">Pay a Bill</a></li>
	                        	<li><a class="dropdown-item" href="/admin/cancel-notice">Cancel Notice</a></li>
	                        	<li><a class="dropdown-item" href="/admin/faqs">FAQ</a></li>
	                        	<li>
	                        		<a class="dropdown-item" href="/content/content-editors">Users</a>
	                        	</li>
	                        	<li>
	                        		<a class="dropdown-item" href="/admin/fnol">FNOL</a>
	                        	</li>
								<li>
									<a class="dropdown-item" href="/customer-service/home">Policy Lookup</a>
								</li>
								<li>
									<a class="dropdown-item" href="/customer-service/system-config">CSR System Config</a>
								</li>
	                        </ul>
	                    </li>
	                    <li>
	                        <a class="nav-link dropdown-toggle" href="/my-profile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Manage Account</a>
	                        <ul class="dropdown-menu dropdown-menu-right">
	                        	<li><a class="dropdown-item" href="/my-profile">Login & Personal Information</a></li>
	                        </ul>
	                    </li>
	                    <li>
	                        <a class="nav-link dropdown-toggle" href="/my-profile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Manage Account</a>
	                        <ul class="dropdown-menu dropdown-menu-right">
	                        	<li><a class="dropdown-item" href="/my-profile">Login & Personal Information</a></li>
	                        	<li><a class="dropdown-item" href="/my-profile/payment-methods">Manage Payment Methods</a></li>
	                        	<li><a class="dropdown-item" href="/my-profile/legal-documents">Legal Terms</a></li>
	                        </ul>
	                    </li>
	                    <li class="d-block d-lg-none">
	                        <form name="logout" formaction="/logout" method="get">
						   		<input class="btn btn-plain btn-logout nav-link" type="submit" value="Log Out"/>
						    </form> 
	                    </li>
	                </ul>
	            </div>
	        </nav>
	    </div>
    </div> -->

    <div class="header-wrapper logged-out">
	    <!-- Logged out -->
	    <div class="container-fluid position-relative">
	    	<nav class="d-none d-lg-block top-nav" aria-label="top bar navigation">
	    		<ul class="d-flex">
	    		    <li class="nav-item">
		                <span class="fa "></span>
		                <a class="nav-link" href="https://www.andovercompanies.com/" rel="noreferrer" target="_blank">Back to Main Site</a>
		            </li>
		            <li class="nav-item">
		            	<span class="fa fa-phone"></span>
		                <a class="nav-link" href="https://www.andovercompanies.com/contact-us" rel="noreferrer" target="_blank">Contact Us</a>
		            </li>
	    		</ul>
	    	</nav>
	        <nav class="navbar navbar-expand-lg" aria-label="Main Navigation">
					
	            <a class="navbar-brand" href="/">
	                <img src="../assets/images/logo.svg" alt="Andover Companies" class="w-48">
	            </a>
	        </nav>
	    </div>
    </div>
</header>
</template>

