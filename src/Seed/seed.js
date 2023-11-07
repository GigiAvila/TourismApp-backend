const seed = {
  destinations: [
    {
      country: 'Spain',

      cities: [
        {
          _cityId: 1,
          name: 'Madrid',
          _users: [1, 16],
          _hotels: [
            {
              _hotelId: 1,
              name: 'Melia',
              _users: []
            },
            {
              _hotelId: 2,
              name: 'Holiday Inn',
              _users: []
            },
            {
              _hotelId: 3,
              name: 'Riu',
              _users: []
            },
            {
              _hotelId: 4,
              name: 'Hilton',
              _users: [1, 16]
            }
          ],
          _excursions: [
            {
              _excursionId: 1,
              name: 'Toledo Day Trip',
              _users: []
            },
            {
              _excursionId: 2,
              name: 'Segovia Excursion',
              _users: []
            },
            {
              _excursionId: 3,
              name: 'Avila Tour',
              _users: [1, 16]
            }
          ]
        },
        {
          _cityId: 2,
          name: 'Barcelona',
          _users: [2, 14],
          _hotels: [
            {
              _hotelId: 5,
              name: 'Marriott',
              _users: [2]
            },
            {
              _hotelId: 6,
              name: 'Hilton',
              _users: []
            },
            {
              _hotelId: 7,
              name: 'Iberostar',
              _users: [14]
            }
          ],
          _excursions: [
            {
              _excursionId: 4,
              name: 'Montserrat Day Trip',
              _users: [14]
            },
            {
              _excursionId: 5,
              name: 'Costa Brava Excursion',
              _users: [2]
            },
            {
              _excursionId: 6,
              name: 'Tarragona Tour',
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
          _users: [15, 3],
          _hotels: [
            {
              _hotelId: 8,
              name: 'Sheraton',
              _users: [15]
            },
            {
              _hotelId: 9,
              name: 'Novotel',
              _users: [3]
            },
            {
              _hotelId: 10,
              name: 'Accor',
              _users: []
            },
            {
              _hotelId: 11,
              name: 'Hyatt',
              _users: []
            }
          ],
          _excursions: [
            { _excursionId: 7, name: 'Versailles Palace Day Trip', _users: [] },
            {
              _excursionId: 8,
              name: 'Mont Saint-Michel Excursion',
              _users: [3, 15]
            },
            { _excursionId: 9, name: 'Champagne Tour', _users: [3] }
          ]
        },
        {
          _cityId: 4,
          name: 'Nice',
          _users: [4],
          _hotels: [
            {
              _hotelId: 12,
              name: 'Radisson Blu',
              _users: []
            },
            {
              _hotelId: 13,
              name: 'Best Western',
              _users: [4]
            },
            {
              _hotelId: 14,
              name: 'Le Meridien',
              _users: []
            }
          ],
          _excursions: [
            {
              _excursionId: 10,
              name: 'Monaco Day Trip',
              _users: [4]
            },
            { _excursionId: 11, name: 'Cannes Excursion', _users: [4] },
            { _excursionId: 12, name: 'Eze Tour', _users: [4] }
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
          _users: [17, 5],
          _hotels: [
            {
              _hotelId: 15,
              name: 'InterContinental',
              _users: [17]
            },
            {
              _hotelId: 16,
              name: 'Crowne Plaza',
              _users: []
            },
            {
              _hotelId: 17,
              name: 'Maritim',
              _users: [5]
            }
          ],
          _excursions: [
            { _excursionId: 13, name: 'Potsdam Day Trip', _users: [17] },
            { _excursionId: 14, name: 'Dresden Excursion', _users: [] },
            { _excursionId: 15, name: 'Leipzig Tour', _users: [] }
          ]
        },
        {
          _cityId: 6,
          name: 'Munich',
          _users: [6, 11],
          _hotels: [
            {
              _hotelId: 18,
              name: 'Hilton',
              _users: []
            },
            {
              _hotelId: 19,
              name: 'Sofitel',
              _users: [6]
            },
            {
              _hotelId: 20,
              name: 'Four Seasons',
              _users: [11]
            }
          ],
          _excursions: [
            {
              _excursionId: 16,
              name: 'Neuschwanstein Castle Day Trip',
              _users: [11]
            },
            { _excursionId: 17, name: 'Salzburg Excursion', _users: [] },
            { _excursionId: 18, name: 'Nuremberg Tour', _users: [6] }
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
          _users: [7],
          _hotels: [
            {
              _hotelId: 21,
              name: 'Tivoli',
              _users: [7]
            },
            {
              _hotelId: 22,
              name: 'PortoBay',
              _users: []
            },
            {
              _hotelId: 23,
              name: 'Pestana',
              _users: []
            }
          ],
          _excursions: [
            { _excursionId: 19, name: 'Sintra Day Trip', _users: [] },
            { _excursionId: 20, name: 'Cascais Excursion', _users: [] },
            { _excursionId: 21, name: 'Fátima Tour', _users: [] }
          ]
        },
        {
          _cityId: 8,
          name: 'Porto',
          _users: [12, 8],
          _hotels: [
            {
              _hotelId: 24,
              name: 'InterContinental',
              _users: []
            },
            {
              _hotelId: 25,
              name: 'Pestana',
              _users: [12]
            },
            {
              _hotelId: 26,
              name: 'Sheraton',
              _users: []
            }
          ],
          _excursions: [
            { _excursionId: 22, name: 'Douro Valley Day Trip', _users: [8] },
            { _excursionId: 23, name: 'Guimaraes Excursion', _users: [8, 12] },
            { _excursionId: 24, name: 'Aveiro Tour', _users: [] }
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
          _users: [18, 9],
          _hotels: [
            {
              _hotelId: 27,
              name: 'Copacabana Palace',
              _users: [18]
            },
            {
              _hotelId: 28,
              name: 'Sheraton',
              _users: []
            },
            {
              _hotelId: 29,
              name: 'JW Marriott',
              _users: [9]
            }
          ],
          _excursions: [
            { _excursionId: 25, name: 'Iguazu Falls Day Trip', _users: [18] },
            {
              _excursionId: 26,
              name: 'Angra dos Reis Excursion',
              _users: [9, 18]
            },
            { _excursionId: 27, name: 'Niteroi Tour', _users: [] }
          ]
        },
        {
          _cityId: 10,
          name: 'Sao Paulo',
          _users: [10, 13],
          _hotels: [
            {
              _hotelId: 30,
              name: 'Renaissance',
              _users: [10]
            },
            {
              _hotelId: 31,
              name: 'Hilton',
              _users: []
            },
            {
              _hotelId: 32,
              name: 'Pullman',
              _users: [13]
            }
          ],
          _excursions: [
            { _excursionId: 28, name: 'Santos Beach Day Trip', _users: [13] },
            { _excursionId: 29, name: 'Campinas Excursion', _users: [10, 13] },
            {
              _excursionId: 30,
              name: 'Embú das Artes Tour',
              _users: [10, 13]
            }
          ]
        }
      ]
    }
  ],
  users: [
    {
      name: 'John',
      surname: 'Doe',
      country: 'USA',
      email: 'john.doe@example.com',
      _userId: 1,
      selection: {
        _cityId: 1,
        _hotelId: 4,
        _excursionId: [3]
      }
    },
    {
      name: 'Alice',
      surname: 'Smith',
      country: 'Canada',
      email: 'alice.smith@example.com',
      _userId: 2,
      selection: {
        _cityId: 2,
        _hotelId: 5,
        _excursionId: [5, 6]
      }
    },
    {
      name: 'Maria',
      surname: 'Garcia',
      country: 'Spain',
      email: 'maria.garcia@example.com',
      _userId: 3,
      selection: {
        _cityId: 3,
        _hotelId: 9,
        _excursionId: [8, 9]
      }
    },
    {
      name: 'Elsa',
      surname: 'Andersen',
      country: 'Denmark',
      email: 'elsa.andersen@example.com',
      _userId: 4,
      selection: {
        _cityId: 4,
        _hotelId: 13,
        _excursionId: [10, 11, 12]
      }
    },
    {
      name: 'Luca',
      surname: 'Rossi',
      country: 'Italy',
      email: 'luca.rossi@example.com',
      _userId: 5,
      selection: {
        _cityId: 5,
        _hotelId: 17,
        _excursionId: []
      }
    },
    {
      name: 'Michael',
      surname: 'Johnson',
      country: 'USA',
      email: 'michael.johnson@example.com',
      _userId: 6,
      selection: {
        _cityId: 6,
        _hotelId: 19,
        _excursionId: [18]
      }
    },
    {
      name: 'Sophie',
      surname: 'Brown',
      country: 'Canada',
      email: 'sophie.brown@example.com',
      _userId: 7,
      selection: {
        _cityId: 7,
        _hotelId: 21,
        _excursionId: []
      }
    },
    {
      name: 'Carlos',
      surname: 'Gomez',
      country: 'Spain',
      email: 'carlos.gomez@example.com',
      _userId: 8,
      selection: {
        _cityId: 8,
        _hotelId: '',
        _excursionId: [22, 23]
      }
    },
    {
      name: 'Lara',
      surname: 'Gonzalez',
      country: 'Chile',
      email: 'lars.gonzalez@example.com',
      _userId: 9,
      selection: {
        _cityId: 9,
        _hotelId: 29,
        _excursionId: [26]
      }
    },
    {
      name: 'Isabella',
      surname: 'Rossi',
      country: 'Italy',
      email: 'isabella.rossi@example.com',
      _userId: 10,
      selection: {
        _cityId: 10,
        _hotelId: 30,
        _excursionId: [30, 29]
      }
    },
    {
      name: 'Emil',
      surname: 'Petersen',
      country: 'Denmark',
      email: 'emil.petersen@example.com',
      _userId: 11,
      selection: {
        _cityId: 6,
        _hotelId: 20,
        _excursionId: [16]
      }
    },
    {
      name: 'Takashi',
      surname: 'Yamamoto',
      country: 'Japan',
      email: 'takashi.yamamoto@example.com',
      _userId: 12,
      selection: {
        _cityId: 8,
        _hotelId: 25,
        _excursionId: [23]
      }
    },
    {
      name: 'Olivia',
      surname: 'Miller',
      country: 'USA',
      email: 'olivia.miller@example.com',
      _userId: 13,
      selection: {
        _cityId: 10,
        _hotelId: 32,
        _excursionId: [28, 29, 30]
      }
    },
    {
      name: 'Matteo',
      surname: 'Ferrari',
      country: 'Italy',
      email: 'matteo.ferrari@example.com',
      _userId: 14,
      selection: {
        _cityId: 2,
        _hotelId: 7,
        _excursionId: [4, 6]
      }
    },
    {
      name: 'Eva',
      surname: 'Ty',
      country: 'Corea',
      email: 'eva.andersson@example.com',
      _userId: 15,
      selection: {
        _cityId: 3,
        _hotelId: 8,
        _excursionId: [8]
      }
    },
    {
      name: 'Hannah',
      surname: 'Wilson',
      country: 'Australia',
      email: 'hannah.wilson@example.com',
      _userId: 16,
      selection: {
        _cityId: 1,
        _hotelId: 4,
        _excursionId: [3]
      }
    },
    {
      name: 'Rajesh',
      surname: 'Kumar',
      country: 'India',
      email: 'rajesh.kumar@example.com',
      _userId: 17,
      selection: {
        _cityId: 5,
        _hotelId: 15,
        _excursionId: [13]
      }
    },
    {
      name: 'Li Wei',
      surname: 'Chen',
      country: 'China',
      email: 'liwei.chen@example.com',
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
