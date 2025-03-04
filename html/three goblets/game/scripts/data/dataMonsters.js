"use strict";

define([''], function () {
  //*******************************************************************************************************************
  // ** Monster Data
  //*******************************************************************************************************************
  var monsters = {
    slime: {
      graphic: 1,
      level: 1,
      mhp: 0.80,
      dmg: 1.25,
      aps: 60,
      reward: 1
    },
    rock: {
      graphic: 2,
      level: 1,
      mhp: 1.30,
      dmg: 0.80,
      aps: 60,
      reward: 1
    },
    goblin: {
      graphic: 4,
      level: 2,
      mhp: 0.95,
      dmg: 1.05,
      aps: 60,
      reward: 1
    },
    flower: {
      graphic: 5,
      level: 2,
      mhp: 1.20,
      dmg: 0.90,
      aps: 60,
      reward: 1
    },
    ogre: {
      graphic: 6,
      level: 3,
      mhp: 2.20,
      dmg: 1.60,
      aps: 60,
      reward: 2,
      unique: true
    },
    mushroom: {
      graphic: 70,
      level: 4,
      mhp: 0.80,
      dmg: 1.25,
      aps: 60,
      reward: 1
    },
    islime: {
      graphic: 71,
      level: 4,
      mhp: 1.30,
      dmg: 0.80,
      aps: 60,
      reward: 1
    },
    rootplant: {
      graphic: 72,
      level: 5,
      mhp: 2.20,
      dmg: 1.20,
      aps: 60,
      reward: 3,
      unique: true
    },
    butterfly: {
      graphic: 73,
      level: 6,
      mhp: 0.95,
      dmg: 1.05,
      aps: 60,
      reward: 1
    },
    igoblin: {
      graphic: 74,
      level: 6,
      mhp: 1.20,
      dmg: 0.90,
      aps: 60,
      reward: 1
    },
    imoon: {
      graphic: 75,
      level: 7,
      mhp: 2.30,
      dmg: 1.40,
      aps: 70,
      reward: 2,
      unique: true
    },
    felis: {
      graphic: 55,
      level: 8,
      mhp: 0.90,
      dmg: 1.05,
      aps: 65,
      reward: 1
    },
    eagle: {
      graphic: 56,
      level: 8,
      mhp: 1.10,
      dmg: 0.90,
      aps: 60,
      reward: 1
    },
    eye: {
      graphic: 57,
      level: 9,
      mhp: 1.20,
      dmg: 1.65,
      aps: 60,
      reward: 2,
      unique: true
    },
    bigwolf: {
      graphic: 58,
      level: 10,
      mhp: 0.95,
      dmg: 1.05,
      aps: 60,
      reward: 1
    },
    hedgehog: {
      graphic: 59,
      level: 10,
      mhp: 1.10,
      dmg: 0.90,
      aps: 60,
      reward: 1
    },
    hemoth: {
      graphic: 60,
      level: 11,
      mhp: 1.80,
      dmg: 1.20,
      aps: 60,
      reward: 2,
      unique: true
    },
    dragonl: {
      graphic: 61,
      level: 12,
      mhp: 1.60,
      dmg: 1.50,
      aps: 60,
      reward: 2,
      unique: true
    },
    dragonr: {
      graphic: 62,
      level: 12,
      mhp: 1.60,
      dmg: 1.50,
      aps: 60,
      reward: 2,
      unique: true
    },
    ghost: {
      graphic: 37,
      level: 13,
      mhp: 0.80,
      dmg: 1.25,
      aps: 60,
      reward: 1
    },
    zombie: {
      graphic: 38,
      level: 13,
      mhp: 1.30,
      dmg: 0.80,
      aps: 60,
      reward: 1
    },
    abom: {
      graphic: 39,
      level: 14,
      mhp: 2.00,
      dmg: 1.20,
      aps: 120,
      reward: 3,
      unique: true
    },
    spider: {
      graphic: 40,
      level: 15,
      mhp: 0.95,
      dmg: 1.05,
      aps: 60,
      reward: 1
    },
    skeleton: {
      graphic: 41,
      level: 15,
      mhp: 1.20,
      dmg: 0.90,
      aps: 60,
      reward: 1
    },
    reaper: {
      graphic: 42,
      level: 16,
      mhp: 2.10,
      dmg: 1.50,
      aps: 60,
      reward: 2,
      unique: true
    },
    rubble: {
      graphic: 76,
      level: 18,
      mhp: 1.00,
      dmg: 1.25,
      aps: 60,
      reward: 1,
      unique: true
    },
    clayrock: {
      graphic: 77,
      level: 18,
      mhp: 1.30,
      dmg: 1.05,
      aps: 60,
      reward: 1
    },
    claysnail: {
      graphic: 78,
      level: 18,
      mhp: 1.25,
      dmg: 1.10,
      aps: 60,
      reward: 1
    },
    bull: {
      graphic: 79,
      level: 19,
      mhp: 2.00,
      dmg: 2.00,
      aps: 60,
      reward: 3,
      unique: true
    },
    golem: {
      graphic: 80,
      level: 20,
      mhp: 1.20,
      dmg: 1.00,
      aps: 60,
      reward: 1
    },
    spiked: {
      graphic: 81,
      level: 20,
      mhp: 1.00,
      dmg: 1.05,
      aps: 60,
      reward: 1
    },
    statue: {
      graphic: 82,
      level: 21,
      mhp: 2.40,
      dmg: 1.05,
      aps: 50,
      reward: 1
    },
    minotaur: {
      graphic: 83,
      level: 22,
      mhp: 3.50,
      dmg: 1.20,
      aps: 150,
      reward: 2,
      unique: true
    },
    puppetnorm: {
      graphic: 84,
      level: 24,
      mhp: 1.10,
      dmg: 1.05,
      aps: 60,
      reward: 1
    },
    puppetshoot: {
      graphic: 85,
      level: 24,
      mhp: 1.05,
      dmg: 1.10,
      aps: 60,
      reward: 1
    },
    puppetbig: {
      graphic: 86,
      level: 26,
      mhp: 1.15,
      dmg: 1.00,
      aps: 60,
      reward: 1
    },
    puppetsharp: {
      graphic: 87,
      level: 26,
      mhp: 1.00,
      dmg: 1.15,
      aps: 60,
      reward: 1
    },
    puppetball: {
      graphic: 88,
      level: 26,
      mhp: 1.60,
      dmg: 1.70,
      aps: 30,
      reward: 1,
      unique: true
    },
    puppeteera: {
      graphic: 89,
      level: 24,
      mhp: 2.70,
      dmg: 1.20,
      aps: 60,
      reward: 4,
      unique: true
    },
    puppeteerb: {
      graphic: 89,
      level: 25,
      mhp: 2.80,
      dmg: 1.30,
      aps: 60,
      reward: 3,
      unique: true
    },
    puppeteerc: {
      graphic: 89,
      level: 26,
      mhp: 2.90,
      dmg: 1.40,
      aps: 60,
      reward: 2,
      unique: true
    },
    puppeteerd: {
      graphic: 89,
      level: 27,
      mhp: 3.00,
      dmg: 1.50,
      aps: 60,
      reward: 2,
      unique: true
    },
    troglodyte: {
      graphic: 63,
      level: 28,
      mhp: 1.30,
      dmg: 1.35,
      aps: 150,
      reward: 1
    },
    deider: {
      graphic: 64,
      level: 28,
      mhp: 1.20,
      dmg: 1.20,
      aps: 150,
      reward: 1
    },
    portala: {
      graphic: 69,
      level: 28,
      mhp: 6.40,
      dmg: 0.00,
      aps: 0,
      reward: 4,
      unique: true
    },
    beholder: {
      graphic: 65,
      level: 29,
      mhp: 1.70,
      dmg: 1.15,
      aps: 90,
      reward: 1
    },
    tarus: {
      graphic: 66,
      level: 29,
      mhp: 1.80,
      dmg: 1.00,
      aps: 90,
      reward: 1
    },
    portalb: {
      graphic: 69,
      level: 29,
      mhp: 7.00,
      dmg: 0.00,
      aps: 0,
      reward: 4,
      unique: true
    },
    manticore: {
      graphic: 67,
      level: 31,
      mhp: 1.25,
      dmg: 1.90,
      aps: 90,
      reward: 1
    },
    freet: {
      graphic: 68,
      level: 31,
      mhp: 1.40,
      dmg: 1.70,
      aps: 90,
      reward: 1
    },
    portalc: {
      graphic: 69,
      level: 31,
      mhp: 8.20,
      dmg: 0.00,
      aps: 0,
      reward: 1,
      unique: true
    },
    sloth: {
      graphic: 90,
      level: 32,
      mhp: 3.30,
      dmg: 2.15,
      aps: 60,
      reward: 4,
      unique: true
    },
    greed: {
      graphic: 91,
      level: 32,
      mhp: 3.40,
      dmg: 2.50,
      aps: 60,
      reward: 4,
      unique: true
    },
    gluttony: {
      graphic: 92,
      level: 33,
      mhp: 6.40,
      dmg: 4.00,
      aps: 40,
      reward: 4,
      unique: true
    },
    wrath: {
      graphic: 93,
      level: 34,
      mhp: 4.25,
      dmg: 1.00,
      aps: 240,
      reward: 8,
      unique: true
    },
    lust: {
      graphic: 94,
      level: 35,
      mhp: 3.20,
      dmg: 3.10,
      aps: 75,
      reward: 5,
      unique: true
    },
    envy: {
      graphic: 95,
      level: 35,
      mhp: 4.20,
      dmg: 2.30,
      aps: 60,
      reward: 5,
      unique: true
    },
    pride: {
      graphic: 96,
      level: 36,
      mhp: 5.40,
      dmg: 3.80,
      aps: 90,
      reward: 2,
      unique: true
    },
    fireslime: {
      graphic: 97,
      level: 37,
      mhp: 1.50,
      dmg: 1.65,
      aps: 60,
      reward: 1
    },
    firerock: {
      graphic: 98,
      level: 37,
      mhp: 1.65,
      dmg: 1.50,
      aps: 60,
      reward: 1
    },
    abodemon: {
      graphic: 99,
      level: 38,
      mhp: 3.00,
      dmg: 3.50,
      aps: 60,
      reward: 5,
      unique: true
    },
    abomface: {
      graphic: 100,
      level: 39,
      mhp: 1.55,
      dmg: 1.35,
      aps: 60,
      reward: 2
    },
    abombat: {
      graphic: 101,
      level: 39,
      mhp: 1.60,
      dmg: 1.40,
      aps: 60,
      reward: 2
    },
    dreila: {
      graphic: 102,
      level: 40,
      mhp: 3.20,
      dmg: 2.50,
      aps: 60,
      reward: 3,
      unique: true
    },
    sword: {
      graphic: 103,
      level: 41,
      mhp: 1.20,
      dmg: 1.10,
      aps: 60,
      reward: 1
    },
    mace: {
      graphic: 104,
      level: 41,
      mhp: 1.10,
      dmg: 1.15,
      aps: 60,
      reward: 1
    },
    axe: {
      graphic: 105,
      level: 41,
      mhp: 1.00,
      dmg: 1.25,
      aps: 60,
      reward: 1
    },
    dreilb: {
      graphic: 106,
      level: 42,
      mhp: 3.60,
      dmg: 2.10,
      aps: 60,
      reward: 5,
      unique: true
    },
    guardbig: {
      graphic: 107,
      level: 43,
      mhp: 1.45,
      dmg: 1.40,
      aps: 60,
      reward: 1
    },
    guartall: {
      graphic: 108,
      level: 43,
      mhp: 1.30,
      dmg: 1.55,
      aps: 60,
      reward: 1
    },
    scythe: {
      graphic: 109,
      level: 44,
      mhp: 3.00,
      dmg: 2.00,
      aps: 60,
      reward: 5,
      unique: true
    },
    dreilc: {
      graphic: 110,
      level: 44,
      mhp: 20.20,
      dmg: 2.00,
      aps: 60,
      reward: 2,
      unique: true
    },
    //*******************************************************************************************************************
    // * Map Monsters
    //*******************************************************************************************************************
    foulslime: {
      graphic: 200,
      level: 47,
      mhp: 2.10,
      dmg: 1.15,
      aps: 60,
      reward: 1
    },
    dragonfly: {
      graphic: 201,
      level: 47,
      mhp: 2.00,
      dmg: 1.20,
      aps: 60,
      reward: 1
    },
    poisonplant: {
      graphic: 202,
      level: 48,
      mhp: 8.40,
      dmg: 1.80,
      aps: 50,
      reward: 2,
      unique: true
    },
    swamplite: {
      graphic: 203,
      level: 50,
      mhp: 3.55,
      dmg: 1.00,
      aps: 60,
      reward: 1
    },
    mantis: {
      graphic: 204,
      level: 50,
      mhp: 3.50,
      dmg: 1.10,
      aps: 60,
      reward: 1
    },
    troll: {
      graphic: 205,
      level: 51,
      mhp: 8.70,
      dmg: 3.90,
      aps: 60,
      reward: 2,
      unique: true
    },
    scorpion: {
      graphic: 220,
      level: 52,
      mhp: 2.50,
      dmg: 1.65,
      aps: 60,
      reward: 1
    },
    jackal: {
      graphic: 221,
      level: 52,
      mhp: 2.65,
      dmg: 1.50,
      aps: 60,
      reward: 1
    },
    destatue: {
      graphic: 222,
      level: 54,
      mhp: 6.30,
      dmg: 1.80,
      aps: 60,
      reward: 2,
      unique: true
    },
    mummya: {
      graphic: 223,
      level: 55,
      mhp: 4.25,
      dmg: 1.75,
      aps: 60,
      reward: 1
    },
    mummyb: {
      graphic: 224,
      level: 56,
      mhp: 4.70,
      dmg: 1.60,
      aps: 60,
      reward: 1
    },
    sphinx: {
      graphic: 225,
      level: 57,
      mhp: 14.20,
      dmg: 2.80,
      aps: 80,
      reward: 2,
      unique: true
    },
    gem: {
      graphic: 226,
      level: 57,
      mhp: 6.20,
      dmg: 1.20,
      aps: 70,
      reward: 1,
      unique: true
    },
    icesharda: {
      graphic: 240,
      level: 61,
      mhp: 6.50,
      dmg: 1.25,
      aps: 60,
      reward: 2
    },
    iceshardb: {
      graphic: 241,
      level: 61,
      mhp: 6.65,
      dmg: 1.10,
      aps: 75,
      reward: 2
    },
    icegiant: {
      graphic: 242,
      level: 63,
      mhp: 63.30,
      dmg: 3.40,
      aps: 60,
      reward: 1,
      unique: true
    },
    armedogre: {
      graphic: 260,
      level: 64,
      mhp: 4.30,
      dmg: 1.35,
      aps: 60,
      reward: 1,
      unique: true
    },
    evoshroom: {
      graphic: 261,
      level: 65,
      mhp: 4.20,
      dmg: 1.20,
      aps: 60,
      reward: 1
    },
    evofly: {
      graphic: 262,
      level: 65,
      mhp: 4.25,
      dmg: 1.20,
      aps: 60,
      reward: 1
    },
    bluemoon: {
      graphic: 263,
      level: 66,
      mhp: 12.70,
      dmg: 2.05,
      aps: 60,
      reward: 2,
      unique: true
    },
    firebreath: {
      graphic: 264,
      level: 67,
      mhp: 10.80,
      dmg: 1.20,
      aps: 90,
      reward: 0,
      unique: true
    },
    archdragon: {
      graphic: 265,
      level: 67,
      mhp: 21.00,
      dmg: 2.00,
      aps: 60,
      reward: 2,
      unique: true
    },
    abhorrencea: {
      graphic: 266,
      level: 68,
      mhp: 5.60,
      dmg: 1.30,
      aps: 60,
      reward: 2
    },
    abhorrenceb: {
      graphic: 267,
      level: 68,
      mhp: 5.50,
      dmg: 1.35,
      aps: 60,
      reward: 1
    },
    kingmino: {
      graphic: 268,
      level: 69,
      mhp: 14.50,
      dmg: 1.90,
      aps: 120,
      reward: 1,
      unique: true
    },
    oddpuppeta: {
      graphic: 269,
      level: 70,
      mhp: 6.25,
      dmg: 1.30,
      aps: 60,
      reward: 1
    },
    oddpuppetb: {
      graphic: 270,
      level: 70,
      mhp: 6.40,
      dmg: 1.25,
      aps: 60,
      reward: 1
    },
    puppeteerz: {
      graphic: 271,
      level: 71,
      mhp: 12.40,
      dmg: 1.60,
      aps: 60,
      reward: 2,
      unique: true
    },
    eyeglite: {
      graphic: 272,
      level: 72,
      mhp: 5.20,
      dmg: 0.90,
      aps: 90,
      reward: 1
    },
    inspider: {
      graphic: 273,
      level: 72,
      mhp: 4.90,
      dmg: 1.00,
      aps: 90,
      reward: 1
    },
    sin: {
      graphic: 274,
      level: 73,
      mhp: 15.50,
      dmg: 2.20,
      aps: 95,
      reward: 2,
      unique: true
    },
    sinblob: {
      graphic: 275,
      level: 73,
      mhp: 20.50,
      dmg: 1.90,
      aps: 80,
      reward: 1,
      unique: true
    },
    // Part II
    beetle: {
      graphic: 280,
      level: 76,
      mhp: 16.20,
      dmg: 1.85,
      aps: 70,
      reward: 1
    },
    antlike: {
      graphic: 281,
      level: 76,
      mhp: 16.30,
      dmg: 1.80,
      aps: 70,
      reward: 1
    },
    centipede: {
      graphic: 282,
      level: 76,
      mhp: 16.15,
      dmg: 1.90,
      aps: 70,
      reward: 2
    },
    chasmqueen: {
      graphic: 283,
      level: 79,
      mhp: 90.90,
      dmg: 1.10,
      aps: 100,
      reward: 2,
      unique: true
    },
    jellyfish: {
      graphic: 300,
      level: 81,
      mhp: 6.30,
      dmg: 1.65,
      aps: 60,
      reward: 1
    },
    shark: {
      graphic: 301,
      level: 81,
      mhp: 6.45,
      dmg: 1.50,
      aps: 60,
      reward: 1
    },
    curskelly: {
      graphic: 302,
      level: 82,
      mhp: 10.30,
      dmg: 1.45,
      aps: 60,
      reward: 1
    },
    curfloater: {
      graphic: 303,
      level: 82,
      mhp: 10.45,
      dmg: 1.35,
      aps: 60,
      reward: 1
    },
    waterele: {
      graphic: 304,
      level: 83,
      mhp: 13.30,
      dmg: 1.50,
      aps: 60,
      reward: 1
    },
    hydrid: {
      graphic: 305,
      level: 83,
      mhp: 13.45,
      dmg: 1.45,
      aps: 60,
      reward: 1
    },
    templeguard: {
      graphic: 306,
      level: 85,
      mhp: 22.20,
      dmg: 1.90,
      aps: 60,
      reward: 1,
      unique: true
    },
    pedestal: {
      graphic: 307,
      level: 85,
      mhp: 17.00,
      dmg: 0.00,
      aps: 1,
      reward: 2,
      unique: true
    },
    priestess: {
      graphic: 308,
      level: 86,
      mhp: 56.90,
      dmg: 2.20,
      aps: 60,
      reward: 2,
      unique: true
    },
    chaosaboma: {
      graphic: 320,
      level: 87,
      mhp: 8.60,
      dmg: 1.65,
      aps: 60,
      reward: 1
    },
    chaosabomb: {
      graphic: 321,
      level: 87,
      mhp: 8.65,
      dmg: 1.60,
      aps: 60,
      reward: 1
    },
    firedemon: {
      graphic: 322,
      level: 88,
      mhp: 16.30,
      dmg: 2.05,
      aps: 60,
      reward: 2,
      unique: true
    },
    abberation: {
      graphic: 323,
      level: 88,
      mhp: 26.66,
      dmg: 1.39,
      aps: 300,
      reward: 2,
      unique: true
    },
    firehound: {
      graphic: 324,
      level: 89,
      mhp: 16.30,
      dmg: 1.65,
      aps: 60,
      reward: 1
    },
    fireelem: {
      graphic: 325,
      level: 89,
      mhp: 16.45,
      dmg: 1.50,
      aps: 60,
      reward: 1
    },
    hoodslime: {
      graphic: 326,
      level: 90,
      mhp: 20.20,
      dmg: 2.05,
      aps: 60,
      reward: 2,
      unique: true
    },
    monstrosity: {
      graphic: 327,
      level: 91,
      mhp: 25.30,
      dmg: 1.65,
      aps: 60,
      reward: 3,
      unique: true
    },
    abloba: {
      graphic: 328,
      level: 92,
      mhp: 18.70,
      dmg: 1.25,
      aps: 60,
      reward: 2,
      unique: true
    },
    ablobb: {
      graphic: 329,
      level: 92,
      mhp: 18.20,
      dmg: 1.25,
      aps: 72,
      reward: 2,
      unique: true
    },
    ablobc: {
      graphic: 330,
      level: 92,
      mhp: 18.40,
      dmg: 1.25,
      aps: 64,
      reward: 2,
      unique: true
    },
    slimex: {
      graphic: 331,
      level: 93,
      mhp: 26.26,
      dmg: 2.15,
      aps: 60,
      reward: 1,
      unique: true
    },
    planet: {
      graphic: 340,
      level: 94,
      mhp: 12.30,
      dmg: 1.45,
      aps: 60,
      reward: 1
    },
    asteroid: {
      graphic: 341,
      level: 94,
      mhp: 12.45,
      dmg: 1.40,
      aps: 60,
      reward: 1
    },
    gvlthavu: {
      graphic: 342,
      level: 95,
      mhp: 42.30,
      dmg: 2.25,
      aps: 60,
      reward: 2,
      unique: true
    },
    stara: {
      graphic: 343,
      level: 96,
      mhp: 18.30,
      dmg: 1.45,
      aps: 60,
      reward: 1
    },
    starb: {
      graphic: 344,
      level: 96,
      mhp: 18.45,
      dmg: 1.40,
      aps: 60,
      reward: 1
    },
    shkrstlee: {
      graphic: 345,
      level: 97,
      mhp: 60.30,
      dmg: 2.25,
      aps: 60,
      reward: 4,
      unique: true
    },
    nebulaa: {
      graphic: 346,
      level: 98,
      mhp: 28.30,
      dmg: 1.45,
      aps: 60,
      reward: 2
    },
    nebulab: {
      graphic: 347,
      level: 98,
      mhp: 28.45,
      dmg: 1.40,
      aps: 60,
      reward: 2
    },
    worldeater: {
      graphic: 348,
      level: 99,
      mhp: 75.00,
      dmg: 2.05,
      aps: 60,
      reward: 3,
      unique: true
    },
    shvrda: {
      graphic: 349,
      level: 99,
      mhp: 24.30,
      dmg: 1.45,
      aps: 60,
      reward: 2,
      unique: true
    },
    shvrdb: {
      graphic: 350,
      level: 99,
      mhp: 24.45,
      dmg: 1.40,
      aps: 60,
      reward: 2,
      unique: true
    },
    shvrdc: {
      graphic: 351,
      level: 99,
      mhp: 24.30,
      dmg: 1.45,
      aps: 60,
      reward: 2,
      unique: true
    },
    imploder: {
      graphic: 352,
      level: 99,
      mhp: 99.99,
      dmg: 2.25,
      aps: 60,
      reward: 1,
      unique: true
    },
    meteor: {
      graphic: 353,
      level: 99,
      mhp: 44.44,
      dmg: 1.45,
      aps: 40,
      reward: 2,
      unique: true
    }
  };
  return monsters;
});