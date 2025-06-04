
<script setup>
const props = defineProps(['ones', 'twos', 'threes', 'fours', 'fives', 'sixes', 'evens', 'odds', 'wins']);


</script>

<template>
    <div class="flex items-center justify-center flex-wrap">
        <div class="flex">
            <Icon style="color: white" name="bx:dice-1" />
            <div class="ml-1 text-xl">{{ props.ones }}</div>
        </div>
        <div class="flex">
            <Icon class="ml-4" style="color: white" name="bx:dice-3" />
            <div class="ml-1 text-xl">{{ props.threes }}</div>
        </div>
        <div class="flex">
            <Icon class="ml-4" style="color: white" name="bx:dice-5" />
            <div class="ml-1 text-xl">{{ props.fives }}</div>
        </div>
        <div class="w-100 md:hidden m-1"></div>
        <div class="flex">
            <Icon class="md:ml-4" style="color: white" name="bx:dice-2" />
            <div class="ml-1 text-xl">{{ props.twos }}</div>
        </div>
        <div class="flex">
            <Icon class="ml-4" style="color: white" name="bx:dice-4" />
            <div class="ml-1 text-xl">{{ props.fours }}</div>
        </div>
        <div class="flex">
            <Icon class="ml-4" style="color: white" name="bx:dice-6" />
            <div class="ml-1 text-xl">{{ props.sixes }}</div>
        </div>
    </div>
</template>