/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

var iFileName = "Oracle.js";
RequiredSheetVersion(12.999);

//add the source
SourceList["S&S"] = {
	name : "Shapeships and Starwyrms: Oracle Class",
	abbreviation : "S&S",
	group : "Spaceships and Starwyrms",
	url : "https://www.drivethrurpg.com/product/258895/Spaceships-and-Starwyrms-Core-Sourcebook",
	date : "2020/10/20"
};

//now make the oracle class
ClassList["oracle"] = {
	regExpSearch : /oracle/i,
	name : "Oracle",
	source : ["S&S:O", 97],
	primaryAbility : "\n \u2022 Oracle: Wisdom;",
	abilitySave : 6,
	prereqs : "\n \u2022 Oracle: Wisdom 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Wis", "Cha"],
	skills : ["\n\n" + toUni("Oracle") + ": Choose two from Arcana, Athletics, Deception, History, Insight, Investigation, Medicine, Perception, Persuasion and Survival."],
	toolProfs : { primay : [""] },
	armor : [
		[true, true, false, true],
		[true, true, false, true]
	],
	weapons : [
		[true, false, ["battleaxe", "longsword", "shortsword", "warhammer"]],
	],
	equipment : "Oracle starting equipment:\n \u2022 A simple weapon;\n \u2022 A shield -or- any simple melee weapon;\n \u2022 Leather armor, and explorer's pack \n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Mystery", ["mystery of blood", "mystery of conflict", "mystery of dimensions", "mystery of life", "mystery of time"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 1,
	abilitySave : 5,
	spellcastingKnown : { //Optional; Denotes the amount and type of spells the class has access to
		cantrips : [4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6], //Optional; This can either be one number, an array of 20 numbers, or be omitted for a class that doesn't have access to cantrips. The numbers reflect the amount of cantrips known
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15],//Optional; This can either be one number, an array of 20 numbers, or be omitted for a class that doesn't have access to spells. The numbers reflect the amount of spells known. For a class that doesn't know spells, but prepares them from a list, you should put "list" here. For a class that uses a spellbook, you should put "book" here.
		prepared : true, //Optional; This indicates that the class has to prepare spells like a cleric/druid/paladin/wizard

	},
	spellcastingList : {
		// 0 - 9th level spells from cleric spell list.
		class : "any",
		level : [0, 9],
		ritual : true,
	},

features : { //required;  the class features. Each works the same way, so only a couple of example are given. You can add as many as you want

		"spellcasting" : {
			name : "Spellcasting",
			source : ["P", 114],
			minlevel : 1,
			description : "\n   " + "I can cast prepared cantrips/spells, using Wisdome as my spellcasting ability" + "\n   " + "I can use an arcane or divine focus as a spellcasting focus" + "\n   " + "I can cast any oracle spell I know as a ritual if that spell has the ritual tag",
			additional : ["4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "6 cantrips known", "6 cantrips known", "6 cantrips known", "6 cantrips known", "6 cantrips known", "6 cantrips known"], //optional; text to display in the header of the feature. This can be one value, but can also be an array of 20 values, one for each level.
		},

		"subclassfeature1" : { 
			name : "Mystery",
			source : ["S&S", 103],
			minlevel : 1,
			description : "\n   " + "Different oracles choose to search for the truths of different mysteries in the universe. \"Class\" field" + "\n   " + "Choose either Mystery of Blood, Mystery of Conflict, Mystery of Dimensions, Mystery of Life, or Mystery of Time",
			},

//add the level 1 curse
		"subclassfeature1.1" : {
			name : "Curse",
			source : ["S&S", 99],
			minlevel : 1,
			description : "\n   " + "At the core of your mystery and its power is a curse that is unshakable. \"Class\" field" + "\n   " + "Choose either Absent Minded, Ancient, Clouded Vision, Deafened, Forever Young, Forgotten, Haunted, Lamed, Mute, Verity, or Wasting",
      choices : ["Absent Minded", "Ancient", "Clouded Vision", "Deafened", "Forever Young", "Forgotten", "Haunted", "Lamed", "Mute", "Verity", "Wasting"],

      "absent minded" : {
				name : "Absent Minded",
				source : ["S&S", 99],
				description : "\n   " + "You automatically fail all memory checks that aren’t related to your mystery. Your inability to recall details means you have disadvantage on all Intelligence ability checks, except Intelligence (Investigation) checks, and checks made that are connected to your mystery.",
				savetxt : { adv_vs : ["Enchantment", "Illusion"] },
			},
      "ancient" : {
				name : "Ancient",
				source : ["S&S", 99],
				description : "\n   " + "You are physically elderly for your species, but you will still live your expected lifespan without additional aging.",
			  scores : [-2, -2, -2, 0, 1, 0],
			  saves : ["Int"],
			  savetxt : { immune : ["Aging"] },
			  skillstxt : ["\n\n" + toUni("Aged") + ": Choose two from Animal Handling, Insight, Medicine, Perception, and Survival.", "\n\n" + toUni("Aged") + ": Choose one from Arcana, Deception, History, Intimidation, Investigation, Nature, Performance, Persuasion, and Religion."],
			},
      "clouded vision" : {
				name : "Clouded Vision",
				source : ["S&S", 99],
				description : "\n   " + "You are unable to see beyond 30 feet in front of you in any direction.",
				vision : [["Normal", 30]],
			},
      "deafened" : {
				name : "Deafened",
				source : ["S&S", 99],
				description : "\n   " + "You suffer from the deafened condition and nothing can cure it (including cyber ears). However, you can read lips and can still speak and understand any languages you know.You gain one type of non-verbal sign language, and you no longer require verbal components to cast your spells. You are also immune to thunder damage and any effect that requires hearing.",
			},
	      "forever young" : {
				name : "Forever Young",
				source : ["S&S", 100],
				description : "\n   " + "You appear to be a child of your species physically, but although you will never age, your lifespan remains the same.",
        scores : [-2, 1, 0, 0, 0, 0],
        speed : { allModes : "-5" },
        skills : ["Acrobatics", "Stealth"],
			},
	      "forgotten" : {
				name : "Forgotten",
				source : ["S&S", 100],
				description : "\n   " + "Your curse has rendered you unremarkable and easily overlooked. Others find it difficult to keep their memories and perceptions of you clear until they’ve spent a great deal of time with you. You have disadvantage on all Charisma ability checks.",
        skills : ["Stealth"],
        toolProfs : ["Disguise Kit"],
			},
	      "haunted" : {
				name : "Haunted",
				source : ["S&S", 100],
				description : "\n   " + "You’re marked in a way that attracts the spirits of the dead. These spirits constantly reach out and try to affect things around them in order to feel alive. It takes you a bonus action instead of interacting with an object to withdraw something from your person, interact with an item, or pick up anything. Any time you drop an object, it lands 10 feet away from you in a random direction, and if you stand close to loose objects they may be overturned or knocked down.",
   			spellcastingBonus : [{
  				name : "Mage Hand",
	  			spells : ["mage hand"],
		  		selection : ["mage hand"]
  			}, {
  				name : "Minor Illusion",
	  			spells : ["minor illusion"],
		  		selection : ["minor illusion"]
  			}, {
  				name : "Silent Image",
	  			spells : ["silent image"],
		  		selection : ["silent image"]
  			}]
			},
	      "lamed" : {
				name : "Lamed",
				source : ["S&S", 100],
				description : "\n   " + "Your curse has wracked your body with such trauma that you are permanently lamed. You walk with a limp and other forms of movement are equally difficult.",
        speed : { allModes : "-10" },
        armor : [false, false, true, false],
			},
	      "mute" : {
				name : "Mute",
				source : ["S&S", 101],
				description : "\n   " + "Your curse has rendered you permanently mute. You can no longer verbally communicate and cannot recover your speech. You know one form of nonverbal language. In addition, you require no verbal components to cast your spells.",
			},
	      "verity" : {
				name : "Verity",
				source : ["S&S", 101],
				description : "\n   " + "Your curse has affected your mind or body in such a way that it is impossible for you to tell a lie. Your curse may manifest as an obvious tell, a physical inability to speak falsehoods, or another such hindrance. Any time you attempt a Charisma (Deception) check to tell a direct lie, you automatically fail.",
        skills : ["Persuasion"],
        skillstxt : ["\n\n" + toUni("Verity") + ": Expertise in Persuasion."],
			},
      "wasting" : {
				name : "Wasting",
				source : ["S&S", 101],
				description : "\n   " + "Your curse afflicts your body with a non-lethal, incurable disease that causes pain and makes it seem as though you are wasting away.",
			  scores : [0, 0, -2, 0, 0, 0],
			  saves : ["Con"],
			  savetxt : { adv_vs : ["Con"] },
			},
			choiceDependencies : [{
				feature : "subclassfeature5.1"
			}, {
				feature : "subclassfeature11.1"
			}, {
				feature : "subclassfeature15.1"
			}]
		},		
		
		"cosmic insight" : {
			name : "Cosmic Insight",
			source : ["P", 102],
			minlevel : 2,
			description : "\n   " + "When you would make an ability check or attack roll, you may do so with advantage. You must choose to use this ability before you roll.; I can use this once per short rest",
			usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level. It is recommended to use a numerical value, but if you use a string, include " per " at the end, like "1d10 per "
			recovery : "short rest", //required if "usages" is defined; way of getting the limited feature recharged. Only if you define both the 'usages' and 'recovery' will the feature be added to the limited features
		},

		"cosmic meditation" : {
			name : "Cosmic Meditation",
			source : ["P", 102],
			minlevel : 2,
			description : "\n   " + "During a short rest, you may choose expended spell slots to recover. The spell slots can have a combined level that is equal to half your oracle level (rounded down)",
			usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level. It is recommended to use a numerical value, but if you use a string, include " per " at the end, like "1d10 per "
			recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. Only if you define both the 'usages' and 'recovery' will the feature be added to the limited features
		},		


//add the level 5 curse
		"subclassfeature5.1" : {
			name : "Curse - 5",
			source : ["S&S", 99],
			minlevel : 5,
			description : "\n   " + "At the core of your mystery and its power is a curse that is unshakable. \"Class\" field" + "\n   " + "Choose either Absent Minded, Ancient, Clouded Vision, Deafened, Forever Young, Forgotten, Haunted, Lamed, Mute, Verity, or Wasting",

      "absent minded" : {
				name : "Absent Minded - 5",
				source : ["S&S", 99],
				description : "\n   " + "You gain advantage on Intelligence (Investigation) checks.",
			},
      "ancient" : {
				name : "Ancient - 5",
				source : ["S&S", 99],
				description : "\n   " + "The maximum for your mental ability scores increases to 22.",
			  scores : [0, 0, 0, 0, 0, 1],
			},
      "clouded vision" : {
				name : "Clouded Vision - 5",
				source : ["S&S", 99],
				description : "\n   " + "With long hours of training your eyes, you have increased the radius of your sight to 60 feet,",
				vision : [["Normal", 60]],
			},
      "deafened" : {
				name : "Deafened - 5",
				source : ["S&S", 99],
				description : "\n   " + "You have advantage on any Intelligence (Investigation) check or Wisdom (Perception) check based on sight.",
			},
	      "forever young" : {
				name : "Forever Young - 5",
				source : ["S&S", 100],
				description : "\n   " + "You have grown accustomed to your younger reflexes.",
        saves : ["Dex"],
			},
	      "forgotten" : {
				name : "Forgotten - 5",
				source : ["S&S", 100],
				description : "\n   " + "When combat begins, you may focus on your aura to make all creatures forget you are there.",
        recovery : "short rest",
        usages : 1,				
        action : ["reaction", ""]
			},
	      "haunted" : {
				name : "Haunted - 5",
				source : ["S&S", 100],
				description : "\n   " + "You have learned to utilize the spirits further.",
   			spellcastingBonus : [{
  				name : "Levitate",
	  			spells : ["levitate"],
		  		selection : ["levitate"]
  			}, {
  				name : "Invisibility",
	  			spells : ["invisibility"],
		  		selection : ["invisibility"]
  			}]
			},
	      "lamed" : {
				name : "Lamed - 5",
				source : ["S&S", 100],
				description : "\n   " + "You have a higher threshold for pain",
        saves : ["Con"],
			},
	      "mute" : {
				name : "Mute - 5",
				source : ["S&S", 101],
				description : "\n   " + "Your hearing has become sharper than ever. You have advantage on any Intelligence(Investigation) check or Wisdom (Perception) check based on sound.",
			},
	      "verity" : {
				name : "Verity - 5",
				source : ["S&S", 101],
				description : "\n   " + "You gain the ability to spread the magic inherent to your curse to others.",
   			spellcastingBonus : [{
  				name : "Zone of Truth",
	  			spells : ["zone of truth"],
		  		selection : ["zone of truth"]
  			}]
			},
      "wasting" : {
				name : "Wasting - 5",
				source : ["S&S", 101],
				description : "\n   " + "Your body’s ability to assimilate its disease into its defenses buffers your ability to stop outside toxins.",
			  dmgres : ["poison"],
			  savetxt : { immune : ["Poisoned"] },
			}
		},

//add the level 11 curse
		"subclassfeature11.1" : {
			name : "Curse - 11",
			source : ["S&S", 99],
			minlevel : 11,
			description : "\n   " + "At the core of your mystery and its power is a curse that is unshakable. \"Class\" field" + "\n   " + "Choose either Absent Minded, Ancient, Clouded Vision, Deafened, Forever Young, Forgotten, Haunted, Lamed, Mute, Verity, or Wasting",

      "absent minded" : {
				name : "Absent Minded - 11",
				source : ["S&S", 99],
				description : "\n   " + "Your mind is like a maze to foes who attempt to attack it.",
				savetxt : { immune : ["Psychic"] },
			},
      "ancient" : {
				name : "Ancient - 11",
				source : ["S&S", 99],
				description : "\n   " + "You have advantage on all Intelligence, Wisdom, and Charisma saving throws",
			  scores : [0, 0, 0, 1, 0, 0],
			  savetxt : { adv_vs : ["Int", "Wis", "Cha"] },
			},
      "clouded vision" : {
				name : "Clouded Vision - 11",
				source : ["S&S", 99],
				description : "\n   " + "You have the ability to sense life in your vicinity.",
				vision : [["Blindsight", 30]],
			},
      "deafened" : {
				name : "Deafened - 11",
				source : ["S&S", 99],
				description : "\n   " + "you have learned to feel the vibrations in the earth.",
				vision : [["Tremorsense", 30]],
			},
	      "forever young" : {
				name : "Forever Young - 11",
				source : ["S&S", 100],
				description : "\n   " + "When you expend hit dice to heal yourself during a short rest, you always heal the maximum amount for each expended die.",
			},
	      "forgotten" : {
				name : "Forgotten - 11",
				source : ["S&S", 100],
				description : "\n   " + "you are under the effects of nondetection, as the spell, at all times.",
			},
	      "haunted" : {
				name : "Haunted - 11",
				source : ["S&S", 100],
				description : "\n   " + "Your spirits can manifest their strength even further.",
   			spellcastingBonus : [{
  				name : "Telekinesis",
	  			spells : ["telekinesis"],
		  		selection : ["telekinesis"]
  			}, {
  				name : "Major Image",
	  			spells : ["major image"],
		  		selection : ["major image"]
  			}]
			},
	      "lamed" : {
				name : "Lamed - 11",
				source : ["S&S", 100],
				description : "\n   " + "You act as though you have two fewer levels of exhaustion than you actually have.",
			},
	      "mute" : {
				name : "Mute - 11",
				source : ["S&S", 101],
				description : "\n   " + "Due to your intense awareness of your surroundings and observant nature, you gain a permanent +2 bonus to your armor class and your Strength and Dexterity saving throws.",
			},
	      "verity" : {
				name : "Verity - 11",
				source : ["S&S", 101],
				description : "\n   " + "Your curse begins to manifest in new ways, rendering you resistant to the will of other people.",
        savetxt : { immune : ["Charmed"] },
			},
      "wasting" : {
				name : "Wasting - 11",
				source : ["S&S", 101],
				description : "\n   " + "Your illness has spread, rendering you immune to diseases other than your curse.",
			  savetxt : { immune : ["Petrified"] },
			}
		},

//add the level 15 curse
		"subclassfeature15.1" : {
			name : "Curse - 15",
			source : ["S&S", 99],
			minlevel : 15,
			description : "\n   " + "At the core of your mystery and its power is a curse that is unshakable. \"Class\" field" + "\n   " + "Choose either Absent Minded, Ancient, Clouded Vision, Deafened, Forever Young, Forgotten, Haunted, Lamed, Mute, Verity, or Wasting",

      "absent minded" : {
				name : "Absent Minded - 15",
				source : ["S&S", 99],
				description : "\n   " + "Your thoughts race so quickly that no one can attempt to ensnare you, regardless of the source.",
				savetxt : { immune : ["Charmed"] },
			},
      "ancient" : {
				name : "Ancient - 15",
				source : ["S&S", 99],
				description : "\n   " + "All three of your mental ability scores increase by 1.",
			  scores : [0, 0, 0, 1, 1, 1],
			},
      "clouded vision" : {
				name : "Clouded Vision - 15",
				source : ["S&S", 99],
				description : "\n   " + "Your blindsight radius increases to 60 feet.",
				vision : [["Blindsight", 60]],
			},
      "deafened" : {
				name : "Deafened - 15",
				source : ["S&S", 99],
				description : "\n   " + "Your tremorsense increases out to 60 feet",
				vision : [["Tremorsense", 60]],
			},
	      "forever young" : {
				name : "Forever Young - 15",
				source : ["S&S", 100],
				description : "\n   " + "Your nimble body is moving at its full potential.",
        scores : [0, 1, 0, 0, 0, 0],
			},
	      "forgotten" : {
				name : "Forgotten - 15",
				source : ["S&S", 100],
				description : "\n   " + "Your ability to be ignored in the first round of combat can be used at will without the need for a short rest between uses.",
			},
	      "haunted" : {
				name : "Haunted - 15",
				source : ["S&S", 100],
				description : "\n   " + "Your spirits’ effect on the world is potent.",
   			spellcastingBonus : [{
  				name : "Reverse Gravity",
	  			spells : ["reverse gravity"],
		  		selection : ["reverse gravity"]
  			}, {
  				name : "Phantasmal Killer",
	  			spells : ["phantasmal killer"],
		  		selection : ["phantasmal killer"]
  			}]
			},
	      "lamed" : {
				name : "Lamed - 15",
				source : ["S&S", 100],
				description : "\n   " + "You ignore all difficult terrain, as you have learned how to measure your steps regardless of what is beneath your feet.",
			},
	      "mute" : {
				name : "Mute - 15",
				source : ["S&S", 101],
				description : "\n   " + "You can no longer be surprised. You always act in the surprise round and you gain a +2 to your initiative checks.",
				addMod : { type : "skill", field : "Init", mod : "+2", text : "+2 to initiative rolls." },
				savetxt : { immune : ["Surprised"] },
			},
	      "verity" : {
				name : "Verity - 15",
				source : ["S&S", 101],
				description : "\n   " + "Your curse has such a strong hold over you that you become immune to possession and any effects that dominate or dictate your actions.",
				savetxt : { immune : ["Posession", "Dominate"] },
			},
      "wasting" : {
				name : "Wasting - 15",
				source : ["S&S", 101],
				description : "\n   " + "Your body is so filled with the essence of your ailment that you are rendered immune to the paralyzed condition and poison damage.",
			  savetxt : { immune : ["Paralyzed", "Poison"] },
			}
		},

	}
}



//Create the Mystery subclasses
ClassSubList["mystery of blood"] = {
        regExpSearch : /^(?=.*mystery)(?=.*blood).*$/i,
				subname : "Mystery of Blood",
        source : ["S&S", 103],
				features : {
				
				"subclassfeature1" : {
				name : "Revelation of Bloodshed",
        source : ["S&S", 103],
        minlevel : 1,        
				description : "\n   " + "Whenever you would deal damage to a creature, if that creature has less than its full hit points, you deal additional damage equal to your Wisdom modifier.",
        },

				"subclassfeature3" : {
				name : "Revelation of Blood Ritual",
        source : ["S&S", 103],
        minlevel : 3,        
        description : "\n   " + "You may cast any ritual spell on the oracle spell list as a ritual without knowing the spell. When you use this ability, however, you lose 1d8 hit points for each level of the spell cast. Hit points lost in this way cannot be recovered until you complete a short or long rest. You must still pay for other components of the spell.",
        },

        "subclassfeature6" : {
				name : "Revelation of the Bloodied",
        source : ["S&S", 103],
        minlevel : 6,        
        description : "\n   " + "Whenever you are at less than full health, you gain an additional 1d6 that you roll and add to all attack and damage rolls you make. This increases to a d8 at 10th level, a d10 at 14th level, and a d12 at 18th level.",
        },

				"subclassfeature10" : {
				name : "Revelation of Ancestry",
        source : ["S&S", 103],
        minlevel : 10,        
        description : "\n   " + "you gain the ability to determine certain things about a person and their lineage based on a small amount of their blood. As an action, you can channel your magic through a very small amount of fresh blood. Doing so gives you the following information: the creature type of the blood’s owner, the name of the owner, a thirty second faint vision of a potent memory from the owner, the innate skills or magic the owner has, and a basic lineage that traces the owner’s ancestry back two generations.",
        },

				"subclassfeature14" : {
				name : "Revelation of Divination",
        source : ["S&S", 103],
        minlevel : 14,        
        description : "\n   " + "As an action, you may cut the palm of any humanoid creature and watch how their blood pools. The creature takes 1d4 slashing damage that can’t be healed until they complete a short or long rest. You may cast divination without expending a spell slot or the material components required.",
        recovery : "short rest",
        usages : 1,
        action : ["action", ""]
        },

				"subclassfeature18" : {
				name : "Revelation of Exsanguination",
        source : ["S&S", 103],
        minlevel : 18,        
        description : "\n   " + "whenever you deal damage with an attack or spell, if you added additional damage to the roll because of your Revelation of Bloodshed or your Revelation of the Bloodied, you gain a number of temporary hit points equal to 1d6 plus your Wisdom modifier as long as you don’t already have temporary hit points.",
        },

				"subclassfeature20" : {
				name : "The Unveiling of Blood",
        source : ["S&S", 103],
        minlevel : 20,        
        description : "\n   " + "When you reach 20th level, you learn the hidden truth of what lies within your own genetic data. See Notes.",
        }
	}
}
			

ClassSubList["mystery of conflict"] = {
        regExpSearch : /^(?=.*mystery)(?=.*conflict).*$/i,
				subname : "Mystery of Conflict",
        source : ["S&S", 104],
        attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				features : {
				
				"subclassfeature1" : {
				name : "Revelation of Experience",
        source : ["S&S", 104],
        minlevel : 1,        
        description : "\n   " + "You gain proficiency in heavy armor and martial weapons. In addition, you gain proficiency in Athletics and Insight checks.",
        armor : [false, false, true, true],
        weapons : [false, true]
        },

				"subclassfeature3" : {
				name : "Revelation of Understanding",
        source : ["S&S", 104],
        minlevel : 3,        
        description : "\n   " + "As a bonus action, you may study a foe. The studied creature attempts a Charisma (Deception) check opposed by your Wisdom (Insight) check. If you succeed, you learn the primary emotional state of the creature as well as their simplified primary motivation for fighting in that moment. In addition, you also measure the creature’s power in relation to your own. You learn if the creature is your equal, superior, or inferior in regards to your total class level (or challenge rating if the creature doesn’t have class levels).",
        },

        "subclassfeature6" : {
				name : "Revelation of Assault",
        source : ["S&S", 104],
        minlevel : 6,        
        description : "\n   " + "You can attack twice, instead of once, when you take the Attack action on your turn.",
        },

				"subclassfeature10" : {
				name : "Revelation of War Magic",
        source : ["S&S", 104],
        minlevel : 10,        
        description : "\n   " + "When you successfully strike the same creature with two or more weapon attacks in the same turn, you may cast a cantrip that would normally require an action as a bonus action instead. The spell must target one or more creatures and must include the creature hit with your weapon attacks as the primary target.",
        },

				"subclassfeature14" : {
				name : "Revelation of Battlefield Design",
        source : ["S&S", 104],
        minlevel : 14,        
        description : "\n   " + "As an action, you may create up to three 5’ by 5’ sections of a wall of force. These walls must be within 30 feet of each other but do not need to be touching. They can provide cover, barricade a small hallway, or otherwise act as a blockading element. The walls remain for 10 minutes and can be destroyed by anything that destroys a wall of force, or they can be dismissed as an action.",
        action : ["action", ""]
        },

				"subclassfeature18" : {
				name : "Revelation of Insight",
        source : ["S&S", 104],
        minlevel : 18,        
        description : "\n   " + "When you would roll initiative, instead choose your place in the initiative order (you get to know when each hostile and non-hostile creature gets to act before you make your decision). Additionally, at the beginning of each new combat round, you may change your place in the initiative order.",
        },

				"subclassfeature20" : {
				name : "Revelation of Insight",
        source : ["S&S", 104],
        minlevel : 20,        
        description : "\n   " + "All attack rolls against you are made with disadvantage and all attack rolls you make are made with advantage.",
        }          
	}
}


ClassSubList["mystery of dimensions"] = {
        regExpSearch : /^(?=.*mystery)(?=.*dimensions).*$/i,
				subname : "Mystery of Dimensions",
        source : ["S&S", 105],
				features : {
				
				"subclassfeature1" : {
				name : "Revelation of Pocket Dimensions",
        source : ["S&S", 105],
        minlevel : 1,        
				description : "\n   " + "You gain the ability to create a pocket dimension that you can reach into at will as though it was on your person. This dimension can hold 50 lbs for each oracle level you possess and has a cubic size in which each length of the cube is equal to your oracle level in feet.",
        },

				"subclassfeature3" : {
				name : "Revelation of Duality",
        source : ["S&S", 105],
        minlevel : 3,        
        description : "\n   " + "As an action, you may choose to split your existence between the material and astral planes. Doing so makes you incorporeal with all the advantages of incorporeal creatures. While in this state you cannot take actions other than coming out of this state. This state requires concentration as if it were a spell you had cast. You can maintain this form for up to one round for each oracle level you possess.",
        recovery : "short rest",
        usages : 1,
        action : ["action", ""]
        },

        "subclassfeature6" : {
				name : "Revelation of Folded Space",
        source : ["S&S", 105],
        minlevel : 6,        
        description : "\n   " + "You gain the ability to connect two points in space in such a way that they are considered the same. As a bonus action or reaction, you may choose two cubes that must be 5’ by 5’ by 5’ in size and within 60 feet of you. For a single creature’s turn those spaces are considered the same space.",
        recovery : "long rest",
        usages : 1,
        action : ["bonus action", ""]
        },

				"subclassfeature10" : {
				name : "Revelation of Wormholes",
        source : ["S&S", 105],
        minlevel : 10,        
        description : "\n   " + "As a reaction, you can negate one attack or spell made against you that requires a ranged attack roll. If that attack or spell fires multiple times with multiple attack rolls, you can only negate one of them. You can choose to do this after you know whether the attack hits or misses you.",
        action : ["reaction", ""]
        },

				"subclassfeature14" : {
				name : "Revelation of Slipstreaming",
        source : ["S&S", 105],
        minlevel : 14,        
        description : "\n   " + "You may choose a point that you can see within 200 feet of you. You cause that point to overlap with your current location and when you take a step, you appear at the chosen point. Traveling in this way uses all your movement. As a bonus action, you can transport another willing creature using this ability.",
        },

				"subclassfeature18" : {
				name : "Revelation of Portals",
        source : ["S&S", 105],
        minlevel : 18,        
        description : "\n   " + "As an action, you may open a portal large enough for a medium-sized creature that leads to any plane of existence, including the Material Plane. You can hold this portal open as long as you concentrate on it (as spell concentration). Any number of creatures can pass through this portal.",
        },

				"subclassfeature20" : {
				name : "The Unveiling of Dimensions",
        source : ["S&S", 106],
        minlevel : 20,        
        description : "\n   " + "You have mastered the dimensions themselves. You can utilize your Revelation of Duality and Revelation of Folded Space abilities at will, any number of times each day. In addition, you have learned how to change the very world around you by blending the Material Plane with one of the other planes to create a new environment. See Notes.",
        }          
	}
}


ClassSubList["mystery of life"] = {
        regExpSearch : /^(?=.*mystery)(?=.*life).*$/i,
				subname : "Mystery of Life",
        source : ["S&S", 106],
				features : {
				
				"subclassfeature1" : {
				name : "Revelation of Preservation",
        source : ["S&S", 106],
        minlevel : 1,        
				description : "\n   " + "You gain a second pool of d8 hit dice equal to your level. During a short rest, you can use these dice to heal yourself or other creatures and they refresh as normal. At any other time you may, as a bonus action, touch a creature and expend one or more of those hit dice to heal that creature by the amount rolled + your Wisdom modifier.",
      	additional : ["d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8"],
        usages : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        recovery : "long rest"
        },

				"subclassfeature3" : {
				name : "Revelation of Lifesense",
        source : ["S&S", 106],
        minlevel : 3,        
        description : "\n   " + "As a bonus action, you may extend your senses. When you do, you know the location of every living creature that has biological functions within thirty feet of your current position, but only in the moment of the action.",
        action : ["bonus action", ""]
        },

        "subclassfeature6" : {
				name : "Revelation of Transference",
        source : ["S&S", 106],
        minlevel : 6,        
        description : "\n   " + "When a creature within 60 feet of you dies, you may use your reaction to draw the remnants of their lifeforce into yourself. On your next turn, as an action, you may cast prayer of healing at the highest spell level you can cast without expending that slot, to a maximum of a 4th level spell (this ability changes the casting time from 10 minutes to 1 action).",
        action : ["reaction", ""]
        },

				"subclassfeature10" : {
				name : "Revelation of Overflowing Life",
        source : ["S&S", 106],
        minlevel : 10,        
        description : "\n   " + "You become immune to diseases and the poisoned condition. In addition, you are resistant to necrotic and poison damage.",
        dmgres : ["necrotic", "poison"],
        savetxt : { immune : ["Poisoned", "Disease"] },
        },

				"subclassfeature14" : {
				name : "Revelation of Resurrection",
        source : ["S&S", 106],
        minlevel : 14,        
        description : "\n   " + "When a creature within 30 feet of you would die or drop to 0 or less hit points and begin dying, you may, as a reaction, expend three or more of your bonus hit dice from your Revelation of Preservation in order to heal that creature by rolling the expended hit dice and adding your level (you start them at 0 hit points and heal from there).",
        recovery : "short rest",
        usages : 1,
        action : ["reaction", ""]
        },

				"subclassfeature18" : {
				name : "Revelation of Suffusion",
        source : ["S&S", 107],
        minlevel : 18,        
        description : "\n   " + "When a creature within 60 feet of you dies, you may use your reaction to create a burst of life energy from their body. Choose any number of creatures within 30 feet of you and divide the maximum hit point total of the dying creature equally among those creatures, rounding down.",
        recovery : "short rest",
        usages : 1,
        action : ["reaction", ""]
        },

				"subclassfeature20" : {
				name : "The Unveiling of Life",
        source : ["S&S", 107],
        minlevel : 20,        
        description : "\n   " + "You no longer age and your body regresses to the prime age of your species. In addition, you automatically succeed on all death saving throws you make as though you had rolled a natural 20.",
        } 
	}
}


ClassSubList["mystery of time"] = {
        regExpSearch : /^(?=.*mystery)(?=.*time).*$/i,
				subname : "Mystery of Time",
        source : ["S&S", 107],
				features : {
				
				"subclassfeature1" : {
				name : "Revelation of Reversal",
        source : ["S&S", 107],
        minlevel : 1,        
				description : "\n   " + "At the end of your turn in combat, you can use this ability to negate the turn you just took. You return to the location you were at when you began your turn. Any resources you expended are regained. Any and all effects, spells, attacks, environmental triggers, and so on that occurred during your turn did not occur and their effects are nullified.",
        recovery : "long rest",
        usages : 1,
        },

				"subclassfeature3" : {
				name : "Revelation of Time Hopping",
        source : ["S&S", 107],
        minlevel : 3,        
        description : "\n   " + "On your turn when you begin your movement, you may stop time. If you do, you move unhindered by enemies’ or allies’ squares and provoke no opportunity attacks. Effects such as those created by a wall of fire spell don’t affect you. While time is frozen, you can even move across liquid surfaces as though they are solid. Once you stop moving, this effect immediately ends. While moving this way you cannot take actions.",
        },

        "subclassfeature6" : {
				name : "Revelation of Temporal Jettison",
        source : ["S&S", 107],
        minlevel : 6,        
        description : "\n   " + "You may force a creature within 5 feet of you to make a Charisma saving throw. If they fail, they are thrown forward in time. They disappear for one minute, reappearing in the spot they previously occupied or the nearest unoccupied space. If the creature succeeds against the saving throw, it is thrown forward 1 round, disappearing and then reappearing at the beginning of your next turn.",
        recovery : "long rest",
        usages : 1,
        action : ["action", ""]
        },

				"subclassfeature10" : {
				name : "Revelation of Destinies",
        source : ["S&S", 107],
        minlevel : 10,        
        description : "\n   " + "When a creature that you can see, not including yourself, makes an ability check or saving throw and fails, you may change their result to a natural 20.",
        recovery : "long rest",
        usages : 1,
        },

				"subclassfeature14" : {
				name : "Revelation of Blinking",
        source : ["S&S", 108],
        minlevel : 14,        
        description : "\n   " + "You can blink yourself forward in time. When you do, you cease to exist in the present and reappear at the start of your next turn in the initiative order.",
        recovery : "short rest",
        usages : 1,
        action : ["reaction", ""]
        },

				"subclassfeature18" : {
				name : "Revelation of Concurrence",
        source : ["S&S", 108],
        minlevel : 18,        
        description : "\n   " + "You may bend time for a number of rounds equal to your Wisdom modifier. For these rounds, a second version of you from the near future appears on the battlefield. You control the actions of your second self. Their initiative count is 10 less than your own. They appear with the same number of resources you have and any class resource, spell, or item they use is taken from your resources as if you had used them.",
        recovery : "long rest",
        usages : 1,
        action : ["action", ""]
        },

				"subclassfeature20" : {
				name : "The Unveiling of Time",
        source : ["S&S", 106],
        minlevel : 20,        
        description : "\n   " + "Once per year, you may spend 1 hour in meditation. When you do so, you can travel through time with a number of willing others equal to your Wisdom modifier. No matter what time period you travel to, you retain your current body and abilities, as do any companions you bring. You may stay in this time for up to 1 week before returning to the time stream at the exact moment you left.",
        }
	}
}
