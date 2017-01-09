import Ember from 'ember';

let sites = [
{
    "img": "/gallery/images/3488.jpg",
    "scope": ["local"],
    "title": "Tallahassee Open Data",
    "caption": "",
    "url": "http://talgov.tlcgis.opendata.arcgis.com",
    "id": "3488"
},
{
    "img": "/gallery/images/3617.jpg",
    "scope": ["international"],
    "title": "Esri UK Bureau",
    "caption": "",
    "url": "http://data.bureau.opendata.arcgis.com",
    "id": "3617"
},
{
    "img": "/gallery/images/5939.jpg",
    "scope": ["local"],
    "title": "OpenData South Bend Indiana",
    "caption": "",
    "url": "http://portal.southbend.opendata.arcgis.com",
    "id": "5939"
},
{
    "img": "/gallery/images/4622.jpg",
    "scope": ["local"],
    "title": "City of Kitchener",
    "caption": "",
    "url": "http://data.kitchenergis.opendata.arcgis.com",
    "id": "4622"
},
{
    "img": "/gallery/images/4985.jpg",
    "scope": ["local"],
    "title": "City of Norfolk",
    "caption": "",
    "url": "http://data.orf.opendata.arcgis.com",
    "id": "4985"
},
{
    "img": "/gallery/images/5675.jpg",
    "scope": ["local"],
    "title": "City of Fayetteville Open Data",
    "caption": "",
    "url": "http://data.fayettevillenc.gov",
    "id": "5675"
},
{
    "img": "/gallery/images/5532.jpg",
    "scope": ["local"],
    "title": "Pacific Northwest Maps",
    "caption": "",
    "url": "http://data.pnw.opendata.arcgis.com",
    "id": "5532"
},
{
    "img": "/gallery/images/4002.jpg",
    "scope": ["local"],
    "title": "City of Boise - Open Data",
    "caption": "",
    "url": "http://opendata.cityofboise.org",
    "id": "4002"
},
{
    "img": "/gallery/images/3405.jpg",
    "scope": ["local"],
    "title": "Waupaca County Land Information Data",
    "caption": "",
    "url": "http://data.waupacacounty.opendata.arcgis.com",
    "id": "3405"
},
{
    "img": "/gallery/images/8287.jpg",
    "scope": ["local"],
    "title": "City of Hayward",
    "caption": "",
    "url": "http://opendata.hayward-ca.gov",
    "id": "8287"
},
{
    "img": "/gallery/images/6762.jpg",
    "scope": ["local"],
    "title": "City of Brantford",
    "caption": "",
    "url": "http://data.brantford.opendata.arcgis.com",
    "id": "6762"
},
{
    "img": "/gallery/images/6793.jpg",
    "scope": ["international"],
    "title": "Concello de Lugo",
    "caption": "",
    "url": "http://concellolugo.esrism.opendata.arcgis.com",
    "id": "6793"
},
{
    "img": "/gallery/images/7157.jpg",
    "scope": ["local"],
    "title": "Boulder County Open Geospatial Data",
    "caption": "",
    "url": "http://gis.bouldercounty.opendata.arcgis.com",
    "id": "7157"
},
{
    "img": "/gallery/images/7190.jpg",
    "scope": ["local"],
    "title": "MGRC Open Data",
    "caption": "",
    "url": "http://mgrc.garc.opendata.arcgis.com",
    "id": "7190"
},
{
    "img": "/gallery/images/7138.jpg",
    "scope": ["local"],
    "title": "Northwest Florida Water Management District",
    "caption": "",
    "url": "http://data.nwfwmd.opendata.arcgis.com",
    "id": "7138"
},
{
    "img": "/gallery/images/2466.jpg",
    "scope": ["international"],
    "title": "INSTITUTO GEOGR\u00c1FICO NACIONAL",
    "caption": "",
    "url": "http://data.ignarg.opendata.arcgis.com",
    "id": "2466"
},
{
    "img": "/gallery/images/5422.jpg",
    "scope": ["state"],
    "title": "Hawaii Statewide GIS Open Data Portal",
    "caption": "",
    "url": "http://hawaiistatewidegisopendataportal.histategis.opendata.arcgis.com",
    "id": "5422"
},
{
    "img": "/gallery/images/7203.jpg",
    "scope": ["local"],
    "title": "City of Perrysburg Open Data",
    "caption": "",
    "url": "http://data.pburg.opendata.arcgis.com",
    "id": "7203"
},
{
    "img": "/gallery/images/5226.jpg",
    "scope": ["ngo"],
    "title": "UNIGIS International Association",
    "caption": "",
    "url": "http://activities.uia.opendata.arcgis.com",
    "id": "5226"
},
{
    "img": "/gallery/images/1774.jpg",
    "scope": ["international"],
    "title": "Villa Online Open Data",
    "caption": "",
    "url": "http://villaonlineopendata.telematicaonline.opendata.arcgis.com",
    "id": "1774"
},
{
    "img": "/gallery/images/1820.jpg",
    "scope": ["international"],
    "title": "Danmarks Milj\u00f8portals Open Data",
    "caption": "",
    "url": "http://mdi.dmp.opendata.arcgis.com",
    "id": "1820"
},
{
    "img": "/gallery/images/1945.jpg",
    "scope": ["international"],
    "title": "Portal Open Data Ayto Madrid",
    "caption": "",
    "url": "http://portal.madrid.opendata.arcgis.com",
    "id": "1945"
},
{
    "img": "/gallery/images/2330.jpg",
    "scope": ["international"],
    "title": "Public Information Site",
    "caption": "",
    "url": "http://data.esrimybd.opendata.arcgis.com",
    "id": "2330"
},
{
    "img": "/gallery/images/6407.jpg",
    "scope": ["ngo"],
    "title": "Minist\u00e8re de l\u2019Environnement et D\u00e9veloppement Durable \u00e9es Publiques",
    "caption": "",
    "url": "http://cod-data.atlas-forestier.org",
    "id": "6407"
},
{
    "img": "/gallery/images/6445.jpg",
    "scope": ["local"],
    "title": "Open Data Viewer - Cabarrus County, NC",
    "caption": "",
    "url": "http://gis.cabarrus.opendata.arcgis.com",
    "id": "6445"
},
{
    "img": "/gallery/images/6469.jpg",
    "scope": ["local"],
    "title": "City of Houston GIS Open Data",
    "caption": "",
    "url": "http://cohgis.mycity.opendata.arcgis.com",
    "id": "6469"
},
{
    "img": "/gallery/images/6515.jpg",
    "scope": ["international"],
    "title": "Open data for Africa's Great Lakes Region",
    "caption": "",
    "url": "http://greatlakes.esri-rw.opendata.arcgis.com",
    "id": "6515"
},
{
    "img": "/gallery/images/3744.jpg",
    "scope": ["ngo"],
    "title": "VicForests",
    "caption": "",
    "url": "http://data.vicforeststrp.opendata.arcgis.com",
    "id": "3744"
},
{
    "img": "/gallery/images/3763.jpg",
    "scope": ["local"],
    "title": "City of Thornton",
    "caption": "",
    "url": "http://data.cityofthornton.opendata.arcgis.com",
    "id": "3763"
},
{
    "img": "/gallery/images/3910.jpg",
    "scope": ["local"],
    "title": "BostonOpenData",
    "caption": "",
    "url": "http://bostonopendata.boston.opendata.arcgis.com",
    "id": "3910"
},
{
    "img": "/gallery/images/8186.jpg",
    "scope": ["local"],
    "title": "OpenRamsey",
    "caption": "",
    "url": "http://openramsey.ramseygis.opendata.arcgis.com",
    "id": "8186"
},
{
    "img": "/gallery/images/7847.jpg",
    "scope": ["international"],
    "title": "Open Data - Ayuntamiento de Madrid",
    "caption": "",
    "url": "http://opendata.madrid.opendata.arcgis.com",
    "id": "7847"
},
{
    "img": "/gallery/images/10348.jpg",
    "scope": ["local"],
    "title": "City of Oshawa Open Data",
    "caption": "",
    "url": "http://city.oshawa.opendata.arcgis.com",
    "id": "10348"
},
{
    "img": "/gallery/images/9468.jpg",
    "scope": ["local"],
    "title": "Sauk County Open Data Repository - Upgrade",
    "caption": "",
    "url": "http://data.saukgis.opendata.arcgis.com",
    "id": "9468"
},
{
    "img": "/gallery/images/8511.jpg",
    "scope": ["local"],
    "title": "The City of Greer, South Carolina",
    "caption": "",
    "url": "http://data.cityofgreersc.opendata.arcgis.com",
    "id": "8511"
},
{
    "img": "/gallery/images/8720.jpg",
    "scope": ["ngo"],
    "title": "Innovate! Inc.",
    "caption": "",
    "url": "http://data.innovate.opendata.arcgis.com",
    "id": "8720"
},
{
    "img": "/gallery/images/8326.jpg",
    "scope": ["local"],
    "title": "Greater Wellington Regional Council Open Data",
    "caption": "",
    "url": "http://data.gwrc.opendata.arcgis.com",
    "id": "8326"
},
{
    "img": "/gallery/images/8410.jpg",
    "scope": ["state"],
    "title": "Alaska Department of Natural Resources",
    "caption": "",
    "url": "http://adnr.soa-dnr.opendata.arcgis.com",
    "id": "8410"
},
{
    "img": "/gallery/images/12476.jpg",
    "scope": ["ngo"],
    "title": "Combating Wildlife Trafficking",
    "caption": "",
    "url": "http://cwt.nga.opendata.arcgis.com",
    "id": "12476"
},
{
    "img": "/gallery/images/12445.jpg",
    "scope": ["international"],
    "title": "Comune di Rimini - U.O. SIT - Toponomastica",
    "caption": "",
    "url": "http://data.sit-rimini.opendata.arcgis.com",
    "id": "12445"
},
{
    "img": "/gallery/images/10088.jpg",
    "scope": ["local"],
    "title": "Mid-Ohio Regional Planning Commission",
    "caption": "",
    "url": "http://public.morpc.opendata.arcgis.com",
    "id": "10088"
},
{
    "img": "/gallery/images/8561.jpg",
    "scope": ["local"],
    "title": "Polk County Minnesota GIS",
    "caption": "",
    "url": "http://data.pcg.opendata.arcgis.com",
    "id": "8561"
},
{
    "img": "/gallery/images/12438.jpg",
    "scope": ["local"],
    "title": "City of Tucson",
    "caption": "",
    "url": "http://gisdata.tucsonaz.gov",
    "id": "12438"
},
{
    "img": "/gallery/images/12488.jpg",
    "scope": ["national"],
    "title": "Assateague Island National Seashore",
    "caption": "",
    "url": "http://asis.nps.opendata.arcgis.com",
    "id": "12488"
},
{
    "img": "/gallery/images/12863.jpg",
    "scope": ["ngo"],
    "title": "Forestry Commission",
    "caption": "",
    "url": "http://data.forestry.opendata.arcgis.com",
    "id": "12863"
},
{
    "img": "/gallery/images/3512.jpg",
    "scope": ["state"],
    "title": "State of Delaware",
    "caption": "",
    "url": "http://opendata.firstmap.delaware.gov",
    "id": "3512"
},
{
    "img": "/gallery/images/3581.jpg",
    "scope": ["international"],
    "title": "\u6d41\u5c71\u5e02\u30aa\u30fc\u30d7\u30f3\u30c7\u30fc\u30bf\u30de\u30c3\u30d7",
    "caption": "",
    "url": "http://data1.nagareyamamidori.opendata.arcgis.com",
    "id": "3581"
},
{
    "img": "/gallery/images/3788.jpg",
    "scope": ["local"],
    "title": "City of Virginia Beach Open Data Portal",
    "caption": "",
    "url": "http://gis.data.vbgov.com",
    "id": "3788"
},
{
    "img": "/gallery/images/3827.jpg",
    "scope": ["local"],
    "title": "Pierce County WA Open GeoSpatial Data Portal",
    "caption": "",
    "url": "http://gisdata.piercecowa.opendata.arcgis.com",
    "id": "3827"
},
{
    "img": "/gallery/images/3889.jpg",
    "scope": ["international"],
    "title": "Gemeente Tilburg",
    "caption": "",
    "url": "http://data.tilburg.opendata.arcgis.com",
    "id": "3889"
},
{
    "img": "/gallery/images/6186.jpg",
    "scope": ["state"],
    "title": "Kentucky Open GIS Data",
    "caption": "",
    "url": "http://kygovmaps.kygeonet.opendata.arcgis.com",
    "id": "6186"
},
{
    "img": "/gallery/images/6338.jpg",
    "scope": ["local"],
    "title": "Open Data",
    "caption": "",
    "url": "http://data.tompkinscounty.opendata.arcgis.com",
    "id": "6338"
},
{
    "img": "/gallery/images/6516.jpg",
    "scope": ["international"],
    "title": "Ordnance Survey Ireland",
    "caption": "",
    "url": "http://data.osi.opendata.arcgis.com",
    "id": "6516"
},
{
    "img": "/gallery/images/4065.jpg",
    "scope": ["state"],
    "title": "American Samoa GIS",
    "caption": "",
    "url": "http://data.asdoc.opendata.arcgis.com",
    "id": "4065"
},
{
    "img": "/gallery/images/4837.jpg",
    "scope": ["state"],
    "title": "Washington State GeoServices",
    "caption": "",
    "url": "http://geo.wa.gov",
    "id": "4837"
},
{
    "img": "/gallery/images/5145.jpg",
    "scope": ["local"],
    "title": "City of Springfield, Missouri",
    "caption": "",
    "url": "http://gisdata.cosmo.opendata.arcgis.com",
    "id": "5145"
},
{
    "img": "/gallery/images/5176.jpg",
    "scope": ["local"],
    "title": "County of Santa Clara",
    "caption": "",
    "url": "http://prod.sccgov.opendata.arcgis.com",
    "id": "5176"
},
{
    "img": "/gallery/images/4203.jpg",
    "scope": ["national"],
    "title": "Irwin OAT Data Discovery",
    "caption": "",
    "url": "http://data.doildt.opendata.arcgis.com",
    "id": "4203"
},
{
    "img": "/gallery/images/5633.jpg",
    "scope": ["local"],
    "title": "Montgomery County, Texas Open Data",
    "caption": "",
    "url": "http://data.moco.opendata.arcgis.com",
    "id": "5633"
},
{
    "img": "/gallery/images/2812.jpg",
    "scope": ["international"],
    "title": "Helsingin seudun liikenne (HSL)",
    "caption": "",
    "url": "http://data.hslhrt.opendata.arcgis.com",
    "id": "2812"
},
{
    "img": "/gallery/images/6612.jpg",
    "scope": ["local"],
    "title": "City of Fort Worth",
    "caption": "",
    "url": "http://gis.cfw.opendata.arcgis.com",
    "id": "6612"
},
{
    "img": "/gallery/images/6756.jpg",
    "scope": ["international"],
    "title": "Scottish Government",
    "caption": "",
    "url": "http://scottishgovernment.bureau.opendata.arcgis.com",
    "id": "6756"
},
{
    "img": "/gallery/images/7646.jpg",
    "scope": ["local"],
    "title": "GIS Data - City of Worcester, MA",
    "caption": "",
    "url": "http://gisdata.worcesterma.gov",
    "id": "7646"
},
{
    "img": "/gallery/images/7691.jpg",
    "scope": ["state"],
    "title": "Montana Department of Transportation",
    "caption": "",
    "url": "http://gis.mdt.opendata.arcgis.com",
    "id": "7691"
},
{
    "img": "/gallery/images/8459.jpg",
    "scope": ["international"],
    "title": "Nukissiorfiit Datafordeler",
    "caption": "",
    "url": "http://nukissiorfiit.asiaq.opendata.arcgis.com",
    "id": "8459"
},
{
    "img": "/gallery/images/8132.jpg",
    "scope": ["local"],
    "title": "Cobb County, Georgia",
    "caption": "",
    "url": "http://data.cobbcountyga.opendata.arcgis.com",
    "id": "8132"
},
{
    "img": "/gallery/images/10041.jpg",
    "scope": ["ngo"],
    "title": "Oil and Gas Authority",
    "caption": "",
    "url": "http://data.ogauthority.opendata.arcgis.com",
    "id": "10041"
},
{
    "img": "/gallery/images/8252.jpg",
    "scope": ["international"],
    "title": "Associa\u00e7\u00e3o de Benefici\u00e1rios do Roxo",
    "caption": "",
    "url": "http://qarsc.abroxo.opendata.arcgis.com",
    "id": "8252"
},
{
    "img": "/gallery/images/10863.jpg",
    "scope": ["local"],
    "title": "West Parry Sound Geography Network",
    "caption": "",
    "url": "http://data.wpsgn.opendata.arcgis.com",
    "id": "10863"
},
{
    "img": "/gallery/images/12701.jpg",
    "scope": ["national"],
    "title": "Great Smoky Mountains National Park",
    "caption": "",
    "url": "http://grsm.nps.opendata.arcgis.com",
    "id": "12701"
},
{
    "img": "/gallery/images/9584.jpg",
    "scope": ["local"],
    "title": "Fairfax County GIS & Mapping Services Open Data Site",
    "caption": "",
    "url": "http://data.fairfaxcountygis.opendata.arcgis.com",
    "id": "9584"
},
{
    "img": "/gallery/images/5817.jpg",
    "scope": ["local"],
    "title": "Clay County Open Data",
    "caption": "",
    "url": "http://data.claycountymn.opendata.arcgis.com",
    "id": "5817"
},
{
    "img": "/gallery/images/6118.jpg",
    "scope": ["local"],
    "title": "Clayton County",
    "caption": "",
    "url": "http://opendata.cccd-gis.opendata.arcgis.com",
    "id": "6118"
},
{
    "img": "/gallery/images/6310.jpg",
    "scope": ["ngo"],
    "title": "Ministry of Forest and Wildlife - Open Data Portal",
    "caption": "",
    "url": "http://cmr-data.forest-atlas.org",
    "id": "6310"
},
{
    "img": "/gallery/images/6377.jpg",
    "scope": ["international"],
    "title": "LAKD Open Data",
    "caption": "",
    "url": "http://lakd.lakd.opendata.arcgis.com",
    "id": "6377"
},
{
    "img": "/gallery/images/4538.jpg",
    "scope": ["ngo"],
    "title": "Hack The Commute",
    "caption": "",
    "url": "http://hackthecommute.esrihax.opendata.arcgis.com",
    "id": "4538"
},
{
    "img": "/gallery/images/6536.jpg",
    "scope": ["local"],
    "title": "Galway County Opendata",
    "caption": "",
    "url": "http://data.galwaycoco.opendata.arcgis.com",
    "id": "6536"
},
{
    "img": "/gallery/images/3429.jpg",
    "scope": ["international"],
    "title": "OpenStreetMap \u30de\u30c3\u30d4\u30f3\u30b0\u30d1\u30fc\u30c6\u30a3\u30fc\u7528\u60c5\u5831\u5171\u6709\u30b5\u30a4\u30c8",
    "caption": "",
    "url": "http://happymapping.ejopendataportal.opendata.arcgis.com",
    "id": "3429"
},
{
    "img": "/gallery/images/3450.jpg",
    "scope": ["local"],
    "title": "City of McKinney",
    "caption": "",
    "url": "http://data1.mck.opendata.arcgis.com",
    "id": "3450"
},
{
    "img": "/gallery/images/3474.jpg",
    "scope": ["local"],
    "title": "Kittitas County GIS",
    "caption": "",
    "url": "http://data.kitcogis.opendata.arcgis.com",
    "id": "3474"
},
{
    "img": "/gallery/images/3498.jpg",
    "scope": ["international"],
    "title": "Ramat Hanadiv Open Data",
    "caption": "",
    "url": "http://gis.ramathanadiv.opendata.arcgis.com",
    "id": "3498"
},
{
    "img": "/gallery/images/3501.jpg",
    "scope": ["local"],
    "title": "MDC Open Data",
    "caption": "",
    "url": "http://data.marlborough.opendata.arcgis.com",
    "id": "3501"
},
{
    "img": "/gallery/images/3791.jpg",
    "scope": ["local"],
    "title": "Santa Clara County Planning and Development Department",
    "caption": "",
    "url": "http://gisdata.sccplanning.opendata.arcgis.com",
    "id": "3791"
},
{
    "img": "/gallery/images/4864.jpg",
    "scope": ["local"],
    "title": "ECWRPC",
    "caption": "",
    "url": "http://data.ecwrpc.opendata.arcgis.com",
    "id": "4864"
},
{
    "img": "/gallery/images/4876.jpg",
    "scope": ["local"],
    "title": "Bedford County, VA",
    "caption": "",
    "url": "http://data.bedfordvagis.opendata.arcgis.com",
    "id": "4876"
},
{
    "img": "/gallery/images/5040.jpg",
    "scope": ["local"],
    "title": "PHLmaps",
    "caption": "",
    "url": "http://data.phl.opendata.arcgis.com",
    "id": "5040"
},
{
    "img": "/gallery/images/5634.jpg",
    "scope": ["local"],
    "title": "City of Fremont | Open Data Portal",
    "caption": "",
    "url": "http://egis.cofgis.opendata.arcgis.com",
    "id": "5634"
},
{
    "img": "/gallery/images/4112.jpg",
    "scope": ["state"],
    "title": "UDOT Open Data",
    "caption": "",
    "url": "http://udot.uplan.opendata.arcgis.com",
    "id": "4112"
},
{
    "img": "/gallery/images/4124.jpg",
    "scope": ["international"],
    "title": "MDS V5 pilot",
    "caption": "",
    "url": "http://mdsv5.beredskab.opendata.arcgis.com",
    "id": "4124"
},
{
    "img": "/gallery/images/4179.jpg",
    "scope": ["international"],
    "title": "Alberta Geological Survey",
    "caption": "",
    "url": "http://geology.ags-aer.opendata.arcgis.com",
    "id": "4179"
},
{
    "img": "/gallery/images/4326.jpg",
    "scope": ["local"],
    "title": "City of Phoenix",
    "caption": "",
    "url": "http://maps.phoenix.opendata.arcgis.com",
    "id": "4326"
},
{
    "img": "/gallery/images/4617.jpg",
    "scope": ["international"],
    "title": "GPMR Open Data",
    "caption": "",
    "url": "http://telechargement.gpmr.opendata.arcgis.com",
    "id": "4617"
},
{
    "img": "/gallery/images/4631.jpg",
    "scope": ["local"],
    "title": "Tarrant County Geographic Information Portal",
    "caption": "",
    "url": "http://data.tarrantcounty.opendata.arcgis.com",
    "id": "4631"
},
{
    "img": "/gallery/images/347.jpg",
    "scope": ["local"],
    "title": "Town of Groton, CT Open Data Site",
    "caption": "",
    "url": "http://data.grotongis.opendata.arcgis.com",
    "id": "347"
},
{
    "img": "/gallery/images/816.jpg",
    "scope": ["local"],
    "title": "City of Stafford GIS Data Portal",
    "caption": "",
    "url": "http://gisdata.staffordpw.com",
    "id": "816"
},
{
    "img": "/gallery/images/880.jpg",
    "scope": ["international"],
    "title": "\u570b\u5bb6\u707d\u5bb3\u9632\u6551\u79d1\u6280\u4e2d\u5fc3\u958b\u653e\u8cc7\u6599\u7db2\u7ad9",
    "caption": "",
    "url": "http://omygod.idtsupport.opendata.arcgis.com",
    "id": "880"
},
{
    "img": "/gallery/images/1935.jpg",
    "scope": ["international"],
    "title": "KK data",
    "caption": "",
    "url": "http://kkdata.gis2dk.opendata.arcgis.com",
    "id": "1935"
},
{
    "img": "/gallery/images/1985.jpg",
    "scope": ["local"],
    "title": "Chatham-Kent Open Data",
    "caption": "",
    "url": "http://chathamkentopendata.chatham-kent.opendata.arcgis.com",
    "id": "1985"
},
{
    "img": "/gallery/images/2488.jpg",
    "scope": ["international"],
    "title": "Energy Sector GIS Working Group Uganda",
    "caption": "",
    "url": "http://data.energy-gis.opendata.arcgis.com",
    "id": "2488"
},
{
    "img": "/gallery/images/6978.jpg",
    "scope": ["local"],
    "title": "City of Cupertino",
    "caption": "",
    "url": "http://gis.cupertino.opendata.arcgis.com",
    "id": "6978"
},
{
    "img": "/gallery/images/7147.jpg",
    "scope": ["local"],
    "title": "Comal County, Texas",
    "caption": "",
    "url": "http://data.comalcounty.opendata.arcgis.com",
    "id": "7147"
},
{
    "img": "/gallery/images/6954.jpg",
    "scope": ["local"],
    "title": "Historic Data",
    "caption": "",
    "url": "http://historic.cabarrus.opendata.arcgis.com",
    "id": "6954"
},
{
    "img": "/gallery/images/7628.jpg",
    "scope": ["international"],
    "title": "\u5317\u6d77\u9053\u81ea\u7136\u74b0\u5883\u5730\u7406\u60c5\u5831\u30aa\u30fc\u30d7\u30f3\u30c7\u30fc\u30bf\u30b5\u30a4\u30c8",
    "caption": "",
    "url": "http://data2.rakuno-gis.opendata.arcgis.com",
    "id": "7628"
},
{
    "img": "/gallery/images/7630.jpg",
    "scope": ["national"],
    "title": "Ebola",
    "caption": "",
    "url": "http://na.ebolaresponse.opendata.arcgis.com",
    "id": "7630"
},
{
    "img": "/gallery/images/7685.jpg",
    "scope": ["international"],
    "title": "NISR's Geodata Portal",
    "caption": "",
    "url": "http://geodata.nisr.opendata.arcgis.com",
    "id": "7685"
},
{
    "img": "/gallery/images/7584.jpg",
    "scope": ["local"],
    "title": "LOJIC Open Data Portal",
    "caption": "",
    "url": "http://louisville.lojic.opendata.arcgis.com",
    "id": "7584"
},
{
    "img": "/gallery/images/7337.jpg",
    "scope": ["local"],
    "title": "City of Nashua, NH Open Data",
    "caption": "",
    "url": "http://cityofnashuanhopendata.nashuamaps.opendata.arcgis.com",
    "id": "7337"
},
{
    "img": "/gallery/images/7349.jpg",
    "scope": ["local"],
    "title": "CUUATS Data Portal",
    "caption": "",
    "url": "http://data.cuuats.org",
    "id": "7349"
},
{
    "img": "/gallery/images/9477.jpg",
    "scope": ["state"],
    "title": "Regional Planning Commission of Greater Birmingham",
    "caption": "",
    "url": "http://geospatialdata.rpcgb.opendata.arcgis.com",
    "id": "9477"
},
{
    "img": "/gallery/images/8537.jpg",
    "scope": ["local"],
    "title": "Longmont Open Data",
    "caption": "",
    "url": "http://longmontopendata.longmontco.opendata.arcgis.com",
    "id": "8537"
},
{
    "img": "/gallery/images/9004.jpg",
    "scope": ["local"],
    "title": "City of Port St. Lucie",
    "caption": "",
    "url": "http://data.pslgis.opendata.arcgis.com",
    "id": "9004"
},
{
    "img": "/gallery/images/7926.jpg",
    "scope": ["national"],
    "title": "Geospatial at the Bureau of Transportation Statistics",
    "caption": "",
    "url": "http://osav.usdot.opendata.arcgis.com",
    "id": "7926"
},
{
    "img": "/gallery/images/8183.jpg",
    "scope": ["state"],
    "title": "Wisconsin Emergency Management",
    "caption": "",
    "url": "http://data.wem.opendata.arcgis.com",
    "id": "8183"
},
{
    "img": "/gallery/images/10181.jpg",
    "scope": ["state"],
    "title": "Virginia Outdoors Foundation",
    "caption": "",
    "url": "http://data.vof.opendata.arcgis.com",
    "id": "10181"
},
{
    "img": "/gallery/images/10220.jpg",
    "scope": ["local"],
    "title": "Lafayette Parish Assessor's Office",
    "caption": "",
    "url": "http://lafayetteassessor.lpao.opendata.arcgis.com",
    "id": "10220"
},
{
    "img": "/gallery/images/10054.jpg",
    "scope": ["ngo"],
    "title": "Wild Utah Project Open Data",
    "caption": "",
    "url": "http://data.wildutahproject.opendata.arcgis.com",
    "id": "10054"
},
{
    "img": "/gallery/images/10080.jpg",
    "scope": ["local"],
    "title": "Whakatane District Council Open Data",
    "caption": "",
    "url": "http://data.whakatane.opendata.arcgis.com",
    "id": "10080"
},
{
    "img": "/gallery/images/10737.jpg",
    "scope": ["ngo"],
    "title": "Food and Agriculture Organization of the United Nations",
    "caption": "",
    "url": "http://corporategeospatial.hqfao.opendata.arcgis.com",
    "id": "10737"
},
{
    "img": "/gallery/images/12086.jpg",
    "scope": ["local"],
    "title": "City of Aurora, Colorado",
    "caption": "",
    "url": "http://data.auroraco.opendata.arcgis.com",
    "id": "12086"
},
{
    "img": "/gallery/images/12031.jpg",
    "scope": ["national"],
    "title": "Arctic Support",
    "caption": "",
    "url": "http://arctic.nga.opendata.arcgis.com",
    "id": "12031"
},
{
    "img": "/gallery/images/5158.jpg",
    "scope": ["local"],
    "title": "Logan City Council",
    "caption": "",
    "url": "http://data.logancity.opendata.arcgis.com",
    "id": "5158"
},
{
    "img": "/gallery/images/12492.jpg",
    "scope": ["national"],
    "title": "Rocky Mountain National Park",
    "caption": "",
    "url": "http://romo.nps.opendata.arcgis.com",
    "id": "12492"
},
{
    "img": "/gallery/images/4681.jpg",
    "scope": ["state"],
    "title": "the GIS Data Catalog",
    "caption": "",
    "url": "http://data.imap.maryland.gov",
    "id": "4681"
},
{
    "img": "/gallery/images/4559.jpg",
    "scope": ["state"],
    "title": "MassDOT Open Data Portal",
    "caption": "",
    "url": "http://geo.massdot.opendata.arcgis.com",
    "id": "4559"
},
{
    "img": "/gallery/images/3285.jpg",
    "scope": ["ngo"],
    "title": "Tookany/Tacony-Frankford Watershed Partnership",
    "caption": "",
    "url": "http://streamkeepers.ttfwatershed.opendata.arcgis.com",
    "id": "3285"
},
{
    "img": "/gallery/images/3425.jpg",
    "scope": ["local"],
    "title": "City of Chesapeake, VA Open Data Site",
    "caption": "",
    "url": "http://public.chesva.opendata.arcgis.com",
    "id": "3425"
},
{
    "img": "/gallery/images/3507.jpg",
    "scope": ["local"],
    "title": "Open Raleigh GIS Data",
    "caption": "",
    "url": "http://data.ral.opendata.arcgis.com",
    "id": "3507"
},
{
    "img": "/gallery/images/3603.jpg",
    "scope": ["local"],
    "title": "Dedham GIS Data",
    "caption": "",
    "url": "http://gis.dedham.opendata.arcgis.com",
    "id": "3603"
},
{
    "img": "/gallery/images/3608.jpg",
    "scope": ["state"],
    "title": "California Dept of Public Health Geospatial Resources                                                                                         .",
    "caption": "",
    "url": "http://maps.cdphdata.opendata.arcgis.com",
    "id": "3608"
},
{
    "img": "/gallery/images/3665.jpg",
    "scope": ["national"],
    "title": "US Census Bureau",
    "caption": "",
    "url": "http://census.dcdev.opendata.arcgis.com",
    "id": "3665"
},
{
    "img": "/gallery/images/3709.jpg",
    "scope": ["local"],
    "title": "Douglas County, CO",
    "caption": "",
    "url": "http://gis.dougco.opendata.arcgis.com",
    "id": "3709"
},
{
    "img": "/gallery/images/3874.jpg",
    "scope": ["ngo"],
    "title": "BC Oil and Gas Commission Open Data Portal",
    "caption": "",
    "url": "http://data.bcogc.opendata.arcgis.com",
    "id": "3874"
},
{
    "img": "/gallery/images/5964.jpg",
    "scope": ["local"],
    "title": "Hartford Data",
    "caption": "",
    "url": "http://gisdata.hartford.gov",
    "id": "5964"
},
{
    "img": "/gallery/images/6210.jpg",
    "scope": ["local"],
    "title": "DCS GIS",
    "caption": "",
    "url": "http://openac.alcogis.opendata.arcgis.com",
    "id": "6210"
},
{
    "img": "/gallery/images/6234.jpg",
    "scope": ["local"],
    "title": "Chula Vista GIS",
    "caption": "",
    "url": "http://chulavista.cvgis.opendata.arcgis.com",
    "id": "6234"
},
{
    "img": "/gallery/images/6296.jpg",
    "scope": ["local"],
    "title": "City of Rockville, MD, Open Data",
    "caption": "",
    "url": "http://data.rockvillemd.opendata.arcgis.com",
    "id": "6296"
},
{
    "img": "/gallery/images/6551.jpg",
    "scope": ["state"],
    "title": "New Jersey Office of GIS - Open Data",
    "caption": "",
    "url": "http://njogis.newjersey.opendata.arcgis.com",
    "id": "6551"
},
{
    "img": "/gallery/images/4113.jpg",
    "scope": ["local"],
    "title": "City of Glendale, Arizona",
    "caption": "",
    "url": "http://data.cog-gis.opendata.arcgis.com",
    "id": "4113"
},
{
    "img": "/gallery/images/4151.jpg",
    "scope": ["local"],
    "title": "Pittsburgh Regional Open Data Portal",
    "caption": "",
    "url": "http://prodp.neod.opendata.arcgis.com",
    "id": "4151"
},
{
    "img": "/gallery/images/4207.jpg",
    "scope": ["state"],
    "title": "Alabama's Open Data Catalog",
    "caption": "",
    "url": "http://data.alabama.opendata.arcgis.com",
    "id": "4207"
},
{
    "img": "/gallery/images/4233.jpg",
    "scope": ["local"],
    "title": "Lewis & Clark County - City of Helena GIS",
    "caption": "",
    "url": "http://gisdata.helenamtmaps.opendata.arcgis.com",
    "id": "4233"
},
{
    "img": "/gallery/images/4358.jpg",
    "scope": ["local"],
    "title": "the DC GIS Open Data Site",
    "caption": "",
    "url": "http://opendata.dc.gov",
    "id": "4358"
},
{
    "img": "/gallery/images/4409.jpg",
    "scope": ["international"],
    "title": "Nukissiorfiit OpenData",
    "caption": "",
    "url": "http://data.nukissiorfiit.opendata.arcgis.com",
    "id": "4409"
},
{
    "img": "/gallery/images/4428.jpg",
    "scope": ["local"],
    "title": "Salt Lake County Open Data Portal",
    "caption": "",
    "url": "http://gisdata.slco.opendata.arcgis.com",
    "id": "4428"
},
{
    "img": "/gallery/images/4473.jpg",
    "scope": ["international"],
    "title": "RakunoGakuenUniversity",
    "caption": "",
    "url": "http://data.rakuno-gis.opendata.arcgis.com",
    "id": "4473"
},
{
    "img": "/gallery/images/4562.jpg",
    "scope": ["local"],
    "title": "Story County Open GIS Data Portal",
    "caption": "",
    "url": "http://openstoryco.storycogis.opendata.arcgis.com",
    "id": "4562"
},
{
    "img": "/gallery/images/4579.jpg",
    "scope": ["local"],
    "title": "District Of Peachland",
    "caption": "",
    "url": "http://peachland.rdco.opendata.arcgis.com",
    "id": "4579"
},
{
    "img": "/gallery/images/4707.jpg",
    "scope": ["ngo"],
    "title": "Ebola Response",
    "caption": "",
    "url": "http://home.ebolaresponse.opendata.arcgis.com",
    "id": "4707"
},
{
    "img": "/gallery/images/4860.jpg",
    "scope": ["local"],
    "title": "County of Santa Cruz, California",
    "caption": "",
    "url": "http://data.sccgis.opendata.arcgis.com",
    "id": "4860"
},
{
    "img": "/gallery/images/5147.jpg",
    "scope": ["state"],
    "title": "DOT Open Data Site",
    "caption": "",
    "url": "http://data.pluton.opendata.arcgis.com",
    "id": "5147"
},
{
    "img": "/gallery/images/5440.jpg",
    "scope": ["local"],
    "title": "Baltimore City Open GIS data",
    "caption": "",
    "url": "http://gis.baltimore.opendata.arcgis.com",
    "id": "5440"
},
{
    "img": "/gallery/images/5522.jpg",
    "scope": ["ngo"],
    "title": "SmartCommunities",
    "caption": "",
    "url": "http://data.smartcommunities.opendata.arcgis.com",
    "id": "5522"
},
{
    "img": "/gallery/images/5553.jpg",
    "scope": ["local"],
    "title": "City of Tulsa GIS Open Data",
    "caption": "",
    "url": "http://opengis.cityoftulsa.org",
    "id": "5553"
},
{
    "img": "/gallery/images/5589.jpg",
    "scope": ["local"],
    "title": "County of Camden",
    "caption": "",
    "url": "http://camdencountynj.ccdpw.opendata.arcgis.com",
    "id": "5589"
},
{
    "img": "/gallery/images/6587.jpg",
    "scope": ["local"],
    "title": "Communaut\u00e9 d'agglomeration Caux vall\u00e9e de Seine",
    "caption": "",
    "url": "http://sgi.cvs.opendata.arcgis.com",
    "id": "6587"
},
{
    "img": "/gallery/images/7059.jpg",
    "scope": ["local"],
    "title": "Racine County, WI",
    "caption": "",
    "url": "http://data.racinecounty.opendata.arcgis.com",
    "id": "7059"
},
{
    "img": "/gallery/images/7218.jpg",
    "scope": ["local"],
    "title": "Open GIS Data",
    "caption": "",
    "url": "http://gisdata.csjdotgis.opendata.arcgis.com",
    "id": "7218"
},
{
    "img": "/gallery/images/588.jpg",
    "scope": ["international"],
    "title": "CCRP Andes Opendata ",
    "caption": "",
    "url": "http://andes.ccrp.opendata.arcgis.com",
    "id": "588"
},
{
    "img": "/gallery/images/824.jpg",
    "scope": ["international"],
    "title": "Open Data Den Haag GEO Portaal",
    "caption": "",
    "url": "http://geoportaal.ddh.opendata.arcgis.com",
    "id": "824"
},
{
    "img": "/gallery/images/850.jpg",
    "scope": ["local"],
    "title": "Lincoln County MN GIS Data",
    "caption": "",
    "url": "http://lincolncountymngisdata.lcmn.opendata.arcgis.com",
    "id": "850"
},
{
    "img": "/gallery/images/949.jpg",
    "scope": ["local"],
    "title": "Town of Mooresville, NC Open Data",
    "caption": "",
    "url": "http://town.mooresvillenc.opendata.arcgis.com",
    "id": "949"
},
{
    "img": "/gallery/images/1239.jpg",
    "scope": ["state"],
    "title": "Illinois EPA Open Data",
    "caption": "",
    "url": "http://illinoisepaopendata.illinois-epa.opendata.arcgis.com",
    "id": "1239"
},
{
    "img": "/gallery/images/1640.jpg",
    "scope": ["international"],
    "title": "Tilmanns Open Data Example",
    "caption": "",
    "url": "http://tilmanns.svcs-eaglegis.opendata.arcgis.com",
    "id": "1640"
},
{
    "img": "/gallery/images/1722.jpg",
    "scope": ["local"],
    "title": "Auckland Council Data Download",
    "caption": "",
    "url": "http://aucklandopendata.aucklandcouncil.opendata.arcgis.com",
    "id": "1722"
},
{
    "img": "/gallery/images/1823.jpg",
    "scope": ["local"],
    "title": "Evansville & Vanderburgh County GIS Data",
    "caption": "",
    "url": "http://gisdata.evvc.opendata.arcgis.com",
    "id": "1823"
},
{
    "img": "/gallery/images/2597.jpg",
    "scope": ["international"],
    "title": "Conseil D\u00e9partemental du Haut-Rhin",
    "caption": "",
    "url": "http://data.haut-rhin.opendata.arcgis.com",
    "id": "2597"
},
{
    "img": "/gallery/images/7701.jpg",
    "scope": ["international"],
    "title": "Banens geografiske data",
    "caption": "",
    "url": "http://banen.banedanmark.opendata.arcgis.com",
    "id": "7701"
},
{
    "img": "/gallery/images/7725.jpg",
    "scope": ["international"],
    "title": "ICE Sector Electricidad",
    "caption": "",
    "url": "http://data.ice-se.opendata.arcgis.com",
    "id": "7725"
},
{
    "img": "/gallery/images/7749.jpg",
    "scope": ["international"],
    "title": "NaturErhvervstyrelsen",
    "caption": "",
    "url": "http://data.naer.opendata.arcgis.com",
    "id": "7749"
},
{
    "img": "/gallery/images/7883.jpg",
    "scope": ["local"],
    "title": "Montezuma County Online Mapping",
    "caption": "",
    "url": "http://dat.montezumacounty.opendata.arcgis.com",
    "id": "7883"
},
{
    "img": "/gallery/images/8533.jpg",
    "scope": ["international"],
    "title": "Open Data Telematica",
    "caption": "",
    "url": "http://opendatatm.mitelematica.opendata.arcgis.com",
    "id": "8533"
},
{
    "img": "/gallery/images/8564.jpg",
    "scope": ["local"],
    "title": "County of San Luis Obispo",
    "caption": "",
    "url": "http://gis.slocounty.opendata.arcgis.com",
    "id": "8564"
},
{
    "img": "/gallery/images/8569.jpg",
    "scope": ["international"],
    "title": "Kenya MEAs Portal",
    "caption": "",
    "url": "http://data2.esrieanatres.opendata.arcgis.com",
    "id": "8569"
},
{
    "img": "/gallery/images/8242.jpg",
    "scope": ["local"],
    "title": "San Benito County Open Data Portal",
    "caption": "",
    "url": "http://opendata.cosb.opendata.arcgis.com",
    "id": "8242"
},
{
    "img": "/gallery/images/8280.jpg",
    "scope": ["local"],
    "title": "ArcGIS Online",
    "caption": "",
    "url": "http://kmod.beirutgardens.opendata.arcgis.com",
    "id": "8280"
},
{
    "img": "/gallery/images/8088.jpg",
    "scope": ["local"],
    "title": "Hillsborough County GeoHub",
    "caption": "",
    "url": "http://gis.hillsborough.opendata.arcgis.com",
    "id": "8088"
},
{
    "img": "/gallery/images/10086.jpg",
    "scope": "ngo ",
    "title": "United Nations World Food Programme",
    "caption": "",
    "url": "http://gis.unwfp.opendata.arcgis.com",
    "id": "10086"
},
{
    "img": "/gallery/images/10194.jpg",
    "scope": ["international"],
    "title": "\u6797\u52d9\u5c40\u8cc7\u6599\u958b\u653e\u670d\u52d9\u5c08\u5340",
    "caption": "",
    "url": "http://forestrybureau.idt.opendata.arcgis.com",
    "id": "10194"
},
{
    "img": "/gallery/images/10219.jpg",
    "scope": ["ngo"],
    "title": "MSU Infrastructure Planning and Facilities GeoPortal",
    "caption": "",
    "url": "http://fis.msugis.opendata.arcgis.com",
    "id": "10219"
},
{
    "img": "/gallery/images/10550.jpg",
    "scope": ["local"],
    "title": "Town of La Plata",
    "caption": "",
    "url": "http://data.townoflaplata.opendata.arcgis.com",
    "id": "10550"
},
{
    "img": "/gallery/images/9726.jpg",
    "scope": ["international"],
    "title": "  Gisborne District Council",
    "caption": "",
    "url": "http://gisdata.gizzy.opendata.arcgis.com",
    "id": "9726"
},
{
    "img": "/gallery/images/12342.jpg",
    "scope": ["local"],
    "title": "Waukesha County Open Data",
    "caption": "",
    "url": "http://maps.waukeshacounty.opendata.arcgis.com",
    "id": "12342"
},
{
    "img": "/gallery/images/7592.jpg",
    "scope": ["ngo"],
    "title": "ONS Geography Portal",
    "caption": "",
    "url": "http://geoportal.statistics.gov.uk",
    "id": "7592"
},
{
    "img": "/gallery/images/11623.jpg",
    "scope": ["ngo"],
    "title": "The Water Institute at USF",
    "caption": "",
    "url": "http://data.waterinstitute.opendata.arcgis.com",
    "id": "11623"
},
{
    "img": "/gallery/images/12284.jpg",
    "scope": ["international"],
    "title": "Kalmar kommun",
    "caption": "",
    "url": "http://data.kalmar.opendata.arcgis.com",
    "id": "12284"
},
{
    "img": "/gallery/images/7922.jpg",
    "scope": ["local"],
    "title": "St. Johns River Water Management District (SJRWMD) Open Data",
    "caption": "",
    "url": "http://data.floridaswater.opendata.arcgis.com",
    "id": "7922"
},
{
    "img": "/gallery/images/12140.jpg",
    "scope": ["state"],
    "title": "NC DEQ GIS Data",
    "caption": "",
    "url": "http://data.ncdenr.opendata.arcgis.com",
    "id": "12140"
},
{
    "img": "/gallery/images/8336.jpg",
    "scope": ["local"],
    "title": "Capital Area Council of Governments",
    "caption": "",
    "url": "http://regional-data.capcog.opendata.arcgis.com",
    "id": "8336"
},
{
    "img": "/gallery/images/3969.jpg",
    "scope": ["ngo"],
    "title": "Mountain Rescue Association - Open Data Portal",
    "caption": "",
    "url": "http://data.msar.opendata.arcgis.com",
    "id": "3969"
},
{
    "img": "/gallery/images/4051.jpg",
    "scope": ["local"],
    "title": "PW Open Data",
    "caption": "",
    "url": "http://data.sjcpwd.opendata.arcgis.com",
    "id": "4051"
},
{
    "img": "/gallery/images/4107.jpg",
    "scope": ["local"],
    "title": "DuPage County Illinois",
    "caption": "",
    "url": "http://dupageilgis.dupage.opendata.arcgis.com",
    "id": "4107"
},
{
    "img": "/gallery/images/4246.jpg",
    "scope": ["state"],
    "title": "NM Office of the State Engineer",
    "caption": "",
    "url": "http://gisdata.ose.opendata.arcgis.com",
    "id": "4246"
},
{
    "img": "/gallery/images/4323.jpg",
    "scope": ["local"],
    "title": "Lake County Maps & Apps",
    "caption": "",
    "url": "http://data.lcgis.opendata.arcgis.com",
    "id": "4323"
},
{
    "img": "/gallery/images/4417.jpg",
    "scope": ["local"],
    "title": "Lichfield District Council",
    "caption": "",
    "url": "http://data.lichfielddc.opendata.arcgis.com",
    "id": "4417"
},
{
    "img": "/gallery/images/4520.jpg",
    "scope": ["international"],
    "title": "Telecomunicaciones La Paz",
    "caption": "",
    "url": "http://open.geosystems-telco.opendata.arcgis.com",
    "id": "4520"
},
{
    "img": "/gallery/images/4746.jpg",
    "scope": ["local"],
    "title": "West Parry Sound Geography Network",
    "caption": "",
    "url": "http://data2.wpsgn.opendata.arcgis.com",
    "id": "4746"
},
{
    "img": "/gallery/images/4816.jpg",
    "scope": ["local"],
    "title": "County of Santa Cruz, California",
    "caption": "",
    "url": "http://data1.sccgis.opendata.arcgis.com",
    "id": "4816"
},
{
    "img": "/gallery/images/4842.jpg",
    "scope": ["international"],
    "title": "Port of Rotterdam",
    "caption": "",
    "url": "http://data.portofrotterdam.opendata.arcgis.com",
    "id": "4842"
},
{
    "img": "/gallery/images/5958.jpg",
    "scope": ["international"],
    "title": "\u672a\u6765\u4ecb\u8b77\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",
    "caption": "",
    "url": "http://mkpj.ejopendataportal.opendata.arcgis.com",
    "id": "5958"
},
{
    "img": "/gallery/images/6297.jpg",
    "scope": ["ngo"],
    "title": "PWGSC-Geomatics Open Data",
    "caption": "",
    "url": "http://nca.pwgsc-geomatics.opendata.arcgis.com",
    "id": "6297"
},
{
    "img": "/gallery/images/6521.jpg",
    "scope": ["ngo"],
    "title": "University Lands",
    "caption": "",
    "url": "http://opendata.gis.utlands.org",
    "id": "6521"
},
{
    "img": "/gallery/images/4998.jpg",
    "scope": ["local"],
    "title": "City of Bismarck, ND Open Data",
    "caption": "",
    "url": "http://download.bismarck.opendata.arcgis.com",
    "id": "4998"
},
{
    "img": "/gallery/images/5770.jpg",
    "scope": ["state"],
    "title": "Texas Department of Transportation",
    "caption": "",
    "url": "http://gis.txdot.opendata.arcgis.com",
    "id": "5770"
},
{
    "img": "/gallery/images/1317.jpg",
    "scope": ["local"],
    "title": "Open Source GIS Data",
    "caption": "",
    "url": "http://public.colletoncounty.opendata.arcgis.com",
    "id": "1317"
},
{
    "img": "/gallery/images/1413.jpg",
    "scope": ["local"],
    "title": "City of Pasadena, CA Open Data",
    "caption": "",
    "url": "http://cityofpasadenaca.pasgis.opendata.arcgis.com",
    "id": "1413"
},
{
    "img": "/gallery/images/2745.jpg",
    "scope": ["ngo"],
    "title": "UTC Office of Sustainability",
    "caption": "",
    "url": "http://utcsustainability.congeo.opendata.arcgis.com",
    "id": "2745"
},
{
    "img": "/gallery/images/3154.jpg",
    "scope": ["local"],
    "title": "City of Denton, TX",
    "caption": "",
    "url": "http://denton.gtg.opendata.arcgis.com",
    "id": "3154"
},
{
    "img": "/gallery/images/3421.jpg",
    "scope": ["local"],
    "title": "Halifax Open Data Catalogue",
    "caption": "",
    "url": "http://catalogue.hrm.opendata.arcgis.com",
    "id": "3421"
},
{
    "img": "/gallery/images/3856.jpg",
    "scope": ["local"],
    "title": "Salt Lake City GIS Open Data",
    "caption": "",
    "url": "http://gis.slcgov.opendata.arcgis.com",
    "id": "3856"
},
{
    "img": "/gallery/images/7050.jpg",
    "scope": ["local"],
    "title": "The City of Missouri City - Open Data Public Access",
    "caption": "",
    "url": "http://gis.missouricitytx.opendata.arcgis.com",
    "id": "7050"
},
{
    "img": "/gallery/images/7416.jpg",
    "scope": ["local"],
    "title": "St. Louis County, Minnesota",
    "caption": "",
    "url": "http://stlouiscountymndata.slcgis.opendata.arcgis.com",
    "id": "7416"
},
{
    "img": "/gallery/images/7461.jpg",
    "scope": ["local"],
    "title": "Santa Cruz City GIS",
    "caption": "",
    "url": "http://data.cruzgis.opendata.arcgis.com",
    "id": "7461"
},
{
    "img": "/gallery/images/8700.jpg",
    "scope": ["international"],
    "title": "Ministry of Energy and Mineral Development",
    "caption": "",
    "url": "http://geologicalsurvey.esrieanatres.opendata.arcgis.com",
    "id": "8700"
},
{
    "img": "/gallery/images/9152.jpg",
    "scope": ["local"],
    "title": "Open GeoSpace",
    "caption": "",
    "url": "http://opengeospace.chesterfield.gov",
    "id": "9152"
},
{
    "img": "/gallery/images/7947.jpg",
    "scope": ["international"],
    "title": "Stad Antwerpen",
    "caption": "",
    "url": "http://data.antwerpen.opendata.arcgis.com",
    "id": "7947"
},
{
    "img": "/gallery/images/7985.jpg",
    "scope": ["national"],
    "title": "SERVIR Geospatial Information Technology",
    "caption": "",
    "url": "http://data.servirgit.opendata.arcgis.com",
    "id": "7985"
},
{
    "img": "/gallery/images/8173.jpg",
    "scope": ["local"],
    "title": "Longview Open Data",
    "caption": "",
    "url": "http://data.longviewtexas.opendata.arcgis.com",
    "id": "8173"
},
{
    "img": "/gallery/images/8875.jpg",
    "scope": ["state"],
    "title": "Nevada Division of Environmental Protection GIS",
    "caption": "",
    "url": "http://emap.ndep-gis.opendata.arcgis.com",
    "id": "8875"
},
{
    "img": "/gallery/images/10486.jpg",
    "scope": ["local"],
    "title": "City of Wilmington",
    "caption": "",
    "url": "http://data.wilmingtonde.opendata.arcgis.com",
    "id": "10486"
},
{
    "img": "/gallery/images/8635.jpg",
    "scope": ["local"],
    "title": "  City of Kamloops",
    "caption": "",
    "url": "http://mydata.kamloops.opendata.arcgis.com",
    "id": "8635"
},
{
    "img": "/gallery/images/6444.jpg",
    "scope": ["state"],
    "title": "Ohio Geographically Referenced Information Program- OGRIP",
    "caption": "",
    "url": "http://ogrip.geohio.opendata.arcgis.com",
    "id": "6444"
}];



export default Ember.Route.extend({
    model() {
        return sites;
    },


});


