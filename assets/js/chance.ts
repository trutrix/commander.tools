

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