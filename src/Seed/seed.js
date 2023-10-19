const seed = {
  destinations: [
    {
      country: 'Spain',
      cities: [
        {
          name: 'Madrid',
          hotels: [
            {
              name: 'Melia',
              users: []
            },
            {
              name: 'Holiday Inn',
              users: []
            },
            {
              name: 'Riu',
              users: []
            },
            {
              name: 'Hilton',
              users: [1, 16]
            }
          ],
          excursions: [
            {
              name: 'Toledo Day Trip',
              users: []
            },
            {
              name: 'Segovia Excursion',
              users: []
            },
            {
              name: 'Avila Tour',
              users: [1, 16]
            }
          ]
        },
        {
          name: 'Barcelona',
          hotels: [
            {
              name: 'Marriott',
              users: [2]
            },
            {
              name: 'Hilton',
              users: []
            },
            {
              name: 'Iberostar',
              users: [14]
            }
          ],
          excursions: [
            {
              name: 'Montserrat Day Trip',
              users: [14]
            },
            {
              name: 'Costa Brava Excursion',
              users: [2]
            },
            {
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
          name: 'Paris',
          hotels: [
            {
              name: 'Sheraton',
              users: [15]
            },
            {
              name: 'Novotel',
              users: [3]
            },
            {
              name: 'Accor',
              users: []
            },
            {
              name: 'Hyatt',
              users: []
            }
          ],
          excursions: [
            {
              name: 'Versailles Palace Day Trip',
              users: []
            },
            {
              name: 'Mont Saint-Michel Excursion',
              users: [3, 15]
            },
            {
              name: 'Champagne Tour',
              users: [3]
            }
          ]
        },
        {
          name: 'Nice',
          hotels: [
            {
              name: 'Radisson Blu',
              users: []
            },
            {
              name: 'Best Western',
              users: [4]
            },
            {
              name: 'Le Meridien',
              users: []
            }
          ],
          excursions: [
            {
              name: 'Monaco Day Trip',
              users: [4]
            },
            {
              name: 'Cannes Excursion',
              users: [4]
            },
            {
              name: 'Eze Tour',
              users: [4]
            }
          ]
        }
      ]
    },
    {
      country: 'Germany',
      cities: [
        {
          name: 'Berlin',
          hotels: [
            {
              name: 'InterContinental',
              users: [17]
            },
            {
              name: 'Crowne Plaza',
              users: []
            },
            {
              name: 'Maritim',
              users: [5]
            }
          ],
          excursions: [
            {
              name: 'Potsdam Day Trip',
              users: [17]
            },
            {
              name: 'Dresden Excursion',
              users: []
            },
            {
              name: 'Leipzig Tour',
              users: []
            }
          ]
        },
        {
          name: 'Munich',
          hotels: [
            {
              name: 'Hilton',
              users: []
            },
            {
              name: 'Sofitel',
              users: [6]
            },
            {
              name: 'Four Seasons',
              users: [11]
            }
          ],
          excursions: [
            {
              name: 'Neuschwanstein Castle Day Trip',
              users: [11]
            },
            {
              name: 'Salzburg Excursion',
              users: []
            },
            {
              name: 'Nuremberg Tour',
              users: [6]
            }
          ]
        }
      ]
    },
    {
      country: 'Portugal',
      cities: [
        {
          name: 'Lisbon',
          hotels: [
            {
              name: 'Tivoli',
              users: [7]
            },
            {
              name: 'PortoBay',
              users: []
            },
            {
              name: 'Pestana',
              users: []
            }
          ],
          excursions: [
            {
              name: 'Sintra Day Trip',
              users: []
            },
            {
              name: 'Cascais Excursion',
              users: []
            },
            {
              name: 'Fátima Tour',
              users: []
            }
          ]
        },
        {
          name: 'Porto',
          hotels: [
            {
              name: 'InterContinental',
              users: []
            },
            {
              name: 'Pestana',
              users: [12]
            },
            {
              name: 'Sheraton',
              users: []
            }
          ],
          excursions: [
            {
              name: 'Douro Valley Day Trip',
              users: [8]
            },
            {
              name: 'Guimaraes Excursion',
              users: [8, 12]
            },
            {
              name: 'Aveiro Tour',
              users: []
            }
          ]
        }
      ]
    },
    {
      country: 'Brazil',
      cities: [
        {
          name: 'Rio de Janeiro',
          hotels: [
            {
              name: 'Copacabana Palace',
              users: [18]
            },
            {
              name: 'Sheraton',
              users: []
            },
            {
              name: 'JW Marriott',
              users: [9]
            }
          ],
          excursions: [
            {
              name: 'Iguazu Falls Day Trip',
              users: [18]
            },
            {
              name: 'Angra dos Reis Excursion',
              users: [9, 18]
            },
            {
              name: 'Niteroi Tour',
              users: []
            }
          ]
        },
        {
          name: 'Sao Paulo',
          hotels: [
            {
              name: 'Renaissance',
              users: [10]
            },
            {
              name: 'Hilton',
              users: []
            },
            {
              name: 'Pullman',
              users: [13]
            }
          ],
          excursions: [
            {
              name: 'Santos Beach Day Trip',
              users: [13]
            },
            {
              name: 'Campinas Excursion',
              users: [10, 13]
            },
            {
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
      selections: [
        {
          city: 'Madrid',
          hotel: 'Hilton',
          excursion: ['Avila Tour']
        }
      ]
    },
    {
      name: 'Alice',
      surname: 'Smith',
      country: 'Canada',
      email: 'alice.smith@example.com',
      _userId: 2,
      selections: [
        {
          city: 'Barcelona',
          hotel: 'Marriott',
          excursion: ['Costa Brava Excursion', 'Tarragona Tour']
        }
      ]
    },
    {
      name: 'Maria',
      surname: 'Garcia',
      country: 'Spain',
      email: 'maria.garcia@example.com',
      _userId: 3,
      selections: [
        {
          city: 'Paris',
          hotel: 'Novotel',
          excursion: ['Mont Saint-Michel Excursion', 'Champagne Tour']
        }
      ]
    },
    {
      name: 'Elsa',
      surname: 'Andersen',
      country: 'Denmark',
      email: 'elsa.andersen@example.com',
      _userId: 4,
      selections: [
        {
          city: 'Nice',
          hotel: 'Best Western',
          excursion: ['Monaco Day Trip', 'Cannes Excursion', 'Eze Tour']
        }
      ]
    },
    {
      name: 'Luca',
      surname: 'Rossi',
      country: 'Italy',
      email: 'luca.rossi@example.com',
      _userId: 5,
      selections: [
        {
          city: 'Berlin',
          hotel: 'Maritim',
          excursion: []
        }
      ]
    },
    {
      name: 'Michael',
      surname: 'Johnson',
      country: 'USA',
      email: 'michael.johnson@example.com',
      _userId: 6,
      selections: [
        {
          city: 'Munich',
          hotel: 'Sofitel',
          excursion: ['Nuremberg Tour']
        }
      ]
    },
    {
      name: 'Sophie',
      surname: 'Brown',
      country: 'Canada',
      email: 'sophie.brown@example.com',
      _userId: 7,
      selections: [
        {
          city: 'Lisbon',
          hotel: 'Tivoli',
          excursion: []
        }
      ]
    },
    {
      name: 'Carlos',
      surname: 'Gomez',
      country: 'Spain',
      email: 'carlos.gomez@example.com',
      _userId: 8,
      selections: [
        {
          city: 'Porto',
          hotel: '',
          excursion: ['Douro Valley Day Trip', 'Guimaraes Excursion']
        }
      ]
    },
    {
      name: 'Lara',
      surname: 'Gonzalez',
      country: 'Chile',
      email: 'lars.gonzalez@example.com',
      _userId: 9,
      selections: [
        {
          city: 'Rio de Janeiro',
          hotel: 'JW Marriott',
          excursion: ['Angra dos Reis Excursion']
        }
      ]
    },
    {
      name: 'Isabella',
      surname: 'Rossi',
      country: 'Italy',
      email: 'isabella.rossi@example.com',
      _userId: 10,
      selections: [
        {
          city: 'Sao Paulo',
          hotel: 'Renaissance',
          excursion: ['Embú das Artes Tour', 'Campinas Excursion']
        }
      ]
    },
    {
      name: 'Emil',
      surname: 'Petersen',
      country: 'Denmark',
      email: 'emil.petersen@example.com',
      _userId: 11,
      selections: [
        {
          city: 'Munich',
          hotel: 'Four Seasons',
          excursion: ['Neuschwanstein Castle Day Trip']
        }
      ]
    },
    {
      name: 'Takashi',
      surname: 'Yamamoto',
      country: 'Japan',
      email: 'takashi.yamamoto@example.com',
      _userId: 12,
      selections: [
        {
          city: 'Porto',
          hotel: 'Pestana',
          excursion: ['Guimaraes Excursion']
        }
      ]
    },
    {
      name: 'Olivia',
      surname: 'Miller',
      country: 'USA',
      email: 'olivia.miller@example.com',
      _userId: 13,
      selections: [
        {
          city: 'Sao Paulo',
          hotel: 'Pullman',
          excursion: [
            'Santos Beach Day Trip',
            'Campinas Excursion',
            'Embú das Artes Tour'
          ]
        }
      ]
    },
    {
      name: 'Matteo',
      surname: 'Ferrari',
      country: 'Italy',
      email: 'matteo.ferrari@example.com',
      _userId: 14,
      selections: [
        {
          city: 'Barcelona',
          hotel: 'Iberostar',
          excursion: ['Montserrat Day Trip', 'Tarragona Tour']
        }
      ]
    },
    {
      name: 'Eva',
      surname: 'Ty',
      country: 'Corea',
      email: 'eva.andersson@example.com',
      _userId: 15,
      selections: [
        {
          city: 'Paris',
          hotel: 'Sheraton',
          excursion: ['Mont Saint-Michel Excursion']
        }
      ]
    },
    {
      name: 'Hannah',
      surname: 'Wilson',
      country: 'Australia',
      email: 'hannah.wilson@example.com',
      _userId: 16,
      selections: [
        {
          city: 'Madrid',
          hotel: 'Hilton',
          excursion: ['Avila Tour']
        }
      ]
    },
    {
      name: 'Rajesh',
      surname: 'Kumar',
      country: 'India',
      email: 'rajesh.kumar@example.com',
      _userId: 17,
      selections: [
        {
          city: 'Berlin',
          hotel: 'InterContinental',
          excursion: ['Potsdam Day Trip']
        }
      ]
    },
    {
      name: 'Li Wei',
      surname: 'Chen',
      country: 'China',
      email: 'liwei.chen@example.com',
      _userId: 18,
      selections: [
        {
          city: 'Rio de Janeiro',
          hotel: 'Copacabana Palace',
          excursion: ['Iguazu Falls Day Trip', 'Angra dos Reis Excursion']
        }
      ]
    }
  ]
}

module.exports = seed
