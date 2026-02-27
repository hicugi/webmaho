/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='assets/js/izum/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '__',
                            type: 'image',
                            rect: ['-6539px', '-152px', '6990px', '730px', 'auto', 'auto'],
                            clip: 'rect(152px 7000px 554px 6656px)',
                            fill: ["rgba(0,0,0,0)",im+"scared2.svg",'5295px','0px','100%','100%', 'no-repeat']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'auto',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3200,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "clip",
                            1100,
                            0,
                            "linear",
                            "${__}",
                            [152,7000,554,6656],
                            [152,7000,554,6656],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid34",
                            "clip",
                            1800,
                            0,
                            "linear",
                            "${__}",
                            [152,7000,554,6656],
                            [152,7000,554,6642],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid36",
                            "clip",
                            1900,
                            0,
                            "linear",
                            "${__}",
                            [152,7000,554,6642],
                            [152,7024,554,6618],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid47",
                            "clip",
                            2300,
                            0,
                            "linear",
                            "${__}",
                            [152,7024,554,6618],
                            [152,7000,554,6642],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid48",
                            "clip",
                            2400,
                            0,
                            "linear",
                            "${__}",
                            [152,7000,554,6642],
                            [152,7024,554,6618],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid54",
                            "clip",
                            2800,
                            0,
                            "linear",
                            "${__}",
                            [152,7024,554,6618],
                            [152,7000,554,6642],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid55",
                            "clip",
                            2900,
                            0,
                            "linear",
                            "${__}",
                            [152,7000,554,6642],
                            [152,7024,554,6618],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid14",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${__}",
                            [14,0],
                            [14,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid15",
                            "background-position",
                            100,
                            0,
                            "linear",
                            "${__}",
                            [14,0],
                            [351,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid16",
                            "background-position",
                            200,
                            0,
                            "linear",
                            "${__}",
                            [351,0],
                            [664,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid17",
                            "background-position",
                            300,
                            0,
                            "linear",
                            "${__}",
                            [664,0],
                            [938,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid18",
                            "background-position",
                            400,
                            0,
                            "linear",
                            "${__}",
                            [938,0],
                            [1222,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${__}",
                            [1222,0],
                            [1512,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid20",
                            "background-position",
                            600,
                            0,
                            "linear",
                            "${__}",
                            [1512,0],
                            [1782,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid21",
                            "background-position",
                            700,
                            0,
                            "linear",
                            "${__}",
                            [1784,0],
                            [2055,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            800,
                            0,
                            "linear",
                            "${__}",
                            [2053,0],
                            [2328,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid24",
                            "background-position",
                            900,
                            0,
                            "linear",
                            "${__}",
                            [2329,0],
                            [2599,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid25",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${__}",
                            [2599,0],
                            [2850,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid26",
                            "background-position",
                            1100,
                            0,
                            "linear",
                            "${__}",
                            [2850,0],
                            [3094,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid27",
                            "background-position",
                            1200,
                            0,
                            "linear",
                            "${__}",
                            [3094,0],
                            [3372,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid28",
                            "background-position",
                            1300,
                            0,
                            "linear",
                            "${__}",
                            [3372,0],
                            [3711,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid29",
                            "background-position",
                            1400,
                            0,
                            "linear",
                            "${__}",
                            [3711,0],
                            [3371,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid30",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${__}",
                            [3371,0],
                            [3707,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid31",
                            "background-position",
                            1600,
                            0,
                            "linear",
                            "${__}",
                            [3707,0],
                            [4050,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid32",
                            "background-position",
                            1700,
                            0,
                            "linear",
                            "${__}",
                            [4050,0],
                            [4449,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid33",
                            "background-position",
                            1800,
                            0,
                            "linear",
                            "${__}",
                            [4449,0],
                            [4866,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid35",
                            "background-position",
                            1900,
                            0,
                            "linear",
                            "${__}",
                            [4866,0],
                            [5295,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid37",
                            "background-position",
                            2000,
                            0,
                            "linear",
                            "${__}",
                            [5295,0],
                            [5738,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid38",
                            "background-position",
                            2100,
                            0,
                            "linear",
                            "${__}",
                            [5738,0],
                            [6177,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid39",
                            "background-position",
                            2200,
                            0,
                            "linear",
                            "${__}",
                            [6177,0],
                            [6584,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid42",
                            "background-position",
                            2300,
                            0,
                            "linear",
                            "${__}",
                            [4449,0],
                            [4866,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid43",
                            "background-position",
                            2400,
                            0,
                            "linear",
                            "${__}",
                            [4866,0],
                            [5295,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid44",
                            "background-position",
                            2500,
                            0,
                            "linear",
                            "${__}",
                            [5295,0],
                            [5738,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid45",
                            "background-position",
                            2600,
                            0,
                            "linear",
                            "${__}",
                            [5738,0],
                            [6177,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid46",
                            "background-position",
                            2700,
                            0,
                            "linear",
                            "${__}",
                            [6177,0],
                            [6584,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid49",
                            "background-position",
                            2800,
                            0,
                            "linear",
                            "${__}",
                            [6584,0],
                            [4866,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid50",
                            "background-position",
                            2900,
                            0,
                            "linear",
                            "${__}",
                            [4866,0],
                            [5295,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid51",
                            "background-position",
                            3000,
                            0,
                            "linear",
                            "${__}",
                            [5295,0],
                            [5738,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid52",
                            "background-position",
                            3100,
                            0,
                            "linear",
                            "${__}",
                            [5738,0],
                            [6177,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid53",
                            "background-position",
                            3200,
                            0,
                            "linear",
                            "${__}",
                            [6177,0],
                            [6584,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load(im+"scared_edgeActions.js");
})("EDGE-112938118");
