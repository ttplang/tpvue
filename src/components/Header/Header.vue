<script setup lang="ts">
import { reactive, ref } from "vue";
import { NInput, NIcon } from "naive-ui";
import { IosSearch } from "@vicons/ionicons4";
import {headerStore} from "../../store/header"
const IDT = ["found", "mymusic", "focus", "shop", "musician", "app"];
const store = headerStore();
</script>

<template>
	<div class="top">
		<div class="top-nav1">
			<div class="wrap">
				<div class="logo">
					<a href="/">网易云音乐</a>
				</div>
				<div class="h-nav">
					<div :class="{ hactive: store.isActive[0] }" @click.stop="store.changeActive(IDT[0])">
						<a href="javascript:;"> 发现音乐 </a>
						<div class="cur"></div>
					</div>
					<div :class="{ hactive: store.isActive[1] }" @click.stop="store.changeActive(IDT[1])">
						<a href="javascript:;"> 我的音乐 </a>
						<div class="cur"></div>
					</div>
					<div :class="{ hactive: store.isActive[2] }" @click.stop="store.changeActive(IDT[2])">
						<a href="javascript:;"> 关注 </a>
						<div class="cur"></div>
					</div>
					<div :class="{ hactive: store.isActive[3] }" @click.stop="store.changeActive(IDT[3])">
						<a href="javascript:;"> 商城 </a>
						<div class="cur"></div>
					</div>
					<div :class="{ hactive: store.isActive[4] }" @click.stop="store.changeActive(IDT[4])">
						<a href="javascript:;"> 音乐人 </a>
						<div class="cur"></div>
					</div>
					<div :class="{ hactive: store.isActive[5] }" @click.stop="store.changeActive(IDT[5])">
						<a href="javascript:;"> 下载客户端 </a>
						<div class="cur"></div>
						<sub class="hot">&nbsp;</sub>
					</div>
				</div>
				<div class="login">
					<a href="javascript:;">登录</a>
				</div>
				<div class="bilog">
					<a href="javascript:;">创作者中心</a>
				</div>
				<div class="search">
					<n-input placeholder="音乐/视频/电台/用户" :round="true" size="small">
						<template #prefix>
							<n-icon :component="IosSearch" />
						</template>
					</n-input>
				</div>
			</div>
		</div>
		<div :class="{ isFound: store.isFound === 0 }" class="top-nav2">
			<div class="wrap">
				<div class="found2">
					<div><span>推荐</span></div>
					<div><span>排行榜</span></div>
					<div><span>歌单</span></div>
					<div><span>主播电台</span></div>
					<div><span>歌手</span></div>
					<div><span>新碟上架</span></div>
				</div>
			</div>
		</div>
	</div>
	<div></div>
</template>

<style scoped>
.top {
	position: relative;
	z-index: 1000;
	height: 70px;
	box-sizing: border-box;
	background: #242424;
	border-bottom: 1px solid #000;
}
.wrap {
	width: 1100px;
	margin: 0 auto;
}
.top-nav1 {
	height: 70px;
	position: relative;
}
.top .top-nav1 .wrap .logo {
	float: left;
	width: 176px;
	height: 69px;
	background-position: 0 0;
	background: url("../../assets/imgs/topbar/topbar.png") no-repeat;
}
.top .top-nav1 .wrap .logo a {
	float: left;
	width: 157px;
	height: 100%;
	padding-right: 20px;
	text-indent: -9999px;
}
.top-nav1 .wrap .h-nav {
	float: left;
}
.top-nav1 .wrap .h-nav > div {
	position: relative;
	float: left;
}
.top-nav1 .wrap .h-nav .hactive {
	background-color: #000;
}
.top-nav1 .wrap .h-nav > div:hover {
	background-color: #000;
}
.top-nav1 .wrap .h-nav a {
	color: #fff;
	padding: 0 19px;
	text-align: center;
	line-height: 70px;
	font-size: 14px;
}
.top-nav1 .wrap .h-nav .hactive .cur {
	width: 0;
	height: 0;
	border: 10px solid;
	border-bottom-color: red;
	border-top: none;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);
}
.top-nav1 .wrap .h-nav .hot {
	background: url("../../assets/imgs/topbar/topbar.png") no-repeat;
	display: block;
	position: absolute;
	top: 21px;
	left: 100px;
	width: 28px;
	height: 19px;
	background-position: -190px 0;
}
.top .top-nav1 .wrap .login {
	float: right;
	height: 45px;
	margin: 19px 0 0 20px;
	padding: 0 22px 0 0;
	background-position: right -47px;
	background-image: none;
}
.top .top-nav1 .wrap .login a {
	display: block;
	width: 28px;
	margin-top: 7px;
	color: #787878;
	font-size: 12px;
}
.top .top-nav1 .wrap .login a:hover {
	display: block;
	width: 28px;
	margin-top: 7px;
	color: #ccc;
}
.top .top-nav1 .wrap .bilog a {
	font-size: 12px;
	float: right;
	width: 90px;
	height: 32px;
	margin: 19px 0 0 12px;
	box-sizing: border-box;
	padding-left: 12px;
	border: 1px solid #4f4f4f;
	background-position: 0 -140px;
	line-height: 30px;
	color: #ccc;
	border-radius: 20px;
}
.top .top-nav1 .wrap .bilog a:hover {
	color: white;
	border-color: white;
}
.top .top-nav1 .wrap .search {
	float: right;
	line-height: 70px;
}
.top .top-nav2 {
	background-color: red;
	position: relative;
	line-height: 34px;
	height: 34px;
}
.top .top-nav2 .wrap .found2 {
	display: flex;
	padding-left: 180px;
}
.top .top-nav2 .wrap .found2 > div {
	width: 80px;
	color: white;
}
.top .top-nav2 .wrap .found2 span {
	width: 50px;
	text-align: center;
	cursor: pointer;
}
.isFound {
	display: none;
}
</style>
