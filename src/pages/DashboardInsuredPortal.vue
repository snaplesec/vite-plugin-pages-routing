<route>
{
  name: "DashIP",
  meta: {
    requiresAuth: true,
		transition: 'slide-fade'
  }
}
</route>

<template>
<main id="main" class="overflow-h user-logged-in">
<div class="w-2/3 mx-auto flex items-center">
<div class="bg-fixed bg-center" style="background-image: url('/circle_background2.png')">
		
	<div class="p-8 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
		<!-- <div class="bg-fixed" style="background-image:  url('../assets/images/circle_background2.png')"> -->
		
		<h1 class="sr-only">Dashboard</h1>
		<!--<div v-if="notification" class="alert-wrapper mx-auto alert-global pt-lg-5">
			<div class="alert-inner-wrapper">
				<div class="alert-bg secondary"></div>
				<div class="alert alert-secondary" role="alert">
					<div class="fa fa-exclamation-triangle"></div>
					<div class="alert-text"></div>
				</div>
			</div>
		</div> -->
		<!-- <div class="w-2/3 h-screen mx-auto flex items-center"> -->
			<div class="px-6">
				<div class="h-70 w-60 border-6 border-teal-900 max-w-sm bg-opacity-50 bg-teal-700 ">
					<div class="px-6 py-3 card-title">
						<h2 class="font-sans text-white">Policy Center<span class="arrow-jade"></span></h2>
						<div class="diamond-line-jade"></div>
					</div>
					<ul class="p-6 list-disc font-sans text-white">
						<li>View your policies</li>
						<li>Print latest coverage</li>
						<li>View agency information</li>
					</ul>
				</div>
				<a @click="clickStop($event)" href="/policy-center" :class="{'pe-none':stop_click}"
				   id="policyCenter" class="stretch-link"><span class="sr-only">Policy Center</span></a>
			</div>
			<div class="px-6">
			
				<div class="h-70 w-60 border-6 border-gray-400 max-w-sm bg-opacity-50 bg-gray-200 ">
					<div class="px-6 py-3 card-title">
						<h2 class="oswald-med">Payment Center<span class="arrow-jade"></span></h2>
						<div class="diamond-line-jade"></div>
					</div>
					<ul class="p-6 list-disc font-sans">
						<li>Pay a bill</li>
						<li>View payment history</li>
						<li>Manage payments</li>
					</ul>
				</div>
				<a href="/make-payment" class="stretch-link"><span class="sr-only">Payment Center</span></a>
			</div>
			<div class="px-6">
				<div class="h-70 w-60 border-6 border-teal-700 max-w-sm bg-opacity-50 bg-teal-500  overflow-hidden shadow-lg">
					<div class="px-6 py-3 card-title">
						<h2 class="font-sans text-white">Claim Center<span class="arrow-blue"></span></h2>
						<div class="diamond-line-blue"></div>
					</div>
					<ul class="p-6 list-disc font-sans text-white">
						<li>Report claim</li>
					</ul>
				</div>
				<a href="/claim-center" class="stretch-link"><span class="sr-only">Claim Center</span></a>
			</div>
		</div>
		<!-- </div> -->
		<!--<div class="py-lg-5 my-lg-5"></div>
		<div class="py-lg-5 my-lg-5"></div> -->
	</div>
</div>
</main>
</template>

<script lang=ts>
import { useRoute } from 'vue-router'

export default {
	setup() {
    const route = useRoute()
    

    // fetch the user information when params change
    console.log('Router: ', route.meta)
  },
	
}

</script>

<style scoped>
h1 {
  @apply text-2xl
}
h2 {
	@apply text-xl
}
h3 {
  @apply text-lg;
}
a {
  @apply text-blue-600 underline;
}
jade-bg {
	color: #159C86
}
jade-border {
	color: #047D66
}
</style>
<style lang=scss>
.diamond-line-blue{
	display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  height: 30px;
  width: 180px;
  background-size: 220px 60px;	
	background-image: url('/diamond_line_blue.svg');
}
.diamond-line-jade{
	display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  height: 30px;
  width: 180px;
  background-size: 220px 60px;	
	background-image: url('/diamond_line_jade.svg');
}
.arrow-jade{
	display:inline-block;
	background-repeat:no-repeat;
	background-position:center;
	height:18px;
	width:35px;
	background-size:50px 50px;
	background-image:url('/arrow_jade.svg')
	}
	.arrow-blue{
	display:inline-block;
	background-repeat:no-repeat;
	background-position:center;
	height:18px;
	width:35px;
	background-size:50px 50px;
	background-image:url('/arrow_blue.svg')
	}
</style>

