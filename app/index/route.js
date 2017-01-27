import Ember from 'ember';

let sites = [
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                43.550884355580386,
                -116.08308393502303
            ],
            [
                43.550884355580386,
                -116.3591154291633
            ],
            [
                43.637911071422835,
                -116.3591154291633
            ],
            [
                43.637911071422835,
                -116.08308393502303
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4002.jpg",
        "url": "http://opendata.cityofboise.org",
        "scope": [
            "local"
        ],
        "title": "City of Boise - Open Data",
        "id": "4002"
    }
},
{
    "geometry": {
        "coordinates": [
            [
                -4.444864026090141e-05,
                0.00037958312330470376
            ],
            [
                -4.444864026090141e-05,
                0.0003018069860056356
            ],
            [
                4.6227304527082184e-05,
                0.0003018069860056356
            ],
            [
                4.6227304527082184e-05,
                0.00037958312330470376
            ]
        ],
        "type": "Polygon"
    },
    "properties": {
        "id": "11943",
        "url": "http://www.opendata.go.ke",
        "title": "Kenya Open Data",
        "scope": [
            "national"
        ],
        "img": "/gallery/images/11943.jpg"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00027251292458713644,
                -0.0007546656870359688
            ],
            [
                0.00027251292458713644,
                -0.0007593459096662315
            ],
            [
                0.0002748036285651521,
                -0.0007593459096662315
            ],
            [
                0.0002748036285651521,
                -0.0007546656870359688
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3488.jpg",
        "url": "http://talgov.tlcgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Tallahassee Open Data",
        "id": "3488"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                47.52499627358099,
                -122.18939222392218
            ],
            [
                47.52499627358099,
                -122.43109144267234
            ],
            [
                47.67316088837244,
                -122.43109144267234
            ],
            [
                47.67316088837244,
                -122.18939222392218
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4538.jpg",
        "url": "http://hackthecommute.esrihax.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Hack The Commute",
        "id": "4538"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00038953645666345445,
                -0.000721868196012765
            ],
            [
                0.00038953645666345445,
                -0.0007235300792883862
            ],
            [
                0.00039062341814673164,
                -0.0007235300792883862
            ],
            [
                0.00039062341814673164,
                -0.000721868196012765
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4622.jpg",
        "url": "http://data.kitchenergis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Kitchener",
        "id": "4622"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                41.590415241888046,
                -86.12714368844928
            ],
            [
                41.590415241888046,
                -86.36952955270675
            ],
            [
                41.75915153101541,
                -86.36952955270675
            ],
            [
                41.75915153101541,
                -86.12714368844928
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5939.jpg",
        "url": "http://portal.southbend.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "OpenData South Bend Indiana",
        "id": "5939"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                43.116495665781365,
                -80.17889276122926
            ],
            [
                43.116495665781365,
                -80.3258348999009
            ],
            [
                43.19563837015844,
                -80.3258348999009
            ],
            [
                43.19563837015844,
                -80.17889276122926
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6762.jpg",
        "url": "http://data.brantford.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Brantford",
        "id": "6762"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                42.95966822097561,
                -7.457810821532183
            ],
            [
                42.95966822097561,
                -7.665521087645189
            ],
            [
                43.07087355578856,
                -7.665521087645189
            ],
            [
                43.07087355578856,
                -7.457810821532183
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6793.jpg",
        "url": "http://concellolugo.esrism.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Concello de Lugo",
        "id": "6793"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                29.118944917836625,
                -82.43687960842995
            ],
            [
                29.118944917836625,
                -86.05138156155397
            ],
            [
                30.86958937321686,
                -86.05138156155397
            ],
            [
                30.86958937321686,
                -82.43687960842995
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7138.jpg",
        "url": "http://data.nwfwmd.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Northwest Florida Water Management District",
        "id": "7138"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003587422087096681,
                -0.0009429705368931028
            ],
            [
                0.0003587422087096681,
                -0.0009478034731216659
            ],
            [
                0.0003613113904274848,
                -0.0009478034731216659
            ],
            [
                0.0003613113904274848,
                -0.0009429705368931028
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7157.jpg",
        "url": "http://gis.bouldercounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Boulder County Open Geospatial Data",
        "id": "7157"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                31.998746182556534,
                -82.36881298827561
            ],
            [
                31.998746182556534,
                -84.68692822265056
            ],
            [
                33.637476294851936,
                -84.68692822265056
            ],
            [
                33.637476294851936,
                -82.36881298827561
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7190.jpg",
        "url": "http://mgrc.garc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "MGRC Open Data",
        "id": "7190"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                41.528698516352954,
                -83.59656967162947
            ],
            [
                41.528698516352954,
                -83.6590544128403
            ],
            [
                41.56518499904571,
                -83.6590544128403
            ],
            [
                41.56518499904571,
                -83.59656967162947
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7203.jpg",
        "url": "http://data.pburg.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Perrysburg Open Data",
        "id": "7203"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003143384842165339,
                -0.0007077107471350413
            ],
            [
                0.0003143384842165339,
                -0.0007093007651879329
            ],
            [
                0.00031511103536360736,
                -0.0007093007651879329
            ],
            [
                0.00031511103536360736,
                -0.0007077107471350413
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5675.jpg",
        "url": "http://data.fayettevillenc.gov",
        "scope": [
            "local"
        ],
        "title": "City of Fayetteville Open Data",
        "id": "5675"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                54.374999999998984,
                15.424999999999775
            ],
            [
                54.374999999998984,
                7.426999999999875
            ],
            [
                57.89799999999902,
                7.426999999999875
            ],
            [
                57.89799999999902,
                15.424999999999775
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/1820.jpg",
        "url": "http://mdi.dmp.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Danmarks Milj\u00f8portals Open Data",
        "id": "1820"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                40.39199999999929,
                -3.6129999999999423
            ],
            [
                40.39199999999929,
                -3.7629999999999324
            ],
            [
                40.47399999999925,
                -3.7629999999999324
            ],
            [
                40.47399999999925,
                -3.6129999999999423
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/1945.jpg",
        "url": "http://portal.madrid.opendata.arcgis.com",
        "scope": [
            "multinational"
        ],
        "title": "Portal Open Data Ayto Madrid",
        "id": "1945"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -13.973164503555354,
                31.508789062491577
            ],
            [
                -13.973164503555354,
                11.73339843749684
            ],
            [
                5.91475654518411,
                11.73339843749684
            ],
            [
                5.91475654518411,
                31.508789062491577
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6407.jpg",
        "url": "http://cod-data.atlas-forestier.org",
        "scope": [
            "ngo"
        ],
        "title": "Minist\u00e8re de l\u2019Environnement et D\u00e9veloppement Durable - Donn\u00e9es Publiques",
        "id": "6407"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                35.17006069052497,
                -80.27332495117058
            ],
            [
                35.17006069052497,
                -80.80066870117034
            ],
            [
                35.51061126944789,
                -80.80066870117034
            ],
            [
                35.51061126944789,
                -80.27332495117058
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6445.jpg",
        "url": "http://gis.cabarrus.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Open Data Viewer - Cabarrus County, NC",
        "id": "6445"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                29.506999999999532,
                -94.9389999999982
            ],
            [
                29.506999999999532,
                -95.76799999999798
            ],
            [
                30.061999999999472,
                -95.76799999999798
            ],
            [
                30.061999999999472,
                -94.9389999999982
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6469.jpg",
        "url": "http://cohgis.mycity.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Houston GIS Open Data",
        "id": "6469"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -4.183454277531754e-05,
                0.00027967249740493063
            ],
            [
                -4.183454277531754e-05,
                0.00023220551779205509
            ],
            [
                -6.647533107933201e-06,
                0.00023220551779205509
            ],
            [
                -6.647533107933201e-06,
                0.00027967249740493063
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6515.jpg",
        "url": "http://greatlakes.esri-rw.opendata.arcgis.com",
        "scope": [
            "multinational"
        ],
        "title": "Open data for Africa's Great Lakes Region",
        "id": "6515"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00035734083687746505,
                -0.0009411559400191815
            ],
            [
                0.00035734083687746505,
                -0.0009437880038016516
            ],
            [
                0.0003601166311041108,
                -0.0009437880038016516
            ],
            [
                0.0003601166311041108,
                -0.0009411559400191815
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3763.jpg",
        "url": "http://data.cityofthornton.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Thornton",
        "id": "3763"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                42.26599999999924,
                -70.99099999999879
            ],
            [
                42.26599999999924,
                -71.1769999999988
            ],
            [
                42.42699999999921,
                -71.1769999999988
            ],
            [
                42.42699999999921,
                -70.99099999999879
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3910.jpg",
        "url": "http://bostonopendata.boston.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "BostonOpenData",
        "id": "3910"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                44.895999999999226,
                -92.94699999999823
            ],
            [
                44.895999999999226,
                -93.20899999999878
            ],
            [
                45.127999999999155,
                -93.20899999999878
            ],
            [
                45.127999999999155,
                -92.94699999999823
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8186.jpg",
        "url": "http://openramsey.ramseygis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "OpenRamsey",
        "id": "8186"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                40.391999999998625,
                -3.612999999999879
            ],
            [
                40.391999999998625,
                -3.7629999999998702
            ],
            [
                40.47399999999857,
                -3.7629999999998702
            ],
            [
                40.47399999999857,
                -3.612999999999879
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7847.jpg",
        "url": "http://opendata.madrid.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Open Data - Ayuntamiento de Madrid",
        "id": "7847"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003378384120599728,
                -0.0010959176971672925
            ],
            [
                0.0003378384120599728,
                -0.0010974089005389308
            ],
            [
                0.00033850316535422725,
                -0.0010974089005389308
            ],
            [
                0.00033850316535422725,
                -0.0010959176971672925
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8287.jpg",
        "url": "http://opendata.hayward-ca.gov",
        "scope": [
            "local"
        ],
        "title": "City of Hayward",
        "id": "8287"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003937585384900705,
                -0.0007075131177725351
            ],
            [
                0.0003937585384900705,
                -0.0007087348265589375
            ],
            [
                0.00039507007879946134,
                -0.0007087348265589375
            ],
            [
                0.00039507007879946134,
                -0.0007075131177725351
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/10348.jpg",
        "url": "http://city.oshawa.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Oshawa Open Data",
        "id": "10348"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003873625336587335,
                -0.0008045042189989198
            ],
            [
                0.0003873625336587335,
                -0.0008116098928963051
            ],
            [
                0.00039220445305000344,
                -0.0008116098928963051
            ],
            [
                0.00039220445305000344,
                -0.0008045042189989198
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/9468.jpg",
        "url": "http://data.saukgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Sauk County Open Data Repository - Upgrade",
        "id": "9468"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                34.89990593320731,
                -82.08562334173794
            ],
            [
                34.89990593320731,
                -82.34837957763511
            ],
            [
                35.003929713022266,
                -82.34837957763511
            ],
            [
                35.003929713022266,
                -82.08562334173794
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8511.jpg",
        "url": "http://data.cityofgreersc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "The City of Greer, South Carolina",
        "id": "8511"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                23.56096242376905,
                -55.69554761540754
            ],
            [
                23.56096242376905,
                -134.74729261792103
            ],
            [
                50.30921703028713,
                -134.74729261792103
            ],
            [
                50.30921703028713,
                -55.69554761540754
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8720.jpg",
        "url": "http://data.innovate.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Innovate! Inc.",
        "id": "8720"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -0.0003742022147588909,
                0.0015852479987328782
            ],
            [
                -0.0003742022147588909,
                0.0015678745811380066
            ],
            [
                -0.0003651741461374077,
                0.0015678745811380066
            ],
            [
                -0.0003651741461374077,
                0.0015852479987328782
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8326.jpg",
        "url": "http://data.gwrc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Greater Wellington Regional Council Open Data",
        "id": "8326"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                39.45966628958906,
                -82.26991347653893
            ],
            [
                39.45966628958906,
                -83.54432753903862
            ],
            [
                40.41154601056276,
                -83.54432753903862
            ],
            [
                40.41154601056276,
                -82.26991347653893
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/10088.jpg",
        "url": "http://public.morpc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Mid-Ohio Regional Planning Commission",
        "id": "10088"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                47.545914253311764,
                -95.92971075674613
            ],
            [
                47.545914253311764,
                -97.21511114737069
            ],
            [
                48.21274754463622,
                -97.21511114737069
            ],
            [
                48.21274754463622,
                -95.92971075674613
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8561.jpg",
        "url": "http://data.pcg.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Polk County Minnesota GIS",
        "id": "8561"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                31.963407031923694,
                -110.64037534178978
            ],
            [
                31.963407031923694,
                -111.09356137694589
            ],
            [
                32.33547458905607,
                -111.09356137694589
            ],
            [
                32.33547458905607,
                -110.64037534178978
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/12438.jpg",
        "url": "http://gisdata.tucsonaz.gov",
        "scope": [
            "local"
        ],
        "title": "City of Tucson",
        "id": "12438"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                14.093999999993489,
                -55.89799999997452
            ],
            [
                14.093999999993489,
                -134.29699999993835
            ],
            [
                54.46999999997498,
                -134.29699999993835
            ],
            [
                54.46999999997498,
                -55.89799999997452
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/12488.jpg",
        "url": "http://asis.nps.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Assateague Island National Seashore",
        "id": "12488"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                49.400722161542085,
                2.7933659516100335
            ],
            [
                49.400722161542085,
                -7.2261652983873
            ],
            [
                58.737232204600915,
                -7.2261652983873
            ],
            [
                58.737232204600915,
                2.7933659516100335
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/12863.jpg",
        "url": "http://data.forestry.opendata.arcgis.com",
        "scope": [
            "ngo", "multinational"
        ],
        "title": "Forestry Commission",
        "id": "12863"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                38.230850428878576,
                -74.75377753906143
            ],
            [
                38.230850428878576,
                -75.95128730468609
            ],
            [
                39.90257812997764,
                -75.95128730468609
            ],
            [
                39.90257812997764,
                -74.75377753906143
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3512.jpg",
        "url": "http://opendata.firstmap.delaware.gov",
        "scope": [
            "state"
        ],
        "title": "State of Delaware",
        "id": "3512"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.51099999999937,
                -75.80899999999869
            ],
            [
                36.51099999999937,
                -76.31999999999866
            ],
            [
                37.003999999999365,
                -76.31999999999866
            ],
            [
                37.003999999999365,
                -75.80899999999869
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3788.jpg",
        "url": "http://gis.data.vbgov.com",
        "scope": [
            "local"
        ],
        "title": "City of Virginia Beach Open Data Portal",
        "id": "3788"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                46.81675041548737,
                -121.70493371518943
            ],
            [
                46.81675041548737,
                -122.7184224847205
            ],
            [
                47.27154916578975,
                -122.7184224847205
            ],
            [
                47.27154916578975,
                -121.70493371518943
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3827.jpg",
        "url": "http://gisdata.piercecowa.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Pierce County WA Open GeoSpatial Data Portal",
        "id": "3827"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                35.52665676316823,
                -81.13841328124968
            ],
            [
                35.52665676316823,
                -90.58665546874676
            ],
            [
                39.97187561437331,
                -90.58665546874676
            ],
            [
                39.97187561437331,
                -81.13841328124968
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6186.jpg",
        "url": "http://kygovmaps.kygeonet.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Kentucky Open GIS Data",
        "id": "6186"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00038129890549360715,
                -0.0006868338999321037
            ],
            [
                0.00038129890549360715,
                -0.0006876872994520172
            ],
            [
                0.00038152348431972087,
                -0.0006876872994520172
            ],
            [
                0.00038152348431972087,
                -0.0006868338999321037
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6338.jpg",
        "url": "http://data.tompkinscounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Open Data",
        "id": "6338"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00047843373715981285,
                -6.098662463887431e-05
            ],
            [
                0.00047843373715981285,
                -8.074956088950378e-05
            ],
            [
                0.00048058071070132904,
                -8.074956088950378e-05
            ],
            [
                0.00048058071070132904,
                -6.098662463887431e-05
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6516.jpg",
        "url": "http://data.osi.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Ordnance Survey Ireland",
        "id": "6516"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -0.00012924061992938295,
                -0.0015317982393277666
            ],
            [
                -0.00012924061992938295,
                -0.0015349692922807087
            ],
            [
                -0.00012772246709844077,
                -0.0015349692922807087
            ],
            [
                -0.00012772246709844077,
                -0.0015317982393277666
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4065.jpg",
        "url": "http://data.asdoc.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "American Samoa GIS",
        "id": "4065"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                45.27399999999921,
                -116.31499999999808
            ],
            [
                45.27399999999921,
                -125.4999999999979
            ],
            [
                49.380999999999155,
                -125.4999999999979
            ],
            [
                49.380999999999155,
                -116.31499999999808
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4837.jpg",
        "url": "http://geo.wa.gov",
        "scope": [
            "state"
        ],
        "title": "Washington State GeoServices",
        "id": "4837"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                37.0755846345329,
                -93.14443115234255
            ],
            [
                37.0755846345329,
                -93.44655517577934
            ],
            [
                37.31624809580466,
                -93.44655517577934
            ],
            [
                37.31624809580466,
                -93.14443115234255
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5145.jpg",
        "url": "http://gisdata.cosmo.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Springfield, Missouri",
        "id": "5145"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                37.26137502715223,
                -121.590559521482
            ],
            [
                37.26137502715223,
                -122.29643110351361
            ],
            [
                37.43822911144659,
                -122.29643110351361
            ],
            [
                37.43822911144659,
                -121.590559521482
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5176.jpg",
        "url": "http://prod.sccgov.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "County of Santa Clara",
        "id": "5176"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00026970119775136586,
                -0.0008541900373635705
            ],
            [
                0.00026970119775136586,
                -0.0008612148628853851
            ],
            [
                0.00027531566827698696,
                -0.0008612148628853851
            ],
            [
                0.00027531566827698696,
                -0.0008541900373635705
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5633.jpg",
        "url": "http://data.moco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Montgomery County, Texas Open Data",
        "id": "5633"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                59.95682667215146,
                25.673974609374817
            ],
            [
                59.95682667215146,
                24.262231445312974
            ],
            [
                60.47119204992932,
                24.262231445312974
            ],
            [
                60.47119204992932,
                25.673974609374817
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/2812.jpg",
        "url": "http://data.hslhrt.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Helsingin seudun liikenne (HSL)",
        "id": "2812"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0004892045374256297,
                1.9762936250629474e-06
            ],
            [
                0.0004892045374256297,
                -7.362592068643597e-05
            ],
            [
                0.0005304731415754252,
                -7.362592068643597e-05
            ],
            [
                0.0005304731415754252,
                1.9762936250629474e-06
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6756.jpg",
        "url": "http://scottishgovernment.bureau.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Scottish Government",
        "id": "6756"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00037918786457393806,
                -0.0006443795196046151
            ],
            [
                0.00037918786457393806,
                -0.0006457449588364768
            ],
            [
                0.0003803287249963469,
                -0.0006457449588364768
            ],
            [
                0.0003803287249963469,
                -0.0006443795196046151
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7646.jpg",
        "url": "http://gisdata.worcesterma.gov",
        "scope": [
            "local"
        ],
        "title": "GIS Data - City of Worcester, MA",
        "id": "7646"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0004050144290045175,
                -0.0009277081602159122
            ],
            [
                0.0004050144290045175,
                -0.0010417942012990913
            ],
            [
                0.00043958160111997013,
                -0.0010417942012990913
            ],
            [
                0.00043958160111997013,
                -0.0009277081602159122
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7691.jpg",
        "url": "http://gis.mdt.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Montana Department of Transportation",
        "id": "7691"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                62.58827732872054,
                -6.324139600200146
            ],
            [
                62.58827732872054,
                -80.12972334344504
            ],
            [
                80.39947104282889,
                -80.12972334344504
            ],
            [
                80.39947104282889,
                -6.324139600200146
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8459.jpg",
        "url": "http://nukissiorfiit.asiaq.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Nukissiorfiit Datafordeler",
        "id": "8459"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                33.64095177534337,
                -84.20281965280023
            ],
            [
                33.64095177534337,
                -84.84002668404993
            ],
            [
                34.124343110967736,
                -84.84002668404993
            ],
            [
                34.124343110967736,
                -84.20281965280023
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8132.jpg",
        "url": "http://data.cobbcountyga.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Cobb County, Georgia",
        "id": "8132"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                46.99999999998171,
                3.9999999999984426
            ],
            [
                46.99999999998171,
                -25.99999999998991
            ],
            [
                63.99999999997505,
                -25.99999999998991
            ],
            [
                63.99999999997505,
                3.9999999999984426
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/10041.jpg",
        "url": "http://data.ogauthority.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Oil and Gas Authority",
        "id": "10041"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                37.362145368658375,
                -4.481827950553684
            ],
            [
                37.362145368658375,
                -12.216202950551597
            ],
            [
                40.43927519202707,
                -12.216202950551597
            ],
            [
                40.43927519202707,
                -4.481827950553684
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8252.jpg",
        "url": "http://qarsc.abroxo.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Associa\u00e7\u00e3o de Benefici\u00e1rios do Roxo",
        "id": "8252"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                73.04192312222743,
                -27.21093749997159
            ],
            [
                73.04192312222743,
                -60.96093749996266
            ],
            [
                87.25608541054774,
                -60.96093749996266
            ],
            [
                87.25608541054774,
                -27.21093749997159
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/10863.jpg",
        "url": "http://data.wpsgn.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "West Parry Sound Geography Network",
        "id": "10863"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                35.39604497573183,
                -82.74734166353574
            ],
            [
                35.39604497573183,
                -84.16183140963
            ],
            [
                35.82143027550485,
                -84.16183140963
            ],
            [
                35.82143027550485,
                -82.74734166353574
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/12701.jpg",
        "url": "http://grsm.nps.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Great Smoky Mountains National Park",
        "id": "12701"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                38.61235898647133,
                -76.98185546867056
            ],
            [
                38.61235898647133,
                -77.5970898436703
            ],
            [
                39.08295430148268,
                -77.5970898436703
            ],
            [
                39.08295430148268,
                -76.98185546867056
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/9584.jpg",
        "url": "http://data.fairfaxcountygis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Fairfax County GIS & Mapping Services Open Data Site",
        "id": "9584"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                46.61372250474381,
                -96.14427167916139
            ],
            [
                46.61372250474381,
                -96.86936933541187
            ],
            [
                47.15435702057393,
                -96.86936933541187
            ],
            [
                47.15435702057393,
                -96.14427167916139
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5817.jpg",
        "url": "http://data.claycountymn.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Clay County Open Data",
        "id": "5817"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                33.34836680372379,
                -84.25954626464133
            ],
            [
                33.34836680372379,
                -84.45867346190704
            ],
            [
                33.65069211662591,
                -84.45867346190704
            ],
            [
                33.65069211662591,
                -84.25954626464133
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6118.jpg",
        "url": "http://opendata.cccd-gis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Clayton County",
        "id": "6118"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                1.354851276085849,
                16.67724609374568
            ],
            [
                1.354851276085849,
                8.195800781247971
            ],
            [
                13.489347873245958,
                8.195800781247971
            ],
            [
                13.489347873245958,
                16.67724609374568
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6310.jpg",
        "url": "http://cmr-data.forest-atlas.org",
        "scope": [
            "ngo"
        ],
        "title": "Ministry of Forest and Wildlife - Open Data Portal",
        "id": "6310"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0004834822690599118,
                0.0002418893565548635
            ],
            [
                0.0004834822690599118,
                0.00018641838776048308
            ],
            [
                0.0005073864387750888,
                0.00018641838776048308
            ],
            [
                0.0005073864387750888,
                0.0002418893565548635
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6377.jpg",
        "url": "http://lakd.lakd.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "LAKD Open Data",
        "id": "6377"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                53.11285084612029,
                -8.287696289061705
            ],
            [
                53.11285084612029,
                -10.39981787109193
            ],
            [
                53.67461329601803,
                -10.39981787109193
            ],
            [
                53.67461329601803,
                -8.287696289061705
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6536.jpg",
        "url": "http://data.galwaycoco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Galway County Opendata",
        "id": "6536"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                44.18137904565244,
                -88.56196420898303
            ],
            [
                44.18137904565244,
                -89.29530161132644
            ],
            [
                44.71469631770307,
                -89.29530161132644
            ],
            [
                44.71469631770307,
                -88.56196420898303
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3405.jpg",
        "url": "http://data.waupacacounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Waupaca County Land Information Data",
        "id": "3405"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                33.057126968745116,
                -96.5658760070545
            ],
            [
                33.057126968745116,
                -96.88379287717135
            ],
            [
                33.24970689422481,
                -96.88379287717135
            ],
            [
                33.24970689422481,
                -96.5658760070545
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3450.jpg",
        "url": "http://data1.mck.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of McKinney",
        "id": "3450"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                46.997752962482124,
                -119.95789025878643
            ],
            [
                46.997752962482124,
                -121.44791101074019
            ],
            [
                47.34690155483043,
                -121.44791101074019
            ],
            [
                47.34690155483043,
                -119.95789025878643
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3474.jpg",
        "url": "http://data.kitcogis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Kittitas County GIS",
        "id": "3474"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -0.00038069703425896013,
                0.0015663384620021622
            ],
            [
                -0.00038069703425896013,
                0.001552028299526138
            ],
            [
                -0.0003674199343476561,
                0.001552028299526138
            ],
            [
                -0.0003674199343476561,
                0.0015663384620021622
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3501.jpg",
        "url": "http://data.marlborough.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "MDC Open Data",
        "id": "3501"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.88851253305783,
                -121.15739423775693
            ],
            [
                36.88851253305783,
                -122.25053388619354
            ],
            [
                37.5120081676915,
                -122.25053388619354
            ],
            [
                37.5120081676915,
                -121.15739423775693
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3791.jpg",
        "url": "http://gisdata.sccplanning.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Santa Clara County Planning and Development Department",
        "id": "3791"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                43.58612298759749,
                -88.03386816406109
            ],
            [
                43.58612298759749,
                -89.35222753906102
            ],
            [
                44.86537159126926,
                -89.35222753906102
            ],
            [
                44.86537159126926,
                -88.03386816406109
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4864.jpg",
        "url": "http://data.ecwrpc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "ECWRPC",
        "id": "4864"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.99662514089751,
                -79.11691333007698
            ],
            [
                36.99662514089751,
                -79.91616870117035
            ],
            [
                37.64315726678637,
                -79.91616870117035
            ],
            [
                37.64315726678637,
                -79.11691333007698
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4876.jpg",
        "url": "http://data.bedfordvagis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Bedford County, VA",
        "id": "4876"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00035813135431637873,
                -0.0006732513728362165
            ],
            [
                0.00035813135431637873,
                -0.0006769793812653126
            ],
            [
                0.00036054782243905367,
                -0.0006769793812653126
            ],
            [
                0.00036054782243905367,
                -0.0006732513728362165
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5040.jpg",
        "url": "http://data.phl.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "PHLmaps",
        "id": "5040"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00033728145658037077,
                -0.0010955943036650095
            ],
            [
                0.00033728145658037077,
                -0.001095800916180357
            ],
            [
                0.0003373623049445406,
                -0.001095800916180357
            ],
            [
                0.0003373623049445406,
                -0.0010955943036650095
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5634.jpg",
        "url": "http://egis.cofgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Fremont | Open Data Portal",
        "id": "5634"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.68527746414733,
                -108.59985351559648
            ],
            [
                36.68527746414733,
                -114.62036132809445
            ],
            [
                42.374074715436656,
                -114.62036132809445
            ],
            [
                42.374074715436656,
                -108.59985351559648
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4112.jpg",
        "url": "http://udot.uplan.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "UDOT Open Data",
        "id": "4112"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0004360602052221779,
                -0.0009699020291110061
            ],
            [
                0.0004360602052221779,
                -0.0010867548812692734
            ],
            [
                0.0005413158070594918,
                -0.0010867548812692734
            ],
            [
                0.0005413158070594918,
                -0.0009699020291110061
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4179.jpg",
        "url": "http://geology.ags-aer.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Alberta Geological Survey",
        "id": "4179"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                33.394214779237736,
                -111.96950607299628
            ],
            [
                33.394214779237736,
                -112.16657333373806
            ],
            [
                33.50765058820063,
                -112.16657333373806
            ],
            [
                33.50765058820063,
                -111.96950607299628
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4326.jpg",
        "url": "http://maps.phoenix.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Phoenix",
        "id": "4326"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00029218602931705513,
                -0.0008714736234300301
            ],
            [
                0.00029218602931705513,
                -0.0008764772395625759
            ],
            [
                0.00029652489214241024,
                -0.0008764772395625759
            ],
            [
                0.00029652489214241024,
                -0.0008714736234300301
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4631.jpg",
        "url": "http://data.tarrantcounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Tarrant County Geographic Information Portal",
        "id": "4631"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                41.30499999999926,
                -71.95799999999875
            ],
            [
                41.30499999999926,
                -72.10499999999882
            ],
            [
                41.412999999999236,
                -72.10499999999882
            ],
            [
                41.412999999999236,
                -71.95799999999875
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/347.jpg",
        "url": "http://data.grotongis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Town of Groton, CT Open Data Site",
        "id": "347"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                29.590999999999493,
                -95.5269999999987
            ],
            [
                29.590999999999493,
                -95.59799999999848
            ],
            [
                29.666999999999472,
                -95.59799999999848
            ],
            [
                29.666999999999472,
                -95.5269999999987
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/816.jpg",
        "url": "http://gisdata.staffordpw.com",
        "scope": [
            "local"
        ],
        "title": "City of Stafford GIS Data Portal",
        "id": "816"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0004987805783426283,
                0.00011562216021902361
            ],
            [
                0.0004987805783426283,
                0.00011098685335296687
            ],
            [
                0.0005015653557279163,
                0.00011098685335296687
            ],
            [
                0.0005015653557279163,
                0.00011562216021902361
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/1935.jpg",
        "url": "http://kkdata.gis2dk.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "KK data",
        "id": "1935"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                41.92412774476036,
                -81.55150537109239
            ],
            [
                41.92412774476036,
                -82.6830971679673
            ],
            [
                42.73226783846573,
                -82.6830971679673
            ],
            [
                42.73226783846573,
                -81.55150537109239
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/1985.jpg",
        "url": "http://chathamkentopendata.chatham-kent.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Chatham-Kent Open Data",
        "id": "1985"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -1.4085583654780085e-05,
                0.0003156949402981234
            ],
            [
                -1.4085583654780085e-05,
                0.0002651647055664003
            ],
            [
                3.878027082159297e-05,
                0.0002651647055664003
            ],
            [
                3.878027082159297e-05,
                0.0003156949402981234
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/2488.jpg",
        "url": "http://data.energy-gis.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Energy Sector GIS Working Group Uganda",
        "id": "2488"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                37.24105750971654,
                -121.86370873186662
            ],
            [
                37.24105750971654,
                -122.15278649065516
            ],
            [
                37.371044563512,
                -122.15278649065516
            ],
            [
                37.371044563512,
                -121.86370873186662
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6978.jpg",
        "url": "http://gis.cupertino.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Cupertino",
        "id": "6978"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00026580250941959585,
                -0.0008797740566552945
            ],
            [
                0.00026580250941959585,
                -0.0008862239603952726
            ],
            [
                0.0002698988271142748,
                -0.0008862239603952726
            ],
            [
                0.0002698988271142748,
                -0.0008797740566552945
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7147.jpg",
        "url": "http://data.comalcounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Comal County, Texas",
        "id": "7147"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                35.17679595899171,
                -80.28019140624599
            ],
            [
                35.17679595899171,
                -80.810281738277
            ],
            [
                35.52402458661124,
                -80.810281738277
            ],
            [
                35.52402458661124,
                -80.28019140624599
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6954.jpg",
        "url": "http://historic.cabarrus.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Historic Data",
        "id": "6954"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                40.94380255025941,
                151.7763990111228
            ],
            [
                40.94380255025941,
                135.80227791737764
            ],
            [
                47.15721935548168,
                135.80227791737764
            ],
            [
                47.15721935548168,
                151.7763990111228
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7628.jpg",
        "url": "http://data2.rakuno-gis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "\u5317\u6d77\u9053\u81ea\u7136\u74b0\u5883\u5730\u7406\u60c5\u5831\u30aa\u30fc\u30d7\u30f3\u30c7\u30fc\u30bf\u30b5\u30a4\u30c8",
        "id": "7628"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00034126099327631056,
                -0.0007667570107602176
            ],
            [
                0.00034126099327631056,
                -0.0007728116557751831
            ],
            [
                0.00034510578269439325,
                -0.0007728116557751831
            ],
            [
                0.00034510578269439325,
                -0.0007667570107602176
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7584.jpg",
        "url": "http://louisville.lojic.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "LOJIC Open Data Portal",
        "id": "7584"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                42.68808227173045,
                -71.39406311035046
            ],
            [
                42.68808227173045,
                -71.58838378906117
            ],
            [
                42.821689758083856,
                -71.58838378906117
            ],
            [
                42.821689758083856,
                -71.39406311035046
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7337.jpg",
        "url": "http://cityofnashuanhopendata.nashuamaps.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Nashua, NH Open Data",
        "id": "7337"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003582301689978332,
                -0.0007898796461734541
            ],
            [
                0.0003582301689978332,
                -0.000794667666637811
            ],
            [
                0.00036291937479396134,
                -0.000794667666637811
            ],
            [
                0.00036291937479396134,
                -0.0007898796461734541
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7349.jpg",
        "url": "http://data.cuuats.org",
        "scope": [
            "local"
        ],
        "title": "CUUATS Data Portal",
        "id": "7349"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                33.34415475970047,
                -86.39355371093603
            ],
            [
                33.34415475970047,
                -87.22851464843599
            ],
            [
                33.705921985342854,
                -87.22851464843599
            ],
            [
                33.705921985342854,
                -86.39355371093603
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/9477.jpg",
        "url": "http://geospatialdata.rpcgb.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Regional Planning Commission of Greater Birmingham",
        "id": "9477"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00036036815936798486,
                -0.0009431142673385619
            ],
            [
                0.00036036815936798486,
                -0.0009449558136710069
            ],
            [
                0.00036126647465971757,
                -0.0009449558136710069
            ],
            [
                0.00036126647465971757,
                -0.0009431142673385619
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8537.jpg",
        "url": "http://longmontopendata.longmontco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Longmont Open Data",
        "id": "8537"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                27.10268652060935,
                -80.10444313105603
            ],
            [
                27.10268652060935,
                -80.70869117793073
            ],
            [
                27.573569995319176,
                -80.70869117793073
            ],
            [
                27.573569995319176,
                -80.10444313105603
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/9004.jpg",
        "url": "http://data.pslgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Port St. Lucie",
        "id": "9004"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                40.8169999999972,
                -84.59799999999427
            ],
            [
                40.8169999999972,
                -94.83799999999388
            ],
            [
                47.844999999996745,
                -94.83799999999388
            ],
            [
                47.844999999996745,
                -84.59799999999427
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8183.jpg",
        "url": "http://data.wem.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Wisconsin Emergency Management",
        "id": "8183"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.42311234266758,
                -74.84181054684403
            ],
            [
                36.42311234266758,
                -83.85059960934167
            ],
            [
                39.5735751644662,
                -83.85059960934167
            ],
            [
                39.5735751644662,
                -74.84181054684403
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/10181.jpg",
        "url": "http://data.vof.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Virginia Outdoors Foundation",
        "id": "10181"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                29.97864354727323,
                -91.79231245064528
            ],
            [
                29.97864354727323,
                -92.34162885689493
            ],
            [
                30.42964491763329,
                -92.34162885689493
            ],
            [
                30.42964491763329,
                -91.79231245064528
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/10220.jpg",
        "url": "http://lafayetteassessor.lpao.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Lafayette Parish Assessor's Office",
        "id": "10220"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -37.98987942177131,
                177.05404655108822
            ],
            [
                -37.98987942177131,
                176.91500083575667
            ],
            [
                -37.9186825445208,
                176.91500083575667
            ],
            [
                -37.9186825445208,
                177.05404655108822
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/10080.jpg",
        "url": "http://data.whakatane.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Whakatane District Council Open Data",
        "id": "10080"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                35.49270490289175,
                18.520889606168854
            ],
            [
                35.49270490289175,
                6.627240160207027
            ],
            [
                47.09118190080612,
                6.627240160207027
            ],
            [
                47.09118190080612,
                18.520889606168854
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/10737.jpg",
        "url": "http://corporategeospatial.hqfao.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Food and Agriculture Organization of the United Nations",
        "id": "10737"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                39.54636826906398,
                -104.52203351998766
            ],
            [
                39.54636826906398,
                -104.89556867623736
            ],
            [
                39.82536962882612,
                -104.89556867623736
            ],
            [
                39.82536962882612,
                -104.52203351998766
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/12086.jpg",
        "url": "http://data.auroraco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Aurora, Colorado",
        "id": "12086"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                5.021182088022167,
                55.34100178685023
            ],
            [
                5.021182088022167,
                -19.475430235708195
            ],
            [
                29.565267610907792,
                -19.475430235708195
            ],
            [
                29.565267610907792,
                55.34100178685023
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/12031.jpg",
        "url": "http://arctic.nga.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Arctic Support",
        "id": "12031"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -27.814578766612325,
                153.29750628661827
            ],
            [
                -27.814578766612325,
                152.93976397704864
            ],
            [
                -27.60546281803068,
                152.93976397704864
            ],
            [
                -27.60546281803068,
                153.29750628661827
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5158.jpg",
        "url": "http://data.logancity.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Logan City Council",
        "id": "5158"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                14.093999999993489,
                -55.89799999997452
            ],
            [
                14.093999999993489,
                -134.29699999993835
            ],
            [
                54.46999999997498,
                -134.29699999993835
            ],
            [
                54.46999999997498,
                -55.89799999997452
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/12492.jpg",
        "url": "http://romo.nps.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Rocky Mountain National Park",
        "id": "12492"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00036932436277121837,
                -0.000626521011756319
            ],
            [
                0.00036932436277121837,
                -0.000661950566561993
            ],
            [
                0.00038610489226302997,
                -0.000661950566561993
            ],
            [
                0.00038610489226302997,
                -0.000626521011756319
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4559.jpg",
        "url": "http://geo.massdot.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "MassDOT Open Data Portal",
        "id": "4559"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                37.63499999999929,
                -75.17899999999871
            ],
            [
                37.63499999999929,
                -79.40899999999864
            ],
            [
                39.95499999999932,
                -79.40899999999864
            ],
            [
                39.95499999999932,
                -75.17899999999871
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4681.jpg",
        "url": "http://data.imap.maryland.gov",
        "scope": [
            "state"
        ],
        "title": "the GIS Data Catalog",
        "id": "4681"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                39.95988926232747,
                -74.9791105463624
            ],
            [
                39.95988926232747,
                -75.22836286569797
            ],
            [
                40.15329687423614,
                -75.22836286569797
            ],
            [
                40.15329687423614,
                -74.9791105463624
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3285.jpg",
        "url": "http://streamkeepers.ttfwatershed.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Tookany/Tacony-Frankford Watershed Partnership",
        "id": "3285"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.50999999999936,
                -75.92399999999871
            ],
            [
                36.50999999999936,
                -76.76399999999872
            ],
            [
                36.97699999999935,
                -76.76399999999872
            ],
            [
                36.97699999999935,
                -75.92399999999871
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3425.jpg",
        "url": "http://public.chesva.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Chesapeake, VA Open Data Site",
        "id": "3425"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00031869531335917365,
                -0.0007024915353343068
            ],
            [
                0.00031869531335917365,
                -0.0007100194174152286
            ],
            [
                0.00032449843007633923,
                -0.0007100194174152286
            ],
            [
                0.00032449843007633923,
                -0.0007024915353343068
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3507.jpg",
        "url": "http://data.ral.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Open Raleigh GIS Data",
        "id": "3507"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00037946634231373906,
                -0.0006391962404152454
            ],
            [
                0.00037946634231373906,
                -0.0006395196339175285
            ],
            [
                0.0003795741401538359,
                -0.0006395196339175285
            ],
            [
                0.0003795741401538359,
                -0.0006391962404152454
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3603.jpg",
        "url": "http://gis.dedham.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Dedham GIS Data",
        "id": "3603"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00033864689580344895,
                -0.0010948037862149843
            ],
            [
                0.00033864689580344895,
                -0.001101738780208387
            ],
            [
                0.0003403447117054599,
                -0.001101738780208387
            ],
            [
                0.0003403447117054599,
                -0.0010948037862149843
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3608.jpg",
        "url": "http://maps.cdphdata.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "California Dept of Public Health Geospatial Resources                                                                                         .",
        "id": "3608"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                24.349399615925776,
                -66.00572656250169
            ],
            [
                24.349399615925776,
                -126.47447656248552
            ],
            [
                49.42691132357007,
                -126.47447656248552
            ],
            [
                49.42691132357007,
                -66.00572656250169
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3665.jpg",
        "url": "http://census.dcdev.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "US Census Bureau",
        "id": "3665"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003513939896856334,
                -0.0009394581241321955
            ],
            [
                0.0003513939896856334,
                -0.0009464649833483278
            ],
            [
                0.00035558912206176685,
                -0.0009464649833483278
            ],
            [
                0.00035558912206176685,
                -0.0009394581241321955
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3709.jpg",
        "url": "http://gis.dougco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Douglas County, CO",
        "id": "3709"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                47.57199999999917,
                -111.44499999999844
            ],
            [
                47.57199999999917,
                -140.09699999999776
            ],
            [
                60.36699999999896,
                -140.09699999999776
            ],
            [
                60.36699999999896,
                -111.44499999999844
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3874.jpg",
        "url": "http://data.bcogc.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "BC Oil and Gas Commission Open Data Portal",
        "id": "3874"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                41.717999999999215,
                -72.6399999999988
            ],
            [
                41.717999999999215,
                -72.72599999999879
            ],
            [
                41.809999999999285,
                -72.72599999999879
            ],
            [
                41.809999999999285,
                -72.6399999999988
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5964.jpg",
        "url": "http://gisdata.hartford.gov",
        "scope": [
            "local"
        ],
        "title": "Hartford Data",
        "id": "5964"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00036080833387429226,
                -0.0007145648927528734
            ],
            [
                0.00036080833387429226,
                -0.0007226048145457431
            ],
            [
                0.0003659197478339986,
                -0.0007226048145457431
            ],
            [
                0.0003659197478339986,
                -0.0007145648927528734
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6210.jpg",
        "url": "http://openac.alcogis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "DCS GIS",
        "id": "6210"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                32.569999999999375,
                -116.89299999999794
            ],
            [
                32.569999999999375,
                -117.11399999999783
            ],
            [
                32.664999999999395,
                -117.11399999999783
            ],
            [
                32.664999999999395,
                -116.89299999999794
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6234.jpg",
        "url": "http://chulavista.cvgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Chula Vista GIS",
        "id": "6234"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                39.01799999999931,
                -77.04599999999868
            ],
            [
                39.01799999999931,
                -77.2469999999987
            ],
            [
                39.14899999999931,
                -77.2469999999987
            ],
            [
                39.14899999999931,
                -77.04599999999868
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6296.jpg",
        "url": "http://data.rockvillemd.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Rockville, MD, Open Data",
        "id": "6296"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                38.86089062948468,
                -73.6248779296681
            ],
            [
                38.86089062948468,
                -75.77819824216755
            ],
            [
                41.40545645467181,
                -75.77819824216755
            ],
            [
                41.40545645467181,
                -73.6248779296681
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6551.jpg",
        "url": "http://njogis.newjersey.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "New Jersey Office of GIS - Open Data",
        "id": "6551"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00030112426639028174,
                -0.001007496523751408
            ],
            [
                0.00030112426639028174,
                -0.001008367889577004
            ],
            [
                0.0003013578283750378,
                -0.001008367889577004
            ],
            [
                0.0003013578283750378,
                -0.001007496523751408
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4113.jpg",
        "url": "http://data.cog-gis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Glendale, Arizona",
        "id": "4113"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00036091613170166685,
                -0.0007158674499148466
            ],
            [
                0.00036091613170166685,
                -0.0007204308915581736
            ],
            [
                0.0003643027803216019,
                -0.0007204308915581736
            ],
            [
                0.0003643027803216019,
                -0.0007158674499148466
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4151.jpg",
        "url": "http://prodp.neod.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Pittsburgh Regional Open Data Portal",
        "id": "4151"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00027221648055549523,
                -0.0007632805306106749
            ],
            [
                0.00027221648055549523,
                -0.000794667666637811
            ],
            [
                0.00031504815329127774,
                -0.000794667666637811
            ],
            [
                0.00031504815329127774,
                -0.0007632805306106749
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4207.jpg",
        "url": "http://data.alabama.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Alabama's Open Data Catalog",
        "id": "4207"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                46.52438552597463,
                -111.36929199218649
            ],
            [
                46.52438552597463,
                -113.07491943359115
            ],
            [
                47.25826475120879,
                -113.07491943359115
            ],
            [
                47.25826475120879,
                -111.36929199218649
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4233.jpg",
        "url": "http://gisdata.helenamtmaps.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Lewis & Clark County - City of Helena GIS",
        "id": "4233"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                38.8282910088588,
                -76.94541326904181
            ],
            [
                38.8282910088588,
                -77.13424078368995
            ],
            [
                38.96136054870248,
                -77.13424078368995
            ],
            [
                38.96136054870248,
                -76.94541326904181
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4358.jpg",
        "url": "http://opendata.dc.gov",
        "scope": [
            "local"
        ],
        "title": "the DC GIS Open Data Site",
        "id": "4358"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0005322068900738388,
                -0.00011829015661285857
            ],
            [
                0.0005322068900738388,
                -0.0006788658433619634
            ],
            [
                0.000720736318748692,
                -0.0006788658433619634
            ],
            [
                0.000720736318748692,
                -0.00011829015661285857
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4409.jpg",
        "url": "http://data.nukissiorfiit.opendata.arcgis.com",
        "scope": [
            "multinational"
        ],
        "title": "Nukissiorfiit OpenData",
        "id": "4409"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003654526238899309,
                -0.0010039302120734535
            ],
            [
                0.0003654526238899309,
                -0.0010061221013667053
            ],
            [
                0.00036635992232758374,
                -0.0010061221013667053
            ],
            [
                0.00036635992232758374,
                -0.0010039302120734535
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4428.jpg",
        "url": "http://gisdata.slco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Salt Lake County Open Data Portal",
        "id": "4428"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                43.04934345726867,
                141.54743713899927
            ],
            [
                43.04934345726867,
                141.47190613314052
            ],
            [
                43.08633836585925,
                141.47190613314052
            ],
            [
                43.08633836585925,
                141.54743713899927
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4473.jpg",
        "url": "http://data.rakuno-gis.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "RakunoGakuenUniversity",
        "id": "4473"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                41.840574365871596,
                -93.16629011178675
            ],
            [
                41.840574365871596,
                -93.74444562936561
            ],
            [
                42.21902078574368,
                -93.74444562936561
            ],
            [
                42.21902078574368,
                -93.16629011178675
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4562.jpg",
        "url": "http://openstoryco.storycogis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Story County Open GIS Data Portal",
        "id": "4562"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                49.75332357872044,
                -119.70738047790371
            ],
            [
                49.75332357872044,
                -119.7715818328836
            ],
            [
                49.78314836775531,
                -119.7715818328836
            ],
            [
                49.78314836775531,
                -119.70738047790371
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4579.jpg",
        "url": "http://peachland.rdco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "District Of Peachland",
        "id": "4579"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.84499999999875,
                -121.56799999999566
            ],
            [
                36.84499999999875,
                -122.3449999999959
            ],
            [
                37.27499999999868,
                -122.3449999999959
            ],
            [
                37.27499999999868,
                -121.56799999999566
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4860.jpg",
        "url": "http://data.sccgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "County of Santa Cruz, California",
        "id": "4860"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.817999999994406,
                -76.14899999998842
            ],
            [
                36.817999999994406,
                -76.3509999999884
            ],
            [
                36.97099999999428,
                -76.3509999999884
            ],
            [
                36.97099999999428,
                -76.14899999998842
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4985.jpg",
        "url": "http://data.orf.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Norfolk",
        "id": "4985"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                24.254012001011294,
                -79.34617597604854
            ],
            [
                24.254012001011294,
                -88.22312910104613
            ],
            [
                31.11600620078588,
                -88.22312910104613
            ],
            [
                31.11600620078588,
                -79.34617597604854
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5147.jpg",
        "url": "http://data.pluton.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "DOT Open Data Site",
        "id": "5147"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003527863783719163,
                -0.0006878759456616823
            ],
            [
                0.0003527863783719163,
                -0.0006886035810418191
            ],
            [
                0.000353127738184047,
                -0.0006886035810418191
            ],
            [
                0.000353127738184047,
                -0.0006878759456616823
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5440.jpg",
        "url": "http://gis.baltimore.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Baltimore City Open GIS data",
        "id": "5440"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                39.80299999999931,
                -75.01499999999878
            ],
            [
                39.80299999999931,
                -75.31299999999872
            ],
            [
                40.100999999999324,
                -75.31299999999872
            ],
            [
                40.100999999999324,
                -75.01499999999878
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5522.jpg",
        "url": "http://data.smartcommunities.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "SmartCommunities",
        "id": "5522"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.06771805569925,
                -95.81663803100513
            ],
            [
                36.06771805569925,
                -96.02984146118047
            ],
            [
                36.164234056407,
                -96.02984146118047
            ],
            [
                36.164234056407,
                -95.81663803100513
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5553.jpg",
        "url": "http://opengis.cityoftulsa.org",
        "scope": [
            "local"
        ],
        "title": "City of Tulsa GIS Open Data",
        "id": "5553"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                39.57854427820131,
                -74.61422192382699
            ],
            [
                39.57854427820131,
                -75.28164135742045
            ],
            [
                40.0321890901712,
                -75.28164135742045
            ],
            [
                40.0321890901712,
                -74.61422192382699
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5589.jpg",
        "url": "http://camdencountynj.ccdpw.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "County of Camden",
        "id": "5589"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0004442438574528935,
                5.785150429729719e-06
            ],
            [
                0.0004442438574528935,
                4.069368237061432e-06
            ],
            [
                0.0004449175939185125,
                4.069368237061432e-06
            ],
            [
                0.0004449175939185125,
                5.785150429729719e-06
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6587.jpg",
        "url": "http://sgi.cvs.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Communaut\u00e9 d'agglomeration Caux vall\u00e9e de Seine",
        "id": "6587"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                42.522528886655465,
                -87.6451052364508
            ],
            [
                42.522528886655465,
                -88.46907984582607
            ],
            [
                42.926069250638754,
                -88.46907984582607
            ],
            [
                42.926069250638754,
                -87.6451052364508
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7059.jpg",
        "url": "http://data.racinecounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Racine County, WI",
        "id": "7059"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                37.21867539771173,
                -121.69114038081231
            ],
            [
                37.21867539771173,
                -122.08184167475704
            ],
            [
                37.430534603217474,
                -122.08184167475704
            ],
            [
                37.430534603217474,
                -121.69114038081231
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7218.jpg",
        "url": "http://gisdata.csjdotgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Open GIS Data",
        "id": "7218"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                35.4679999999994,
                -80.67399999999864
            ],
            [
                35.4679999999994,
                -81.0139999999986
            ],
            [
                35.75299999999936,
                -81.0139999999986
            ],
            [
                35.75299999999936,
                -80.67399999999864
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/949.jpg",
        "url": "http://town.mooresvillenc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Town of Mooresville, NC Open Data",
        "id": "949"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003309034180663185,
                -0.0007811570047646534
            ],
            [
                0.0003309034180663185,
                -0.0008265578592240541
            ],
            [
                0.0003833470643409466,
                -0.0008265578592240541
            ],
            [
                0.0003833470643409466,
                -0.0007811570047646534
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/1239.jpg",
        "url": "http://illinoisepaopendata.illinois-epa.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Illinois EPA Open Data",
        "id": "1239"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -0.00033598788256282013,
                0.0015780614764599223
            ],
            [
                -0.00033598788256282013,
                0.0015628080829355726
            ],
            [
                -0.0003231689234623859,
                0.0015628080829355726
            ],
            [
                -0.0003231689234623859,
                0.0015780614764599223
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/1722.jpg",
        "url": "http://aucklandopendata.aucklandcouncil.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Auckland Council Data Download",
        "id": "1722"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003394733458642097,
                -0.0007848850131937495
            ],
            [
                0.0003394733458642097,
                -0.0007886220047756867
            ],
            [
                0.00034330915213637227,
                -0.0007886220047756867
            ],
            [
                0.00034330915213637227,
                -0.0007848850131937495
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/1823.jpg",
        "url": "http://gisdata.evvc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Evansville & Vanderburgh County GIS Data",
        "id": "1823"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                7.765999999999604,
                -81.47499999999582
            ],
            [
                7.765999999999604,
                -86.65999999999562
            ],
            [
                11.599999999999406,
                -86.65999999999562
            ],
            [
                11.599999999999406,
                -81.47499999999582
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7725.jpg",
        "url": "http://data.ice-se.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "ICE Sector Electricidad",
        "id": "7725"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00033429904984489593,
                -0.0009737288522213551
            ],
            [
                0.00033429904984489593,
                -0.0009782833107118412
            ],
            [
                0.0003368412820867856,
                -0.0009782833107118412
            ],
            [
                0.0003368412820867856,
                -0.0009737288522213551
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7883.jpg",
        "url": "http://dat.montezumacounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Montezuma County Online Mapping",
        "id": "7883"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -18.350999999819027,
                -68.64999999932328
            ],
            [
                -18.350999999819027,
                -81.33099999920002
            ],
            [
                -0.03900000000000012,
                -81.33099999920002
            ],
            [
                -0.03900000000000012,
                -68.64999999932328
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8533.jpg",
        "url": "http://opendatatm.mitelematica.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Open Data Telematica",
        "id": "8533"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003129820281393758,
                -0.0010727770954483738
            ],
            [
                0.0003129820281393758,
                -0.0010904469570870046
            ],
            [
                0.00032195619783444954,
                -0.0010904469570870046
            ],
            [
                0.00032195619783444954,
                -0.0010727770954483738
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8564.jpg",
        "url": "http://gis.slocounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "County of San Luis Obispo",
        "id": "8564"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.239985084943356,
                -120.47349531196701
            ],
            [
                36.239985084943356,
                -121.67375165962247
            ],
            [
                37.00050008218658,
                -121.67375165962247
            ],
            [
                37.00050008218658,
                -120.47349531196701
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8242.jpg",
        "url": "http://opendata.cosb.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "San Benito County Open Data Portal",
        "id": "8242"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                28.490892952678234,
                48.655696288904316
            ],
            [
                28.490892952678234,
                46.354060546716916
            ],
            [
                30.11471202650691,
                46.354060546716916
            ],
            [
                30.11471202650691,
                48.655696288904316
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8280.jpg",
        "url": "http://kmod.beirutgardens.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "ArcGIS Online",
        "id": "8280"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                27.619999999999578,
                -82.05299999999859
            ],
            [
                27.619999999999578,
                -82.64699999999864
            ],
            [
                28.213999999999558,
                -82.64699999999864
            ],
            [
                28.213999999999558,
                -82.05299999999859
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8088.jpg",
        "url": "http://gis.hillsborough.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Hillsborough County GeoHub",
        "id": "8088"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00038468555412626447,
                -0.0007909216919030326
            ],
            [
                0.00038468555412626447,
                -0.0007956827629088662
            ],
            [
                0.0003881889837194943,
                -0.0007956827629088662
            ],
            [
                0.0003881889837194943,
                -0.0007909216919030326
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/12342.jpg",
        "url": "http://maps.waukeshacounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Waukesha County Open Data",
        "id": "12342"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00023349010864758953,
                -0.0007060758133179437
            ],
            [
                0.00023349010864758953,
                -0.0007571989361371857
            ],
            [
                0.0002805977621491198,
                -0.0007571989361371857
            ],
            [
                0.0002805977621491198,
                -0.0007060758133179437
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7922.jpg",
        "url": "http://data.floridaswater.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "St. Johns River Water Management District (SJRWMD) Open Data",
        "id": "7922"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                33.243285285195434,
                -74.90234375000001
            ],
            [
                33.243285285195434,
                -84.92187499999731
            ],
            [
                37.47050172262857,
                -84.92187499999731
            ],
            [
                37.47050172262857,
                -74.90234375000001
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/12140.jpg",
        "url": "http://data.ncdenr.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "NC DEQ GIS Data",
        "id": "12140"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0002663325154487154,
                -0.000867233575288986
            ],
            [
                0.0002663325154487154,
                -0.000888865007330584
            ],
            [
                0.0002782621424160592,
                -0.000888865007330584
            ],
            [
                0.0002782621424160592,
                -0.000867233575288986
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8336.jpg",
        "url": "http://regional-data.capcog.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Capital Area Council of Governments",
        "id": "8336"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                24.174480396756717,
                -50.83665449168107
            ],
            [
                24.174480396756717,
                -174.76243574164846
            ],
            [
                68.06003362496205,
                -174.76243574164846
            ],
            [
                68.06003362496205,
                -50.83665449168107
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3969.jpg",
        "url": "http://data.msar.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Mountain Rescue Association - Open Data Portal",
        "id": "3969"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0002685064384279919,
                -0.0007302135450022354
            ],
            [
                0.0002685064384279919,
                -0.0007306088037272479
            ],
            [
                0.00026864118571857124,
                -0.0007306088037272479
            ],
            [
                0.00026864118571857124,
                -0.0007302135450022354
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4051.jpg",
        "url": "http://data.sjcpwd.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "PW Open Data",
        "id": "4051"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                13.232813023787656,
                -62.578124999983714
            ],
            [
                13.232813023787656,
                -138.51562499996376
            ],
            [
                52.047984508573045,
                -138.51562499996376
            ],
            [
                52.047984508573045,
                -62.578124999983714
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4203.jpg",
        "url": "http://data.doildt.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Irwin OAT Data Discovery",
        "id": "4203"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0002894192182490517,
                -0.0009338436536064484
            ],
            [
                0.0002894192182490517,
                -0.0009774658438032925
            ],
            [
                0.0003315052893009655,
                -0.0009774658438032925
            ],
            [
                0.0003315052893009655,
                -0.0009338436536064484
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4246.jpg",
        "url": "http://gisdata.ose.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "NM Office of the State Engineer",
        "id": "4246"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                28.450867266833402,
                -81.3428964843734
            ],
            [
                28.450867266833402,
                -82.06250097656059
            ],
            [
                29.069658126358572,
                -82.06250097656059
            ],
            [
                29.069658126358572,
                -81.3428964843734
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4323.jpg",
        "url": "http://data.lcgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Lake County Maps & Apps",
        "id": "4323"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                52.59559342033354,
                -1.4447021484373577
            ],
            [
                52.59559342033354,
                -2.2013854980457066
            ],
            [
                52.7492308542659,
                -2.2013854980457066
            ],
            [
                52.7492308542659,
                -1.4447021484373577
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4417.jpg",
        "url": "http://data.lichfielddc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Lichfield District Council",
        "id": "4417"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -16.627455684450403,
                -68.02547011866837
            ],
            [
                -16.627455684450403,
                -68.27197585597271
            ],
            [
                -16.426022683437402,
                -68.27197585597271
            ],
            [
                -16.426022683437402,
                -68.02547011866837
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4520.jpg",
        "url": "http://open.geosystems-telco.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Telecomunicaciones La Paz",
        "id": "4520"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00040369390552376204,
                -0.0007103787435288763
            ],
            [
                0.00040369390552376204,
                -0.0007265663849487101
            ],
            [
                0.0004144826720814192,
                -0.0007265663849487101
            ],
            [
                0.0004144826720814192,
                -0.0007103787435288763
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4746.jpg",
        "url": "http://data2.wpsgn.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "West Parry Sound Geography Network",
        "id": "4746"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.84499999999875,
                -121.56799999999566
            ],
            [
                36.84499999999875,
                -122.3449999999959
            ],
            [
                37.27499999999868,
                -122.3449999999959
            ],
            [
                37.27499999999868,
                -121.56799999999566
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4816.jpg",
        "url": "http://data1.sccgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "County of Santa Cruz, California",
        "id": "4816"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                3.8119861298598927,
                0.9400084327713966
            ],
            [
                3.8119861298598927,
                0.4772745246702058
            ],
            [
                4.0113995290778055,
                0.4772745246702058
            ],
            [
                4.0113995290778055,
                0.9400084327713966
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4842.jpg",
        "url": "http://data.portofrotterdam.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Port of Rotterdam",
        "id": "4842"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                41.46677131624809,
                -51.10787500001037
            ],
            [
                41.46677131624809,
                -143.39303124998594
            ],
            [
                74.24459174135553,
                -143.39303124998594
            ],
            [
                74.24459174135553,
                -51.10787500001037
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6297.jpg",
        "url": "http://nca.pwgsc-geomatics.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "PWGSC-Geomatics Open Data",
        "id": "6297"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                30.42767928315651,
                -99.5729483642569
            ],
            [
                30.42767928315651,
                -105.21992102050518
            ],
            [
                32.84990589361582,
                -105.21992102050518
            ],
            [
                32.84990589361582,
                -99.5729483642569
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6521.jpg",
        "url": "http://opendata.gis.utlands.org",
        "scope": [
            "ngo"
        ],
        "title": "University Lands",
        "id": "6521"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00041966595128481974,
                -0.0009037411084356034
            ],
            [
                0.00041966595128481974,
                -0.0009072265717379872
            ],
            [
                0.00042126495247993176,
                -0.0009072265717379872
            ],
            [
                0.00042126495247993176,
                -0.0009037411084356034
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4998.jpg",
        "url": "http://download.bismarck.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Bismarck, ND Open Data",
        "id": "4998"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                18.53801247708092,
                -154.06818858705404
            ],
            [
                18.53801247708092,
                -162.48371593080117
            ],
            [
                23.680809890065667,
                -162.48371593080117
            ],
            [
                23.680809890065667,
                -154.06818858705404
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5422.jpg",
        "url": "http://hawaiistatewidegisopendataportal.histategis.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Hawaii Statewide GIS Open Data Portal",
        "id": "5422"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                28.671304137285578,
                -94.99271558628584
            ],
            [
                28.671304137285578,
                -100.92533277378382
            ],
            [
                32.14770452460159,
                -100.92533277378382
            ],
            [
                32.14770452460159,
                -94.99271558628584
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/5770.jpg",
        "url": "http://gis.txdot.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Texas Department of Transportation",
        "id": "5770"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                32.471999999999426,
                -80.25299999999862
            ],
            [
                32.471999999999426,
                -81.07699999999863
            ],
            [
                33.3299999999994,
                -81.07699999999863
            ],
            [
                33.3299999999994,
                -80.25299999999862
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/1317.jpg",
        "url": "http://public.colletoncounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Open Source GIS Data",
        "id": "1317"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                34.13599999999944,
                -118.12499999999783
            ],
            [
                34.13599999999944,
                -118.16099999999821
            ],
            [
                34.15699999999945,
                -118.16099999999821
            ],
            [
                34.15699999999945,
                -118.12499999999783
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/1413.jpg",
        "url": "http://cityofpasadenaca.pasgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Pasadena, CA Open Data",
        "id": "1413"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                -55.061540286441804,
                -53.64190904438469
            ],
            [
                -55.061540286441804,
                -73.57212058407006
            ],
            [
                -21.84577732263026,
                -73.57212058407006
            ],
            [
                -21.84577732263026,
                -53.64190904438469
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/2466.jpg",
        "url": "http://data.ignarg.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "INSTITUTO GEOGR\u00c1FICO NACIONAL",
        "id": "2466"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                32.46443371853884,
                -96.15329003906086
            ],
            [
                32.46443371853884,
                -97.8451845703102
            ],
            [
                33.56985638712105,
                -97.8451845703102
            ],
            [
                33.56985638712105,
                -96.15329003906086
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3154.jpg",
        "url": "http://denton.gtg.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Denton, TX",
        "id": "3154"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                43.78999999999926,
                -61.76499999999899
            ],
            [
                43.78999999999926,
                -65.74199999999891
            ],
            [
                45.547999999999206,
                -65.74199999999891
            ],
            [
                45.547999999999206,
                -61.76499999999899
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3421.jpg",
        "url": "http://catalogue.hrm.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Halifax Open Data Catalogue",
        "id": "3421"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                40.74113922523361,
                -111.86921661376732
            ],
            [
                40.74113922523361,
                -111.91556518554513
            ],
            [
                40.7723467747064,
                -111.91556518554513
            ],
            [
                40.7723467747064,
                -111.86921661376732
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/3856.jpg",
        "url": "http://gis.slcgov.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Salt Lake City GIS Open Data",
        "id": "3856"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                29.452584376742696,
                -95.44007678222482
            ],
            [
                29.452584376742696,
                -95.62272448730243
            ],
            [
                29.653281443387677,
                -95.62272448730243
            ],
            [
                29.653281443387677,
                -95.44007678222482
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7050.jpg",
        "url": "http://gis.missouricitytx.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "The City of Missouri City - Open Data Public Access",
        "id": "7050"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                46.59900443236301,
                -91.77171308541858
            ],
            [
                46.59900443236301,
                -93.17796308541824
            ],
            [
                48.65697949871776,
                -93.17796308541824
            ],
            [
                48.65697949871776,
                -91.77171308541858
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7416.jpg",
        "url": "http://stlouiscountymndata.slcgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "St. Louis County, Minnesota",
        "id": "7416"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.00033190953117270356,
                -0.001095800916180357
            ],
            [
                0.00033190953117270356,
                -0.0010966543157002705
            ],
            [
                0.00033238563827541357,
                -0.0010966543157002705
            ],
            [
                0.00033238563827541357,
                -0.001095800916180357
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/7461.jpg",
        "url": "http://data.cruzgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Santa Cruz City GIS",
        "id": "7461"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                36.672999999958364,
                -76.94699999991312
            ],
            [
                36.672999999958364,
                -78.32599999991155
            ],
            [
                37.7229999999572,
                -78.32599999991155
            ],
            [
                37.7229999999572,
                -76.94699999991312
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/9152.jpg",
        "url": "http://opengeospace.chesterfield.gov",
        "scope": [
            "local"
        ],
        "title": "Open GeoSpace",
        "id": "9152"
    }
},
// {
//     "geometry": {
//         "type": "Polygon",
//         "coordinates": [
//             [
//                 -4.747137020763857,
//                 66.62140624999368
//             ],
//             [
//                 -4.747137020763857,
//                 -103.18328124996198
//             ],
//             [
//                 35.31207558023455,
//                 -103.18328124996198
//             ],
//             [
//                 35.31207558023455,
//                 66.62140624999368
//             ]
//         ]
//     },
//     "properties": {
//         "img": "/gallery/images/7985.jpg",
//         "url": "http://data.servirgit.opendata.arcgis.com",
//         "scope": [
//             "national"
//         ],
//         "title": "SERVIR Geospatial Information Technology",
//         "id": "7985"
//     }
// },
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0002912877140253224,
                -0.0008501745680435563
            ],
            [
                0.0002912877140253224,
                -0.0008520250975288425
            ],
            [
                0.0002928058668562646,
                -0.0008520250975288425
            ],
            [
                0.0002928058668562646,
                -0.0008501745680435563
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8173.jpg",
        "url": "http://data.longviewtexas.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Longview Open Data",
        "id": "8173"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                34.734986344442696,
                -113.72239667915949
            ],
            [
                34.734986344442696,
                -120.66575605415765
            ],
            [
                42.38505305942802,
                -120.66575605415765
            ],
            [
                42.38505305942802,
                -113.72239667915949
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8875.jpg",
        "url": "http://emap.ndep-gis.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Nevada Division of Environmental Protection GIS",
        "id": "8875"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003550591160453695,
                -0.0006723889901634617
            ],
            [
                0.0003550591160453695,
                -0.0006851450671979589
            ],
            [
                0.00035819423638870835,
                -0.0006851450671979589
            ],
            [
                0.00035819423638870835,
                -0.0006723889901634617
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/10486.jpg",
        "url": "http://data.wilmingtonde.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Wilmington",
        "id": "10486"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0004546014326756078,
                -0.001079200049729828
            ],
            [
                0.0004546014326756078,
                -0.0010826944961850533
            ],
            [
                0.000456748406217124,
                -0.0010826944961850533
            ],
            [
                0.000456748406217124,
                -0.001079200049729828
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/8635.jpg",
        "url": "http://mydata.kamloops.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "  City of Kamloops",
        "id": "8635"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                0.0003446117092998431,
                -0.0007216615834974174
            ],
            [
                0.0003446117092998431,
                -0.0007637117219470523
            ],
            [
                0.0003773193687849451,
                -0.0007637117219470523
            ],
            [
                0.0003773193687849451,
                -0.0007216615834974174
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/6444.jpg",
        "url": "http://ogrip.geohio.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Ohio Geographically Referenced Information Program- OGRIP",
        "id": "6444"
    }
},
{
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                41.69999999999929,
                -87.84999999999853
            ],
            [
                41.69999999999929,
                -88.2999999999985
            ],
            [
                42.01999999999932,
                -88.2999999999985
            ],
            [
                42.01999999999932,
                -87.84999999999853
            ]
        ]
    },
    "properties": {
        "img": "/gallery/images/4107.jpg",
        "url": "http://dupageilgis.dupage.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "DuPage County Illinois",
        "id": "4107"
    }
}];



export default Ember.Route.extend({
    model() {
        return sites;
    },


});


