<template>
	<view>
	<block v-for="(item,index) in orderList" :key="index">
		<view>
			<view class="status">状态：已取消</view>
			<view class="name">姓名：{{item.fCustName}}</view>
			<view class="phone">手机号：{{item.fPhone}}</view>
			<view class="date">申请日期：{{item.fDate}}</view>
			<view class="time">预约时间：{{item.fDateTime}}</view>
			<view class="num">人数:{{item.fPeopleNum}}</view>
		</view>
	</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList:[],
				appId:'wx27b5d7e06dbe2064',
				code:'',
				token:'',
			}
		},
		onLoad() {
			let that = this;
			console.log('onLoad===')
			let lo = uni.login({
				provider:'weixin',
				success:function(res){
					console.log(res); 
					that.code = res.code;
					that.wxLogin();
				}
			});
			
		},
		methods: {
			async wxLogin(){
				let that = this;
				const json = uni.request({
					url:'https://www.leadnexus.net/wechat/auth/wxlogin/',
					method:'POST',
					data:{
						code:that.code,
						fAppId:that.appId,
						fAddressX:0,
						fAddressY:0,
						fPhone:null,
						fType:1
					},
					success:function(res){
						console.log(res)
						that.token = res.data.token;
						that.getData()
					}
				})
			},
			getData(){
				let that = this;
				let json = uni.request({
					url: 'https://www.leadnexus.net/wechat/record/get/',
					method:'POST',
					data:{
						token:that.token,
						fShopId:2,
						fCustId:1,
					},
					success:function(res){
						console.log(res);
					}
				});
				console.log(json)
			},
		}
	}
	
</script>

<style>
	
</style>