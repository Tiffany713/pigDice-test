import { Player } from '../src/pig-dice';

describe('Player', () => {
	test('should output the game total to 0', () => {
		var player = new Player();
		expect(player.gameTotal).toEqual(1);
	


	});
});