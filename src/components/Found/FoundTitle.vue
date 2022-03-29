<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
	title: {
		type: String,
		default() {
			return "";
		},
	},
	tabs: {
		type: Array,
		default() {
			return [];
		},
	},
});
</script>

<template>
	<div class="container">
		<div class="f-title">
			<a href="" class="tit">{{ props.title }}</a>
			<div class="tabs"><slot name="tab" /></div>
			<div class="more">
				<a href="">更多</a>
				<i class="mpn">&nbsp;</i>
			</div>
		</div>
	</div>
</template>

<style scoped>
.f-title {
	height: 33px;
	background: url("../../assets/imgs/index/index.png") no-repeat 0 9999px;
	background-position: -225px -156px;
	padding: 0 10px 0 34px;
	border-bottom: 2px solid #c10d0c;
}
.tit {
	float: left;
	font-size: 20px;
	font-weight: normal;
	line-height: 28px;
}
.tabs {
	float: left;
	margin: 3px 0 0 34px;
}
.more {
	float: right;
	margin-top: 6px;
}
.more a:hover {
	color: #666;
	text-decoration: underline;
}
.more .mpn {
	display: inline-block;
	width: 12px;
	height: 12px;
	margin-left: 4px;
	vertical-align: middle;
	background: url("../../assets/imgs/index/index.png") no-repeat 0 9999px;
	background-position: 0 -240px;
}
</style>
