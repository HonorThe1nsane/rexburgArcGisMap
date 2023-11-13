require([
    "esri/Map",
    "esri/Basemap",
    "esri/views/MapView", // MapView for 2D view
    "esri/Graphic",
    "esri/geometry/Point",
    "esri/geometry/SpatialReference",
    "esri/symbols/TextSymbol", //  For 2D text labels
    "esri/PopupTemplate",
    "esri/layers/GraphicsLayer",
    "esri/widgets/BasemapGallery",
], (
    Map,
    Basemap,
    MapView, // Changed to MapView for 2D view
    Graphic,
    Point,
    SpatialReference,
    TextSymbol, // Changed to TextSymbol for 2D text labels
    PopupTemplate,
    GraphicsLayer,
    BasemapGallery
) => {
    const map = new Map({
        basemap: new Basemap({
            portalItem: {
                id: "0560e29930dc4d5ebeb58c635c0909c9" // References the Topographic Basemap
            }
        })
    });

    const view = new MapView({ //  MapView for 2D view
        container: "viewDiv",
        map: map,
        zoom: 15, // Adjust the zoom level as needed
        center: [-111.80683898925781, 43.83464431762695] // Centered on Rexburg
    });

    // Places of interest with their coordinates and labels
    const placesOfInterest = [
        { name: "Legacy Flight Museum", longitude: -111.80683898925781, latitude: 43.83464431762695, description: "Legacy Flight Museum awesome place to see WWII relics and cool planes both military and personal planes" },
        { name: "Museum of Rexburg", longitude: -111.78464, latitude: 43.82738, description: "There is a museum and a tabernacle that is used for a lot of events. Also starting this holiday season there will be an elaborate display of christmas lights" },
        { name: "Rexburg Rapids", longitude: -111.7852344, latitude: 43.8317607, description: "Rexburg Rapids is an awesome inexpensive place to cool down during the summer. They have a lazy river, 2 large slides, awesome splash pad and a large pool." },
        { name: "Madison County Courthouse", longitude: -111.7787395, latitude: 43.8264705, description: "Madison County Courthouse is the county courthouse. You don't want to end up here so listen to your parents. And pay your taxes." },
        { name: "Fat Cats", longitude: -111.7809256, latitude: 43.8361077, description: "Fat Cats is awesome fun. Theater, bowling, glow in the dark mini-golf, arcade, pool, food and so much fun for birthday parties." },
        { name: "Davidson's House", longitude: -111.8119158, latitude: 43.814388, description: "Home to the Davidson family with Troy, Harmony, Hyrum, Thomas, Kova, Ember, and Ash. Strong faith in the gospel of Jesus Christ" },
        { name: "Heber Hatchets", longitude: -111.778735, latitude: 43.829463, description: "Heber Hatchets is a lot of fun throwing hatchets around and good food." },
        { name: "Game Pulse", longitude: -111.782211, latitude: 43.825985, description: "Game Pulse is a awesome game store that carries all your favorite table top games, Magic the Gathering cards, and more. Just FYI they typically don't carry any Pokemon cards. You will need to go to Holidae Fun and Games." },
        { name: "Holidae Fun and Games", longitude: -111.796564, latitude: 43.821647, description: "Holidae Fun and Games carries all your favorite trading card games, board games, and more. They host weekly games for all types. And they host a cafe with awesome food." },
        { name: "Nature Park", longitude: -111.801286, latitude: 43.834408, description: "This is an awesome park that has a large fishing pond, multiple walking paths, 2 large playgrounds, a skate park, a dog park, and a frisbee golf course. Open year round till 11 pm" },
        { name: "Porter Park", longitude: -111.791015, latitude: 43.82292, description: "Rexburg has many parks but Porter Park is the most iconic of them all. Located right across from Desert Book, they have large grassy areas, a merry go round, a splash pad during the summer, gazebos, and walking paths throughout. Great playgrounds are also here for all ages." },
        { name: "Eagle Park Campground", longitude: -111.797154, latitude: 43.837715, description: "Camping in the middle of the town!? That is right! Located just around the corner from the Nature Park. It has many camping spots, a large grassy area with picnic tables coming into the entrance and a wonderful creek that is awesome for your littles to splash in during the summer. BE CAREFUL during the early summer/ late spring. Water levels can be high and dangerous." },
        { name: "Cress Creek Hike", longitude: -111.71833, latitude: 43.65927, description: "Awesome hike for all ages. Most of the hike going up to the creek has wheel chair access and takes you directly to some awesome lookouts. Then you can take the mile long loop that takes you up the mountain side a little bit and over the creek and back down." },
        { name: "Smith Park", longitude: -111.774122, latitude: 43.828123, description: "One of the older parks in the city. Lots of grassy areas, baseball diamonds, picnic tables, and playgrounds." },
        { name: "Teton-Vu Drive-Thru", longitude: -111.771130, latitude: 43.849000, description: "Teton Vu Drive Thru is a fun drive in theater one of the very few around still. Come and check us out." },
        { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096, description: "This is a holy place where worthy members of the Church of Jesus Christ of Latter-Day Saints go to worship and make promises with God." },
        { name: "Brigham Young University of Idaho", longitude: -111.783955, latitude: 43.817357, description: "This is a church sponsored school for the Church of Jesus Christ of Latter-Day Saints." },
        { name: "June's Place", longitude: -111.7790882, latitude: 43.831503, description: "This is a place that needs some love. Great drinks even if you don't drink Coffee. And amazing service." },
        { name: "Millhollow", longitude: -111.782388, latitude: 43.823944, description: "Millhollow is an old school sandwich shop where they make their own bread and the meats are always fresh. Come and check them out. " },
        { name: "Madison Armory", longitude: -111.777996, latitude: 43.838736, description: "Get your guns, ammo, and firearm accessories here." },
        { name: "My Dad's House", longitude: -111.801011, latitude: 43.806653, description: "Its my dad's place. Awesome Peruvian food and great company with my dad, Mita, Flor, and Franzue." }
    ];

    const graphicsLayer = new GraphicsLayer();


    const popupTemplate = new PopupTemplate({//This is the popup tenplate provided by ArcGIS and will display the name and description
        title: "{name}",
        content: [
            {
                type: "text",
                text: "{description}"
            }
        ]
    });

    placesOfInterest.forEach(place => {//Goes through and creates a label for each of the places of interest
        const textSymbol = new TextSymbol({
            color: "black",
            haloColor: "red",
            haloSize: 2,
            text: place.name,

            font: {
                size: 12,
                weight: "bold"
            }
        });

        const point = new Point({ //sets the point with longitude and latitude from the places of interests above
            longitude: place.longitude,
            latitude: place.latitude,
            spatialReference: SpatialReference.WGS84
        });

        const graphic = new Graphic({//Kept simple and only used a text word for each location
            geometry: point,
            symbol: textSymbol,
            attributes: place,
            popupTemplate: popupTemplate
        });

        graphicsLayer.add(graphic);
    });

    map.add(graphicsLayer);
});
