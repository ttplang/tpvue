<script setup lang="ts">
import { shallowReactive, defineProps } from "vue";

import service from "../../../apis";

import { HotRemmend } from "../../../utils/types/resTypes";

import { NGrid, NGridItem } from "naive-ui";

import FoundTitle from "../../../components/Found/FoundTitle.vue";

let hotRcmd = shallowReactive([
	{ name: "", picUrl: "", playCount: 0, trackNumberUndateTime: 0 },
]);
service
	.get<HotRemmend>({ url: "/personalized?limit=8" })
	.then((res) => Object.assign(hotRcmd, res.data.result));
</script>

<template>
	<div class="recommend">
		<div class="title">
			<FoundTitle :title="'热门推荐'" :tabs="['华语', '流行', '摇滚', '民谣', '电子']">
				<template v-slot:tab>
					<div class="f-tab">
						<a href="">华语</a>
						<span class="line">|</span>
					</div>
				</template>
			</FoundTitle>
		</div>
		<div class="rcmlist">
			<n-grid :x-gap="12" :y-gap="8" :cols="4">
				<n-grid-item v-for="(item, index) in hotRcmd">
					<div class="rcmitem">
						<div class="rcmpic">
							<img :src="item.picUrl" :key="index" alt="" />
							<a href="" class="msk"></a>
							<div class="rcmpicbottom">
								<a href="" class="icon-play"></a>
								<span class="icon-headset"></span>
								<span class="nb">{{ Math.floor(item.playCount / 1000) }}万</span>
							</div>
						</div>
						<div class="rcm-dec">
							<a href="">{{ item.name }}</a>
						</div>
					</div>
				</n-grid-item>
			</n-grid>
		</div>
	</div>
</template>

<style scoped>
.f-tab {
	float: left;
}
.f-tab a:hover {
	color: #666;
	text-decoration: underline;
}
.f-tab .line {
	margin: 0 10px;
	color: #ccc;
}
.rcmlist {
	margin-top: 20px;
}
.rcmlist .rcmitem {
	width: 140px;
	height: 204px;
}
.rcmlist .rcmitem .rcmpic {
	width: 100%;
	height: 140px;
	position: relative;
}
.rcmlist .rcmitem .rcmpic img {
	width: 100%;
	height: 100%;
}
.rcmitem .rcmpic > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.rcmlist .rcmpicbottom {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 27px;
	background: url("../../../assets/imgs/index/coverall.png") no-repeat;
	background-position: 0 -537px;
	color: #ccc;
}
.rcmitem a:hover {
	color: #666;
	text-decoration: underline;
}
.rcmitem .icon-headset {
	float: left;
	width: 14px;
	height: 11px;
	background: url("../../../assets/imgs/index/iconall.png") no-repeat;
	background-position: 0 -24px;
	margin: 9px 5px 9px 10px;
}
.rcmitem .nb {
	float: left;
	margin: 5px 0 0 0;
	font-size: 12px;
}
.rcmitem .icon-play {
	position: absolute;
	right: 10px;
	bottom: 5px;
	width: 16px;
	height: 17px;
	background: url("../../../assets/imgs/index/iconall.png") no-repeat 0 0;
}
</style>
