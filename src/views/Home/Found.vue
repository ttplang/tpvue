<script setup lang="ts">
import { reactive, shallowReactive } from "vue";
import service from "../../apis";
import { banner } from "../../utils/types/resTypes";

import { NCarousel } from "naive-ui";

const res = await service.get<banner>({ url: "/banner" });

let banners = shallowReactive([{ imageUrl: "", url: "", typeTitle: "" }]);

// service
// 	.get<banner>({ url: "/banner" })
// 	.then((res) => Object.assign(banners, res.data.banners));

Object.assign(banners,res.data.banners);
console.log(banners);
</script>

<template>
	<div class="f-main">
		<div class="wrap">
			<div class="index-banner">
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
.index-banner {
	height: 285px;
}
.carousel-img {
	width: 100%;
	height: 100%;
	/* object-fit: cover; */
}
</style>
