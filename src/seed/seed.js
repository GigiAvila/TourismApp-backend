const seed = {
  destinations: [
    {
      country: 'Spain',

      cities: [
        {
          _cityId: 1,
          name: 'Madrid',
          cityImg: 'url',
          _users: [1, 16],
          _hotels: [
            {
              _hotelId: 1,
              name: 'Melia',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 2,
              name: 'Holiday Inn',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 3,
              name: 'Riu',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 4,
              name: 'Hilton',
              hotelImg: 'url',
              _users: [1, 16]
            }
          ],
          _excursions: [
            {
              _excursionId: 1,
              name: 'Toledo Day Trip',
              excursionImg: 'url',
              _users: []
            },
            {
              _excursionId: 2,
              name: 'Segovia Excursion',
              excursionImg: 'url',
              _users: []
            },
            {
              _excursionId: 3,
              name: 'Avila Tour',
              excursionImg: 'url',
              _users: [1, 16]
            }
          ]
        },
        {
          _cityId: 2,
          name: 'Barcelona',
          cityImg: 'url',
          _users: [2, 14],
          _hotels: [
            {
              _hotelId: 5,
              name: 'Marriott',
              hotelImg: 'url',
              _users: [2]
            },
            {
              _hotelId: 6,
              name: 'Hilton',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 7,
              name: 'Iberostar',
              hotelImg: 'url',
              _users: [14]
            }
          ],
          _excursions: [
            {
              _excursionId: 4,
              name: 'Montserrat Day Trip',
              excursionImg: 'url',
              _users: [14]
            },
            {
              _excursionId: 5,
              name: 'Costa Brava Excursion',
              excursionImg: 'url',
              _users: [2]
            },
            {
              _excursionId: 6,
              name: 'Tarragona Tour',
              excursionImg: 'url',
              _users: [2, 14]
            }
          ]
        }
      ]
    },
    {
      country: 'France',

      cities: [
        {
          _cityId: 3,
          name: 'Paris',
          cityImg: 'url',
          _users: [15, 3],
          _hotels: [
            {
              _hotelId: 8,
              name: 'Sheraton',
              hotelImg: 'url',
              _users: [15]
            },
            {
              _hotelId: 9,
              name: 'Novotel',
              hotelImg: 'url',
              _users: [3]
            },
            {
              _hotelId: 10,
              name: 'Accor',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 11,
              name: 'Hyatt',
              hotelImg: 'url',
              _users: []
            }
          ],
          _excursions: [
            {
              _excursionId: 7,
              name: 'Versailles Palace Day Trip',
              excursionImg: 'url',
              _users: []
            },
            {
              _excursionId: 8,
              name: 'Mont Saint-Michel Excursion',
              excursionImg: 'url',
              _users: [3, 15]
            },
            {
              _excursionId: 9,
              name: 'Champagne Tour',
              excursionImg: 'url',
              _users: [3]
            }
          ]
        },
        {
          _cityId: 4,
          name: 'Nice',
          cityImg: 'url',
          _users: [4],
          _hotels: [
            {
              _hotelId: 12,
              name: 'Radisson Blu',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 13,
              name: 'Best Western',
              hotelImg: 'url',
              _users: [4]
            },
            {
              _hotelId: 14,
              name: 'Le Meridien',
              hotelImg: 'url',
              _users: []
            }
          ],
          _excursions: [
            {
              _excursionId: 10,
              name: 'Monaco Day Trip',
              excursionImg: 'url',
              _users: [4]
            },
            {
              _excursionId: 11,
              name: 'Cannes Excursion',
              excursionImg: 'url',
              _users: [4]
            },
            {
              _excursionId: 12,
              name: 'Eze Tour',
              excursionImg: 'url',
              _users: [4]
            }
          ]
        }
      ]
    },
    {
      country: 'Germany',

      cities: [
        {
          _cityId: 5,
          name: 'Berlin',
          cityImg: 'url',
          _users: [17, 5],
          _hotels: [
            {
              _hotelId: 15,
              name: 'InterContinental',
              hotelImg: 'url',
              _users: [17]
            },
            {
              _hotelId: 16,
              name: 'Crowne Plaza',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 17,
              name: 'Maritim',
              hotelImg: 'url',
              _users: [5]
            }
          ],
          _excursions: [
            {
              _excursionId: 13,
              name: 'Potsdam Day Trip',
              excursionImg: 'url',
              _users: [17]
            },
            {
              _excursionId: 14,
              name: 'Dresden Excursion',
              excursionImg: 'url',
              _users: []
            },
            {
              _excursionId: 15,
              name: 'Leipzig Tour',
              excursionImg: 'url',
              _users: []
            }
          ]
        },
        {
          _cityId: 6,
          name: 'Munich',
          cityImg: 'url',
          _users: [6, 11],
          _hotels: [
            {
              _hotelId: 18,
              name: 'Hilton',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 19,
              name: 'Sofitel',
              hotelImg: 'url',
              _users: [6]
            },
            {
              _hotelId: 20,
              name: 'Four Seasons',
              hotelImg: 'url',
              _users: [11]
            }
          ],
          _excursions: [
            {
              _excursionId: 16,
              name: 'Neuschwanstein Castle Day Trip',
              excursionImg: 'url',
              _users: [11]
            },
            {
              _excursionId: 17,
              name: 'Salzburg Excursion',
              excursionImg: 'url',
              _users: []
            },
            {
              _excursionId: 18,
              name: 'Nuremberg Tour',
              excursionImg: 'url',
              _users: [6]
            }
          ]
        }
      ]
    },
    {
      country: 'Portugal',

      cities: [
        {
          _cityId: 7,
          name: 'Lisbon',
          cityImg: 'url',
          _users: [7],
          _hotels: [
            {
              _hotelId: 21,
              name: 'Tivoli',
              hotelImg: 'url',
              _users: [7]
            },
            {
              _hotelId: 22,
              name: 'PortoBay',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 23,
              name: 'Pestana',
              hotelImg: 'url',
              _users: []
            }
          ],
          _excursions: [
            {
              _excursionId: 19,
              name: 'Sintra Day Trip',
              excursionImg: 'url',
              _users: []
            },
            {
              _excursionId: 20,
              name: 'Cascais Excursion',
              excursionImg: 'url',
              _users: []
            },
            {
              _excursionId: 21,
              name: 'Fátima Tour',
              excursionImg: 'url',
              _users: []
            }
          ]
        },
        {
          _cityId: 8,
          name: 'Porto',
          cityImg: 'url',
          _users: [12, 8],
          _hotels: [
            {
              _hotelId: 24,
              name: 'InterContinental',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 25,
              name: 'Pestana',
              hotelImg: 'url',
              _users: [12]
            },
            {
              _hotelId: 26,
              name: 'Sheraton',
              hotelImg: 'url',
              _users: []
            }
          ],
          _excursions: [
            {
              _excursionId: 22,
              name: 'Douro Valley Day Trip',
              excursionImg: 'url',
              _users: [8]
            },
            {
              _excursionId: 23,
              name: 'Guimaraes Excursion',
              excursionImg: 'url',
              _users: [8, 12]
            },
            {
              _excursionId: 24,
              name: 'Aveiro Tour',
              excursionImg: 'url',
              _users: []
            }
          ]
        }
      ]
    },
    {
      country: 'Brazil',

      cities: [
        {
          _cityId: 9,
          name: 'Rio de Janeiro',
          cityImg: 'url',
          _users: [18, 9],
          _hotels: [
            {
              _hotelId: 27,
              name: 'Copacabana Palace',
              hotelImg: 'url',
              _users: [18]
            },
            {
              _hotelId: 28,
              name: 'Sheraton',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 29,
              name: 'JW Marriott',
              hotelImg: 'url',
              _users: [9]
            }
          ],
          _excursions: [
            {
              _excursionId: 25,
              name: 'Iguazu Falls Day Trip',
              excursionImg: 'url',
              _users: [18]
            },
            {
              _excursionId: 26,
              name: 'Angra dos Reis Excursion',
              excursionImg: 'url',
              _users: [9, 18]
            },
            {
              _excursionId: 27,
              name: 'Niteroi Tour',
              excursionImg: 'url',
              _users: []
            }
          ]
        },
        {
          _cityId: 10,
          name: 'Sao Paulo',
          cityImg: 'url',
          _users: [10, 13],
          _hotels: [
            {
              _hotelId: 30,
              name: 'Renaissance',
              hotelImg: 'url',
              _users: [10]
            },
            {
              _hotelId: 31,
              name: 'Hilton',
              hotelImg: 'url',
              _users: []
            },
            {
              _hotelId: 32,
              name: 'Pullman',
              hotelImg: 'url',
              _users: [13]
            }
          ],
          _excursions: [
            {
              _excursionId: 28,
              name: 'Santos Beach Day Trip',
              excursionImg: 'url',
              _users: [13]
            },
            {
              _excursionId: 29,
              name: 'Campinas Excursion',
              excursionImg: 'url',
              _users: [10, 13]
            },
            {
              _excursionId: 30,
              name: 'Embú das Artes Tour',
              excursionImg: 'url',
              _users: [10, 13]
            }
          ]
        }
      ]
    }
  ],
  users: [
    {
      type: 'admin',
      name: 'Master',
      surname: 'User',
      country: 'USA',
      email: 'masterUser@example.com',
      userName: 'MasterUser',
      password: '123abc!',
      avatar: 'url',
      _userId: 0,
      selection: {
        _cityId: 0,
        _hotelId: 0,
        _excursionId: []
      }
    },
    {
      type: 'user',
      name: 'John',
      surname: 'Doe',
      country: 'USA',
      email: 'john.doe@example.com',
      userName: 'JohnDoe',
      password: '456def?',
      avatar: 'url',
      _userId: 1,
      selection: {
        _cityId: 1,
        _hotelId: 4,
        _excursionId: [3]
      }
    },
    {
      type: 'user',
      name: 'Alice',
      surname: 'Smith',
      country: 'Canada',
      email: 'alice.smith@example.com',
      userName: 'AliceSmith',
      password: '456def?',
      avatar: 'url',
      _userId: 2,
      selection: {
        _cityId: 2,
        _hotelId: 5,
        _excursionId: [5, 6]
      }
    },
    {
      type: 'user',
      name: 'Maria',
      surname: 'Garcia',
      country: 'Spain',
      email: 'maria.garcia@example.com',
      userName: 'MariaGarcia',
      password: '456def?',
      avatar: 'url',
      _userId: 3,
      selection: {
        _cityId: 3,
        _hotelId: 9,
        _excursionId: [8, 9]
      }
    },
    {
      type: 'user',
      name: 'Elsa',
      surname: 'Andersen',
      country: 'Denmark',
      email: 'elsa.andersen@example.com',
      userName: 'ElsaAndersen',
      password: '456def?',
      avatar: 'url',
      _userId: 4,
      selection: {
        _cityId: 4,
        _hotelId: 13,
        _excursionId: [10, 11, 12]
      }
    },
    {
      type: 'user',
      name: 'Luca',
      surname: 'Rossi',
      country: 'Italy',
      email: 'luca.rossi@example.com',
      userName: 'LucaRossi',
      password: '456def?',
      avatar: 'url',
      _userId: 5,
      selection: {
        _cityId: 5,
        _hotelId: 17,
        _excursionId: []
      }
    },
    {
      type: 'user',
      name: 'Michael',
      surname: 'Johnson',
      country: 'USA',
      email: 'michael.johnson@example.com',
      userName: 'MichaelJohnson',
      password: '456def?',
      avatar: 'url',
      _userId: 6,
      selection: {
        _cityId: 6,
        _hotelId: 19,
        _excursionId: [18]
      }
    },
    {
      type: 'user',
      name: 'Sophie',
      surname: 'Brown',
      country: 'Canada',
      email: 'sophie.brown@example.com',
      userName: 'SophieBrown',
      password: '456def?',
      avatar: 'url',
      _userId: 7,
      selection: {
        _cityId: 7,
        _hotelId: 21,
        _excursionId: []
      }
    },
    {
      type: 'user',
      name: 'Carlos',
      surname: 'Gomez',
      country: 'Spain',
      email: 'carlos.gomez@example.com',
      userName: 'CarlosGomez',
      password: '456def?',
      avatar: 'url',
      _userId: 8,
      selection: {
        _cityId: 8,
        _hotelId: '',
        _excursionId: [22, 23]
      }
    },
    {
      type: 'user',
      name: 'Lara',
      surname: 'Gonzalez',
      country: 'Chile',
      email: 'lars.gonzalez@example.com',
      userName: 'LaraGonzalez',
      password: '456def?',
      avatar: 'url',
      _userId: 9,
      selection: {
        _cityId: 9,
        _hotelId: 29,
        _excursionId: [26]
      }
    },
    {
      type: 'user',
      name: 'Isabella',
      surname: 'Rossi',
      country: 'Italy',
      email: 'isabella.rossi@example.com',
      userName: 'IsabellaRossi',
      password: '456def?',
      avatar: 'url',
      _userId: 10,
      selection: {
        _cityId: 10,
        _hotelId: 30,
        _excursionId: [30, 29]
      }
    },
    {
      type: 'user',
      name: 'Emil',
      surname: 'Petersen',
      country: 'Denmark',
      email: 'emil.petersen@example.com',
      userName: 'EmilPetersen',
      password: '456def?',
      avatar: 'url',
      _userId: 11,
      selection: {
        _cityId: 6,
        _hotelId: 20,
        _excursionId: [16]
      }
    },
    {
      type: 'user',
      name: 'Takashi',
      surname: 'Yamamoto',
      country: 'Japan',
      email: 'takashi.yamamoto@example.com',
      userName: 'TakashiYamamoto',
      password: '456def?',
      avatar: 'url',
      _userId: 12,
      selection: {
        _cityId: 8,
        _hotelId: 25,
        _excursionId: [23]
      }
    },
    {
      type: 'user',
      name: 'Olivia',
      surname: 'Miller',
      country: 'USA',
      email: 'olivia.miller@example.com',
      userName: 'OliviaMiller',
      password: '456def?',
      avatar: 'url',
      _userId: 13,
      selection: {
        _cityId: 10,
        _hotelId: 32,
        _excursionId: [28, 29, 30]
      }
    },
    {
      type: 'user',
      name: 'Matteo',
      surname: 'Ferrari',
      country: 'Italy',
      email: 'matteo.ferrari@example.com',
      userName: 'MatteoFerrari',
      password: '456def?',
      avatar: 'url',
      _userId: 14,
      selection: {
        _cityId: 2,
        _hotelId: 7,
        _excursionId: [4, 6]
      }
    },
    {
      type: 'user',
      name: 'Eva',
      surname: 'Ty',
      country: 'Corea',
      email: 'eva.andersson@example.com',
      userName: 'EvaTy',
      password: '456def?',
      avatar: 'url',
      _userId: 15,
      selection: {
        _cityId: 3,
        _hotelId: 8,
        _excursionId: [8]
      }
    },
    {
      type: 'user',
      name: 'Hannah',
      surname: 'Wilson',
      country: 'Australia',
      email: 'hannah.wilson@example.com',
      userName: 'HannahWilson',
      password: '456def?',
      avatar: 'url',
      _userId: 16,
      selection: {
        _cityId: 1,
        _hotelId: 4,
        _excursionId: [3]
      }
    },
    {
      type: 'user',
      name: 'Rajesh',
      surname: 'Kumar',
      country: 'India',
      email: 'rajesh.kumar@example.com',
      userName: 'RajeshKumar',
      password: '456def?',
      avatar: 'url',
      _userId: 17,
      selection: {
        _cityId: 5,
        _hotelId: 15,
        _excursionId: [13]
      }
    },
    {
      type: 'user',
      name: 'Li Wei',
      surname: 'Chen',
      country: 'China',
      email: 'liwei.chen@example.com',
      userName: 'LiWeiChen',
      password: '456def?',
      avatar: 'url',
      _userId: 18,
      selection: {
        _cityId: 9,
        _hotelId: 27,
        _excursionId: [25, 26]
      }
    }
  ]
}

module.exports = seed
