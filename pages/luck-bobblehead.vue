<script lang="ts">



export function roll_dice(sides: number) : number {
    return Math.floor(Math.random() * sides) + 1;
}

export function roll_d4() : number {
    return roll_dice(4);
}

export function roll_d6() : number {
    return roll_dice(6);
}

export function roll_d8() : number {
    return roll_dice(8);
}

export function roll_d10() : number {
    return roll_dice(10);
}

export function roll_d12() : number {
    return roll_dice(12);
}

export function roll_d20() : number {
    return roll_dice(20);
}

export function roll_d100() : number {
    return roll_dice(100);
}

export function flip_coin() : number {
    return roll_dice(2);
}



// Calculate chances of rolling six exactly seven times with x amount of dice
export function get_luck_chance(dice_count: number): number  {
    let win_target = 7;
    let dice_chance = 1 / 6;

    if (dice_count < win_target) {
        return 0; // Not enough dice to roll sixe sixes
    }

    return choosei(dice_count, win_target) * dice_chance ** win_target * (1 - dice_chance) ** (dice_count - win_target);
}

// Iterative function
function choosei(n: number, k: number) : number {
  if (k === 0 || k === n) {
    return 1;
  }
  if (k > n / 2) {
    k = n - k; // Optimization: choose(n, k) = choose(n, n-k)
  }
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result *= (n + 1 - i) / i;
  }
  return result;
}


export function calc_luck_chances(chance: number, activations: number): number {
    return (1 - (1 - chance) ** activations);
}


export function roll_luck_chances(dice_count: number, activations: number): object {
    let evens = 0;
    let odds = 0;
    let ones = 0;
    let twos = 0;
    let threes = 0;
    let fours = 0;
    let fives = 0;
    let sixes = 0;
    let wins = 0;

    for (let a = 0; a < activations; a++) {
        let six_batch = 0;

        for (let l = 0; l < dice_count; l++) {
            
            let roll = roll_d6();
            if (roll == 1) {
                ones++;
                odds++;
            } else if (roll == 2) {
                twos++;
                evens++;
            } else if (roll == 3) {
                threes++;
                odds++;
            } else if (roll == 4) {
                fours++;
                evens++;
            } else if (roll == 5) {
                fives++;
                odds++;
            } else if (roll == 6) {
                sixes++;
                evens++;
                six_batch++;
            }
        }

        if (six_batch == 7) {
            wins++;
        }
        
    }

    return {
        evens: evens,
        odds: odds,
        ones: ones,
        twos: twos,
        threes: threes,
        fours: fours,
        fives: fives,
        sixes: sixes,
        wins: wins
    }
}




</script>
<script setup lang="ts">
    const luck_activations = ref(1);
    const total_bobbleheads = ref(1);
    const win_chance = ref(0);

    function calc_win_chance(): number {
        let result = (calc_luck_chances(get_luck_chance(total_bobbleheads.value, 6), luck_activations.value) * 100).toFixed(4);
        if (result == 0) {
            win_chance.value = 0;
        } else {
            win_chance.value = result;
        }
    }


</script>



<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="text-2xl font-bold mt-15">Luck Bobblehead</div>
      <div class="flex flex-col items-center justify-center flex-grow">
      <div class="mb-4">
        Luck Activations
      </div>
      <UInputNumber v-model="luck_activations" class="mb-10" v-on:update:model-value="calc_win_chance()"  :autofocus="false" />
      <div class="mb-5">
        Total Bobbleheads
      </div>
      <UInputNumber v-model="total_bobbleheads" v-on:update:model-value="calc_win_chance()" />
      <div class="mt-10">
        <div class="text-lg font-bold">Win Chance: {{ win_chance }}%</div>
      </div>
      <UButton class="mt-5" color="primary" label="Roll Dice" @click="console.log(roll_luck_chances(total_bobbleheads, luck_activations))" />
      <div class="mt-5">Results in console for now</div>
      <div class="mt-5">
        <ShiftingD6 />
        <ShiftingD6 />
        <ShiftingD6 />
        <ShiftingD6 />
        <ShiftingD6 />
        <ShiftingD6 />
        <ShiftingD6 />
      </div>
    </div>
  </div>
</template>