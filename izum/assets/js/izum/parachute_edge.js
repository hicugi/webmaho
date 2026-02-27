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
                            id: '_2',
                            type: 'image',
                            rect: ['-994px', '0px', '5218px', '376px', 'auto', 'auto'],
                            autoOrient: true,
                            clip: 'rect(0px 1402px 376px 1132px)',
                            fill: ["rgba(0,0,0,0)",im+"parachute.svg",'-3758px','5px','100%','100%', 'no-repeat']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'auto',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2300,
                    autoPlay: true,
                    data: [
                        [
                            "eid57",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid58",
                            "background-position",
                            150,
                            0,
                            "linear",
                            "${_2}",
                            [0,0],
                            [-264,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid59",
                            "background-position",
                            300,
                            0,
                            "linear",
                            "${_2}",
                            [-264,0],
                            [-527,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid60",
                            "background-position",
                            450,
                            0,
                            "linear",
                            "${_2}",
                            [-527,0],
                            [-803,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid61",
                            "background-position",
                            600,
                            0,
                            "linear",
                            "${_2}",
                            [-803,0],
                            [-1078,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid62",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${_2}",
                            [-1078,0],
                            [-1344,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid63",
                            "background-position",
                            900,
                            0,
                            "linear",
                            "${_2}",
                            [-1344,0],
                            [-1611,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid65",
                            "background-position",
                            1050,
                            0,
                            "linear",
                            "${_2}",
                            [-1611,0],
                            [-1611,7],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid66",
                            "background-position",
                            1200,
                            0,
                            "linear",
                            "${_2}",
                            [-1611,7],
                            [-1611,3],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid67",
                            "background-position",
                            1350,
                            0,
                            "linear",
                            "${_2}",
                            [-1611,3],
                            [-1611,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid68",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${_2}",
                            [-1611,0],
                            [-1880,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid69",
                            "background-position",
                            1600,
                            0,
                            "linear",
                            "${_2}",
                            [-1880,0],
                            [-2154,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid70",
                            "background-position",
                            1700,
                            0,
                            "linear",
                            "${_2}",
                            [-2154,0],
                            [-2417,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid71",
                            "background-position",
                            1800,
                            0,
                            "linear",
                            "${_2}",
                            [-2417,0],
                            [-2683,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid72",
                            "background-position",
                            1900,
                            0,
                            "linear",
                            "${_2}",
                            [-2683,0],
                            [-2955,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid73",
                            "background-position",
                            2000,
                            0,
                            "linear",
                            "${_2}",
                            [-2955,0],
                            [-3224,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid74",
                            "background-position",
                            2100,
                            0,
                            "linear",
                            "${_2}",
                            [-3224,0],
                            [-3489,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid75",
                            "background-position",
                            2200,
                            0,
                            "linear",
                            "${_2}",
                            [-3489,0],
                            [-3758,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid77",
                            "background-position",
                            2300,
                            0,
                            "linear",
                            "${_2}",
                            [-3758,0],
                            [-3758,5],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load(im+"parachute_edgeActions.js");
})("EDGE-112938119");
