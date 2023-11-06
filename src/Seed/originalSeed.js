const seed = {
  destinations: [
    {
      country: 'Spain',
      cities: [
        {
          _cityId: 1,
          name: 'Madrid',
          hotels: [
            {
              _hotelId: 1,
              name: 'Melia',
              users: []
            },
            {
              _hotelId: 2,
              name: 'Holiday Inn',
              users: []
            },
            {
              _hotelId: 3,
              name: 'Riu',
              users: []
            },
            {
              _hotelId: 4,
              name: 'Hilton',
              users: [1, 16]
            }
          ],
          excursions: [
            {
              _excursionId: 1,
              name: 'Toledo Day Trip',
              users: []
            },
            {
              _excursionId: 2,
              name: 'Segovia Excursion',
              users: []
            },
            {
              _excursionId: 3,
              name: 'Avila Tour',
              users: [1, 16]
            }
          ]
        },
        {
          _cityId: 2,
          name: 'Barcelona',
          hotels: [
            {
              _hotelId: 5,
              name: 'Marriott',
              users: [2]
            },
            {
              _hotelId: 6,
              name: 'Hilton',
              users: []
            },
            {
              _hotelId: 7,
              name: 'Iberostar',
              users: [14]
            }
          ],
          excursions: [
            {
              _excursionId: 4,
              name: 'Montserrat Day Trip',
              users: [14]
            },
            {
              _excursionId: 5,
              name: 'Costa Brava Excursion',
              users: [2]
            },
            {
              _excursionId: 6,
              name: 'Tarragona Tour',
              users: [2, 14]
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
          hotels: [
            {
              _hotelId: 8,
              name: 'Sheraton',
              users: [15]
            },
            {
              _hotelId: 9,
              name: 'Novotel',
              users: [3]
            },
            {
              _hotelId: 10,
              name: 'Accor',
              users: []
            },
            {
              _hotelId: 11,
              name: 'Hyatt',
              users: []
            }
          ],
          excursions: [
            { _excursionId: 7, name: 'Versailles Palace Day Trip', users: [] },
            {
              _excursionId: 8,
              name: 'Mont Saint-Michel Excursion',
              users: [3, 15]
            },
            { _excursionId: 9, name: 'Champagne Tour', users: [3] }
          ]
        },
        {
          _cityId: 4,
          name: 'Nice',
          hotels: [
            {
              _hotelId: 12,
              name: 'Radisson Blu',
              users: []
            },
            {
              _hotelId: 13,
              name: 'Best Western',
              users: [4]
            },
            {
              _hotelId: 14,
              name: 'Le Meridien',
              users: []
            }
          ],
          excursions: [
            {
              _excursionId: 10,
              name: 'Monaco Day Trip',
              users: [4]
            },
            { _excursionId: 11, name: 'Cannes Excursion', users: [4] },
            { _excursionId: 12, name: 'Eze Tour', users: [4] }
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
          hotels: [
            {
              _hotelId: 15,
              name: 'InterContinental',
              users: [17]
            },
            {
              _hotelId: 16,
              name: 'Crowne Plaza',
              users: []
            },
            {
              _hotelId: 17,
              name: 'Maritim',
              users: [5]
            }
          ],
          excursions: [
            { _excursionId: 13, name: 'Potsdam Day Trip', users: [17] },
            { _excursionId: 14, name: 'Dresden Excursion', users: [] },
            { _excursionId: 15, name: 'Leipzig Tour', users: [] }
          ]
        },
        {
          _cityId: 6,
          name: 'Munich',
          hotels: [
            {
              _hotelId: 18,
              name: 'Hilton',
              users: []
            },
            {
              _hotelId: 19,
              name: 'Sofitel',
              users: [6]
            },
            {
              _hotelId: 20,
              name: 'Four Seasons',
              users: [11]
            }
          ],
          excursions: [
            {
              _excursionId: 16,
              name: 'Neuschwanstein Castle Day Trip',
              users: [11]
            },
            { _excursionId: 17, name: 'Salzburg Excursion', users: [] },
            { _excursionId: 18, name: 'Nuremberg Tour', users: [6] }
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
          hotels: [
            {
              _hotelId: 21,
              name: 'Tivoli',
              users: [7]
            },
            {
              _hotelId: 22,
              name: 'PortoBay',
              users: []
            },
            {
              _hotelId: 23,
              name: 'Pestana',
              users: []
            }
          ],
          excursions: [
            { _excursionId: 19, name: 'Sintra Day Trip', users: [] },
            { _excursionId: 20, name: 'Cascais Excursion', users: [] },
            { _excursionId: 21, name: 'Fátima Tour', users: [] }
          ]
        },
        {
          _cityId: 8,
          name: 'Porto',
          hotels: [
            {
              _hotelId: 24,
              name: 'InterContinental',
              users: []
            },
            {
              _hotelId: 25,
              name: 'Pestana',
              users: [12]
            },
            {
              _hotelId: 26,
              name: 'Sheraton',
              users: []
            }
          ],
          excursions: [
            { _excursionId: 22, name: 'Douro Valley Day Trip', users: [8] },
            { _excursionId: 23, name: 'Guimaraes Excursion', users: [8, 12] },
            { _excursionId: 24, name: 'Aveiro Tour', users: [] }
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
          hotels: [
            {
              _hotelId: 27,
              name: 'Copacabana Palace',
              users: [18]
            },
            {
              _hotelId: 28,
              name: 'Sheraton',
              users: []
            },
            {
              _hotelId: 29,
              name: 'JW Marriott',
              users: [9]
            }
          ],
          excursions: [
            { _excursionId: 25, name: 'Iguazu Falls Day Trip', users: [18] },
            {
              _excursionId: 26,
              name: 'Angra dos Reis Excursion',
              users: [9, 18]
            },
            { _excursionId: 27, name: 'Niteroi Tour', users: [] }
          ]
        },
        {
          _cityId: 10,
          name: 'Sao Paulo',
          hotels: [
            {
              _hotelId: 30,
              name: 'Renaissance',
              users: [10]
            },
            {
              _hotelId: 31,
              name: 'Hilton',
              users: []
            },
            {
              _hotelId: 32,
              name: 'Pullman',
              users: [13]
            }
          ],
          excursions: [
            { _excursionId: 28, name: 'Santos Beach Day Trip', users: [13] },
            { _excursionId: 29, name: 'Campinas Excursion', users: [10, 13] },
            {
              _excursionId: 30,
              name: 'Embú das Artes Tour',
              users: [10, 13]
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
        city: 1,
        hotel: 4,
        excursions: [3]
      }
    },
    {
      name: 'Alice',
      surname: 'Smith',
      country: 'Canada',
      email: 'alice.smith@example.com',
      _userId: 2,
      selection: {
        city: 2,
        hotel: 5,
        excursions: [5, 6]
      }
    },
    {
      name: 'Maria',
      surname: 'Garcia',
      country: 'Spain',
      email: 'maria.garcia@example.com',
      _userId: 3,
      selection: {
        city: 3,
        hotel: 9,
        excursions: [8, 9]
      }
    },
    {
      name: 'Elsa',
      surname: 'Andersen',
      country: 'Denmark',
      email: 'elsa.andersen@example.com',
      _userId: 4,
      selection: {
        city: 4,
        hotel: 13,
        excursions: [10, 11, 12]
      }
    },
    {
      name: 'Luca',
      surname: 'Rossi',
      country: 'Italy',
      email: 'luca.rossi@example.com',
      _userId: 5,
      selection: {
        city: 5,
        hotel: 17,
        excursions: []
      }
    },
    {
      name: 'Michael',
      surname: 'Johnson',
      country: 'USA',
      email: 'michael.johnson@example.com',
      _userId: 6,
      selection: {
        city: 6,
        hotel: 19,
        excursions: [18]
      }
    },
    {
      name: 'Sophie',
      surname: 'Brown',
      country: 'Canada',
      email: 'sophie.brown@example.com',
      _userId: 7,
      selection: {
        city: 7,
        hotel: 21,
        excursions: []
      }
    },
    {
      name: 'Carlos',
      surname: 'Gomez',
      country: 'Spain',
      email: 'carlos.gomez@example.com',
      _userId: 8,
      selection: {
        city: 8,
        hotel: '',
        excursions: [22, 23]
      }
    },
    {
      name: 'Lara',
      surname: 'Gonzalez',
      country: 'Chile',
      email: 'lars.gonzalez@example.com',
      _userId: 9,
      selection: {
        city: 9,
        hotel: 29,
        excursions: [26]
      }
    },
    {
      name: 'Isabella',
      surname: 'Rossi',
      country: 'Italy',
      email: 'isabella.rossi@example.com',
      _userId: 10,
      selection: {
        city: 10,
        hotel: 30,
        excursions: [30, 29]
      }
    },
    {
      name: 'Emil',
      surname: 'Petersen',
      country: 'Denmark',
      email: 'emil.petersen@example.com',
      _userId: 11,
      selection: {
        city: 6,
        hotel: 20,
        excursions: [16]
      }
    },
    {
      name: 'Takashi',
      surname: 'Yamamoto',
      country: 'Japan',
      email: 'takashi.yamamoto@example.com',
      _userId: 12,
      selection: {
        city: 8,
        hotel: 25,
        excursions: [23]
      }
    },
    {
      name: 'Olivia',
      surname: 'Miller',
      country: 'USA',
      email: 'olivia.miller@example.com',
      _userId: 13,
      selection: {
        city: 10,
        hotel: 32,
        excursions: [28, 29, 30]
      }
    },
    {
      name: 'Matteo',
      surname: 'Ferrari',
      country: 'Italy',
      email: 'matteo.ferrari@example.com',
      _userId: 14,
      selection: {
        city: 2,
        hotel: 7,
        excursions: [4, 6]
      }
    },
    {
      name: 'Eva',
      surname: 'Ty',
      country: 'Corea',
      email: 'eva.andersson@example.com',
      _userId: 15,
      selection: {
        city: 3,
        hotel: 8,
        excursions: [8]
      }
    },
    {
      name: 'Hannah',
      surname: 'Wilson',
      country: 'Australia',
      email: 'hannah.wilson@example.com',
      _userId: 16,
      selection: {
        city: 1,
        hotel: 4,
        excursions: [3]
      }
    },
    {
      name: 'Rajesh',
      surname: 'Kumar',
      country: 'India',
      email: 'rajesh.kumar@example.com',
      _userId: 17,
      selection: {
        city: 5,
        hotel: 15,
        excursions: [13]
      }
    },
    {
      name: 'Li Wei',
      surname: 'Chen',
      country: 'China',
      email: 'liwei.chen@example.com',
      _userId: 18,
      selection: {
        city: 9,
        hotel: 27,
        excursions: [25, 26]
      }
    }
  ]
}

module.exports = seed
