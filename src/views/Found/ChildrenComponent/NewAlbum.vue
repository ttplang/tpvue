<script setup lang="ts">
import { shallowReactive, defineProps } from "vue";

import service from "../../../apis";

import { Album } from "../../../utils/types/resTypes";

import { NGrid, NGridItem } from "naive-ui";

import FoundTitle from "../../../components/Found/FoundTitle.vue";

let albumList = shallowReactive([{ id: 0, name: "", blurPicUrl: ""  }]);

service
	.get<Album>({ url: "/album/newest" })
	.then((res) => Object.assign(albumList, res.data));
</script>

<template>
	<div class="container">
		<FoundTitle :title="'新碟上架'" />
		<div class="albumlist"></div>
	</div>
</template>

<style scoped>
.f-main .content .albumlist {
	height: 186px;
	margin: 20px 0 37px;
	border: 1px solid #d3d3d3;
	background: #f5f5f5;
}
.f-main .content .album-img {
	width: 100px;
	height: 120px;
}
</style>
