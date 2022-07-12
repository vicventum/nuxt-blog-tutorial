<template>
	<v-row class="post-pagination">
		<v-col
			class="text-right"
			cols="12"
			v-bind="$attrs"
		>
			<v-btn
				color="success"
				plain
			>
				<v-icon
					small
					left
				>
					mdi-arrow-left
				</v-icon>
				Previous
			</v-btn>
			<v-btn
				color="success"
				plain
			>
				Next
				<v-icon
					small
					right
				>
					mdi-arrow-right
				</v-icon>
			</v-btn>
		</v-col>
	</v-row>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>
