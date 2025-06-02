<script setup lang="ts">

let count = ref(Math.floor(Math.random() * 6) + 1); // Random initial value between 1 and 6

function shift() {
    if (count.value >= 6) {
        count.value = 1;
    } else {
        count.value++;
    }
}

function update_visible_dice() {
    if (count.value == 1) {
        return "bx:dice-1";
    } else if (count.value == 2) {
        return "bx:dice-2";
    } else if (count.value == 3) {
        return "bx:dice-3";
    } else if (count.value == 4) {
        return "bx:dice-4";
    } else if (count.value == 5) {
        return "bx:dice-5";
    } else {
        return "bx:dice-6";
    }
}

let timer = setInterval(() => {
    shift();
}, 100);


</script>


<template>
    <Icon style="color: white" v-bind:name="update_visible_dice()" />
</template>