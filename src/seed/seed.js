const seed = {
  destinations: [
    {
      country: 'Spain',

      cities: [
        {
          _cityId: 1,
          name: 'Madrid',
          cityImg:
            'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713861188/florian-wehde-WBGjg0DsO_g-unsplash_fvvarg.jpg',
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
              price: 30,
              name: 'Toledo Day Trip',
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713950274/wei-hunag-Wsq7mTqt8nE-unsplash_rt6zmc.jpg',
              description:
                'Enjoy a full-day trip to the ancient city of Toledo, known for its historic buildings and rich cultural heritage.',
              duration: 60,
              cancelation: true,
              language: ['english', 'spanish'],
              _users: []
            },
            {
              _excursionId: 2,
              price: 20,
              name: 'Segovia Excursion',
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713950317/wei-hunag-3vH3ErzvH5s-unsplash_doqqad.jpg',
              description:
                'Embark on a journey to Segovia, famous for its stunning Roman aqueduct and medieval architecture.',
              duration: 30,
              cancelation: true,
              language: ['english', 'spanish'],
              _users: []
            },
            {
              _excursionId: 3,
              name: 'Avila Tour',
              price: 35,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713950352/dmitry-romanoff-NgszN8uHWpY-unsplash_dhq0rl.jpg',
              description:
                'Explore the walled city of Avila, a UNESCO World Heritage Site, and immerse yourself in its fascinating history.',
              language: ['english', 'spanish'],
              duration: 45,
              cancelation: true,
              _users: [1, 16]
            }
          ]
        },
        {
          _cityId: 2,
          name: 'Barcelona',
          cityImg:
            'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713864303/logan-armstrong-hVhfqhDYciU-unsplash_rzxn3w.jpg',
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
              price: 50,
              description:
                'Experience the beauty of Montserrat mountain and its Benedictine monastery on a day trip from Barcelona.',
              duration: 360, // 6 hours
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951090/sasha-matveeva-_UFIVvezTUI-unsplash_pixb6j.jpg',
              cancelation: true,
              language: ['english', 'spanish'],
              _users: [14]
            },
            {
              _excursionId: 5,
              name: 'Costa Brava Excursion',
              price: 80,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951095/ashwin-vaswani-Di0kRIb-giw-unsplash_wjjpcr.jpg',
              description:
                'Explore the stunning coastline of Costa Brava, with its pristine beaches and charming coastal towns.',
              duration: 420, // 7 hours
              cancelation: true,
              language: ['english', 'spanish'],
              _users: [2]
            },
            {
              _excursionId: 6,
              name: 'Tarragona Tour',
              price: 60,
              description:
                'Discover the ancient Roman ruins of Tarragona and its picturesque old town on a guided tour.',
              duration: 300, // 5 hours
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951109/michal-parzuchowski-qWFLkrw04Kk-unsplash_mjh4oq.jpg',
              cancelation: false,
              language: ['english', 'spanish'],
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
          cityImg:
            'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713864369/chris-karidis-nnzkZNYWHaU-unsplash_ctkbpv.jpg',
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
              price: 90,
              description:
                'Discover the grandeur of the Palace of Versailles and its magnificent gardens on a guided day trip from Paris.',
              duration: 360, // 6 hours
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951087/elena-rabkina-rSUnleCRZ78-unsplash_ca61n6.jpg',
              cancelation: true,
              language: ['english', 'spanish', 'french'],
              _users: []
            },
            {
              _excursionId: 8,
              name: 'Mont Saint-Michel Excursion',
              price: 70,
              description:
                'Journey to the mystical island of Mont Saint-Michel, marveling at its medieval abbey and breathtaking views.',
              duration: 420, // 7 hours
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951181/kirill-mikhaylyuk-N2pEry6m5ZA-unsplash_cm5sqw.jpg',
              cancelation: false,
              language: ['english', 'spanish', 'french'],
              _users: [3, 15]
            },
            {
              _excursionId: 9,
              name: 'Champagne Tour',
              price: 80,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951109/dan-rooney-VJNVSWXaKkY-unsplash_xc3d63.jpg',
              description:
                'Indulge in a tour of the Champagne region, visiting renowned wineries and tasting exquisite sparkling wines.',
              duration: 540,
              cancelation: true,
              language: ['english', 'spanish', 'french'],
              _users: [3]
            }
          ]
        },
        {
          _cityId: 4,
          name: 'Nice',
          cityImg:
            'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713864444/paul-teysen-ymOyn55Ztyk-unsplash_io8bxg.jpg',
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
              price: 50,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951180/roxana-crusemire-i7B3AASGeRk-unsplash_ycy8wc.jpg',
              description:
                'Embark on a glamorous day trip to Monaco, exploring its luxurious casinos, stunning coastline, and historic sites.',
              duration: 480, // 8 hours
              cancelation: true,
              language: ['english', 'spanish', 'french'],
              _users: [4]
            },
            {
              _excursionId: 11,
              name: 'Cannes Excursion',
              price: 40,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951103/diane-picchiottino-YqKOBrpaON4-unsplash_pdewh3.jpg',
              description:
                'Experience the allure of Cannes on a day excursion, wandering along the famous Croisette Boulevard and soaking in the glitz and glamour of the French Riviera.',
              duration: 360, // 6 hours
              cancelation: false,
              language: ['english', 'spanish', 'french'],
              _users: [4]
            },
            {
              _excursionId: 12,
              name: 'Eze Tour',
              price: 30,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951088/polina_hit-0Tg_wURCTls-unsplash_kvd3c1.jpg',
              description:
                'Discover the medieval charm of Eze on a guided tour, wandering through narrow streets, visiting artisan shops, and enjoying panoramic views of the Mediterranean.',
              duration: 300, // 5 hours
              cancelation: true,
              language: ['english', 'spanish', 'french'],
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
          cityImg:
            'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713864486/florian-wehde-1uWanmgkd5g-unsplash_mwmwfv.jpg',
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
              price: 50,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951103/lobostudio-hamburg-emYo6xPIk5c-unsplash_t1kj12.jpg',
              description:
                'Explore the Prussian past with a day trip to Potsdam, discovering its palaces, parks, and historic landmarks.',
              duration: 360, // 6 hours
              cancelation: true,
              language: ['english', 'spanish'],
              _users: [17]
            },
            {
              _excursionId: 14,
              name: 'Dresden Excursion',
              price: 70,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951119/olgi-h2SdEqZIYUc-unsplash_nz6a6n.jpg',
              description:
                'Step back in time with a day excursion to Dresden, admiring its baroque architecture, visiting museums, and strolling along the Elbe River.',
              duration: 480, // 8 hours
              cancelation: true,
              language: ['english', 'spanish'],
              _users: []
            },
            {
              _excursionId: 15,
              name: 'Leipzig Tour',
              price: 30,
              description:
                'Experience the vibrant cultural scene of Leipzig on a guided tour, exploring its music venues, historic squares, and bustling markets.',
              duration: 300, // 5 hours
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951158/clara-pfister-tIWf31a0168-unsplash_a6mcn4.jpg',
              language: ['english', 'spanish'],
              cancelation: true,
              _users: []
            }
          ]
        },
        {
          _cityId: 6,
          name: 'Munich',
          cityImg:
            'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713864531/ian-kelsall-MEUvVqkU3QI-unsplash_wzjd7l.jpg',
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
              price: 90,
              description:
                'Embark on a fairytale journey with a day trip to Neuschwanstein Castle, exploring its majestic architecture, scenic surroundings, and enchanting tales.',
              duration: 540, // 9 hours
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951112/felix-Au8KMj4JBDo-unsplash_mhauo1.jpg',
              cancelation: true,
              language: ['english', 'spanish'],
              _users: [11]
            },
            {
              _excursionId: 17,
              name: 'Salzburg Excursion',
              price: 80,
              description:
                "Discover the musical heritage and charming streets of Salzburg on a day excursion, visiting Mozart's birthplace, wandering through gardens, and enjoying alpine views.",
              duration: 420, // 7 hours
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951112/sarah-mutter-Ci-aV-AIwGQ-unsplash_hzzxxp.jpg',
              cancelation: false,
              language: ['english', 'spanish'],
              _users: []
            },
            {
              _excursionId: 18,
              name: 'Nuremberg Tour',
              price: 80,
              description:
                'Explore the medieval streets and rich history of Nuremberg on a guided tour, visiting its castle, museums, and famous Christmas market.',
              duration: 360, // 6 hours
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951110/thomas-winkler-GUisNBMs0m4-unsplash_kqgbfs.jpg',
              cancelation: true,
              language: ['english', 'spanish'],
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
          cityImg:
            'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713864590/aayush-gupta-ljhCEaHYWJ8-unsplash_l0w9ig.jpg',
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
              price: 60,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951087/katia-de-juan-ZQjujHKWcak-unsplash_qo46iy.jpg',
              description:
                'Embark on a journey to the enchanting town of Sintra, exploring its fairytale palaces, lush gardens, and stunning landscapes.',
              duration: 420, // 7 hours
              cancelation: true,
              language: ['english', 'spanish', 'portuguese'],
              _users: []
            },
            {
              _excursionId: 20,
              name: 'Cascais Excursion',
              price: 50,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951101/jeroen-den-otter-xwiejaD799Y-unsplash_gonk4z.jpg',
              description:
                'Discover the coastal beauty of Cascais on a guided excursion, visiting its sandy beaches, picturesque streets, and charming fishing harbor.',
              duration: 300, // 5 hours
              cancelation: true,
              language: ['english', 'spanish', 'portuguese'],
              _users: []
            },
            {
              _excursionId: 21,
              name: 'Fátima Tour',
              price: 30,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951087/santiago-ospina-hLaaWqAmuK0-unsplash_djtucy.jpg',
              description:
                'Experience the spiritual atmosphere of Fátima on a guided tour, visiting its renowned sanctuary, attending mass, and learning about its religious significance.',
              duration: 360, // 6 hours
              cancelation: true,
              language: ['english', 'spanish', 'portuguese'],
              _users: []
            }
          ]
        },
        {
          _cityId: 8,
          name: 'Porto',
          cityImg:
            'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713864645/daniel-sessler-YVj9hyQgtkY-unsplash_pdz1vu.jpg',
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
              price: 80,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951101/jw-BpTz_kICS2E-unsplash_xjuvsr.jpg',
              description:
                'Explore the scenic Douro Valley on a full-day excursion, visiting vineyards, tasting regional wines, and cruising along the Douro River.',
              duration: 540, // 9 hours
              cancelation: true,
              language: ['english', 'spanish', 'portuguese'],
              _users: [8]
            },
            {
              _excursionId: 23,
              name: 'Guimaraes Excursion',
              price: 70,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951183/miriam-pereira-eGfhfg24K2s-unsplash_oomo1x.jpg',
              description:
                'Discover the medieval charm of Guimarães on a guided tour, exploring its historic center, castle, and narrow streets lined with traditional houses.',
              duration: 360, // 6 hours
              cancelation: false,
              language: ['english', 'spanish', 'portuguese'],
              _users: [8, 12]
            },
            {
              _excursionId: 24,
              name: 'Aveiro Tour',
              price: 50,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951097/ricardo-resende-KDhIe2W3C-Y-unsplash_tpsr2g.jpg',
              description:
                'Experience the "Venice of Portugal" with a guided tour of Aveiro, cruising along its canals, admiring colorful moliceiro boats, and indulging in delicious local cuisine.',
              duration: 300, // 5 hours
              cancelation: true,
              language: ['english', 'spanish', 'portuguese'],
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
          cityImg:
            'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713864980/agustin-diaz-gargiulo-7F65HDP0-E0-unsplash_psloyq.jpg',
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
              price: 80,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951087/derek-oyen-lYv3hXpFdeY-unsplash_esdcwn.jpg',
              description:
                'Embark on an unforgettable journey to the awe-inspiring Iguazu Falls, exploring its magnificent waterfalls, lush rainforest surroundings, and diverse wildlife.',
              duration: 720, // 12 hours
              cancelation: true,
              language: ['english', 'spanish', 'portuguese'],
              _users: [18]
            },
            {
              _excursionId: 26,
              name: 'Angra dos Reis Excursion',
              price: 70,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951094/linoleum-creative-collective-wkGGpBiKKas-unsplash_si1ze7.jpg',
              description:
                'Sail away to the paradise of Angra dos Reis on a full-day excursion, enjoying its pristine beaches, crystal-clear waters, and breathtaking island scenery.',
              duration: 540, // 9 hours
              cancelation: true,
              language: ['english', 'spanish', 'portuguese'],
              _users: [9, 18]
            },
            {
              _excursionId: 27,
              name: 'Niteroi Tour',
              price: 40,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951094/maarten-van-den-heuvel-Siuwr3uCir0-unsplash_gpvy9y.jpg',
              description:
                'Discover the beauty of Niteroi on a guided tour, visiting its landmarks, admiring panoramic views of Rio de Janeiro, and exploring its charming neighborhoods.',
              duration: 360, // 6 hours
              cancelation: true,
              language: ['english', 'spanish', 'portuguese'],
              _users: []
            }
          ]
        },
        {
          _cityId: 10,
          name: 'Sao Paulo',
          cityImg:
            'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713865049/bruno-thethe-nxkinK7hhOk-unsplash_jql8im.jpg',
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
              price: '40',
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951088/washington-oliveira-fSr3SgmC57U-unsplash_ztvrxn.jpg',
              description:
                'Escape to the sandy shores of Santos on a day trip, soaking up the sun, swimming in the refreshing waters, and enjoying beachside activities.',
              duration: 360, // 6 hours
              cancelation: true,
              language: ['english', 'spanish', 'portuguese'],
              _users: [13]
            },
            {
              _excursionId: 29,
              name: 'Campinas Excursion',
              price: '40',
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713952559/feliphe-schiarolli-Ecf-AYLNm4o-unsplash_c1gnnw.jpg',
              description:
                'Explore the vibrant city of Campinas on a guided excursion, discovering its cultural attractions, historic landmarks, and lively atmosphere.',
              duration: 300, // 5 hours
              cancelation: true,
              language: ['english', 'spanish', 'portuguese'],
              _users: [10, 13]
            },
            {
              _excursionId: 30,
              name: 'Embú das Artes Tour',
              price: 25,
              excursionImg:
                'https://res.cloudinary.com/dqdyvyknw/image/upload/v1713951093/amanda-lins-eVrwy8vpp50-unsplash_s7ywd4.jpg',
              description:
                'Immerse yourself in the artsy atmosphere of Embú das Artes on a guided tour, browsing through its artisan shops, galleries, and street markets.',
              duration: 240, // 4 hours
              cancelation: true,
              language: ['english', 'spanish', 'portuguese'],
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
