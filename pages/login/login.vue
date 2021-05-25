<template>
	<view class="">
		登陆
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		onLoad(options) {
			console.log(options)
			const loginRes = this.checkLogin('../my/my', '2')
			console.log(loginRes)
		}
	}
</script>

<style>
</style>
