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
		firstName: 'Mohamed',
		lastName: 'Salah',
		age: 31,
		country: 'Egypt',
		position: 'Right Winger',
		club: 'Liverpool',
		image:
			'https://compote.slate.com/images/d9128723-8661-402f-a047-6cbe0fc4ea9c.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=840',
		rating: 89,
		attributes: {
			attacking: 80,
			defending: 41,
			skill: 81,
			movement: 90,
			power: 82,
			mentality: 78,
			goalkeeping: 12,
		},
	},
	{
		id: 7,
		firstName: 'Bukayo',
		lastName: 'Saka',
		age: 21,
		country: 'England',
		position: 'Right Winger',
		club: 'Arsenal',
		image:
			'https://www.telegraph.co.uk/content/dam/football/2019/09/20/TELEMMGLPICT000210104265_trans_NvBQzQNjv4Bqe6PBxd5BvZ719A_-H8kxJ1SuV4bkJ03YRVYrh5-NmFs.jpeg?imwidth=680',
		rating: 86,
		attributes: {
			attacking: 75,
			defending: 61,
			skill: 80,
			movement: 86,
			power: 76,
			mentality: 77,
			goalkeeping: 10,
		},
	},
	{
		id: 8,
		firstName: 'Kylian',
		lastName: 'Mbappe',
		age: 24,
		country: 'France',
		position: 'Striker',
		club: 'Paris Saint-Germain',
		image:
			'https://dohanews.co/wp-content/uploads/2022/07/Kylian-Mbappe-6.jpeg',
		rating: 91,
		attributes: {
			attacking: 83,
			defending: 31,
			skill: 81,
			movement: 92,
			power: 85,
			mentality: 75,
			goalkeeping: 42,
		},
	},
	{
		id: 9,
		firstName: 'Jordan',
		lastName: 'Pickford',
		age: 29,
		country: 'England',
		position: 'Goalkeeper',
		club: 'Everton',
		image:
			'https://resources.evertonfc.com/photo-resources/2024/03/07/f612bc5e-cb6e-4777-8982-1d1f60b805d5/GettyImages-1860342080.jpg?width=900&height=506',
		rating: 82,
		attributes: {
			attacking: 26,
			defending: 18,
			skill: 30,
			movement: 58,
			power: 53,
			mentality: 44,
			goalkeeping: 83,
		},
	},
	{
		id: 10,
		firstName: 'Thiago',
		lastName: 'Silva',
		age: 38,
		country: 'Brazil',
		position: 'Central Defender',
		club: 'Chelsea',
		image:
			'https://www.telegraph.co.uk/content/dam/football/2021/11/23/TELEMMGLPICT000278657691_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg?imwidth=680',
		rating: 84,
		attributes: {
			attacking: 65,
			defending: 86,
			skill: 70,
			movement: 61,
			power: 70,
			mentality: 73,
			goalkeeping: 9,
		},
	},
];
export default playerData;