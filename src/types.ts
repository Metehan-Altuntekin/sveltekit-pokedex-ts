export interface Pokeman {
	name: string;
	id: number;
	image: string;
}

export interface PokemanDetails {
	name: string;
	weight: number;
	height: number;
	types: { type: { name: string } }[];
	sprites: { front_default: string };
}
