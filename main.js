import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(uni)

Vue.prototype.checkLogin = function (backpack, backtype) {
	const SUID = uni.getStorageSync('SUID')
	const SRAND = uni.getStorageSync('SRAND')
	const SNAME = uni.getStorageSync('SNAME')
	const SPACE = uni.getStorageSync('SPACE')
	if (SUID == '' || SRAND == '' || SPACE == '') {
		uni.redirectTo({
			url: '../pages/login/login?backpack='+backpack+'&backtype='+backtype
		});
		return false;
	}
	return [SUID, SRAND, SNAME, SFACE];
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
