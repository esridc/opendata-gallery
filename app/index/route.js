import Ember from 'ember';

let sites = [
{
    "type": "Feature",
    "properties": {
        "url": "http://data.bureau.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Esri UK Bureau",
        "img": "/gallery/images/3617.jpg",
        "id": "3617"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 102100
        },
        "xmin": -1000000,
        "ymin": 6000000,
        "ymax": 8600000,
        "xmax": 350000
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://opendata.cityofboise.org",
        "scope": [
            "local"
        ],
        "title": "City of Boise - Open Data",
        "img": "/gallery/images/4002.jpg",
        "id": "4002"
    },
    "geometry": {
        "type": "extent",
        "xmin": -12953037.4787302,
        "xmax": -12922309.7933596,
        "ymax": 5409578.00776795,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5396201.52781806
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://hackthecommute.esrihax.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Hack The Commute",
        "img": "/gallery/images/4538.jpg",
        "id": "4538"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13628966.756663,
        "xmax": -13602060.9227066,
        "ymax": 6052651.6775452,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 6028191.82849396
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.kitchenergis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Kitchener",
        "img": "/gallery/images/4622.jpg",
        "id": "4622"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -80.543,
        "ymin": 43.363,
        "ymax": 43.484,
        "xmax": -80.358
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.brantford.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Brantford",
        "img": "/gallery/images/6762.jpg",
        "id": "6762"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8941831.03860153,
        "xmax": -8925473.51454853,
        "ymax": 5341797.56909828,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 5329720.51862924
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://concellolugo.esrism.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Concello de Lugo",
        "img": "/gallery/images/6793.jpg",
        "id": "6793"
    },
    "geometry": {
        "type": "extent",
        "xmin": -853321.904141763,
        "xmax": -830199.703085528,
        "ymax": 5322765.75414899,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5305834.95238384
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.nwfwmd.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Northwest Florida Water Management District",
        "img": "/gallery/images/7138.jpg",
        "id": "7138"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9579195.97748988,
        "xmax": -9176831.46059682,
        "ymax": 3615824.39706655,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 3390793.78579505
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.bouldercounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Boulder County Open Geospatial Data",
        "img": "/gallery/images/7157.jpg",
        "id": "7157"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -105.509,
        "ymin": 39.935,
        "ymax": 40.221,
        "xmax": -104.971
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://mgrc.garc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "MGRC Open Data",
        "img": "/gallery/images/7190.jpg",
        "id": "7190"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9427305.72659197,
        "xmax": -9169254.31910122,
        "ymax": 3980227.20557674,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3763146.04524685
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.pburg.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Perrysburg Open Data",
        "img": "/gallery/images/7203.jpg",
        "id": "7203"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9312883.33748415,
        "xmax": -9305927.56791021,
        "ymax": 5096067.16874182,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 5090640.13973358
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://activities.uia.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "UNIGIS International Association",
        "img": "/gallery/images/5226.jpg",
        "id": "5226"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 102100
        },
        "xmin": -18000000,
        "ymin": -12000000,
        "ymax": 16000000,
        "xmax": 18000000
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.fayettevillenc.gov",
        "scope": [
            "local"
        ],
        "title": "City of Fayetteville Open Data",
        "img": "/gallery/images/5675.jpg",
        "id": "5675"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -78.959,
        "ymin": 34.992,
        "ymax": 35.078,
        "xmax": -78.782
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://villaonlineopendata.telematicaonline.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Villa Online Open Data",
        "img": "/gallery/images/1774.jpg",
        "id": "1774"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 102100
        },
        "xmin": -9053700,
        "ymin": -2078641,
        "ymax": -4338,
        "xmax": -7642110
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://mdi.dmp.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Danmarks Milj\u00f8portals Open Data",
        "img": "/gallery/images/1820.jpg",
        "id": "1820"
    },
    "geometry": {
        "type": "extent",
        "xmin": 826769.858121629,
        "xmax": 1717103.14548622,
        "ymax": 7945920.97331157,
        "ymin": 7241499.14268835,
        "spatial_reference": {
            "wkid": 102100
        }
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://portal.madrid.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Portal Open Data Ayto Madrid",
        "img": "/gallery/images/1945.jpg",
        "id": "1945"
    },
    "geometry": {
        "type": "extent",
        "xmin": -418895.243855081,
        "xmax": -402197.320236091,
        "ymax": 4935063.64786669,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4923071.23956802
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.esrimybd.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Public Information Site",
        "img": "/gallery/images/2330.jpg",
        "id": "2330"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 86.133,
        "ymin": -18.096,
        "ymax": 23.128,
        "xmax": 162.422
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://cod-data.atlas-forestier.org",
        "scope": [
            "ngo"
        ],
        "title": "Minist\u00e8re de l\u2019Environnement et D\u00e9veloppement Durable - Donn\u00e9es Publiques",
        "img": "/gallery/images/6407.jpg",
        "id": "6407"
    },
    "geometry": {
        "type": "extent",
        "xmin": 1306155.93933674,
        "xmax": 3507542.35394923,
        "ymax": 659600.271991017,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": -1571137.96148297
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.cabarrus.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Open Data Viewer - Cabarrus County, NC",
        "img": "/gallery/images/6445.jpg",
        "id": "6445"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8994689.29557028,
        "xmax": -8935985.65784729,
        "ymax": 4233489.50849903,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4187015.79530167
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://cohgis.mycity.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Houston GIS Open Data",
        "img": "/gallery/images/6469.jpg",
        "id": "6469"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10660844.99429,
        "xmax": -10568561.1364224,
        "ymax": 3511521.85749899,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3440335.39969851
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://greatlakes.esri-rw.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Open data for Africa's Great Lakes Region",
        "img": "/gallery/images/6515.jpg",
        "id": "6515"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 25.849,
        "ymin": -4.657,
        "ymax": -0.74,
        "xmax": 31.133
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.vicforeststrp.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "VicForests",
        "img": "/gallery/images/3744.jpg",
        "id": "3744"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 140.845,
        "ymin": -39.115,
        "ymax": -35.427,
        "xmax": 150.052
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.cityofthornton.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Thornton",
        "img": "/gallery/images/3763.jpg",
        "id": "3763"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -105.062,
        "ymin": 39.779,
        "ymax": 40.088,
        "xmax": -104.769
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://bostonopendata.boston.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "BostonOpenData",
        "img": "/gallery/images/3910.jpg",
        "id": "3910"
    },
    "geometry": {
        "type": "extent",
        "xmin": -7923387.3961927,
        "xmax": -7902681.97090515,
        "ymax": 5225158.13945213,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5200908.61170342
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://openramsey.ramseygis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "OpenRamsey",
        "img": "/gallery/images/8186.jpg",
        "id": "8186"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10375978.4173501,
        "xmax": -10346812.7107622,
        "ymax": 5641695.02574692,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5605163.647132
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://opendata.madrid.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Open Data - Ayuntamiento de Madrid",
        "img": "/gallery/images/7847.jpg",
        "id": "7847"
    },
    "geometry": {
        "type": "extent",
        "xmin": -418895.243855074,
        "xmax": -402197.320236084,
        "ymax": 4935063.64786659,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4923071.23956792
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://opendata.hayward-ca.gov",
        "scope": [
            "local"
        ],
        "title": "City of Hayward",
        "img": "/gallery/images/8287.jpg",
        "id": "8287"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -122.163,
        "ymin": 37.608,
        "ymax": 37.682,
        "xmax": -121.997
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://city.oshawa.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Oshawa Open Data",
        "img": "/gallery/images/10348.jpg",
        "id": "10348"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -78.896,
        "ymin": 43.833,
        "ymax": 43.979,
        "xmax": -78.76
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.saukgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Sauk County Open Data Repository - Upgrade",
        "img": "/gallery/images/9468.jpg",
        "id": "9468"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -90.348,
        "ymin": 43.121,
        "ymax": 43.66,
        "xmax": -89.557
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.cityofgreersc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "The City of Greer, South Carolina",
        "img": "/gallery/images/8511.jpg",
        "id": "8511"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9166979.68223355,
        "xmax": -9137729.79185072,
        "ymax": 4164415.18919136,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 4150287.06602241
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.innovate.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Innovate! Inc.",
        "img": "/gallery/images/8720.jpg",
        "id": "8720"
    },
    "geometry": {
        "type": "extent",
        "xmin": -14999999.9999992,
        "xmax": -6199999.99999969,
        "ymax": 6499999.99999955,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 2699999.99999985
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.gwrc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Greater Wellington Regional Council Open Data",
        "img": "/gallery/images/8326.jpg",
        "id": "8326"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 174.535,
        "ymin": -41.656,
        "ymax": -40.651,
        "xmax": 176.469
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://cwt.nga.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Combating Wildlife Trafficking",
        "img": "/gallery/images/12476.jpg",
        "id": "12476"
    },
    "geometry": {
        "type": "extent",
        "xmin": -16583779.3961138,
        "xmax": 24273952.4590943,
        "ymax": 19573483.324116,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": -20344990.327524
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://public.morpc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Mid-Ohio Regional Planning Commission",
        "img": "/gallery/images/10088.jpg",
        "id": "10088"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9300112.00031224,
        "xmax": -9158244.87581499,
        "ymax": 4925928.49474903,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4787730.34760947
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.pcg.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Polk County Minnesota GIS",
        "img": "/gallery/images/8561.jpg",
        "id": "8561"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10821936.6703368,
        "xmax": -10678846.553387,
        "ymax": 6142321.70806319,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 6031640.89110626
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.tucsonaz.gov",
        "scope": [
            "local"
        ],
        "title": "City of Tucson",
        "img": "/gallery/images/12438.jpg",
        "id": "12438"
    },
    "geometry": {
        "type": "extent",
        "xmin": -12366878.6828929,
        "xmax": -12316430.2442247,
        "ymax": 3807427.88745142,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3758508.18934893
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://asis.nps.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Assateague Island National Seashore",
        "img": "/gallery/images/12488.jpg",
        "id": "12488"
    },
    "geometry": {
        "type": "extent",
        "xmin": -14949873.6550574,
        "xmax": -6222536.89635957,
        "ymax": 7259675.99339983,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 1585003.1334121
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.forestry.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Forestry Commission",
        "img": "/gallery/images/12863.jpg",
        "id": "12863"
    },
    "geometry": {
        "type": "extent",
        "xmin": -804413.041404498,
        "xmax": 310956.075332497,
        "ymax": 8123808.13406109,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 6343131.1231301
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.sit-rimini.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Comune di Rimini - U.O. SIT - Toponomastica",
        "img": "/gallery/images/12445.jpg",
        "id": "12445"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 12.463,
        "ymin": 43.991,
        "ymax": 44.113,
        "xmax": 12.651
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://opendata.firstmap.delaware.gov",
        "scope": [
            "state"
        ],
        "title": "State of Delaware",
        "img": "/gallery/images/3512.jpg",
        "id": "3512"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8454858.62785128,
        "xmax": -8321552.45052197,
        "ymax": 4851795.28174271,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4612088.76104046
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data1.nagareyamamidori.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "\u6d41\u5c71\u5e02\u30aa\u30fc\u30d7\u30f3\u30c7\u30fc\u30bf\u30de\u30c3\u30d7",
        "img": "/gallery/images/3581.jpg",
        "id": "3581"
    },
    "geometry": {
        "type": "extent",
        "xmin": 15568636.1507325,
        "xmax": 15583464.9342198,
        "ymax": 4290408.07114722,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4275846.81725891
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.data.vbgov.com",
        "scope": [
            "local"
        ],
        "title": "City of Virginia Beach Open Data Portal",
        "img": "/gallery/images/3788.jpg",
        "id": "3788"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8495903.53734249,
        "xmax": -8439019.27754713,
        "ymax": 4439664.3503327,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4371163.91792928
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.piercecowa.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Pierce County WA Open GeoSpatial Data Portal",
        "img": "/gallery/images/3827.jpg",
        "id": "3827"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13660952.3019529,
        "xmax": -13548131.248204,
        "ymax": 5986510.99370784,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 5912214.20221468
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.tilburg.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Gemeente Tilburg",
        "img": "/gallery/images/3889.jpg",
        "id": "3889"
    },
    "geometry": {
        "type": "extent",
        "xmin": 553000.701107392,
        "xmax": 575626.061479813,
        "ymax": 6730975.31382711,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 6715535.0341135
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://kygovmaps.kygeonet.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Kentucky Open GIS Data",
        "img": "/gallery/images/6186.jpg",
        "id": "6186"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10084060.3594466,
        "xmax": -9032286.8502429,
        "ymax": 4861856.1617101,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4235684.0259981
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.tompkinscounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Open Data",
        "img": "/gallery/images/6338.jpg",
        "id": "6338"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -76.553,
        "ymin": 42.446,
        "ymax": 42.471,
        "xmax": -76.458
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.osi.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Ordnance Survey Ireland",
        "img": "/gallery/images/6516.jpg",
        "id": "6516"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -8.989,
        "ymin": 53.259,
        "ymax": 53.498,
        "xmax": -6.789
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.asdoc.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "American Samoa GIS",
        "img": "/gallery/images/4065.jpg",
        "id": "4065"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -170.872,
        "ymin": -14.387,
        "ymax": -14.218,
        "xmax": -170.519
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://geo.wa.gov",
        "scope": [
            "state"
        ],
        "title": "Washington State GeoServices",
        "img": "/gallery/images/4837.jpg",
        "id": "4837"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13970596.0945556,
        "xmax": -12948126.5716194,
        "ymax": 6339758.13677307,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5664760.81562627
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.cosmo.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Springfield, Missouri",
        "img": "/gallery/images/5145.jpg",
        "id": "5145"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10402422.9385533,
        "xmax": -10368790.6461079,
        "ymax": 4483279.84615753,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4449647.55371207
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://prod.sccgov.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "County of Santa Clara",
        "img": "/gallery/images/5176.jpg",
        "id": "5176"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13613976.4362778,
        "xmax": -13535399.1712006,
        "ymax": 4500367.58318828,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4475601.9860239
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.pnw.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Pacific Northwest Maps",
        "img": "/gallery/images/5532.jpg",
        "id": "5532"
    },
    "geometry": {
        "type": "extent",
        "xmin": -675082.651424721,
        "xmax": 753372.5341544,
        "ymax": 2374501.39513403,
        "spatialReference": {
            "wkid": 102006
        },
        "ymin": 437281.348937683
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.moco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Montgomery County, Texas Open Data",
        "img": "/gallery/images/5633.jpg",
        "id": "5633"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -95.87,
        "ymin": 30.023,
        "ymax": 30.648,
        "xmax": -95.088
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.hslhrt.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Helsingin seudun liikenne (HSL)",
        "img": "/gallery/images/2812.jpg",
        "id": "2812"
    },
    "geometry": {
        "type": "extent",
        "xmin": 2700859.25000079,
        "xmax": 2858013.78015504,
        "ymax": 8505399.1288621,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 8390132.09020811
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://scottishgovernment.bureau.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Scottish Government",
        "img": "/gallery/images/6756.jpg",
        "id": "6756"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -8.196,
        "ymin": 54.458,
        "ymax": 59.052,
        "xmax": 0.22
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.worcesterma.gov",
        "scope": [
            "local"
        ],
        "title": "GIS Data - City of Worcester, MA",
        "img": "/gallery/images/7646.jpg",
        "id": "7646"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -71.884,
        "ymin": 42.211,
        "ymax": 42.338,
        "xmax": -71.732
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.mdt.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Montana Department of Transportation",
        "img": "/gallery/images/7691.jpg",
        "id": "7691"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -115.972,
        "ymin": 45.086,
        "ymax": 48.934,
        "xmax": -103.272
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://nukissiorfiit.asiaq.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Nukissiorfiit Datafordeler",
        "img": "/gallery/images/8459.jpg",
        "id": "8459"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8919999.99999819,
        "xmax": -703999.999999857,
        "ymax": 15799999.9999892,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 8999999.99999694
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.cobbcountyga.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Cobb County, Georgia",
        "img": "/gallery/images/8132.jpg",
        "id": "8132"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9444348.56935618,
        "xmax": -9373415.00710757,
        "ymax": 4045510.51314581,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3980691.91316001
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.ogauthority.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Oil and Gas Authority",
        "img": "/gallery/images/10041.jpg",
        "id": "10041"
    },
    "geometry": {
        "type": "extent",
        "xmin": -2894306.76062399,
        "xmax": 445277.963172921,
        "ymax": 9349764.17414058,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5942074.07242812
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://qarsc.abroxo.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Associa\u00e7\u00e3o de Benefici\u00e1rios do Roxo",
        "img": "/gallery/images/8252.jpg",
        "id": "8252"
    },
    "geometry": {
        "type": "extent",
        "xmin": -1359901.49188269,
        "xmax": -498914.805278697,
        "ymax": 4929983.3981601,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4489706.1152376
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.wpsgn.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "West Parry Sound Geography Network",
        "img": "/gallery/images/10863.jpg",
        "id": "10863"
    },
    "geometry": {
        "type": "extent",
        "xmin": -6786140.52077642,
        "xmax": -3029107.70650443,
        "ymax": 23801915.1575501,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 12139459.1299141
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://grsm.nps.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Great Smoky Mountains National Park",
        "img": "/gallery/images/12701.jpg",
        "id": "12701"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9368852.21674935,
        "xmax": -9211391.93848183,
        "ymax": 4276078.1904993,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4217833.17494598
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.fairfaxcountygis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Fairfax County GIS & Mapping Services Open Data Site",
        "img": "/gallery/images/9584.jpg",
        "id": "9584"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8638068.52843728,
        "xmax": -8569580.95109379,
        "ymax": 4733561.03976915,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4666296.45487823
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.claycountymn.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Clay County Open Data",
        "img": "/gallery/images/5817.jpg",
        "id": "5817"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10783448.8678836,
        "xmax": -10702731.3660144,
        "ymax": 5967305.56196437,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5879250.10537985
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://opendata.cccd-gis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Clayton County",
        "img": "/gallery/images/6118.jpg",
        "id": "6118"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9401896.52285486,
        "xmax": -9379729.78465215,
        "ymax": 3981994.3972009,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3941635.64626631
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://cmr-data.forest-atlas.org",
        "scope": [
            "ngo"
        ],
        "title": "Ministry of Forest and Wildlife - Open Data Portal",
        "img": "/gallery/images/6310.jpg",
        "id": "6310"
    },
    "geometry": {
        "type": "extent",
        "xmin": 912352.369611638,
        "xmax": 1856502.54298988,
        "ymax": 1515694.98878525,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 150835.411725502
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://lakd.lakd.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "LAKD Open Data",
        "img": "/gallery/images/6377.jpg",
        "id": "6377"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 20.752,
        "ymin": 53.821,
        "ymax": 56.482,
        "xmax": 26.927
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.galwaycoco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Galway County Opendata",
        "img": "/gallery/images/6536.jpg",
        "id": "6536"
    },
    "geometry": {
        "type": "extent",
        "xmin": -1157702.42975274,
        "xmax": -922582.130747652,
        "ymax": 7108771.21692667,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 7003899.61411946
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.waupacacounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Waupaca County Land Information Data",
        "img": "/gallery/images/3405.jpg",
        "id": "3405"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9940307.50560464,
        "xmax": -9858672.75939611,
        "ymax": 5576717.5336562,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5493554.04688197
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://happymapping.ejopendataportal.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "OpenStreetMap \u30de\u30c3\u30d4\u30f3\u30b0\u30d1\u30fc\u30c6\u30a3\u30fc\u7528\u60c5\u5831\u5171\u6709\u30b5\u30a4\u30c8",
        "img": "/gallery/images/3429.jpg",
        "id": "3429"
    },
    "geometry": {
        "type": "extent",
        "xmin": 53898416.235005,
        "xmax": 56823814.1815345,
        "ymax": 5872229.91311389,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 2848992.57037941
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data1.mck.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of McKinney",
        "img": "/gallery/images/3450.jpg",
        "id": "3450"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10785054.4892077,
        "xmax": -10749664.1451117,
        "ymax": 3928495.47467738,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3902889.07020188
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.kitcogis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Kittitas County GIS",
        "img": "/gallery/images/3474.jpg",
        "id": "3474"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13519519.6116224,
        "xmax": -13353651.2602435,
        "ymax": 5998882.20358551,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 5941707.30642818
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.ramathanadiv.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Ramat Hanadiv Open Data",
        "img": "/gallery/images/3498.jpg",
        "id": "3498"
    },
    "geometry": {
        "type": "extent",
        "xmin": 3885559.04450351,
        "xmax": 3897445.00240184,
        "ymax": 3839020.53765524,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 3826446.64650234
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.marlborough.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "MDC Open Data",
        "img": "/gallery/images/3501.jpg",
        "id": "3501"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 172.771,
        "ymin": -42.379,
        "ymax": -40.901,
        "xmax": 174.364
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.sccplanning.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Santa Clara County Planning and Development Department",
        "img": "/gallery/images/3791.jpg",
        "id": "3791"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13608867.1814169,
        "xmax": -13487179.432387,
        "ymax": 4510716.45640513,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4423578.24416007
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.ecwrpc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "ECWRPC",
        "img": "/gallery/images/4864.jpg",
        "id": "4864"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9946644.47089299,
        "xmax": -9799885.37658546,
        "ymax": 5600351.84064744,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 5401615.56710599
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.bedfordvagis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Bedford County, VA",
        "img": "/gallery/images/4876.jpg",
        "id": "4876"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8896227.20596363,
        "xmax": -8807254.50503973,
        "ymax": 4529137.82734323,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 4438636.38585362
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.phl.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "PHLmaps",
        "img": "/gallery/images/5040.jpg",
        "id": "5040"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -75.361,
        "ymin": 39.867,
        "ymax": 40.136,
        "xmax": -74.946
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://egis.cofgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Fremont | Open Data Portal",
        "img": "/gallery/images/5634.jpg",
        "id": "5634"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -121.984,
        "ymin": 37.546,
        "ymax": 37.555,
        "xmax": -121.961
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://udot.uplan.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "UDOT Open Data",
        "img": "/gallery/images/4112.jpg",
        "id": "4112"
    },
    "geometry": {
        "type": "extent",
        "xmin": -12759480.2575845,
        "xmax": -12089280.3935803,
        "ymax": 5217179.77377704,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 4395328.84565504
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://mdsv5.beredskab.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "MDS V5 pilot",
        "img": "/gallery/images/4124.jpg",
        "id": "4124"
    },
    "geometry": {
        "type": "extent",
        "xmin": -3643198.29328598,
        "xmax": 2501115.78838799,
        "ymax": 10277115.1824282,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 6128724.78333624
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://geology.ags-aer.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Alberta Geological Survey",
        "img": "/gallery/images/4179.jpg",
        "id": "4179"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -120.977,
        "ymin": 48.542,
        "ymax": 60.259,
        "xmax": -107.969
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://maps.phoenix.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Phoenix",
        "img": "/gallery/images/4326.jpg",
        "id": "4326"
    },
    "geometry": {
        "type": "extent",
        "xmin": -12486325.8275381,
        "xmax": -12464388.4004203,
        "ymax": 3962881.57696513,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 3947747.04536468
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://telechargement.gpmr.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "GPMR Open Data",
        "img": "/gallery/images/4617.jpg",
        "id": "4617"
    },
    "geometry": {
        "type": "extent",
        "xmin": 2655.11661450181,
        "xmax": 135044.049604363,
        "ymax": 6398429.71793016,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 6310985.75757196
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.tarrantcounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Tarrant County Geographic Information Portal",
        "img": "/gallery/images/4631.jpg",
        "id": "4631"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -97.569,
        "ymin": 32.526,
        "ymax": 33.009,
        "xmax": -97.012
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.grotongis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Town of Groton, CT Open Data Site",
        "img": "/gallery/images/347.jpg",
        "id": "347"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8026691.88364886,
        "xmax": -8010327.91850224,
        "ymax": 5073451.25655674,
        "ymin": 5057433.71834063,
        "spatial_reference": {
            "wkid": 102100
        }
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.staffordpw.com",
        "scope": [
            "local"
        ],
        "title": "City of Stafford GIS Data Portal",
        "img": "/gallery/images/816.jpg",
        "id": "816"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10641920.6808552,
        "xmax": -10634016.9970089,
        "ymax": 3460817.21329489,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3451084.30237274
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://omygod.idtsupport.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "\u570b\u5bb6\u707d\u5bb3\u9632\u6551\u79d1\u6280\u4e2d\u5fc3\u958b\u653e\u8cc7\u6599\u7db2\u7ad9",
        "img": "/gallery/images/880.jpg",
        "id": "880"
    },
    "geometry": {
        "type": "extent",
        "xmin": 13148434.8633528,
        "xmax": 13794076.7780047,
        "ymax": 2915396.45316584,
        "ymin": 2495576.46101788,
        "spatial_reference": {
            "wkid": 102100
        }
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://kkdata.gis2dk.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "KK data",
        "img": "/gallery/images/1935.jpg",
        "id": "1935"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 12.355,
        "ymin": 55.524,
        "ymax": 55.834,
        "xmax": 12.871
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://chathamkentopendata.chatham-kent.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Chatham-Kent Open Data",
        "img": "/gallery/images/1985.jpg",
        "id": "1985"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9204240.27394888,
        "xmax": -9078272.05133492,
        "ymax": 5271308.66412058,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 5149620.91509059
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.energy-gis.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Energy Sector GIS Working Group Uganda",
        "img": "/gallery/images/2488.jpg",
        "id": "2488"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 29.518,
        "ymin": -1.568,
        "ymax": 4.317,
        "xmax": 35.143
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.cupertino.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Cupertino",
        "img": "/gallery/images/6978.jpg",
        "id": "6978"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13597985.9911192,
        "xmax": -13565806.0022112,
        "ymax": 4490952.58350346,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4472760.57077161
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.comalcounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Comal County, Texas",
        "img": "/gallery/images/7147.jpg",
        "id": "7147"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -98.654,
        "ymin": 29.589,
        "ymax": 30.045,
        "xmax": -97.936
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://historic.cabarrus.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Historic Data",
        "img": "/gallery/images/6954.jpg",
        "id": "6954"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8995759.41396597,
        "xmax": -8936750.02812984,
        "ymax": 4235323.99717771,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4187933.03964093
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data2.rakuno-gis.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "\u5317\u6d77\u9053\u81ea\u7136\u74b0\u5883\u5730\u7406\u60c5\u5831\u30aa\u30fc\u30d7\u30f3\u30c7\u30fc\u30bf\u30b5\u30a4\u30c8",
        "img": "/gallery/images/7628.jpg",
        "id": "7628"
    },
    "geometry": {
        "type": "extent",
        "xmin": 15117440.4263291,
        "xmax": 16895671.4523549,
        "ymax": 5967774.13586734,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5004056.0832481
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://na.ebolaresponse.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Ebola",
        "img": "/gallery/images/7630.jpg",
        "id": "7630"
    },
    "geometry": {
        "type": "extent",
        "xmin": -20472913.6586173,
        "xmax": 19289016.9590947,
        "ymax": 16539129.4709768,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": -14769477.3146231
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://geodata.nisr.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "NISR's Geodata Portal",
        "img": "/gallery/images/7685.jpg",
        "id": "7685"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 28.486,
        "ymin": -2.966,
        "ymax": -0.908,
        "xmax": 31.079
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://louisville.lojic.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "LOJIC Open Data Portal",
        "img": "/gallery/images/7584.jpg",
        "id": "7584"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -86.029,
        "ymin": 37.989,
        "ymax": 38.417,
        "xmax": -85.355
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://cityofnashuanhopendata.nashuamaps.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Nashua, NH Open Data",
        "img": "/gallery/images/7337.jpg",
        "id": "7337"
    },
    "geometry": {
        "type": "extent",
        "xmin": -7969182.43011173,
        "xmax": -7947550.75110705,
        "ymax": 5284870.47242961,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 5264614.65993406
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.cuuats.org",
        "scope": [
            "local"
        ],
        "title": "CUUATS Data Portal",
        "img": "/gallery/images/7349.jpg",
        "id": "7349"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -88.462,
        "ymin": 39.878,
        "ymax": 40.4,
        "xmax": -87.929
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://geospatialdata.rpcgb.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Regional Planning Commission of Greater Birmingham",
        "img": "/gallery/images/9477.jpg",
        "id": "9477"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9710233.8333175,
        "xmax": -9617286.40692273,
        "ymax": 3989382.55665192,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 3941074.35477569
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://longmontopendata.longmontco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Longmont Open Data",
        "img": "/gallery/images/8537.jpg",
        "id": "8537"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -105.192,
        "ymin": 40.116,
        "ymax": 40.216,
        "xmax": -104.987
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.pslgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Port St. Lucie",
        "img": "/gallery/images/9004.jpg",
        "id": "9004"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8984450.40451882,
        "xmax": -8917185.8196279,
        "ymax": 3195316.32690637,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3136306.94107024
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://osav.usdot.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Geospatial at the Bureau of Transportation Statistics",
        "img": "/gallery/images/7926.jpg",
        "id": "7926"
    },
    "geometry": {
        "type": "extent",
        "xmin": -21906240.8102994,
        "xmax": 381573.645199455,
        "ymax": 8574807.42497576,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 767223.60781679
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.wem.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Wisconsin Emergency Management",
        "img": "/gallery/images/8183.jpg",
        "id": "8183"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10557317.8678518,
        "xmax": -9417406.28212872,
        "ymax": 6081106.98669326,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4985386.56242187
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.vof.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Virginia Outdoors Foundation",
        "img": "/gallery/images/10181.jpg",
        "id": "10181"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9334206.05122258,
        "xmax": -8331352.24012133,
        "ymax": 4804167.50711755,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4358998.2543848
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://lafayetteassessor.lpao.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Lafayette Parish Assessor's Office",
        "img": "/gallery/images/10220.jpg",
        "id": "10220"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10279423.103371,
        "xmax": -10218273.4807429,
        "ymax": 3558897.10740879,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3500804.96591208
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.wildutahproject.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Wild Utah Project Open Data",
        "img": "/gallery/images/10054.jpg",
        "id": "10054"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -112.816,
        "ymin": 37.608,
        "ymax": 41.007,
        "xmax": -100.401
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.whakatane.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Whakatane District Council Open Data",
        "img": "/gallery/images/10080.jpg",
        "id": "10080"
    },
    "geometry": {
        "type": "extent",
        "xmin": 19694087.806728,
        "xmax": 19709566.3049557,
        "ymax": -4567944.74401155,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": -4577996.21323103
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://corporategeospatial.hqfao.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Food and Agriculture Organization of the United Nations",
        "img": "/gallery/images/10737.jpg",
        "id": "10737"
    },
    "geometry": {
        "type": "extent",
        "xmin": 737740.999998979,
        "xmax": 2061735.99999715,
        "ymax": 5956969.99998926,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4231040.99999326
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.auroraco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Aurora, Colorado",
        "img": "/gallery/images/12086.jpg",
        "id": "12086"
    },
    "geometry": {
        "type": "extent",
        "xmin": -11676921.2915096,
        "xmax": -11635339.5481225,
        "ymax": 4840597.82571812,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4800239.07478353
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://arctic.nga.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Arctic Support",
        "img": "/gallery/images/12031.jpg",
        "id": "12031"
    },
    "geometry": {
        "type": "extent",
        "xmin": -2167994.97681896,
        "xmax": 6160532.13890181,
        "ymax": 3447790.55595878,
        "spatialReference": {
            "wkid": 5936,
            "latestWkid": 5936
        },
        "ymin": 559672.281958836
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.logancity.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Logan City Council",
        "img": "/gallery/images/5158.jpg",
        "id": "5158"
    },
    "geometry": {
        "type": "extent",
        "xmin": 17025176.6479685,
        "xmax": 17065000.339705,
        "ymax": -3199322.12582554,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": -3225616.46355561
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://romo.nps.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Rocky Mountain National Park",
        "img": "/gallery/images/12492.jpg",
        "id": "12492"
    },
    "geometry": {
        "type": "extent",
        "xmin": -14949873.6550574,
        "xmax": -6222536.89635957,
        "ymax": 7259675.99339983,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 1585003.1334121
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://geo.massdot.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "MassDOT Open Data Portal",
        "img": "/gallery/images/4559.jpg",
        "id": "4559"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -73.688,
        "ymin": 41.113,
        "ymax": 42.981,
        "xmax": -69.744
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.imap.maryland.gov",
        "scope": [
            "state"
        ],
        "title": "the GIS Data Catalog",
        "img": "/gallery/images/4681.jpg",
        "id": "4681"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8839769.44440291,
        "xmax": -8368887.99834737,
        "ymax": 4859405.1553036,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4527991.0999864
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://streamkeepers.ttfwatershed.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Tookany/Tacony-Frankford Watershed Partnership",
        "img": "/gallery/images/3285.jpg",
        "id": "3285"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8374383.04742111,
        "xmax": -8346636.40615363,
        "ymax": 4888244.03366333,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4860115.20725443
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://public.chesva.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Chesapeake, VA Open Data Site",
        "img": "/gallery/images/3425.jpg",
        "id": "3425"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8545329.39125471,
        "xmax": -8451821.01898836,
        "ymax": 4435901.3685641,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4371025.41741303
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.ral.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Open Raleigh GIS Data",
        "img": "/gallery/images/3507.jpg",
        "id": "3507"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -79.039,
        "ymin": 35.477,
        "ymax": 36.123,
        "xmax": -78.201
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.dedham.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Dedham GIS Data",
        "img": "/gallery/images/3603.jpg",
        "id": "3603"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -71.191,
        "ymin": 42.242,
        "ymax": 42.254,
        "xmax": -71.155
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://maps.cdphdata.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "California Dept of Public Health Geospatial Resources                                                                                         .",
        "img": "/gallery/images/3608.jpg",
        "id": "3608"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -122.645,
        "ymin": 37.698,
        "ymax": 37.887,
        "xmax": -121.873
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://census.dcdev.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "US Census Bureau",
        "img": "/gallery/images/3665.jpg",
        "id": "3665"
    },
    "geometry": {
        "type": "extent",
        "xmin": -14079074.3292817,
        "xmax": -7347723.87037774,
        "ymax": 6347612.22388215,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 2796042.14164067
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.dougco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Douglas County, CO",
        "img": "/gallery/images/3709.jpg",
        "id": "3709"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -105.36,
        "ymin": 39.117,
        "ymax": 39.584,
        "xmax": -104.58
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.bcogc.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "BC Oil and Gas Commission Open Data Portal",
        "img": "/gallery/images/3874.jpg",
        "id": "3874"
    },
    "geometry": {
        "type": "extent",
        "xmin": -15595526.701665,
        "xmax": -12406000.6514562,
        "ymax": 8481903.59685017,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 6035943.97037441
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.hartford.gov",
        "scope": [
            "local"
        ],
        "title": "Hartford Data",
        "img": "/gallery/images/5964.jpg",
        "id": "5964"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8095821.28743148,
        "xmax": -8086247.81122326,
        "ymax": 5132560.71943809,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5118830.36750945
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://openac.alcogis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "DCS GIS",
        "img": "/gallery/images/6210.jpg",
        "id": "6210"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -80.44,
        "ymin": 40.165,
        "ymax": 40.734,
        "xmax": -79.545
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://chulavista.cvgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Chula Vista GIS",
        "img": "/gallery/images/6234.jpg",
        "id": "6234"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13037070.8447632,
        "xmax": -13012469.2372979,
        "ymax": 3850922.26899248,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3838366.75787769
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.rockvillemd.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Rockville, MD, Open Data",
        "img": "/gallery/images/6296.jpg",
        "id": "6296"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8599096.70530786,
        "xmax": -8576721.48765841,
        "ymax": 4743037.07265585,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4724250.24619879
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://njogis.newjersey.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "New Jersey Office of GIS - Open Data",
        "img": "/gallery/images/6551.jpg",
        "id": "6551"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8435590.44154983,
        "xmax": -8195883.92084758,
        "ymax": 5072331.60517667,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 4701764.89205023
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.cog-gis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Glendale, Arizona",
        "img": "/gallery/images/4113.jpg",
        "id": "4113"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -112.251,
        "ymin": 33.521,
        "ymax": 33.547,
        "xmax": -112.154
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://prodp.neod.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Pittsburgh Regional Open Data Portal",
        "img": "/gallery/images/4151.jpg",
        "id": "4151"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -80.198,
        "ymin": 40.177,
        "ymax": 40.554,
        "xmax": -79.69
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.alabama.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Alabama's Open Data Catalog",
        "img": "/gallery/images/4207.jpg",
        "id": "4207"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -88.462,
        "ymin": 30.303,
        "ymax": 35.071,
        "xmax": -84.968
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.helenamtmaps.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Lewis & Clark County - City of Helena GIS",
        "img": "/gallery/images/4233.jpg",
        "id": "4233"
    },
    "geometry": {
        "type": "extent",
        "xmin": -12587442.4528378,
        "xmax": -12397572.8745776,
        "ymax": 5984331.81126547,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 5864784.29902751
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://opendata.dc.gov",
        "scope": [
            "local"
        ],
        "title": "the DC GIS Open Data Site",
        "img": "/gallery/images/4358.jpg",
        "id": "4358"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8586544.40676612,
        "xmax": -8565524.22398773,
        "ymax": 4716138.3130401,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 4697105.49299712
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.nukissiorfiit.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Nukissiorfiit OpenData",
        "img": "/gallery/images/4409.jpg",
        "id": "4409"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -75.571,
        "ymin": 59.245,
        "ymax": 80.232,
        "xmax": -13.168
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.slco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Salt Lake County Open Data Portal",
        "img": "/gallery/images/4428.jpg",
        "id": "4428"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -112.001,
        "ymin": 40.682,
        "ymax": 40.783,
        "xmax": -111.757
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.rakuno-gis.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "RakunoGakuenUniversity",
        "img": "/gallery/images/4473.jpg",
        "id": "4473"
    },
    "geometry": {
        "type": "extent",
        "xmin": 15748580.552295,
        "xmax": 15756988.6254063,
        "ymax": 5325122.67348902,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5319485.44265299
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://openstoryco.storycogis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Story County Open GIS Data Portal",
        "img": "/gallery/images/4562.jpg",
        "id": "4562"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10435583.9521587,
        "xmax": -10371223.9743425,
        "ymax": 5193844.36730519,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5137128.09231757
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://peachland.rdco.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "District Of Peachland",
        "img": "/gallery/images/4579.jpg",
        "id": "4579"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13332911.5011415,
        "xmax": -13325764.6389969,
        "ymax": 6408805.31135178,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 6403664.92119961
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://home.ebolaresponse.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Ebola Response",
        "img": "/gallery/images/4707.jpg",
        "id": "4707"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -33.047,
        "ymin": -21.868,
        "ymax": 49.89,
        "xmax": 41.484
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.sccgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "County of Santa Cruz, California",
        "img": "/gallery/images/4860.jpg",
        "id": "4860"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13619383.1011026,
        "xmax": -13532887.8567562,
        "ymax": 4477507.87484769,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4417523.75152686
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.orf.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Norfolk",
        "img": "/gallery/images/4985.jpg",
        "id": "4985"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8499354.44155594,
        "xmax": -8476867.9044157,
        "ymax": 4435065.33173772,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4413768.60522151
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.pluton.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "DOT Open Data Site",
        "img": "/gallery/images/5147.jpg",
        "id": "5147"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9820953.80771769,
        "xmax": -8832775.9060472,
        "ymax": 3647823.93865181,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 2784391.26714269
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.baltimore.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Baltimore City Open GIS data",
        "img": "/gallery/images/5440.jpg",
        "id": "5440"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -76.655,
        "ymin": 39.272,
        "ymax": 39.31,
        "xmax": -76.574
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.smartcommunities.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "SmartCommunities",
        "img": "/gallery/images/5522.jpg",
        "id": "5522"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8383804.81011367,
        "xmax": -8350631.60185728,
        "ymax": 4880630.19735826,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4837355.93717066
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://opengis.cityoftulsa.org",
        "scope": [
            "local"
        ],
        "title": "City of Tulsa GIS Open Data",
        "img": "/gallery/images/5553.jpg",
        "id": "5553"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10689993.0524174,
        "xmax": -10666259.3551349,
        "ymax": 4323243.32011501,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 4309943.27719341
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://camdencountynj.ccdpw.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "County of Camden",
        "img": "/gallery/images/5589.jpg",
        "id": "5589"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8380313.98198989,
        "xmax": -8306017.19049673,
        "ymax": 4870621.01349864,
        "spatialReference": {
            "wkid": 102100,
            "wkt": null,
            "declaredClass": "esri.SpatialReference",
            "_info": {
                "4326": {
                    "origin": [
                        -180,
                        180
                    ],
                    "valid": [
                        -180,
                        180
                    ],
                    "altTemplate": "PROJCS[\"WGS_1984_Plate_Carree\",GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137.0,298.257223563]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Plate_Carree\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",0.0],PARAMETER[\"Central_Meridian\",${Central_Meridian}],UNIT[\"Degrees\",111319.491]]",
                    "dx": 1e-05,
                    "wkTemplate": "GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137.0,298.257223563]],PRIMEM[\"Greenwich\",${Central_Meridian}],UNIT[\"Degree\",0.0174532925199433]]"
                },
                "102100": {
                    "origin": [
                        -20037508.342787,
                        20037508.342787
                    ],
                    "valid": [
                        -20037508.3427889,
                        20037508.3427889
                    ],
                    "dx": 1e-05,
                    "wkTemplate": "PROJCS[\"WGS_1984_Web_Mercator_Auxiliary_Sphere\",GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137.0,298.257223563]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Mercator_Auxiliary_Sphere\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",0.0],PARAMETER[\"Central_Meridian\",${Central_Meridian}],PARAMETER[\"Standard_Parallel_1\",0.0],PARAMETER[\"Auxiliary_Sphere_Type\",0.0],UNIT[\"Meter\",1.0]]"
                },
                "102113": {
                    "origin": [
                        -20037508.342787,
                        20037508.342787
                    ],
                    "valid": [
                        -20037508.3427889,
                        20037508.3427889
                    ],
                    "dx": 1e-05,
                    "wkTemplate": "PROJCS[\"WGS_1984_Web_Mercator\",GEOGCS[\"GCS_WGS_1984_Major_Auxiliary_Sphere\",DATUM[\"D_WGS_1984_Major_Auxiliary_Sphere\",SPHEROID[\"WGS_1984_Major_Auxiliary_Sphere\",6378137.0,0.0]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Mercator\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",0.0],PARAMETER[\"Central_Meridian\",${Central_Meridian}],PARAMETER[\"Standard_Parallel_1\",0.0],UNIT[\"Meter\",1.0]]"
                },
                "3857": {
                    "origin": [
                        -20037508.342787,
                        20037508.342787
                    ],
                    "valid": [
                        -20037508.3427889,
                        20037508.3427889
                    ],
                    "dx": 1e-05,
                    "wkTemplate": "PROJCS[\"WGS_1984_Web_Mercator_Auxiliary_Sphere\",GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137.0,298.257223563]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Mercator_Auxiliary_Sphere\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",0.0],PARAMETER[\"Central_Meridian\",${Central_Meridian}],PARAMETER[\"Standard_Parallel_1\",0.0],PARAMETER[\"Auxiliary_Sphere_Type\",0.0],UNIT[\"Meter\",1.0]]"
                },
                "3785": {
                    "origin": [
                        -20037508.342787,
                        20037508.342787
                    ],
                    "valid": [
                        -20037508.3427889,
                        20037508.3427889
                    ],
                    "dx": 1e-05,
                    "wkTemplate": "PROJCS[\"WGS_1984_Web_Mercator\",GEOGCS[\"GCS_WGS_1984_Major_Auxiliary_Sphere\",DATUM[\"D_WGS_1984_Major_Auxiliary_Sphere\",SPHEROID[\"WGS_1984_Major_Auxiliary_Sphere\",6378137.0,0.0]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Mercator\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",0.0],PARAMETER[\"Central_Meridian\",${Central_Meridian}],PARAMETER[\"Standard_Parallel_1\",0.0],UNIT[\"Meter\",1.0]]"
                }
            }
        },
        "ymin": 4804885.16917342,
        "declaredClass": "esri.geometry.Extent"
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://sgi.cvs.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Communaut\u00e9 d'agglomeration Caux vall\u00e9e de Seine",
        "img": "/gallery/images/6587.jpg",
        "id": "6587"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 0.453,
        "ymin": 49.453,
        "ymax": 49.528,
        "xmax": 0.644
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.racinecounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Racine County, WI",
        "img": "/gallery/images/7059.jpg",
        "id": "7059"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9848332.91938682,
        "xmax": -9756608.48544458,
        "ymax": 5300725.59463091,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5239575.97200275
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.csjdotgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Open GIS Data",
        "img": "/gallery/images/7218.jpg",
        "id": "7218"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13590088.450339,
        "xmax": -13546595.7812448,
        "ymax": 4499288.87437467,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4469631.30740006
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://andes.ccrp.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "CCRP Andes Opendata ",
        "img": "/gallery/images/588.jpg",
        "id": "588"
    },
    "geometry": {
        "spatial_reference": {
            "wkid": 102100
        },
        "xmin": -18000000,
        "ymin": -12000000,
        "ymax": 16000000,
        "xmax": 18000000
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://geoportaal.ddh.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Open Data Den Haag GEO Portaal",
        "img": "/gallery/images/824.jpg",
        "id": "824"
    },
    "geometry": {
        "type": "extent",
        "xmin": 461985.398955502,
        "xmax": 495694.128429219,
        "ymax": 6823655.5236067,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 6801488.78540403
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://lincolncountymngisdata.lcmn.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Lincoln County MN GIS Data",
        "img": "/gallery/images/850.jpg",
        "id": "850"
    },
    "geometry": {
        "spatial_reference": {
            "wkid": 102100
        },
        "xmin": -15000000,
        "ymin": 2700000,
        "ymax": 6500000,
        "xmax": -6200000
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://town.mooresvillenc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Town of Mooresville, NC Open Data",
        "img": "/gallery/images/949.jpg",
        "id": "949"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9018437.22712611,
        "xmax": -8980588.6002564,
        "ymax": 4266687.56224634,
        "ymin": 4227663.75826554,
        "spatial_reference": {
            "wkid": 102100
        }
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://illinoisepaopendata.illinois-epa.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Illinois EPA Open Data",
        "img": "/gallery/images/1239.jpg",
        "id": "1239"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -92.012,
        "ymin": 36.836,
        "ymax": 42.674,
        "xmax": -86.958
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://tilmanns.svcs-eaglegis.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Tilmanns Open Data Example",
        "img": "/gallery/images/1640.jpg",
        "id": "1640"
    },
    "geometry": {
        "spatial_reference": {
            "wkid": 102100
        },
        "xmin": 18240000,
        "ymin": -6050000,
        "ymax": -4030000,
        "xmax": 19990000
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://aucklandopendata.aucklandcouncil.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Auckland Council Data Download",
        "img": "/gallery/images/1722.jpg",
        "id": "1722"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 173.971,
        "ymin": -37.402,
        "ymax": -35.975,
        "xmax": 175.669
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.evvc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Evansville & Vanderburgh County GIS Data",
        "img": "/gallery/images/1823.jpg",
        "id": "1823"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -87.789,
        "ymin": 37.79,
        "ymax": 38.217,
        "xmax": -87.373
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.haut-rhin.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Conseil D\u00e9partemental du Haut-Rhin",
        "img": "/gallery/images/2597.jpg",
        "id": "2597"
    },
    "geometry": {
        "type": "extent",
        "xmin": 758085.73230218,
        "xmax": 883431.478935404,
        "ymax": 6152894.84467708,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 6005637.11077668
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://banen.banedanmark.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Banens geografiske data",
        "img": "/gallery/images/7701.jpg",
        "id": "7701"
    },
    "geometry": {
        "type": "extent",
        "xmin": 649994.506741913,
        "xmax": 1691054.38464059,
        "ymax": 7914982.68481368,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 7275975.30115093
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.ice-se.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "ICE Sector Electricidad",
        "img": "/gallery/images/7725.jpg",
        "id": "7725"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9646947.0721446,
        "xmax": -9069755.5123815,
        "ymax": 1300219.20818821,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 867166.467304491
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.naer.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "NaturErhvervstyrelsen",
        "img": "/gallery/images/7749.jpg",
        "id": "7749"
    },
    "geometry": {
        "type": "extent",
        "xmin": 649999.999999956,
        "xmax": 1690999.99999989,
        "ymax": 7914999.99999918,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 7275999.99999929
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://dat.montezumacounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Montezuma County Online Mapping",
        "img": "/gallery/images/7883.jpg",
        "id": "7883"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -108.902,
        "ymin": 37.214,
        "ymax": 37.497,
        "xmax": -108.395
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://opendatatm.mitelematica.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Open Data Telematica",
        "img": "/gallery/images/8533.jpg",
        "id": "8533"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9053725.50561868,
        "xmax": -7642083.0428829,
        "ymax": -4341.46047618721,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": -2078673.67734027
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.slocounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "County of San Luis Obispo",
        "img": "/gallery/images/8564.jpg",
        "id": "8564"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -121.388,
        "ymin": 34.841,
        "ymax": 35.84,
        "xmax": -119.421
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data2.esrieanatres.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Kenya MEAs Portal",
        "img": "/gallery/images/8569.jpg",
        "id": "8569"
    },
    "geometry": {
        "type": "extent",
        "xmin": 3773740.99999956,
        "xmax": 4664441.99999945,
        "ymax": 613432.999999926,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": -526067.999999944
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://opendata.cosb.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "San Benito County Open Data Portal",
        "img": "/gallery/images/8242.jpg",
        "id": "8242"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13544660.0776564,
        "xmax": -13411048.152214,
        "ymax": 4439176.4924875,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4333693.39345401
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://kmod.beirutgardens.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "ArcGIS Online",
        "img": "/gallery/images/8280.jpg",
        "id": "8280"
    },
    "geometry": {
        "type": "extent",
        "xmin": 5160110.4162611,
        "xmax": 5416327.335073,
        "ymax": 3518303.5434418,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3311006.32273241
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.hillsborough.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Hillsborough County GeoHub",
        "img": "/gallery/images/8088.jpg",
        "id": "8088"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9200221.95559153,
        "xmax": -9134098.17806032,
        "ymax": 3275981.18281844,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3201148.41020183
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.unwfp.opendata.arcgis.com",
        "scope": "ngo ",
        "title": "United Nations World Food Programme",
        "img": "/gallery/images/10086.jpg",
        "id": "10086"
    },
    "geometry": {
        "type": "extent",
        "xmin": -17999999.9999976,
        "xmax": 17999999.9999976,
        "ymax": 15999999.9999924,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": -11999999.9999964
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://forestrybureau.idt.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "\u6797\u52d9\u5c40\u8cc7\u6599\u958b\u653e\u670d\u52d9\u5c08\u5340",
        "img": "/gallery/images/10194.jpg",
        "id": "10194"
    },
    "geometry": {
        "type": "extent",
        "xmin": 13297831.0160502,
        "xmax": 13607248.1065485,
        "ymax": 2933811.53405054,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 2493534.25112804
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://fis.msugis.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "MSU Infrastructure Planning and Facilities GeoPortal",
        "img": "/gallery/images/10219.jpg",
        "id": "10219"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -84.508,
        "ymin": 42.71,
        "ymax": 42.736,
        "xmax": -84.46
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.townoflaplata.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Town of La Plata",
        "img": "/gallery/images/10550.jpg",
        "id": "10550"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -77.026,
        "ymin": 38.521,
        "ymax": 38.562,
        "xmax": -76.911
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.gizzy.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "  Gisborne District Council",
        "img": "/gallery/images/9726.jpg",
        "id": "9726"
    },
    "geometry": {
        "type": "extent",
        "xmin": 19804224.5260479,
        "xmax": 19833499.9078811,
        "ymax": -4664859.32798897,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": -4680223.17067427
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://maps.waukeshacounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Waukesha County Open Data",
        "img": "/gallery/images/12342.jpg",
        "id": "12342"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -88.575,
        "ymin": 42.823,
        "ymax": 43.213,
        "xmax": -88.045
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://geoportal.statistics.gov.uk",
        "scope": [
            "ngo"
        ],
        "title": "ONS Geography Portal",
        "img": "/gallery/images/7592.jpg",
        "id": "7592"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -8.96,
        "ymin": 49.36,
        "ymax": 59.783,
        "xmax": 2.466
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.waterinstitute.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "The Water Institute at USF",
        "img": "/gallery/images/11623.jpg",
        "id": "11623"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -87.894,
        "ymin": 24.305,
        "ymax": 31.276,
        "xmax": -79.017
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.kalmar.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Kalmar kommun",
        "img": "/gallery/images/12284.jpg",
        "id": "12284"
    },
    "geometry": {
        "type": "extent",
        "xmin": 131493.313925667,
        "xmax": 143002.711944463,
        "ymax": 6289135.36881748,
        "spatialReference": {
            "wkid": 3010,
            "latestWkid": 3010
        },
        "ymin": 6280007.22556119
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.floridaswater.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "St. Johns River Water Management District (SJRWMD) Open Data",
        "img": "/gallery/images/7922.jpg",
        "id": "7922"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -84.291,
        "ymin": 25.992,
        "ymax": 31.236,
        "xmax": -78.6
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.ncdenr.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "NC DEQ GIS Data",
        "img": "/gallery/images/12140.jpg",
        "id": "12140"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9453459.88220973,
        "xmax": -8338090.76547274,
        "ymax": 4504893.155116,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3927640.71750651
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://regional-data.capcog.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Capital Area Council of Governments",
        "img": "/gallery/images/8336.jpg",
        "id": "8336"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -98.948,
        "ymin": 29.648,
        "ymax": 30.976,
        "xmax": -96.54
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.msar.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "Mountain Rescue Association - Open Data Portal",
        "img": "/gallery/images/3969.jpg",
        "id": "3969"
    },
    "geometry": {
        "type": "extent",
        "xmin": -19454465.3565525,
        "xmax": -5659110.49164752,
        "ymax": 10464860.3062634,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 2774683.76455048
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.sjcpwd.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "PW Open Data",
        "img": "/gallery/images/4051.jpg",
        "id": "4051"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -81.331,
        "ymin": 29.89,
        "ymax": 29.905,
        "xmax": -81.287
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.doildt.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "Irwin OAT Data Discovery",
        "img": "/gallery/images/4203.jpg",
        "id": "4203"
    },
    "geometry": {
        "type": "extent",
        "xmin": -15419488.841908,
        "xmax": -6966165.00979601,
        "ymax": 6808806.32347575,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 1486343.16992375
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gisdata.ose.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "NM Office of the State Engineer",
        "img": "/gallery/images/4246.jpg",
        "id": "4246"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -108.811,
        "ymin": 32.218,
        "ymax": 36.903,
        "xmax": -103.955
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.lcgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Lake County Maps & Apps",
        "img": "/gallery/images/4323.jpg",
        "id": "4323"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9135155.82193324,
        "xmax": -9055049.81629041,
        "ymax": 3384514.94448855,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 3305937.67941143
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.lichfielddc.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Lichfield District Council",
        "img": "/gallery/images/4417.jpg",
        "id": "4417"
    },
    "geometry": {
        "type": "extent",
        "xmin": -245057.112682145,
        "xmax": -160823.507511995,
        "ymax": 6936746.45603546,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 6908541.19259827
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://open.geosystems-telco.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Telecomunicaciones La Paz",
        "img": "/gallery/images/4520.jpg",
        "id": "4520"
    },
    "geometry": {
        "type": "extent",
        "xmin": -7600001.58773755,
        "xmax": -7572560.69458321,
        "ymax": -1854111.70522399,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": -1877501.43587922
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data2.wpsgn.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "West Parry Sound Geography Network",
        "img": "/gallery/images/4746.jpg",
        "id": "4746"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -80.881,
        "ymin": 44.939,
        "ymax": 46.14,
        "xmax": -79.079
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data1.sccgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "County of Santa Cruz, California",
        "img": "/gallery/images/4816.jpg",
        "id": "4816"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13619383.1011026,
        "xmax": -13532887.8567562,
        "ymax": 4477507.87484769,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4417523.75152686
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.portofrotterdam.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Port of Rotterdam",
        "img": "/gallery/images/4842.jpg",
        "id": "4842"
    },
    "geometry": {
        "type": "extent",
        "xmin": 53129.957054889,
        "xmax": 104641.260077495,
        "ymax": 446912.207029439,
        "spatialReference": {
            "wkid": 28992,
            "latestWkid": 28992
        },
        "ymin": 424661.76252855
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://portal.southbend.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "OpenData South Bend Indiana",
        "img": "/gallery/images/5939.jpg",
        "id": "5939"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9614612.04986191,
        "xmax": -9587629.77887728,
        "ymax": 5124969.51026241,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5099821.72795662
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://mkpj.ejopendataportal.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "\u672a\u6765\u4ecb\u8b77\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",
        "img": "/gallery/images/5958.jpg",
        "id": "5958"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 139.765,
        "ymin": 35.606,
        "ymax": 35.724,
        "xmax": 140.037
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://nca.pwgsc-geomatics.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "PWGSC-Geomatics Open Data",
        "img": "/gallery/images/6297.jpg",
        "id": "6297"
    },
    "geometry": {
        "type": "extent",
        "xmin": -15962439.2220524,
        "xmax": -5689302.62052743,
        "ymax": 12615069.5464603,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5081436.03867529
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://opendata.gis.utlands.org",
        "scope": [
            "ngo"
        ],
        "title": "University Lands",
        "img": "/gallery/images/6521.jpg",
        "id": "6521"
    },
    "geometry": {
        "type": "extent",
        "xmin": -11713028.0293111,
        "xmax": -11084409.908694,
        "ymax": 3875398.3854029,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 3558643.34018921
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://download.bismarck.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Bismarck, ND Open Data",
        "img": "/gallery/images/4998.jpg",
        "id": "4998"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -100.992,
        "ymin": 46.717,
        "ymax": 46.895,
        "xmax": -100.604
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://hawaiistatewidegisopendataportal.histategis.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Hawaii Statewide GIS Open Data Portal",
        "img": "/gallery/images/5422.jpg",
        "id": "5422"
    },
    "geometry": {
        "type": "extent",
        "xmin": -18087604.5196157,
        "xmax": -17150792.3009529,
        "ymax": 2714561.36072118,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 2100619.14953481
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.txdot.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Texas Department of Transportation",
        "img": "/gallery/images/5770.jpg",
        "id": "5770"
    },
    "geometry": {
        "type": "extent",
        "xmin": -11234956.6525193,
        "xmax": -10574540.7281356,
        "ymax": 3782714.79573412,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3333876.56564368
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://public.colletoncounty.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Open Source GIS Data",
        "img": "/gallery/images/1317.jpg",
        "id": "1317"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9025450.35504609,
        "xmax": -8933723.09463243,
        "ymax": 3939188.30885615,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 3825428.68363185
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://cityofpasadenaca.pasgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Pasadena, CA Open Data",
        "img": "/gallery/images/1413.jpg",
        "id": "1413"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13153622.3516238,
        "xmax": -13149614.8499552,
        "ymax": 4049902.82265322,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4047078.15489103
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.ignarg.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "INSTITUTO GEOGR\u00c1FICO NACIONAL",
        "img": "/gallery/images/2466.jpg",
        "id": "2466"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 102100
        },
        "xmin": -8190011,
        "ymin": -7373819,
        "ymax": -2493019,
        "xmax": -5971390
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://utcsustainability.congeo.opendata.arcgis.com",
        "scope": [
            "ngo"
        ],
        "title": "UTC Office of Sustainability",
        "img": "/gallery/images/2745.jpg",
        "id": "2745"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -85.304,
        "ymin": 35.041,
        "ymax": 35.051,
        "xmax": -85.283
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://denton.gtg.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Denton, TX",
        "img": "/gallery/images/3154.jpg",
        "id": "3154"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10892076.1229408,
        "xmax": -10703735.2852462,
        "ymax": 3971189.45482029,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 3824430.36051279
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://catalogue.hrm.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Halifax Open Data Catalogue",
        "img": "/gallery/images/3421.jpg",
        "id": "3421"
    },
    "geometry": {
        "type": "extent",
        "xmin": -7318365.96373127,
        "xmax": -6875648.34884643,
        "ymax": 5708209.41872641,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5433001.50412684
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://talgov.tlcgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Tallahassee Open Data",
        "img": "/gallery/images/3488.jpg",
        "id": "3488"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -84.53,
        "ymin": 30.336,
        "ymax": 30.591,
        "xmax": -84.009
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.slcgov.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Salt Lake City GIS Open Data",
        "img": "/gallery/images/3856.jpg",
        "id": "3856"
    },
    "geometry": {
        "type": "extent",
        "xmin": -12458383.7282963,
        "xmax": -12453224.228887,
        "ymax": 4978820.63343468,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857,
            "_info": {
                "4326": {
                    "origin": [
                        -180,
                        180
                    ],
                    "valid": [
                        -180,
                        180
                    ],
                    "altTemplate": "PROJCS[\"WGS_1984_Plate_Carree\",GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137.0,298.257223563]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Plate_Carree\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",0.0],PARAMETER[\"Central_Meridian\",${Central_Meridian}],UNIT[\"Degrees\",111319.491]]",
                    "dx": 1e-05,
                    "wkTemplate": "GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137.0,298.257223563]],PRIMEM[\"Greenwich\",${Central_Meridian}],UNIT[\"Degree\",0.0174532925199433]]"
                },
                "102100": {
                    "origin": [
                        -20037508.342787,
                        20037508.342787
                    ],
                    "valid": [
                        -20037508.3427889,
                        20037508.3427889
                    ],
                    "dx": 1e-05,
                    "wkTemplate": "PROJCS[\"WGS_1984_Web_Mercator_Auxiliary_Sphere\",GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137.0,298.257223563]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Mercator_Auxiliary_Sphere\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",0.0],PARAMETER[\"Central_Meridian\",${Central_Meridian}],PARAMETER[\"Standard_Parallel_1\",0.0],PARAMETER[\"Auxiliary_Sphere_Type\",0.0],UNIT[\"Meter\",1.0]]"
                },
                "102113": {
                    "origin": [
                        -20037508.342787,
                        20037508.342787
                    ],
                    "valid": [
                        -20037508.3427889,
                        20037508.3427889
                    ],
                    "dx": 1e-05,
                    "wkTemplate": "PROJCS[\"WGS_1984_Web_Mercator\",GEOGCS[\"GCS_WGS_1984_Major_Auxiliary_Sphere\",DATUM[\"D_WGS_1984_Major_Auxiliary_Sphere\",SPHEROID[\"WGS_1984_Major_Auxiliary_Sphere\",6378137.0,0.0]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Mercator\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",0.0],PARAMETER[\"Central_Meridian\",${Central_Meridian}],PARAMETER[\"Standard_Parallel_1\",0.0],UNIT[\"Meter\",1.0]]"
                },
                "3857": {
                    "origin": [
                        -20037508.342787,
                        20037508.342787
                    ],
                    "valid": [
                        -20037508.3427889,
                        20037508.3427889
                    ],
                    "dx": 1e-05,
                    "wkTemplate": "PROJCS[\"WGS_1984_Web_Mercator_Auxiliary_Sphere\",GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137.0,298.257223563]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Mercator_Auxiliary_Sphere\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",0.0],PARAMETER[\"Central_Meridian\",${Central_Meridian}],PARAMETER[\"Standard_Parallel_1\",0.0],PARAMETER[\"Auxiliary_Sphere_Type\",0.0],UNIT[\"Meter\",1.0]]"
                },
                "3785": {
                    "origin": [
                        -20037508.342787,
                        20037508.342787
                    ],
                    "valid": [
                        -20037508.3427889,
                        20037508.3427889
                    ],
                    "dx": 1e-05,
                    "wkTemplate": "PROJCS[\"WGS_1984_Web_Mercator\",GEOGCS[\"GCS_WGS_1984_Major_Auxiliary_Sphere\",DATUM[\"D_WGS_1984_Major_Auxiliary_Sphere\",SPHEROID[\"WGS_1984_Major_Auxiliary_Sphere\",6378137.0,0.0]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Mercator\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",0.0],PARAMETER[\"Central_Meridian\",${Central_Meridian}],PARAMETER[\"Standard_Parallel_1\",0.0],UNIT[\"Meter\",1.0]]"
                }
            }
        },
        "ymin": 4974234.41173758
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://gis.missouricitytx.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "The City of Missouri City - Open Data Public Access",
        "img": "/gallery/images/7050.jpg",
        "id": "7050"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10644672.998192,
        "xmax": -10624340.7486682,
        "ymax": 3459059.80828856,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": 3433376.96678478
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://stlouiscountymndata.slcgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "St. Louis County, Minnesota",
        "img": "/gallery/images/7416.jpg",
        "id": "7416"
    },
    "geometry": {
        "type": "extent",
        "xmin": -10372523.4038232,
        "xmax": -10215980.3698952,
        "ymax": 6216857.15698104,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5876865.25516867
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.cruzgis.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Santa Cruz City GIS",
        "img": "/gallery/images/7461.jpg",
        "id": "7461"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -122.079,
        "ymin": 36.948,
        "ymax": 37.001,
        "xmax": -121.984
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://geologicalsurvey.esrieanatres.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Ministry of Energy and Mineral Development",
        "img": "/gallery/images/8700.jpg",
        "id": "8700"
    },
    "geometry": {
        "type": "extent",
        "xmin": 3773740.99999879,
        "xmax": 4664441.9999985,
        "ymax": 613432.999999802,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": -526067.999999847
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://opengeospace.chesterfield.gov",
        "scope": [
            "local"
        ],
        "title": "Open GeoSpace",
        "img": "/gallery/images/9152.jpg",
        "id": "9152"
    },
    "geometry": {
        "type": "extent",
        "xmin": -8719210.4358641,
        "xmax": -8565700.85806035,
        "ymax": 4540368.56767505,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4393624.69019256
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.antwerpen.opendata.arcgis.com",
        "scope": [
            "international"
        ],
        "title": "Stad Antwerpen",
        "img": "/gallery/images/7947.jpg",
        "id": "7947"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": 4.191,
        "ymin": 51.098,
        "ymax": 51.394,
        "xmax": 4.586
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.servirgit.opendata.arcgis.com",
        "scope": [
            "national"
        ],
        "title": "SERVIR Geospatial Information Technology",
        "img": "/gallery/images/7985.jpg",
        "id": "7985"
    },
    "geometry": {
        "type": "extent",
        "xmin": -11486310.3271249,
        "xmax": 7416261.01968111,
        "ymax": 4206372.25819281,
        "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
        },
        "ymin": -529054.518129202
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.longviewtexas.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "Longview Open Data",
        "img": "/gallery/images/8173.jpg",
        "id": "8173"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -94.847,
        "ymin": 32.426,
        "ymax": 32.595,
        "xmax": -94.641
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://emap.ndep-gis.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Nevada Division of Environmental Protection GIS",
        "img": "/gallery/images/8875.jpg",
        "id": "8875"
    },
    "geometry": {
        "type": "extent",
        "xmin": -13432450.5201342,
        "xmax": -12659519.2901147,
        "ymax": 5218834.18099632,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 4127924.91331058
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://data.wilmingtonde.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "City of Wilmington",
        "img": "/gallery/images/10486.jpg",
        "id": "10486"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -76.27,
        "ymin": 39.525,
        "ymax": 39.874,
        "xmax": -74.85
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://mydata.kamloops.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "  City of Kamloops",
        "img": "/gallery/images/8635.jpg",
        "id": "8635"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -120.525,
        "ymin": 50.606,
        "ymax": 50.845,
        "xmax": -120.136
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://ogrip.geohio.opendata.arcgis.com",
        "scope": [
            "state"
        ],
        "title": "Ohio Geographically Referenced Information Program- OGRIP",
        "img": "/gallery/images/6444.jpg",
        "id": "6444"
    },
    "geometry": {
        "spatialReference": {
            "wkid": 4326
        },
        "xmin": -85.016,
        "ymin": 38.362,
        "ymax": 42.003,
        "xmax": -80.335
    }
},
{
    "type": "Feature",
    "properties": {
        "url": "http://dupageilgis.dupage.opendata.arcgis.com",
        "scope": [
            "local"
        ],
        "title": "DuPage County Illinois",
        "img": "/gallery/images/4107.jpg",
        "id": "4107"
    },
    "geometry": {
        "type": "extent",
        "xmin": -9829511.03704589,
        "xmax": -9779417.26618892,
        "ymax": 5163975.81802092,
        "spatialReference": {
            "wkid": 102100
        },
        "ymin": 5116146.29455716
    }
}];



export default Ember.Route.extend({
    model() {
        return sites;
    },


});


