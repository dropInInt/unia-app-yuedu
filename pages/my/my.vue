<template>
	<view>
		my
	</view>
</template>

<script>
	export default{
		data () {
			return {
				
			}
		},
		onLoad() {
			const loginRes = this.checkLogin()
			console.log(loginRes)
			uni.redirectTo({
				url:'../login/login'
			})
		}
	}
</script>

<style>
</style>
