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
export function get_luck_chance(dice_count: number, dice_sides: number): number  {
    let win_target = 7;
    let dice_chance = 1 / dice_sides;

    if (dice_count < win_target) {
        return 0; // Not enough dice to roll sixes
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
    const luck_chances = ref(0);
</script>



<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="text-2xl font-bold mb-20">Luck Bobblehead</div>
    <div class="mb-4">
      Luck Activations
    </div>
    <UInputNumber v-model="luck_activations" class="mb-10" />
    <div class="mb-4">
      Total Bobbleheads
    </div>
    <UInputNumber v-model="total_bobbleheads" />
    <UButton class="mt-10" color="primary" label="Calculate Chances" @click="luck_chances = calc_luck_chances(get_luck_chance(total_bobbleheads, 6), luck_activations) * 100" />
    <div class="mt-10">
      <div class="text-lg font-bold">Win Chance: {{ luck_chances }}%</div>
      </div>
  </div>
</template>