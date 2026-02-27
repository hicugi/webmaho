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
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['-158', '-340', '2269', '955', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Go_in3',
                                type: 'image',
                                rect: ['0px', '0px', '2269px', '955px', 'auto', 'auto'],
                                autoOrient: true,
                                sizeRange: ['0px','','',''],
                                overflow: 'auto',
                                clip: 'rect(339.666748046875px 529px 741px 320px)',
                                fill: ["rgba(0,0,0,0)",im+"walk.svg",'0px','0px','100%','100%', 'no-repeat'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            }]
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
                    duration: 3100,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${Go_in3}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid2",
                            "background-position",
                            100,
                            0,
                            "linear",
                            "${Go_in3}",
                            [0,0],
                            [-224,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid3",
                            "background-position",
                            200,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-224,0],
                            [-411,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid4",
                            "background-position",
                            300,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-411,0],
                            [-620,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid5",
                            "background-position",
                            400,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-620,0],
                            [-830,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-830,0],
                            [-1048,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid7",
                            "background-position",
                            600,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-1048,0],
                            [-1231,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid8",
                            "background-position",
                            700,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-1231,0],
                            [-1433,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid52",
                            "background-position",
                            800,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-1433,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid53",
                            "background-position",
                            900,
                            0,
                            "linear",
                            "${Go_in3}",
                            [0,0],
                            [-224,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid54",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-224,0],
                            [-411,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid55",
                            "background-position",
                            1100,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-411,0],
                            [-620,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid56",
                            "background-position",
                            1200,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-620,0],
                            [-830,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid57",
                            "background-position",
                            1300,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-830,0],
                            [-1048,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid58",
                            "background-position",
                            1400,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-1048,0],
                            [-1231,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid59",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-1231,0],
                            [-1433,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid60",
                            "background-position",
                            1600,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-1433,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid61",
                            "background-position",
                            1700,
                            0,
                            "linear",
                            "${Go_in3}",
                            [0,0],
                            [-224,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid62",
                            "background-position",
                            1800,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-224,0],
                            [-411,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid63",
                            "background-position",
                            1900,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-411,0],
                            [-620,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid64",
                            "background-position",
                            2000,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-620,0],
                            [-830,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid65",
                            "background-position",
                            2100,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-830,0],
                            [-1048,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid66",
                            "background-position",
                            2200,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-1048,0],
                            [-1231,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid67",
                            "background-position",
                            2300,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-1231,0],
                            [-1433,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid68",
                            "background-position",
                            2400,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-1433,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid69",
                            "background-position",
                            2500,
                            0,
                            "linear",
                            "${Go_in3}",
                            [0,0],
                            [-224,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid70",
                            "background-position",
                            2600,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-224,0],
                            [-411,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid71",
                            "background-position",
                            2700,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-411,0],
                            [-620,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid72",
                            "background-position",
                            2800,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-620,0],
                            [-830,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid73",
                            "background-position",
                            2900,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-830,0],
                            [-1048,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid74",
                            "background-position",
                            3000,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-1048,0],
                            [-1231,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid75",
                            "background-position",
                            3100,
                            0,
                            "linear",
                            "${Go_in3}",
                            [-1231,0],
                            [-1433,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load(im+"walk_edgeActions.js");
})("EDGE-106708248");
