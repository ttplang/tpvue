<script setup lang="ts">
import { shallowReactive } from "vue";
import service from "../../apis";
import { Banner } from "../../utils/types/resTypes";

import { NCarousel } from "naive-ui";
import HotRemmend from "./ChildrenComponent/HotRecommend.vue";
import NewAlbum from "./ChildrenComponent/NewAlbum.vue";
import Profile from "./ChildrenComponent/Profile.vue";
import Singer from "./ChildrenComponent/Singer.vue";
import DJ from "./ChildrenComponent/DJ.vue";

let banners = shallowReactive([{ imageUrl: "", url: "", typeTitle: "" }]);

service
	.get<Banner>({ url: "/banner" })
	.then((res) => Object.assign(banners, res.data.banners));
</script>

<template>
	<div class="f-main">
		<div class="wrap">
			<div class="banner">
				<div class="l-wrap">
					<n-carousel autoplay show-arrow>
						<img
							:src="item.imageUrl"
							v-for="(item, index) in banners"
							class="carousel-img"
							:key="index"
							alt=""
						/>
					</n-carousel>
				</div>
				<div class="r-wrap">
					<div class="download">
						<a href=""> 下载客户端 </a>
						<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="l-wrap">
					<div class="mcn">
						<HotRemmend />
					</div>
					<div class="f-new">
						<NewAlbum />
					</div>
				</div>
				<div class="r-wrap">
					<div class="profile">
						<div class="myinfo">
							<Profile />
						</div>
					</div>
					<div class="singer">
						<singer />
					</div>
					<div class="dj">
						<DJ />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.f-main {
	margin-top: 34px;
}
.wrap {
	position: relative;
	width: 982px;
	height: 285px;
	margin: 0 auto;
}
.banner {
	height: 285px;
	display: flex;
}
.carousel-img {
	width: 100%;
	height: 100%;
}
.f-main {
	display: flex;
}
.f-main .l-wrap {
	width: 729px;
}
.f-main .banner .download {
	position: relative;
	height: 284px;
	border-top: 1px solid black;
	background: url("../../assets/imgs/index/download.png") no-repeat;
}
.f-main .banner .download a {
	display: block;
	width: 215px;
	height: 56px;
	margin: 186px 0 0 19px;
	text-indent: -9999px;
}
.f-main .download a:hover {
	background: url("../../assets/imgs/index/download.png") no-repeat 0 0;
	background-position: 0 97.7%;
}
.f-main .r-wrap {
	width: 253px;
}
.f-main .banner .r-wrap p {
	font-size: 10px;
	margin: 10px auto;
	text-align: center;
	color: #8d8d8d;
}

.f-main .content {
	display: flex;
	border: 1px solid #d3d3d3;
}
.r-wrap .profile {
	height: 100px;
	background-color: antiquewhite;
}
.r-wrap .profile .myinfo {
	height: 165px;
	padding-top: 20px;
}
.r-wrap .singer {
	margin-top: 20px;
	background-color: #8d8d8d;
	height: 455px;
}
.r-wrap .dj {
	height: 300px;
	margin-top: 30px;
	background-color: black;
}
.f-main .mcn {
	padding: 20px 20px 40px;
}

.f-main .content .f-new {
	padding: 20px 20px 40px;
}
</style>
