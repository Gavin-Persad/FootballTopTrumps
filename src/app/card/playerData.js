const playerData = [
	{
		id: 1,
		firstName: 'Guglielmo',
		lastName: 'Vicario',
		age: 26,
		country: 'Italy',
		position: 'Goalkeeper',
		club: 'Tottenham Hotspur',
		image:
			'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/03112023/288c4b23-a3ce-4800-bfee-82604f9ee77a.jpg?operations=fit(707:)&w=707&quality=100',
		rating: 84,
		attributes: {
			attacking: 19,
			defending: 16,
			skill: 29,
			movement: 56,
			power: 46,
			mentality: 35,
			goalkeeping: 83,
		},
	},
	{
		id: 2,
		firstName: 'Cristian',
		lastName: 'Romero',
		age: 25,
		country: 'Argentina',
		position: 'Central Defender',
		club: 'Tottenham Hotspur',
		image:
			'https://tmssl.akamaized.net/images/foto/galerie/cristian-romero-tottenham-1661849537-91344.jpg?lm=1661849554',
		rating: 83,
		attributes: {
			attacking: 60,
			defending: 85,
			skill: 57,
			movement: 72,
			power: 66,
			mentality: 65,
			goalkeeping: 9,
		},
	},
	{
		id: 3,
		firstName: 'Harry',
		lastName: 'Kane',
		age: 29,
		country: 'England',
		position: 'Striker',
		club: 'Bayer Munich',
		image: 'https://www.soccerbible.com/media/135605/kane-5-min.jpg',
		rating: 90,
		attributes: {
			attacking: 88,
			defending: 43,
			skill: 81,
			movement: 74,
			power: 87,
			mentality: 81,
			goalkeeping: 11,
		},
	},
	{
		id: 4,
		firstName: 'Luka',
		lastName: 'Modric',
		age: 37,
		country: 'Crostia',
		position: 'Central Midfielder',
		club: 'Real Madrid',
		image:
			'https://imageio.forbes.com/specials-images/imageserve/65d47bae988113674c790633/Real-Madrid-CF-v-Girona-FC---LaLiga-EA-Sports/960x0.jpg?format=jpg&width=1440',
		rating: 86,
		attributes: {
			attacking: 76,
			defending: 72,
			skill: 85,
			movement: 83,
			power: 72,
			mentality: 80,
			goalkeeping: 10,
		},
	},
	{
		id: 5,
		firstName: 'Erling',
		lastName: 'Haaland',
		age: 22,
		country: 'Norway',
		position: 'Striker',
		club: 'Manchester City',
		image:
			'https://imageio.forbes.com/specials-images/imageserve/645e171afce09061884bd1eb/Manchester-City-v-Nottingham-Forest---Premier-League/960x0.jpg?format=jpg&amp;width=1440',
		rating: 91,
		attributes: {
			attacking: 79,
			defending: 38,
			skill: 73,
			movement: 84,
			power: 88,
			mentality: 79,
			goalkeeping: 10,
		},
	},
	{
		id: 6,
		firstName: 'Guglielmo',
		lastName: 'Vicario',
		age: 26,
		country: 'Italy',
		position: 'Goalkeeper',
		club: 'Tottenham Hotspur',
		image:
			'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/03112023/288c4b23-a3ce-4800-bfee-82604f9ee77a.jpg?operations=fit(707:)&w=707&quality=100',
		rating: 84,
		attributes: {
			attacking: 19,
			defending: 16,
			skill: 29,
			movement: 56,
			power: 46,
			mentality: 35,
			goalkeeping: 83,
		},
	},
	{
		id: 7,
		firstName: 'Guglielmo',
		lastName: 'Vicario',
		age: 26,
		country: 'Italy',
		position: 'Goalkeeper',
		club: 'Tottenham Hotspur',
		image:
			'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/03112023/288c4b23-a3ce-4800-bfee-82604f9ee77a.jpg?operations=fit(707:)&w=707&quality=100',
		rating: 84,
		attributes: {
			attacking: 19,
			defending: 16,
			skill: 29,
			movement: 56,
			power: 46,
			mentality: 35,
			goalkeeping: 83,
		},
	},
	{
		id: 8,
		firstName: 'Guglielmo',
		lastName: 'Vicario',
		age: 26,
		country: 'Italy',
		position: 'Goalkeeper',
		club: 'Tottenham Hotspur',
		image:
			'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/03112023/288c4b23-a3ce-4800-bfee-82604f9ee77a.jpg?operations=fit(707:)&w=707&quality=100',
		rating: 84,
		attributes: {
			attacking: 19,
			defending: 16,
			skill: 29,
			movement: 56,
			power: 46,
			mentality: 35,
			goalkeeping: 83,
		},
	},
	{
		id: 9,
		firstName: 'Guglielmo',
		lastName: 'Vicario',
		age: 26,
		country: 'Italy',
		position: 'Goalkeeper',
		club: 'Tottenham Hotspur',
		image:
			'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/03112023/288c4b23-a3ce-4800-bfee-82604f9ee77a.jpg?operations=fit(707:)&w=707&quality=100',
		rating: 84,
		attributes: {
			attacking: 19,
			defending: 16,
			skill: 29,
			movement: 56,
			power: 46,
			mentality: 35,
			goalkeeping: 83,
		},
	},
	{
		id: 10,
		firstName: 'Guglielmo',
		lastName: 'Vicario',
		age: 26,
		country: 'Italy',
		position: 'Goalkeeper',
		club: 'Tottenham Hotspur',
		image:
			'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/03112023/288c4b23-a3ce-4800-bfee-82604f9ee77a.jpg?operations=fit(707:)&w=707&quality=100',
		rating: 84,
		attributes: {
			attacking: 19,
			defending: 16,
			skill: 29,
			movement: 56,
			power: 46,
			mentality: 35,
			goalkeeping: 83,
		},
	},
];
export default playerData;
