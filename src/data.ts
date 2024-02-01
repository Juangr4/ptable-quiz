export type TableElement = {
  atomicNumber: number;
  name: string;
  symbol: string;
  position: [number, number];
  hide: boolean;
};

export const getPosition: (atomicNumber: number) => [number, number] = (
  atomicNumber
) => {
  if (atomicNumber >= 19 && atomicNumber <= 54)
    return [atomicNumber % 18, Math.floor((atomicNumber - 19) / 18) + 4];
  else if (atomicNumber == 55 || atomicNumber == 56) {
    return [atomicNumber - 54, 6];
  } else if (atomicNumber >= 72 && atomicNumber <= 86) {
    return [atomicNumber - 68, 6];
  } else if (atomicNumber == 87 || atomicNumber == 88) {
    return [atomicNumber - 86, 7];
  } else if (atomicNumber >= 104 && atomicNumber <= 118) {
    return [atomicNumber - 100, 7];
  } else if (atomicNumber == 12 || atomicNumber == 11) {
    return [atomicNumber - 10, 3];
  } else if (atomicNumber >= 13 && atomicNumber <= 18) {
    return [atomicNumber, 3];
  } else if (atomicNumber == 3 || atomicNumber == 4) {
    return [atomicNumber - 2, 2];
  } else if (atomicNumber >= 5 && atomicNumber <= 10) {
    return [atomicNumber + 8, 2];
  } else if (atomicNumber == 2) {
    return [18, 1];
  } else if (atomicNumber == 57) {
    return [3, 6];
  } else if (atomicNumber == 89) {
    return [3, 7];
  } else if (atomicNumber >= 104 && atomicNumber <= 118) {
    return [atomicNumber - 100, 7];
  }
  return [1, 1];
};

export const elements: TableElement[] = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hidrogeno",
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helio",
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Litio",
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Berilio",
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boro",
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbono",
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogeno",
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxigeno",
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluor",
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
  },
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodio",
  },
  {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesio",
  },
  {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminio",
  },
  {
    atomicNumber: 14,
    symbol: "Si",
    name: "Silicio",
  },
  {
    atomicNumber: 15,
    symbol: "P",
    name: "Fosforo",
  },
  {
    atomicNumber: 16,
    symbol: "S",
    name: "Azufre",
  },
  {
    atomicNumber: 17,
    symbol: "Cl",
    name: "Cloro",
  },
  {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argon",
  },
  {
    atomicNumber: 19,
    symbol: "K",
    name: "Potasio",
  },
  {
    atomicNumber: 20,
    symbol: "Ca",
    name: "Calcio",
  },
  {
    atomicNumber: 21,
    symbol: "Sc",
    name: "Escandio",
  },
  {
    atomicNumber: 22,
    symbol: "Ti",
    name: "Titanio",
  },
  {
    atomicNumber: 23,
    symbol: "V",
    name: "Vanadio",
  },
  {
    atomicNumber: 24,
    symbol: "Cr",
    name: "Cromo",
  },
  {
    atomicNumber: 25,
    symbol: "Mn",
    name: "Manganeso",
  },
  {
    atomicNumber: 26,
    symbol: "Fe",
    name: "Hierro",
  },
  {
    atomicNumber: 27,
    symbol: "Co",
    name: "Cobalto",
  },
  {
    atomicNumber: 28,
    symbol: "Ni",
    name: "Niquel",
  },
  {
    atomicNumber: 29,
    symbol: "Cu",
    name: "Cobre",
  },
  {
    atomicNumber: 30,
    symbol: "Zn",
    name: "Zinc",
  },
  {
    atomicNumber: 31,
    symbol: "Ga",
    name: "Galio",
  },
  {
    atomicNumber: 32,
    symbol: "Ge",
    name: "Germanio",
  },
  {
    atomicNumber: 33,
    symbol: "As",
    name: "Arsenico",
  },
  {
    atomicNumber: 34,
    symbol: "Se",
    name: "Selenio",
  },
  {
    atomicNumber: 35,
    symbol: "Br",
    name: "Bromo",
  },
  {
    atomicNumber: 36,
    symbol: "Kr",
    name: "Kripton",
  },
  {
    atomicNumber: 37,
    symbol: "Rb",
    name: "Rubidio",
  },
  {
    atomicNumber: 38,
    symbol: "Sr",
    name: "Estroncio",
  },
  {
    atomicNumber: 39,
    symbol: "Y",
    name: "Itrio",
  },
  {
    atomicNumber: 40,
    symbol: "Zr",
    name: "Circonio",
  },
  {
    atomicNumber: 41,
    symbol: "Nb",
    name: "Niobio",
  },
  {
    atomicNumber: 42,
    symbol: "Mo",
    name: "Molibdeno",
  },
  {
    atomicNumber: 43,
    symbol: "Tc",
    name: "Tecnecio",
  },
  {
    atomicNumber: 44,
    symbol: "Ru",
    name: "Rutenio",
  },
  {
    atomicNumber: 45,
    symbol: "Rh",
    name: "Rodio",
  },
  {
    atomicNumber: 46,
    symbol: "Pd",
    name: "Paladio",
  },
  {
    atomicNumber: 47,
    symbol: "Ag",
    name: "Plata",
  },
  {
    atomicNumber: 48,
    symbol: "Cd",
    name: "Cadmio",
  },
  {
    atomicNumber: 49,
    symbol: "In",
    name: "Indio",
  },
  {
    atomicNumber: 50,
    symbol: "Sn",
    name: "Esta├▒o",
  },
  {
    atomicNumber: 51,
    symbol: "Sb",
    name: "Antimonio",
  },
  {
    atomicNumber: 52,
    symbol: "Te",
    name: "Teluro",
  },
  {
    atomicNumber: 53,
    symbol: "I",
    name: "Yodo",
  },
  {
    atomicNumber: 54,
    symbol: "Xe",
    name: "Xenon",
  },
  {
    atomicNumber: 55,
    symbol: "Cs",
    name: "Cesio",
  },
  {
    atomicNumber: 56,
    symbol: "Ba",
    name: "Bario",
  },
  {
    atomicNumber: 57,
    symbol: "La",
    name: "Lantano",
  },
  {
    atomicNumber: 58,
    symbol: "Ce",
    name: "Cerio",
  },
  {
    atomicNumber: 59,
    symbol: "Pr",
    name: "Praseodimio",
  },
  {
    atomicNumber: 60,
    symbol: "Nd",
    name: "Neodimio",
  },
  {
    atomicNumber: 61,
    symbol: "Pm",
    name: "Prometio",
  },
  {
    atomicNumber: 62,
    symbol: "Sm",
    name: "Samario",
  },
  {
    atomicNumber: 63,
    symbol: "Eu",
    name: "Europio",
  },
  {
    atomicNumber: 64,
    symbol: "Gd",
    name: "Gadolin",
  },
  {
    atomicNumber: 65,
    symbol: "Tb",
    name: "Terbio",
  },
  {
    atomicNumber: 66,
    symbol: "Dy",
    name: "Disprosio",
  },
  {
    atomicNumber: 67,
    symbol: "Ho",
    name: "Holmio",
  },
  {
    atomicNumber: 68,
    symbol: "Er",
    name: "Erbio",
  },
  {
    atomicNumber: 69,
    symbol: "Tm",
    name: "Tulio",
  },
  {
    atomicNumber: 70,
    symbol: "Yb",
    name: "Iterbio",
  },
  {
    atomicNumber: 71,
    symbol: "Lu",
    name: "Lutecio",
  },
  {
    atomicNumber: 72,
    symbol: "Hf",
    name: "Hafnio",
  },
  {
    atomicNumber: 73,
    symbol: "Ta",
    name: "Tantalio",
  },
  {
    atomicNumber: 74,
    symbol: "W",
    name: "Wolframio",
  },
  {
    atomicNumber: 75,
    symbol: "Re",
    name: "Renio",
  },
  {
    atomicNumber: 76,
    symbol: "Os",
    name: "Osmio",
  },
  {
    atomicNumber: 77,
    symbol: "Ir",
    name: "Iridio",
  },
  {
    atomicNumber: 78,
    symbol: "Pt",
    name: "Platino",
  },
  {
    atomicNumber: 79,
    symbol: "Au",
    name: "Oro",
  },
  {
    atomicNumber: 80,
    symbol: "Hg",
    name: "Mercurio",
  },
  {
    atomicNumber: 81,
    symbol: "Tl",
    name: "Talio",
  },
  {
    atomicNumber: 82,
    symbol: "Pb",
    name: "Plomo",
  },
  {
    atomicNumber: 83,
    symbol: "Bi",
    name: "Bismuto",
  },
  {
    atomicNumber: 84,
    symbol: "Po",
    name: "Polonio",
  },
  {
    atomicNumber: 85,
    symbol: "At",
    name: "Astato",
  },
  {
    atomicNumber: 86,
    symbol: "Rn",
    name: "Radon",
  },
  {
    atomicNumber: 87,
    symbol: "Fr",
    name: "Francio",
  },
  {
    atomicNumber: 88,
    symbol: "Ra",
    name: "Radio",
  },
  {
    atomicNumber: 89,
    symbol: "Ac",
    name: "Actinio",
  },
  {
    atomicNumber: 90,
    symbol: "Th",
    name: "Torio",
  },
  {
    atomicNumber: 91,
    symbol: "Pa",
    name: "Protactinio",
  },
  {
    atomicNumber: 92,
    symbol: "U",
    name: "Uranio",
  },
  {
    atomicNumber: 93,
    symbol: "Np",
    name: "Neptunio",
  },
  {
    atomicNumber: 94,
    symbol: "Pu",
    name: "Plutonio",
  },
  {
    atomicNumber: 95,
    symbol: "Am",
    name: "Americio",
  },
  {
    atomicNumber: 96,
    symbol: "Cm",
    name: "Curio",
  },
  {
    atomicNumber: 97,
    symbol: "Bk",
    name: "Berkelio",
  },
  {
    atomicNumber: 98,
    symbol: "Cf",
    name: "Californio",
  },
  {
    atomicNumber: 99,
    symbol: "Es",
    name: "Einstenio",
  },
  {
    atomicNumber: 100,
    symbol: "Fm",
    name: "Fermio",
  },
  {
    atomicNumber: 101,
    symbol: "Md",
    name: "Mendelevio",
  },
  {
    atomicNumber: 102,
    symbol: "No",
    name: "Nobelio",
  },
  {
    atomicNumber: 103,
    symbol: "Lr",
    name: "Laurencio",
  },
  {
    atomicNumber: 104,
    symbol: "Rf",
    name: "Rutherfordio",
  },
  {
    atomicNumber: 105,
    symbol: "Db",
    name: "Dubnio",
  },
  {
    atomicNumber: 106,
    symbol: "Sg",
    name: "Seaborgio",
  },
  {
    atomicNumber: 107,
    symbol: "Bh",
    name: "Bohrio",
  },
  {
    atomicNumber: 108,
    symbol: "Hs",
    name: "Hassio",
  },
  {
    atomicNumber: 109,
    symbol: "Mt",
    name: "Meitnerio",
  },
  {
    atomicNumber: 110,
    symbol: "Ds",
    name: "Darmstadtio",
  },
  {
    atomicNumber: 111,
    symbol: "Rg",
    name: "Roentgenio",
  },
  {
    atomicNumber: 112,
    symbol: "Cn",
    name: "Copernicio",
  },
  {
    atomicNumber: 113,
    symbol: "Nh",
    name: "Nihonio",
  },
  {
    atomicNumber: 114,
    symbol: "Fl",
    name: "Flerovio",
  },
  {
    atomicNumber: 115,
    symbol: "Mc",
    name: "Moscovio",
  },
  {
    atomicNumber: 116,
    symbol: "Lv",
    name: "Livermorio",
  },
  {
    atomicNumber: 117,
    symbol: "Ts",
    name: "Tenesino",
  },
  {
    atomicNumber: 118,
    symbol: "Og",
    name: "Oganeson",
  },
]
  .map((element) => {
    const atomicNumber = element.atomicNumber;
    return {
      ...element,
      position: getPosition(atomicNumber),
      hide:
        (atomicNumber >= 58 && atomicNumber <= 71) ||
        (atomicNumber >= 90 && atomicNumber <= 117),
    };
  })
  .filter((element) => !element.hide);
