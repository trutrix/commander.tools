<script lang="ts" setup>
import type { RadioGroupItem } from '@nuxt/ui';
import { flip_coin, test_flip_coin } from 'assets/js/chance';

let fr = ref('');
let has_thumb = ref(false);
let call = ref('Heads');

const items = ref<RadioGroupItem[]>(['Heads', 'Tails']);


function flip_until_loss() {
    let loss = false;
    let flips = 0;
    let wins = 0;
    while (!loss) {
        

        if (has_thumb.value) {
            let f1 = flip_coin();
            let f2 = flip_coin();

            flips++;
            flips++;

            if (f1 == call.value || f2 == call.value) {
                wins++;
            } else {
                loss = true;
            }

        } else {
            let f1 = flip_coin();
            flips++;

            if (f1 == call.value) {
                wins++;
            } else {
                loss = true;
            }
        }
        
    }
    console.log(`Flips: ${flips}, Wins: ${wins}`);
    fr.value = `${wins} in a row! (${flips} flips total)`;

}


</script>


<template>
    <Navbar />
    <div class="flex flex-col items-center justify-center h-screen pt-10">
        <div>{{ fr }}</div>
        <UButton class="m-4" @click="fr = flip_coin()">Flip Coin</UButton>
        <UButton class="m-4" @click="flip_until_loss()">Flip until loss</UButton>
        <URadioGroup orientation="horizontal" variant="list" default-value="Heads" :items="items" class="m-4" v-model="call" />
        <USwitch v-model="has_thumb" label="Krark's Thumb" class="m-4" />
    </div>
</template>