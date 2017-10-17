Game.interstellarCategoryData = (function () {

    var instance = {};

    instance.general = {
        title: '星际',
        category: 'general'
    };

    instance.faction = {
        title: 'Faction Star Systems',
        category: 'faction',
    };

    return instance;

}());

Game.interstellarData = (function(){

	var instance = {};

	instance.comms = {
		name: '通讯',
		desc: '这是您了解其他系统旅行的地方。 <br> <b>注意：半人马座阿尔法星的第一颗星星是4.3 LY。 1 IRS不会让你在那里。</b>',
		category: 'general',
		unlocked: false
	};

	instance.rocket = {
		name: '火箭',
		desc: '这是在那里你可以构建你的运输到星星。',
		category: 'general',
		built: 'Not Built',
		unlocked: false
	};

	instance.antimatter = {
		name: '反物质',
		desc: '您的星际旅行燃料是在这里生产的。 不幸的是，您只能处理每个星系的100k反物质，因为它是非常不稳定的。<br><br><button class="btn btn-default" onclick="toggleAntimatter()">切换反物质 <span id="antimatterToggled">On</span></button>',
		category: 'general',
		unlocked: false
	};

	instance.travel = {
		name: '旅行',
		desc: '在这里，你可以穿过宇宙到你心中的愿望。 当您探索星系统时，它将显示在各个派系选项卡中，您可以在其中获得控制权，以提高资源的存在。 距离之后的（）中的数字是需要在那里旅行的反物质。',
		category: 'general',
		unlocked: false
	};

	instance.military = {
		name: 'Military',
		desc: 'This is where you can build up your fleet of ships to invade other systems. Your total fleet\'s attributes are based on which ships you own.',
		category: 'general',
		unlocked: false
	};

	instance.carnelian = {
		name: "Carnelian Resistance",
		desc: "A ruthless faction with a fierce anger towards the ones in power, most notable, the Prasnian Empire. They are incessant in their opposition and focus their whole force towards attacking their enemies. Because of this, what they offer comprises mostly of upgrades tending towards a more active gameplay.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.prasnian = {
		name: "Prasnian Empire",
		desc: "The current leader in the galaxy and the faction most focused on keeping things as they are. Opposed to change, they have an authoritarian regime and offer mainly upgrades concerning structures such as the Dysons or Wonders",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.hyacinite = {
		name: "Hyacinite Congregation",
		desc: "The Hyacinite Congregationg is a science loving society, proud of all advances in technology and always looking to the future. They fight for the truth and are welcoming to anyone who shares their beliefs.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.kitrinos = {
		name: "Kitrinos Corporation",
		desc: "This private company has grown powerful over the galaxy and is inspired by profits, with allies to those who can support their aims. Upgrades offered focus on passive gains, with a large amount of automation.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.moviton = {
		name: "Moviton Syndicate",
		desc: "The Moviton Syndicate is an expansionist centred faction, with a goal of conquest over the galaxy. They often play both sides of a conflict, hoping to gain from the chaos. They offer improvements in your travel, including rocket building and interstellar travel.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.overlord = {
		name: "霸主崇拜",
		desc: "这个派系是神秘的。 虽然没有多少知名度，但伟大的权力意识可以忽略整个星系，似乎超过了其他5个派别和他们的“小”的可怜。 从忠诚到霸主的升级并不局限于一种类型，差别很大。",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	return instance;

}());

Game.commsData = (function(){

	var instance = {};

	instance.astroBreakthrough = {
		entryName: 'astroBreakthrough',
		name: '天文突破',
		desc: '星际空间旅行理论的一个巨大问题正在被打破。 通过此升级实现。 这是一次升级，将您的勘探范围提高5光年。',
		category: 'comms',
		unlocked: true,
		displayNeedsUpdate: true,
		max: 1,
		completed: false,
		cost: {
			'metal': 60000000000,
			'ice': 6000000000,
			'meteorite': 60000000
		},
		defaultCost: {
			'metal': 60000000000,
			'ice': 6000000000,
			'meteorite': 60000000
		}
	};

	instance.IRS = {
		entryName: 'IRS',
		name: '星际雷达扫描仪',
		desc: '霸主赠送你的技术，通过使用星际雷达扫描仪来发现外太空的星星。 每增加1光年的勘探范围。',
		category: 'comms',
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'metal': 38600000000,
			'ice': 4320000000,
			'meteorite': 15800000
		},
		defaultCost: {
			'metal': 38600000000,
			'ice': 4320000000,
			'meteorite': 15800000
		}
	};

	return instance;

}());

Game.rocketData = (function(){

	var instance = {};

	instance.tier1Rocket = {
		name: '1级火箭',
		desc: '一级火箭可以前往银河系的星星，但不能落在系统内的物体上。',
		category: 'rocket',
		max: 1,
		unlocked: true,
		built: false,
		displayNeedsUpdate: true,
		cost: {
			'shield': 50,
			'engine': 25,
			'aero': 15
		}
	};

	return instance;

}());

Game.rocketPartsData = (function(){

	var instance = {};

	instance.shield = {
		name: '屏蔽镀层',
		entryName: 'shield',
		desc: '这种电镀与太阳的辐射相抗衡，可以保护任何人免受寒冷的寒冷。',
		category: 'rocketParts',
		max: 50,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'lunarite': 100000,
			'titanium': 100000,
			'metal': 100000
		},
		defaultCost: {
			'lunarite': 100000,
			'titanium': 100000,
			'metal': 100000
		}
	};

	instance.engine = {
		name: '发动机单元',
		entryName: 'engine',
		desc: '这些将反物质与受控反应中的物质相结合，以产生将带您进入星星的推进剂。',
		category: 'rocketParts',
		max: 25,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'silicon': 500000,
			'meteorite': 10000,
			'hydrogen': 250000
		},
		defaultCost: {
			'silicon': 500000,
			'meteorite': 10000,
			'hydrogen': 250000
		}
	};

	instance.aero = {
		name: '空气动力学部分',
		entryName: 'aero',
		desc: '这些允许在大气环境下轻松起飞和着陆，这样您就不必担心空气阻力。',
		category: 'rocketParts',
		max: 15,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'silver': 200000,
			'ice': 300000,
			'gem': 250000
		},
		defaultCost: {
			'silver': 200000,
			'ice': 300000,
			'gem': 250000
		}
	};

	return instance;

}());

Game.antimatterData = (function(){

	var instance = {};

	instance.drive = {
		entryName: 'drive',
		name: '阿库别瑞引擎',
		desc: '这个强大的反应堆可以将高能量等离子体转化成我们可以想象的最有效的燃料。',
		category: 'antimatter',
		unlocked: true,
		displayNeedsUpdate: true,
		resourcePerSecond: {
            'antimatter': 0.5,
            'plasma': -100,
            'ice': -12000
        },
		cost: {
			'silver': 163000000,
			'oil': 712000000,
			'meteorite': 12300000
		},
		defaultCost: {
			'silver': 163000000,
			'oil': 712000000,
			'meteorite': 12300000
		}
	};

	return instance;

}());

Game.militaryData = (function(){

	var instance = {};

	instance.scout = {
		entryName: 'scout',
		name: '侦察船',
		desc: '侦察船是最小和最快的船只，费用最少。 尽管他们似乎没有价值，但是在战斗和数量上都是重要的，可能是致命的。',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 3,
			'defense': 2,
			'speed': 15
		},
		cost: {
			'metal': 870000000,
			'gem': 420000000,
			'silver': 390000000
		},
		defaultCost: {
			'metal': 870000000,
			'gem': 420000000,
			'silver': 390000000
		}
	};

	instance.frigate = {
		entryName: 'frigate',
		name: '护卫舰',
		desc: '比侦察员更大，护卫舰是船舶战争的一小部分。 他们比侦察兵有更多的力量，但是速度要慢得多。',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 5,
			'defense': 6,
			'speed': 12
		},
		cost: {
			'gold': 930000000,
			'lunarite': 6100000000,
			'meteorite': 13000000
		},
		defaultCost: {
			'gold': 930000000,
			'lunarite': 6100000000,
			'meteorite': 13000000
		}
	};

	instance.corvette = {
		entryName: 'corvette',
		name: 'Corvette',
		desc: 'The Corvette is a mid-sized ship with decent speed, given its other attributes. What it lacks in defense, it makes up for in power and speed and is a good ship to populate your fleets with.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 8,
			'defense': 4,
			'speed': 10
		},
		cost: {
			'titanium': 1620000000,
			'ice': 1020000000,
			'silicon': 1140000000
		},
		defaultCost: {
			'titanium': 1620000000,
			'ice': 1020000000,
			'silicon': 1140000000
		}
	};

	instance.battlecruiser = {
		entryName: 'battlecruiser',
		name: 'Battle Cruiser',
		desc: 'The Battle Cruiser is a costly investment, but pays off with a balanced mix of power, defense and speed. It is a high-end ship, both in terms of attributes and cost.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 15,
			'defense': 13,
			'speed': 9
		},
		cost: {
			'metal': 4900000000,
			'uranium': 2300000000,
			'hydrogen': 3100000000
		},
		defaultCost: {
			'metal': 4900000000,
			'uranium': 2300000000,
			'hydrogen': 3100000000
		}
	};

	instance.capitalship = {
		entryName: 'capitalship',
		name: 'Capital Ship',
		desc: 'The Capital Ship is a Defense-heavy ship, but can still pack a punch with it\'s large attack force. The main downside is the slow speed, dragging the fleet\'s manouverability down.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 57,
			'defense': 62,
			'speed': 5
		},
		cost: {
			'lunarite': 5300000000,
			'helium': 4600000000,
			'meteorite': 1700000000
		},
		defaultCost: {
			'lunarite': 5300000000,
			'helium': 4600000000,
			'meteorite': 1700000000
		}
	};

	return instance;

}());