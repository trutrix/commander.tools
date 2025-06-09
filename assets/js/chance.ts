

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

export function flip_coin() : string {
    // Simulate a coin flip by rolling a 2-sided die
    if (roll_dice(2) === 1) {
        return 'Heads';
    } else {
        return 'Tails';
    }
}


export function test_flip_coin() : void {
    const results: Record<string, number> = { heads: 0, tails: 0 };
    for (let i = 0; i < 10000000; i++) {
        const result = flip_coin();
        results[result]++;
    }
    console.log(`Heads: ${results.heads}, Tails: ${results.tails}`);
}