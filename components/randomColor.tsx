const tailwindColors: string[] = [
    'text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500',
    'text-purple-500', 'text-indigo-500', 'text-pink-500', 'text-teal-500'
];

export const getRandomTailwindColor = (): string => {
    const colorName: string = tailwindColors[Math.floor(Math.random() * 8)]
    return colorName;
};