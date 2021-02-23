<template>
<div class="Login"></div>
    <main id="main" class="bg-lgrey">
	<div class="logged-out-hero">
		<div class="container-fluid">
			<div class="hero-container">
				<h1 id="form-title">Customer Login</h1>
				<div class="hero-content">Log in to<span class="my-text">my</span><span class="andover-text">Andover</span> to pay your bill, <i>review policy information</i>, and more.</div>
			</div>
		</div>
	</div>
    <div class="container-fluid">
    <!--			<div class="fa fa-exclamation-triangle"></div>
	    			<div class="alert-text">{{notification}}</div>
	    		</div>
    		</div>
    	</div> -->
    	<div class="btn-wrapper d-block d-md-none pt-15">
			<a href="/guest-payment" class="btn btn-dark-blue w-100">Make One-Time Guest Payment</a>
		</div>
    	<div class="row login-row">
	        <div class="login-wrapper bg-white col-md-6">
	        	<h2 class="roboto-h mb-4 mb-md-5">Already registered?</h2>
	            <form id="login" action="" method="post">
	                <div v-if="user_locked" class="form-group invalid-feedback d-block">
	                    <div>Oops! We did not recognize your username and password, your account is now locked, please click
	                        <a href="/forgot-password">here</a> to reset your password.
	                    </div>
	                </div>
	            <!--    <div v-if="error" class="form-group invalid-feedback d-block">
	                    <div>{{error}}</div>
	                </div> -->
	                <div class="username form-group">
	                    <label for="username">Username</label>
	                   	<button type="button" class="btn-plain info-jade" @click="toggleToolTip('emailToolTip')"><span class="sr-only">open username tooltip</span></button>
	                   	 <div id="emailToolTip" class="tt tt--closed tt-wide-right">
	                        	<div class="tt-wrapper">
		                        	<button type="button" @click="toggleToolTip('emailToolTip')" class="close" aria-label="Close">
							        	<span aria-hidden="true">&times;</span>
							        </button>
								    <div class="tt-text">
                                    </div>
                                    <div class="d-flex tt-flex">
                                        <div>
                                            <div class="tt-text"></div>
                                        </div>
                                        <div>
                                            <img />
                                        </div>
                                    </div>
	                        	</div>
	                        </div>
	                    <input id="username" type="text" v-model="username" name="username"
	                           class="form-control">
	                    <div id="username-error"
	                         v-bind:class="{ 'invalid-feedback d-block': username_error, 'd-none': !username_error }">Error:
	                        Username must be a valid email address.
	                    </div>
	                </div>
	                <div class="password form-group">
	                    <label for="password">Password</label>
	                   	<button type="button" class="btn-plain info-jade" @click="toggleToolTip('passwordToolTip')"><span class="sr-only">open password tooltip</span></button>
	                   	<div id="passwordToolTip" class="tt tt--closed tt-wide-right">
	                        	<div class="tt-wrapper">
		                        	<button type="button" @click="toggleToolTip('passwordToolTip')" class="close" aria-label="Close">
							        	<span aria-hidden="true">&times;</span>
							        </button>
								    <div class="tt-text">
                                    </div>
                                     <div class="d-flex tt-flex">
                                        <div>
                                            <div class="tt-text"></div>
                                        </div>
                                        <div>
                                            <img />
                                        </div>
                                    </div>
	                        	</div>
	                        </div>
	                    <input id="password" v-model="password" name="password" type="password" class="form-control">
	                    <div class="forgot-password">
		                    <a href="/forgot-password">Forgot Password?</a>
		                </div>
	                </div>
	                <div id="message"></div>
	                <div class="submit-btn form-group">
	                    <input id="loginSubmit" :disabled="disable_login" type="submit" name="submit" value="Login" class="btn btn-default w-100">
	                </div>
	            </form>
	        </div>
	        <div class="new-here-wrapper col-md-6">
	        	<div class="new-here-inner">
		        	<h2 class="roboto-h mb-3">New here?</h2>
					<div class="rob-l">Sign up for account access today!</div>
					<div class="pt-2 pb-3">
						<div class="roboto-reg my-2"><span class="check-mark-box-jade mr-2"></span>View policy documents</div>
						<div class="roboto-reg my-2"><span class="check-mark-box-jade mr-2"></span>Pay bills online</div>
						<div class="roboto-reg my-2"><span class="check-mark-box-jade mr-2"></span>Manage payments</div>
						<div class="roboto-reg my-2"><span class="check-mark-box-jade mr-2"></span>File and track claims</div>
					</div>
					<div class="btn-wrapper pb-3">
						<a href="/register" class="btn btn-default w-100">Create an Account</a>
					</div>
					<div class="btn-wrapper d-none d-md-block">
						<a href="/guest-payment" class="btn btn-dark-blue w-100">Make One-Time Guest Payment</a>
					</div>
	        	</div>
	        </div>
    	</div>
    </div>
</main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    name: "Login",
	setup() {
        const notification = "error"
        return {
            notification
        }
	},
})
</script>